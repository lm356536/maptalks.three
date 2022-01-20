// eslint-disable-next-line quotes
const workerCode = `(function(e){"use strict";var t=r,n=r;function r(e,t,n){n=n||2;var r,v,h,u,l,x,c,d=t&&t.length,g=d?t[0]*n:e.length,y=i(e,0,g,n,!0),m=[];if(!y||y.next===y.prev)return m;if(d&&(y=function(e,t,n,r){var o,v,h,u=[];for(o=0,v=t.length;o<v;o++)(h=i(e,t[o]*r,o<v-1?t[o+1]*r:e.length,r,!1))===h.next&&(h.steiner=!0),u.push(p(h));for(u.sort(f),o=0;o<u.length;o++)s(u[o],n),n=a(n,n.next);return n}(e,t,y,n)),e.length>80*n){r=h=e[0],v=u=e[1];for(var M=n;M<g;M+=n)(l=e[M])<r&&(r=l),(x=e[M+1])<v&&(v=x),l>h&&(h=l),x>u&&(u=x);c=0!==(c=Math.max(h-r,u-v))?1/c:0}return o(y,m,n,r,v,c),m}function i(e,t,n,r,i){var a,o;if(i===R(e,t,n,r)>0)for(a=t;a<n;a+=r)o=A(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=A(a,e[a],e[a+1],o);return o&&m(o,o.next)&&(z(o),o=o.next),o}function a(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!m(r,r.next)&&0!==y(r.prev,r,r.next))r=r.next;else{if(z(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function o(e,t,n,r,i,f,s){if(e){!s&&f&&function(e,t,n,r){var i=e;do{null===i.z&&(i.z=c(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,n,r,i,a,o,v,h,u=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,v=0,t=0;t<u&&(v++,r=r.nextZ);t++);for(h=u;v>0||h>0&&r;)0!==v&&(0===h||!r||n.z<=r.z)?(i=n,n=n.nextZ,v--):(i=r,r=r.nextZ,h--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,u*=2}while(o>1)}(i)}(e,r,i,f);for(var x,p,d=e;e.prev!==e.next;)if(x=e.prev,p=e.next,f?h(e,r,i,f):v(e))t.push(x.i/n),t.push(e.i/n),t.push(p.i/n),z(e),e=p.next,d=p.next;else if((e=p)===d){s?1===s?o(e=u(a(e),t,n),t,n,r,i,f,2):2===s&&l(e,t,n,r,i,f):o(a(e),t,n,r,i,f,1);break}}}function v(e){var t=e.prev,n=e,r=e.next;if(y(t,n,r)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(d(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&y(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function h(e,t,n,r){var i=e.prev,a=e,o=e.next;if(y(i,a,o)>=0)return!1;for(var v=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,h=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,u=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,l=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,f=c(v,h,t,n,r),s=c(u,l,t,n,r),x=e.prevZ,p=e.nextZ;x&&x.z>=f&&p&&p.z<=s;){if(x!==e.prev&&x!==e.next&&d(i.x,i.y,a.x,a.y,o.x,o.y,x.x,x.y)&&y(x.prev,x,x.next)>=0)return!1;if(x=x.prevZ,p!==e.prev&&p!==e.next&&d(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&y(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;x&&x.z>=f;){if(x!==e.prev&&x!==e.next&&d(i.x,i.y,a.x,a.y,o.x,o.y,x.x,x.y)&&y(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;p&&p.z<=s;){if(p!==e.prev&&p!==e.next&&d(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&y(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function u(e,t,n){var r=e;do{var i=r.prev,o=r.next.next;!m(i,o)&&M(i,r,r.next,o)&&S(i,o)&&S(o,i)&&(t.push(i.i/n),t.push(r.i/n),t.push(o.i/n),z(r),z(r.next),r=e=o),r=r.next}while(r!==e);return a(r)}function l(e,t,n,r,i,v){var h=e;do{for(var u=h.next.next;u!==h.prev;){if(h.i!==u.i&&g(h,u)){var l=Z(h,u);return h=a(h,h.next),l=a(l,l.next),o(h,t,n,r,i,v),void o(l,t,n,r,i,v)}u=u.next}h=h.next}while(h!==e)}function f(e,t){return e.x-t.x}function s(e,t){if(t=function(e,t){var n,r=t,i=e.x,a=e.y,o=-1/0;do{if(a<=r.y&&a>=r.next.y&&r.next.y!==r.y){var v=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(v<=i&&v>o){if(o=v,v===i){if(a===r.y)return r;if(a===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!n)return null;if(i===o)return n;var h,u=n,l=n.x,f=n.y,s=1/0;r=n;do{i>=r.x&&r.x>=l&&i!==r.x&&d(a<f?i:o,a,l,f,a<f?o:i,a,r.x,r.y)&&(h=Math.abs(a-r.y)/(i-r.x),S(r,e)&&(h<s||h===s&&(r.x>n.x||r.x===n.x&&x(n,r)))&&(n=r,s=h)),r=r.next}while(r!==u);return n}(e,t)){var n=Z(t,e);a(t,t.next),a(n,n.next)}}function x(e,t){return y(e.prev,e,t.prev)<0&&y(t.next,e,e.next)<0}function c(e,t,n,r,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function p(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function d(e,t,n,r,i,a,o,v){return(i-o)*(t-v)-(e-o)*(a-v)>=0&&(e-o)*(r-v)-(n-o)*(t-v)>=0&&(n-o)*(a-v)-(i-o)*(r-v)>=0}function g(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&M(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(S(e,t)&&S(t,e)&&function(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do{n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(y(e.prev,e,t.prev)||y(e,t.prev,t))||m(e,t)&&y(e.prev,e,e.next)>0&&y(t.prev,t,t.next)>0)}function y(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function m(e,t){return e.x===t.x&&e.y===t.y}function M(e,t,n,r){var i=w(y(e,t,n)),a=w(y(e,t,r)),o=w(y(n,r,e)),v=w(y(n,r,t));return i!==a&&o!==v||(!(0!==i||!b(e,n,t))||(!(0!==a||!b(e,r,t))||(!(0!==o||!b(n,e,r))||!(0!==v||!b(n,t,r)))))}function b(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function w(e){return e>0?1:e<0?-1:0}function S(e,t){return y(e.prev,e,e.next)<0?y(e,t,e.next)>=0&&y(e,e.prev,t)>=0:y(e,t,e.prev)<0||y(e,e.next,t)<0}function Z(e,t){var n=new F(e.i,e.x,e.y),r=new F(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function A(e,t,n,r){var i=new F(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function z(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function F(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function R(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}function q(e,t,n){var r=t[0],i=t[1],a=n[0]-r,o=n[1]-i;if(0!==a||0!==o){var v=((e[0]-r)*a+(e[1]-i)*o)/(a*a+o*o);v>1?(r=n[0],i=n[1]):v>0&&(r+=a*v,i+=o*v)}return(a=e[0]-r)*a+(o=e[1]-i)*o}function P(e,t,n,r,i){for(var a,o=r,v=t+1;v<n;v++){var h=q(e[v],e[t],e[n]);h>o&&(a=v,o=h)}o>r&&(a-t>1&&P(e,t,a,r,i),i.push(e[a]),n-a>1&&P(e,a,n,r,i))}function L(e,t){var n=e.length-1,r=[e[0]];return P(e,0,n,t,r),r.push(e[n]),r}function V(e,t,n){if(e.length<=2)return e;var r=void 0!==t?t*t:1;return e=L(e=n?e:function(e,t){for(var n,r,i,a,o,v=e[0],h=[v],u=1,l=e.length;u<l;u++)n=e[u],i=v,a=void 0,o=void 0,a=(r=n)[0]-i[0],o=r[1]-i[1],a*a+o*o>t&&(h.push(n),v=n);return v!==n&&h.push(n),h}(e,r),r)}function B(e,t){return e[0]*t[0]+e[1]*t[1]}function E(e,t){var n=t[0],r=t[1],i=Math.sqrt(n*n+r*r);return e[0]=n/i,e[1]=r/i,e}function U(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function H(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function I(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function O(e,t){var n=t[0],r=t[1],i=t[2],a=Math.sqrt(n*n+r*r+i*i);return e[0]=n/a,e[1]=r/a,e[2]=i/a,e}function T(e,t,n){var r=t[0],i=t[1],a=t[2],o=n[0],v=n[1],h=n[2];return e[0]=i*h-a*v,e[1]=a*o-r*h,e[2]=r*v-i*o,e}r.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(R(e,0,a,n));if(i)for(var v=0,h=t.length;v<h;v++){var u=t[v]*n,l=v<h-1?t[v+1]*n:e.length;o-=Math.abs(R(e,u,l,n))}var f=0;for(v=0;v<r.length;v+=3){var s=r[v]*n,x=r[v+1]*n,c=r[v+2]*n;f+=Math.abs((e[s]-e[c])*(e[x+1]-e[s+1])-(e[s]-e[x])*(e[c+1]-e[s+1]))}return 0===o&&0===f?0:Math.abs((f-o)/o)},r.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)n.vertices.push(e[i][a][o]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n},t.default=n;var W=[];function j(e,t,n,r){var i=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}(t,n),a=Math.acos(i)*r;return U(W,n,t,-i),function(e,t){var n=t[0],r=t[1],i=t[2],a=Math.sqrt(n*n+r*r+i*i);e[0]=n/a,e[1]=r/a,e[2]=i/a}(W,W),function(e,t,n){e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n}(e,t,Math.cos(a)),U(e,e,W,Math.sin(a)),e}function k(e,t,n,r,i,a,o,v,h,u){var l=o-i,f=v-a,s=(l*(t-a)-f*(e-i))/(f*(n-e)-l*(r-t));return h&&(h[u=u||0]=e+s*(n-e),h[u+1]=t+s*(r-t)),s}function _(e,t,n){if(n-t<3)return 0;for(var r=0,i=2*(n-1),a=2*t;a<2*n;){var o=e[i],v=e[i+1],h=e[a],u=e[a+1];i=a,a+=2,r+=o*u-h*v}return r}function D(e,n,r){return void 0===r&&(r=2),t(e,n,r)}var C=[],G=[],J=[];function K(e,t,n,r,i,a,o,v,h){var u,l,f,s=null!=o,x=i,c=null;s&&(c=new Uint32Array(r-n));for(var p=[],d=n;d<r;d++){var g=d===r-1?n:d+1,y=d===n?r-1:d-1,m=e[2*y],M=e[2*y+1],b=e[2*d],w=e[2*d+1],S=e[2*g],Z=e[2*g+1];C[0]=b-m,C[1]=w-M,G[0]=S-b,G[1]=Z-w,E(C,C),E(G,G),s&&(c[d]=x);var A=!1,z=void 0,F=void 0;if(v||d!==n)if(v||d!==r-1){H(J,G,C);var R=J[1];J[1]=-J[0],J[0]=R,E(J,J);var q=B(J,G),P=Math.sqrt(1-q*q),L=a*Math.min(10,1/P);if(s&&1/P>o&&a*q<0){var V=b+J[0]*a,U=w+J[1]*a,I=Math.acos(P)/2,O=Math.tan(I)*Math.abs(a);t[2*x]=V+J[1]*O,t[2*x+1]=U-J[0]*O,t[2*++x]=V-J[1]*O,t[2*x+1]=U+J[0]*O,x++}else z=b+J[0]*L,F=w+J[1]*L,A=!0;if(A){if(h&&null!=u){var T=k(m,M,u,l,b,w,z,F,p,0);T>=-.01&&T<=1.01&&(t[2*f]=z=p[0],t[2*f+1]=F=p[1])}u=t[2*x]=z,l=t[2*x+1]=F,f=x,x++}}else J[0]=C[1],J[1]=-C[0],E(J,J),z=b+J[0]*a,F=w+J[1]*a,A=!0;else J[0]=G[1],J[1]=-G[0],E(J,J),u=t[2*x]=b+J[0]*a,l=t[2*x+1]=w+J[1]*a,f=x,x++}return c}function N(e,t,n,r,i,a,o,v){var h=null!=o,u=i,l=null;h&&(l=new Uint32Array(r-n));for(var f=n;f<r;f++){var s=f===r-1?n:f+1,x=f===n?r-1:f-1,c=e[2*x],p=e[2*x+1],d=e[2*f],g=e[2*f+1],y=e[2*s],m=e[2*s+1];if(C[0]=d-c,C[1]=g-p,G[0]=y-d,G[1]=m-g,E(C,C),E(G,G),h&&(l[f]=u),v||f!==n)if(v||f!==r-1){H(J,G,C);var M=J[1];J[1]=-J[0],J[0]=M,E(J,J);var b=B(J,G),w=Math.sqrt(1-b*b),S=a*Math.min(10,1/w);if(h&&1/w>o&&a*b<0){var Z=d+J[0]*a,A=g+J[1]*a,z=Math.acos(w)/2,F=Math.tan(z)*Math.abs(a);t[2*u]=Z+J[1]*F,t[2*u+1]=A-J[0]*F,t[2*++u]=Z-J[1]*F,t[2*u+1]=A+J[0]*F,u++}else t[2*u]=d+J[0]*S,t[2*u+1]=g+J[1]*S,u++}else J[0]=C[1],J[1]=-C[0],E(J,J),t[2*u]=d+J[0]*a,t[2*u+1]=g+J[1]*a,u++;else J[0]=G[1],J[1]=-G[0],E(J,J),t[2*u]=d+J[0]*a,t[2*u+1]=g+J[1]*a,u++}return l}function Q(e,t,n,r,i){var a=null!=r?[]:new Float32Array(e.length);if(K(e,a,0,t&&t.length?t[0]:e.length/2,0,n,r,i,!0),t)for(var o=0;o<t.length;o++){var v=t[o];K(e,a,v,t[o+1]||e.length/2,null!=r?a.length/2:v,n,r,i,!1)}return a}function X(e,t,n,r){for(var i=0;i<Math.floor((r-n)/2);i++)for(var a=0;a<t;a++){var o=(i+n)*t+a,v=(r-i-1)*t+a,h=e[o];e[o]=e[v],e[v]=h}return e}function Y(e,t){var n=e.length/2,r=0,i=t&&t.length?t[0]:n;_(e,r,i)>0&&X(e,2,r,i);for(var a=1;a<(t?t.length:0)+1;a++)_(e,r=t[a-1],i=t[a]||n)<0&&X(e,2,r,i)}function $(e){e.depth=e.depth||1,e.bevelSize=e.bevelSize||0,e.bevelSegments=null==e.bevelSegments?2:e.bevelSegments,e.smoothBevel=e.smoothBevel||!1,e.simplify=e.simplify||0,null==e.smoothSide&&(e.smoothSide="auto"),null==e.smoothSideThreshold&&(e.smoothSideThreshold=.9),"number"==typeof e.depth&&(e.bevelSize=Math.min(e.bevelSegments>0?e.bevelSize:0,e.depth/2)),e.bevelSize>0||(e.bevelSegments=0),e.bevelSegments=Math.round(e.bevelSegments);var t=e.boundingRect;if(e.translate=e.translate||[0,0],e.scale=e.scale||[1,1],e.fitRect){var n=null==e.fitRect.x?t.x||0:e.fitRect.x,r=null==e.fitRect.y?t.y||0:e.fitRect.y,i=e.fitRect.width,a=e.fitRect.height;null==i?null!=a?i=a/t.height*t.width:(i=t.width,a=t.height):null==a&&(a=i/t.width*t.height),e.scale=[i/t.width,a/t.height],e.translate=[(n-t.x)*e.scale[0],(r-t.y)*e.scale[1]]}}var ee=[[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]];function te(e,t,n){for(var r=0,i=e[t],a=e[t+1],o=i,v=a,h=t+2;h<n;h+=2){var u=e[h],l=e[h+1];r+=Math.sqrt((u-i)*(u-i)+(l-a)*(l-a)),i=u,a=l}return r+=Math.sqrt((i-o)*(i-o)+(a-v)*(a-v))}function ne(e,t,n,r,i,a){var o=t.vertices,v=t.topVertices,h=t.splittedMap,u=t.depth,l=t.rect,f=r-n,s=a.smoothBevel?1:2,x=Math.min(u/2,a.bevelSize),c=a.bevelSegments,p=i.vertex,d=i.ringPerimeter,g=Math.max(l.width,l.height,u,d);function y(e){var t=(e+1)%f,n=o[2*e],r=o[2*e+1],i=o[2*t],a=o[2*t+1];return n===i&&r===a}if(x>0)for(var m=[0,0,1],M=[],b=[0,0,-1],w=[],S=0,Z=new Float32Array(f),A=0;A<2;A++)for(var z=0===A?u-x:x,F=0;F<=c*s;F++){for(var R=0,q=void 0,P=void 0,L=0;L<f;L++){var V=2*(L%f+n),B=h?2*h[V/2]:V;M[0]=o[V]-v[B],M[1]=o[V+1]-v[B+1],M[2]=0;var E=Math.sqrt(M[0]*M[0]+M[1]*M[1]);M[0]/=E,M[1]/=E;var U=(Math.floor(F/s)+F%s)/c;0===A?j(w,m,M,U):j(w,M,b,U);var H=0===A?U:1-U,I=x*Math.sin(H*Math.PI/2),O=E*Math.cos(H*Math.PI/2),T=x*E/Math.sqrt(I*I+O*O),W=w[0]*T+v[B],k=w[1]*T+v[B+1],_=w[2]*T+z;if(e.position[3*i.vertex]=W,e.position[3*i.vertex+1]=k,e.position[3*i.vertex+2]=_,L>0&&(R+=Math.sqrt((q-W)*(q-W)+(P-k)*(P-k))),F>0||A>0){var D=3*(i.vertex-f),C=e.position[D],G=e.position[D+1],J=e.position[D+2];Z[L]+=Math.sqrt((C-W)*(C-W)+(G-k)*(G-k)+(J-_)*(J-_))}if(e.uv[2*i.vertex]=R/g,e.uv[2*i.vertex+1]=Z[L]/g,q=W,P=k,i.vertex++,!y(L)&&(s>1&&F%s||1===s&&F>=1))for(var K=0;K<6;K++){var N=(ee[K][0]+L)%f,Q=ee[K][1]+S;e.indices[i.index++]=(Q-1)*f+N+p}}S++}else for(var X=0;X<2;X++)for(var Y=0===X?u-x:x,$=0,te=void 0,ne=void 0,re=0;re<f;re++){var ie=2*(re%f+n),ae=o[ie],oe=o[ie+1];e.position[3*i.vertex]=ae,e.position[3*i.vertex+1]=oe,e.position[3*i.vertex+2]=Y,re>0&&($+=Math.sqrt((te-ae)*(te-ae)+(ne-oe)*(ne-oe))),e.uv[2*i.vertex]=$/g,e.uv[2*i.vertex+1]=Y/g,te=ae,ne=oe,i.vertex++}for(var ve=x>0?c*s+1:1,he=0;he<f;he++)if(!y(he))for(var ue=0;ue<6;ue++){var le=(ee[ue][0]+he)%f,fe=ee[ue][1]+ve;e.indices[i.index++]=(fe-1)*f+le+p}}function re(e,t,n,r){var i=e.indices,a=e.topVertices,o=e.rect,v=e.depth;if(!(a.length<=4)){for(var h=n.vertex,u=i.length,l=0;l<u;l++)t.indices[n.index++]=h+i[l];for(var f=Math.max(o.width,o.height),s=0;s<(r.excludeBottom?1:2);s++)for(var x=0;x<a.length;x+=2){var c=a[x],p=a[x+1];t.position[3*n.vertex]=c,t.position[3*n.vertex+1]=p,t.position[3*n.vertex+2]=(1-s)*v,t.uv[2*n.vertex]=(c-o.x)/f,t.uv[2*n.vertex+1]=(p-o.y)/f,n.vertex++}if(!r.excludeBottom)for(var d=a.length/2,g=0;g<u;g+=3)for(var y=0;y<3;y++)t.indices[n.index++]=h+d+i[g+2-y]}}function ie(e,t,n,r){var i=null==n||"auto"===n;if(!0===n)return{vertices:e,holes:t};for(var a=[],o=t&&[],v=e.length/2,h=[],u=[],l=[],f=0,s=0,x=(t?t.length:0)+1,c=0;c<x;c++){0===c?s=t&&t.length?t[0]:v:(f=t[c-1],s=t[c]||v);for(var p=f;p<s;p++){var d=e[2*p],g=e[2*p+1],y=p===s-1?f:p+1,m=e[2*y],M=e[2*y+1];if(i){var b=p===f?s-1:p-1,w=e[2*b],S=e[2*b+1];h[0]=w-d,h[1]=S-g,u[0]=m-d,u[1]=M-g,E(h,h),E(u,u),1-(.5*B(h,u)+.5)>r?(a.push(d,g),l.push(p)):(a.push(d,g,d,g),l.push(p,p))}else a.push(d,g,d,g),l.push(p,p)}c<x-1&&o&&o.push(a.length/2)}return{vertices:new Float32Array(a),splittedMap:l,holes:o}}function ae(e,t){for(var n=0,r=0,i=0;i<e.length;i++){var a=e[i],o=a.indices,v=a.vertices,h=a.splittedMap,u=a.topVertices,l=a.depth,f=Math.min(l/2,t.bevelSize)>0?t.bevelSegments:0,s=e[i].holes||[];n+=o.length*(t.excludeBottom?1:2),r+=u.length/2*(t.excludeBottom?1:2);for(var x=2+2*f,c=0,p=0,d=0;d<s.length+1;d++){0===d?p=s.length?s[0]:v.length/2:(c=s[d-1],p=s[d]||v.length/2),n+=6*((h?h[p-1]+1:p)-(h?h[c]:c))*(x-1);var g=p-c;r+=g*x+(t.smoothBevel?0:f*g*2)}}for(var y={position:new Float32Array(3*r),indices:new(r>65535?Uint32Array:Uint16Array)(n),uv:new Float32Array(2*r)},m={vertex:0,index:0,ringPerimeter:0},M=0;M<e.length;M++)re(e[M],y,m,t);for(var b=0;b<e.length;b++){var w=e[b],S=w.holes,Z=w.vertices.length/2,A=0,z=S&&S.length?S[0]:Z;if(m.ringPerimeter=te(e[b].topVertices,A,z),ne(y,e[b],A,z,m,t),S)for(var F=0;F<S.length;F++)A=S[F],z=S[F+1]||Z,m.ringPerimeter=te(e[b].topVertices,A,z),ne(y,e[b],A,z,m,t)}for(var R=0;R<y.uv.length;R++){var q=y.uv[R];q>0&&Math.round(q)===q?y.uv[R]=1:y.uv[R]=q%1}return y.normal=function(e,t){function n(e,t,n,r){e[0]=t,e[1]=n,e[2]=r}for(var r=[],i=[],a=[],o=[],v=[],h=[],u=e.length,l=new Float32Array(t.length),f=0;f<u;){var s=3*e[f++],x=3*e[f++],c=3*e[f++];n(r,t[s],t[s+1],t[s+2]),n(i,t[x],t[x+1],t[x+2]),n(a,t[c],t[c+1],t[c+2]),I(o,r,i),I(v,i,a),T(h,o,v);for(var p=0;p<3;p++)l[s+p]=l[s+p]+h[p],l[x+p]=l[x+p]+h[p],l[c+p]=l[c+p]+h[p]}for(var d=0;d<l.length;)n(h,l[d],l[d+1],l[d+2]),O(h,h),l[d++]=h[0],l[d++]=h[1],l[d++]=h[2];return l}(y.indices,y.position),y.boundingRect=e[0]&&e[0].rect,y}function oe(e,t,n){for(var r=n.lineWidth,i=e.length,a=new Float32Array(2*i),o=n.translate||[0,0],v=n.scale||[1,1],h=0,u=0;h<i;h++)a[u++]=e[h][0]*v[0]+o[0],a[u++]=e[h][1]*v[1]+o[1];_(a,0,i)<0&&X(a,2,0,i);var l=[],f=[],s=n.miterLimit,x=N(a,f,0,i,0,-r/2,s,!1);X(a,2,0,i);for(var c=N(a,l,0,i,0,-r/2,s,!1),p=(l.length+f.length)/2,d=new Float32Array(2*p),g=0,y=f.length/2,m=0;m<f.length;m++)d[g++]=f[m];for(var M=0;M<l.length;M++)d[g++]=l[M];for(var b=new(p>65535?Uint32Array:Uint16Array)(3*(2*(i-1)+(p-2*i))),w=0,S=0;S<i-1;S++){var Z=S+1;b[w++]=y-1-x[S],b[w++]=y-1-x[S]-1,b[w++]=c[S]+1+y,b[w++]=y-1-x[S],b[w++]=c[S]+1+y,b[w++]=c[S]+y,c[Z]-c[S]==2?(b[w++]=c[S]+2+y,b[w++]=c[S]+1+y,b[w++]=y-x[Z]-1):x[Z]-x[S]==2&&(b[w++]=c[Z]+y,b[w++]=y-1-(x[S]+1),b[w++]=y-1-(x[S]+2))}var A=n.bevelSize>0?Q(d,[],n.bevelSize,null,!0):d,z=n.boundingRect,F=ie(d,null,n.smoothSide,n.smoothSideThreshold);return{vertices:F.vertices,rawVertices:A,splittedMap:F.splittedMap,indices:b,topVertices:A,rect:{x:z.x*v[0]+o[0],y:z.y*v[1]+o[1],width:z.width*v[0],height:z.height*v[1]},depth:"function"==typeof n.depth?n.depth(t):n.depth,holes:[]}}function ve(e,t){for(var n=[],r=0;r<e.length;r++){for(var i=e[r],a=[],o=i.length,v=i[o-1][0],h=i[o-1][1],u=0,l=0;l<o;l++){var f=i[l][0],s=i[l][1],x=f-v,c=s-h;(u+=Math.sqrt(x*x+c*c))>t&&(a.push(i[l]),u=0),v=f,h=s}a.length>=3&&n.push(a)}return n.length>0?n:null}function he(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r];(i=V(i,t,!0)).length>=3&&n.push(i)}return n.length>0?n:null}function ue(e,t,n){for(var r=0;r<e.length;r++)t[0]=Math.min(e[r][0],t[0]),t[1]=Math.min(e[r][1],t[1]),n[0]=Math.max(e[r][0],n[0]),n[1]=Math.max(e[r][1],n[1])}var le={x:0,y:0},fe={x:0,y:0};function se(e,t,n,r){for(var i=e.length,a=0;a<i;a++){var o=e[a].data;t=e[a].center||t;for(var v=0,h=o.length;v<h;v++)for(var u=o[v],l=0,f=u.length;l<f;l++)e[a].data[v][l]=xe(u[l],t,n,r)}}function xe(e,t,n,r){for(var i,a=[],o=0,v=(i=n?new Float64Array(e):new Float32Array(e)).length;o<v;o+=2){var h=i[o],u=i[o+1];if(t&&n&&r){le.x=h,le.y=u;var l=be(le,fe);le.x=l.x,le.y=l.y,h=(l=we(r,le,n,fe)).x,u=l.y,h-=t[0],u-=t[1]}a.push([h,u])}return a}function ce(e,t){void 0===t&&(t=!1);for(var n=e.length,r=[],i=[],a=[],o=0,v=0,h=0,u=0,l=0;l<n;l++){var f=t?de(e[l]):pe(e[l]),s=e[l].bottomHeight||0,x=f.position,c=f.normal,p=f.uv,d=f.indices;i.push(f);var g=d.length/3;a[l]=[o+1,o+g],o+=g;var y=x.length/3,m=c.length/3,M=p.length/2;r[l]={position:{middleZ:s+(e[l].height||0)/2,count:y,start:v,end:v+3*y},normal:{count:m,start:h,end:h+3*m},uv:{count:M,start:u,end:u+2*M},hide:!1},v+=3*y,h+=3*m,u+=2*M}var b=function(e){for(var t={},n={},r=0;r<e.length;++r){var i=e[r];for(var a in i)void 0===t[a]&&(t[a]=[],n[a]=0),t[a].push(i[a]),n[a]+=i[a].length}var o={},v=0,h=[];for(var u in t)if("indices"===u)for(var l=t[u],f=0,s=l.length;f<s;f++){for(var x=l[f],c=0,p=x.length;c<p;c++)h.push(x[c]+v);v+=t.position[f].length/3}else{var d=ge(t[u],n[u]);if(!d)return null;o[u]=d}return o.indices=new Uint32Array(h),o}(i),w=b.position,S=b.normal,Z=b.uv,A=b.indices;return{position:w.buffer,normal:S.buffer,uv:Z.buffer,indices:A.buffer,faceMap:a,geometriesAttributes:r}}function pe(e){var n=e.data,r=e.height,i=e.bottomHeight,a=function(e,n){n=Object.assign({},n);for(var r=[1/0,1/0],i=[-1/0,-1/0],a=0;a<e.length;a++)ue(e[a][0],r,i);n.boundingRect=n.boundingRect||{x:r[0],y:r[1],width:i[0]-r[0],height:i[1]-r[1]},$(n);for(var o=[],v=n.translate||[0,0],h=n.scale||[1,1],u=n.boundingRect,l={x:u.x*h[0]+v[0],y:u.y*h[1]+v[1],width:u.width*h[0],height:u.height*h[1]},f=Math.min(u.width,u.height)/1e5,s=0;s<e.length;s++){var x=ve(e[s],f);if(x){var c=n.simplify/Math.max(h[0],h[1]);if(c>0&&(x=he(x,c)),x){for(var p=t.flatten(x),d=p.vertices,g=p.holes,y=p.dimensions,m=0;m<d.length;)d[m]=d[m++]*h[0]+v[0],d[m]=d[m++]*h[1]+v[1];if(Y(d,g),2!==y)throw new Error("Only 2D polygon points are supported");var M=n.bevelSize>0?Q(d,g,n.bevelSize,null,!0):d,b=D(M,g,y),w=ie(d,g,n.smoothSide,n.smoothSideThreshold);o.push({indices:b,vertices:w.vertices,rawVertices:d,topVertices:M,holes:w.holes,splittedMap:w.splittedMap,rect:l,depth:"function"==typeof n.depth?n.depth(s):n.depth})}}}return ae(o,n)}(n,{depth:r}),o=a.position,v=a.normal,h=a.uv,u=a.indices;return ye(o,i),{position:o,normal:v,uv:h,indices:u}}function de(e){var t=e.data,n=e.height,r=e.width,i=e.bottomHeight,a=function(e,t){t=Object.assign({},t);for(var n=[1/0,1/0],r=[-1/0,-1/0],i=0;i<e.length;i++)ue(e[i],n,r);t.boundingRect=t.boundingRect||{x:n[0],y:n[1],width:r[0]-n[0],height:r[1]-n[1]},$(t);var a=t.scale||[1,1];null==t.lineWidth&&(t.lineWidth=1),null==t.miterLimit&&(t.miterLimit=2);for(var o=[],v=0;v<e.length;v++){var h=e[v],u=t.simplify/Math.max(a[0],a[1]);u>0&&(h=V(h,u,!0)),o.push(oe(h,v,t))}return ae(o,t)}(t,{lineWidth:r,depth:n}),o=a.position,v=a.normal,h=a.uv,u=a.indices;return ye(o,i),{position:o,normal:v,uv:h,indices:u}}function ge(e,t){for(var n=new Float32Array(t),r=0,i=0;i<e.length;++i)n.set(e[i],r),r+=e[i].length;return n}function ye(e,t){if(void 0!==t&&"number"==typeof t&&0!==t)for(var n=0,r=e.length;n<r;n+=3)e[n+2]+=t}var me=Math.PI/180,Me=6378137*Math.PI/180;function be(e,t){var n,r=85.0511287798,i=e.x,a=Math.max(Math.min(r,e.y),-r);n=0===a?0:Math.log(Math.tan((90+a)*me/2))/me;var o=i*Me,v=n*Me;return t?(t.x=o,t.y=v,t):{x:o,y:v}}function we(e,t,n,r){var i=e[0]*(t.x-e[2])/n,a=-e[1]*(t.y-e[3])/n;return r?(r.x=i,r.y=a,r):{x:i,y:a}}function Se(e){void 0===e&&(e=[]);for(var t=e.length,n=new Float32Array(3*t),r=0;r<t;r++){var i=e[r],a=3*r;n[a]=i[0],n[a+1]=i[1]}return n}function Ze(e){for(var t=new Float32Array(2*e.length-6),n=0,r=0,i=e.length/3;r<i;r++){var a=e[3*r],o=e[3*r+1],v=e[3*r+2];if(r>0&&r<i-1){var h=3*n;t[h]=a,t[h+1]=o,t[h+2]=v,n++}var u=3*n;t[u]=a,t[u+1]=o,t[u+2]=v,n++}return t}function Ae(e){var t=0,n=e.length;if(1===n)return e[0];for(var r=0;r<n;r++)t+=e[r].length;for(var i=new Float32Array(t),a=0,o=0;o<n;o++)i.set(e[o],a),a+=e[o].length;return i}e.initialize=function(){},e.onmessage=function(e,t){var n=e.data,r=n.type,i=n.datas,a=n.glRes,o=n.matrix,v=n.center;if("ExtrudePolygons"===r){se(i,v,a,o);var h=ce(i);t(null,h,[h.position,h.normal,h.uv,h.indices])}else if("ExtrudeLines"===r){for(var u=0,l=i.length;u<l;u++)for(var f=0,s=i[u].data.length;f<s;f++)i[u].data[f]=xe(i[u].data[f],i[u].center||v,a,o);var x=ce(i,!0);t(null,x,[x.position,x.normal,x.uv,x.indices])}else if("ExtrudePolygon"===r){var c=[],p=[];i.forEach((function(e){var t=[e];se(t,v,a,o);var n=ce(t),r=n.position,i=n.normal,h=n.uv,u=n.indices;c.push({id:e.id,position:r,normal:i,uv:h,indices:u}),p.push(r,i,h,u)})),t(null,c,p)}else if("Line"===r||"FatLine"===r){for(var d=[],g=[],y=0,m=i.length;y<m;y++){for(var M=[],b=0,w=i[y].data.length;b<w;b++){i[y].data[b]=xe(i[y].data[b],i[y].center||v,a,o);var S=Se(i[y].data[b]);M.push(Ze(S))}var Z=Ae(M);ye(Z,i[y].bottomHeight),d.push({id:i[y].id,position:Z.buffer}),g.push(Z.buffer)}t(null,d,g)}else if("Lines"===r||"FatLines"===r){for(var A=0,z=[],F=[],R=0,q=[],P=0,L=i.length;P<L;P++){for(var V=0,B=0,E=i[P].data.length;B<E;B++){i[P].data[B]=xe(i[P].data[B],i[P].center||v,a,o);var U=Se(i[P].data[B]);ye(U,i[P].bottomHeight),V+=U.length/3*2-2,q.push(Ze(U))}var H=V;z[P]=[A,A+H],A+=H,F[P]={position:{count:V,start:R,end:R+3*V},hide:!1},"FatLines"===r&&(F[P].instanceStart={count:V,start:R,end:R+3*V},F[P].instanceEnd={count:V,start:R,end:R+3*V}),R+=3*V}var I=Ae(q);t(null,{id:i.id,position:I.buffer,geometriesAttributes:F,faceMap:z},[I.buffer])}else if("ExtrudeLine"===r){for(var O=0,T=i.length;O<T;O++)for(var W=0,j=i[O].data.length;W<j;W++)i[O].data[W]=xe(i[O].data[W],i[O].center||v,a,o);var k=[],_=[];i.forEach((function(e){var t=ce([e],!0),n=t.position,r=t.normal,i=t.uv,a=t.indices;k.push({id:e.id,position:n,normal:r,uv:i,indices:a}),_.push(n,r,i,a)})),t(null,k,_)}},Object.defineProperty(e,"__esModule",{value:!0})})`;
const workerName = '__maptalks.three__';

export function getWorkerName() {
    return workerName;
}

export function getWorkerCode() {
    return workerCode;
}
