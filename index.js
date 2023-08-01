// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterCbrt=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,c=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var f,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||c.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=f):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var f=r;function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},g=Boolean.prototype.toString;var A=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(N,"REGEXP",P);var x=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function V(t){return null!==t&&"object"==typeof t}function G(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=P.exec(e.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!x(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(V));var H="function"==typeof y||"object"==typeof I||"function"==typeof F?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function B(t){return"function"===H(t)}function L(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&B(t.next)}function C(t){return"number"==typeof t}var W=Number,k=W.prototype.toString;var M=b();function Y(t){return"object"==typeof t&&(t instanceof W||(M?function(t){try{return k.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function R(t){return C(t)||Y(t)}l(R,"isPrimitive",C),l(R,"isObject",Y);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var q,z=Object.getPrototypeOf;q=B(Object.getPrototypeOf)?z:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var D=q;var J=Object.prototype;function K(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!x(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),D(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&B(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&B(r.isPrototypeOf)&&(r===J||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Q(t,r){return K(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function Z(t,r,n){var e,o,u,i;if(!L(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!B(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Q(e,n)))throw u;return l(o={},"next",a),l(o,"return",c),X&&B(t[X])&&l(o,X,f),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:C(n.value)?r(n.value):e.invalid,done:!1}}function c(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return Z(t[X](),r,e)}}var $=2147483647,tt="function"==typeof Uint32Array;var rt="function"==typeof Uint32Array?Uint32Array:null;var nt,et="function"==typeof Uint32Array?Uint32Array:void 0;nt=function(){var t,r,n;if("function"!=typeof rt)return!1;try{r=new rt(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(tt&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?et:function(){throw new Error("not implemented")};var ot=nt,ut="function"==typeof Float64Array;var it="function"==typeof Float64Array?Float64Array:null;var at,ct="function"==typeof Float64Array?Float64Array:void 0;at=function(){var t,r,n;if("function"!=typeof it)return!1;try{r=new it([1,3.14,-3.14,NaN]),n=r,t=(ut&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ct:function(){throw new Error("not implemented")};var ft=at,lt="function"==typeof Uint8Array;var yt="function"==typeof Uint8Array?Uint8Array:null;var pt,vt="function"==typeof Uint8Array?Uint8Array:void 0;pt=function(){var t,r,n;if("function"!=typeof yt)return!1;try{r=new yt(r=[1,3.14,-3.14,256,257]),n=r,t=(lt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?vt:function(){throw new Error("not implemented")};var bt=pt,st="function"==typeof Uint16Array;var dt="function"==typeof Uint16Array?Uint16Array:null;var mt,wt="function"==typeof Uint16Array?Uint16Array:void 0;mt=function(){var t,r,n;if("function"!=typeof dt)return!1;try{r=new dt(r=[1,3.14,-3.14,65536,65537]),n=r,t=(st&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?wt:function(){throw new Error("not implemented")};var jt,gt={uint16:mt,uint8:bt};(jt=new gt.uint16(1))[0]=4660;var At=52===new gt.uint8(jt.buffer)[0],_t=!0===At?1:0,ht=new ft(1),Ot=new ot(ht.buffer);function Ut(t){return ht[0]=t,Ot[_t]}var St=!0===At?1:0,Et=new ft(1),Tt=new ot(Et.buffer);var Ft,It,Nt=Number.POSITIVE_INFINITY,Pt=W.NEGATIVE_INFINITY;!0===At?(Ft=1,It=0):(Ft=0,It=1);var xt,Vt,Gt={HIGH:Ft,LOW:It},Ht=new ft(1),Bt=new ot(Ht.buffer),Lt=Gt.HIGH,Ct=Gt.LOW;function Wt(t,r){return Bt[Lt]=t,Bt[Ct]=r,Ht[0]}!0===At?(xt=1,Vt=0):(xt=0,Vt=1);var kt={HIGH:xt,LOW:Vt},Mt=new ft(1),Yt=new ot(Mt.buffer),Rt=kt.HIGH,Xt=kt.LOW;function qt(t,r,n,e){return Mt[0]=t,r[e]=Yt[Rt],r[e+n]=Yt[Xt],r}function zt(t){return qt(t,[0,0],1,0)}l(zt,"assign",qt);var Dt=2147483648,Jt=Ut(22250738585072014e-324),Kt=[0,0];function Qt(t){var r,n,e,o;return 0===t||function(t){return t!=t}(t)||function(t){return t===Nt||t===Pt}(t)?t:(r=(2147483648&(n=Ut(t)>>>0))>>>0,o=(n&=$)<Jt?Wt(r|696219795+(((Ut(o=0x40000000000000*t)&$)>>>0)/3>>>0)>>>0,0):function(t,r){return Et[0]=t,Tt[St]=r>>>0,Et[0]}(o=0,r|715094163+(n/3>>>0)>>>0),o*=function(t){return 0===t?1.87595182427177:1.87595182427177+t*(t*(1.6214297201053545+t*(.14599619288661245*t-.758397934778766))-1.8849797954337717)}(e=o*o*(o/t)),zt.assign(o,Kt,1,0),Kt[1]&Dt?(Kt[0]+=1,Kt[1]&=~Dt):Kt[1]|=Dt,o=Wt(4294967295&Kt[0],3221225472&Kt[1]),o+=o*(e=((e=t/(o*o))-o)/(o+o+e)))}return function(t){return Z(t,Qt)}}));
//# sourceMappingURL=index.js.map
