import * as maptalks from 'maptalks';
import { ThreeLayer } from './index';
import * as THREE from 'three';
import BaseObject from './BaseObject';
import { ImageType, TerrainOptionType } from './type';
import { altitudeToVector3, distanceToVector3 } from './util';
import { getPlaneGeometry } from './util/GeometryUtil';
// import { addAttribute } from './util/ThreeAdaptUtil';
const textureLoader = new THREE.TextureLoader();
const canvas = document.createElement('canvas'), tileSize = 256;

function getRGBData(image: HTMLImageElement, width = tileSize, height = tileSize): Uint8ClampedArray {
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, width, height);
    return ctx.getImageData(0, 0, width, height).data;
}

function generateImage(image: ImageType): HTMLImageElement {
    if (!image) {
        return null;
    }
    let img;
    if (typeof image === 'string') {
        img = new Image();
        img.src = image;
    } else if (image instanceof HTMLCanvasElement) {
        img = new Image();
        img.src = image.toDataURL();
    } else if (image instanceof Image) {
        img = new Image();
        img.src = image.src;
        img.crossOrigin = image.crossOrigin;
    }
    if (img && !img.crossOrigin) {
        img.crossOrigin = 'Anonymous';
    }
    return img;
}

const heightCache = new Map();

function updateGeometryPosition(image, geometry: THREE.BufferGeometry, layer, options: any) {
    if (!geometry || !layer) {
        return;
    }
    const { imageWidth, imageHeight } = options;
    let imgdata;
    if (image instanceof Uint32Array || image instanceof Uint8ClampedArray) {
        imgdata = image;
    } else {
        imgdata = getRGBData(image, imageWidth, imageHeight);
    }
    if (!imgdata) {
        console.error('image is error type data', image);
        return;
    }
    let idx = 0, row = 0, rowIndex = 0;
    const isBoundary = () => {
        return (row === 0 || (row + 1) === imageHeight || rowIndex === 0 || (rowIndex + 1) === imageWidth);
    }
    const out = new THREE.Vector3();
    const cache = heightCache;
    //rgb to height  https://docs.mapbox.com/help/troubleshooting/access-elevation-data/
    for (let i = 0, len = imgdata.length; i < len; i += 4) {
        const R = imgdata[i], G = imgdata[i + 1], B = imgdata[i + 2];
        const height = -10000 + ((R * 256 * 256 + G * 256 + B) * 0.1);
        let z = 0;
        if (!isBoundary()) {
            const value = cache.get(height);
            if (value !== undefined) {
                z = value;
            } else {
                z = layer.altitudeToVector3(height, height, null, out).x;
                cache.set(height, z);
            }
        }

        (geometry.attributes.position.array as any)[idx * 3 + 2] = z;
        idx++;
        rowIndex++;
        if (rowIndex === imageWidth) {
            row++;
            rowIndex = 0;
        }
    }
    geometry.attributes.position.needsUpdate = true;
}

const OPTIONS = {
    interactive: false,
    altitude: 0,
    image: null,
    imageWidth: 256,
    imageHeight: 256,
    texture: null
};

/**
 *
 */
class Terrain extends BaseObject {
    constructor(extent: maptalks.Extent, options: TerrainOptionType, material: THREE.Material, layer: ThreeLayer) {
        options = maptalks.Util.extend({}, OPTIONS, options, { layer, extent });
        const { texture, image, altitude, imageHeight, imageWidth } = options;
        // if (!image) {
        //     console.error('not find image');
        // }
        if (!(extent instanceof maptalks.Extent)) {
            extent = new maptalks.Extent(extent);
        }
        const { xmin, ymin, xmax, ymax } = extent;
        const coords = [
            [xmin, ymin],
            [xmin, ymax],
            [xmax, ymax],
            [xmax, ymin]
        ];
        let vxmin = Infinity, vymin = Infinity, vxmax = -Infinity, vymax = -Infinity;
        coords.forEach(coord => {
            const v = layer.coordinateToVector3(coord);
            const { x, y } = v;
            vxmin = Math.min(x, vxmin);
            vymin = Math.min(y, vymin);
            vxmax = Math.max(x, vxmax);
            vymax = Math.max(y, vymax);
        });
        const dx = vxmax - vxmin, dy = vymax - vymin;
        const ax = dx / imageWidth, ay = dy / imageHeight;
        //buffer 1px
        vxmin -= ax;
        vxmax += ax;
        vymin -= ay;
        vymax += ay;
        const w = Math.abs(vxmax - vxmin), h = Math.abs(vymax - vymin);
        const rgbImg = generateImage(image), img = generateImage(texture);
        // const geometry = new THREE.PlaneBufferGeometry(w, h, imageWidth - 1, imageHeight - 1);
        const geometry = getPlaneGeometry(w, h, imageWidth - 1, imageHeight - 1);
        super();
        this._initOptions(options);
        this._createMesh(geometry, material);
        const z = layer.altitudeToVector3(altitude, altitude).x;
        const v = layer.coordinateToVector3(extent.getCenter(), z);
        this.getObject3d().position.copy(v);
        material.transparent = true;
        if (rgbImg) {
            rgbImg.onload = () => {
                updateGeometryPosition(rgbImg, geometry, layer, { imageWidth, imageHeight });
            };
            rgbImg.onerror = function () {
                console.error(`not load ${rgbImg.src}`);
            };
        }
        if (img) {
            material.opacity = 0;
            textureLoader.load(img.src, (texture) => {
                (material as any).map = texture;
                material.opacity = 1;
                material.needsUpdate = true;
            });
        } else {
            material.opacity = 1;
        }
        this.type = 'Terrain';
    }

    updateData(image) {
        const geometry = (this.getObject3d() as THREE.Mesh).geometry;
        const layer = this.getLayer();
        updateGeometryPosition(image, geometry, layer, this.getOptions());
        return this;
    }
}

export default Terrain;
