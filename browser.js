// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,e,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function F(r){var t,e,n,o;for(e=[],o=0,n=U.exec(r);n;)(t=r.slice(o,U.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),o=U.lastIndex,n=U.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function I(r){return"string"==typeof r}function k(r){var t,e,n;if(!I(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=F(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return x.apply(null,e)}var V,N=Object.prototype,P=N.toString,C=N.__defineGetter__,G=N.__defineSetter__,L=N.__lookupGetter__,$=N.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(L.call(r,t)||$.call(r,t)?(n=r.__proto__,r.__proto__=N,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,t,e.get),a&&G&&G.call(r,t,e.set),r};var H=V;function W(r,t,e){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var B=/./;function R(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=M()?function(r){var t,e,n;if(null==r)return X.call(r);e=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return n=X.call(r),t?r[D]=e:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=M();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return R(r)||tr(r)}function nr(){return new Function("return this;")()}W(er,"isPrimitive",R),W(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!R(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;W(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function yr(r){return null!==r&&"object"==typeof r}function dr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=sr.exec(n.toString()))return t[1]}return yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}W(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!pr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(yr));var gr="function"==typeof B||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?dr(r).toLowerCase():t};function br(r){return"function"===gr(r)}function vr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&br(r.next)}function hr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString,jr=M();function Ar(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function _r(r){return hr(r)||Ar(r)}W(_r,"isPrimitive",hr),W(_r,"isObject",Ar);var Er,Or="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,Sr=Object,xr=Object.getPrototypeOf;Er=br(Object.getPrototypeOf)?xr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ur=Er,Tr=Object.prototype;function Fr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(t=function(r){return null==r?null:(r=Sr(r),Ur(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&br(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&br(t.isPrototypeOf)&&(t===Tr||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Ir(r,t){return Fr(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function kr(r,t,e){var n,o,i,a;if(!vr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!br(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Ir(n,e)))throw i;return W(o={},"next",u),W(o,"return",c),Or&&br(r[Or])&&W(o,Or,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:hr(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return kr(r[Or](),t,n)}}var Vr,Nr=2147483647,Pr="function"==typeof Uint32Array,Cr="function"==typeof Uint32Array?Uint32Array:null,Gr="function"==typeof Uint32Array?Uint32Array:void 0;Vr=function(){var r,t,e;if("function"!=typeof Cr)return!1;try{t=new Cr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Pr&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr,$r=Vr,Hr="function"==typeof Float64Array,Wr="function"==typeof Float64Array?Float64Array:null,Br="function"==typeof Float64Array?Float64Array:void 0;Lr=function(){var r,t,e;if("function"!=typeof Wr)return!1;try{t=new Wr([1,3.14,-3.14,NaN]),e=t,r=(Hr&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Rr,Zr=Lr,Mr="function"==typeof Uint8Array,Xr="function"==typeof Uint8Array?Uint8Array:null,Yr="function"==typeof Uint8Array?Uint8Array:void 0;Rr=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr(t=[1,3.14,-3.14,256,257]),e=t,r=(Mr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var zr,qr=Rr,Dr="function"==typeof Uint16Array,Jr="function"==typeof Uint16Array?Uint16Array:null,Kr="function"==typeof Uint16Array?Uint16Array:void 0;zr=function(){var r,t,e;if("function"!=typeof Jr)return!1;try{t=new Jr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Dr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr,rt={uint16:zr,uint8:qr};(Qr=new rt.uint16(1))[0]=4660;var tt=52===new rt.uint8(Qr.buffer)[0],et=!0===tt?1:0,nt=new Zr(1),ot=new $r(nt.buffer);function it(r){return nt[0]=r,ot[et]}var at,ut,ct=!0===tt?1:0,ft=new Zr(1),lt=new $r(ft.buffer),st=Number.POSITIVE_INFINITY,pt=wr.NEGATIVE_INFINITY;!0===tt?(at=1,ut=0):(at=0,ut=1);var yt,dt,gt={HIGH:at,LOW:ut},bt=new Zr(1),vt=new $r(bt.buffer),ht=gt.HIGH,wt=gt.LOW;function mt(r,t){return vt[ht]=r,vt[wt]=t,bt[0]}!0===tt?(yt=1,dt=0):(yt=0,dt=1);var jt={HIGH:yt,LOW:dt},At=new Zr(1),_t=new $r(At.buffer),Et=jt.HIGH,Ot=jt.LOW;function St(r,t,e,n){return At[0]=r,t[n]=_t[Et],t[n+e]=_t[Ot],t}function xt(r){return St(r,[0,0],1,0)}W(xt,"assign",St);var Ut=2147483648,Tt=it(22250738585072014e-324),Ft=[0,0];function It(r){var t,e,n,o;return 0===r||function(r){return r!=r}(r)||function(r){return r===st||r===pt}(r)?r:(t=(2147483648&(e=it(r)>>>0))>>>0,o=(e&=Nr)<Tt?mt(t|696219795+(((it(o=0x40000000000000*r)&Nr)>>>0)/3>>>0)>>>0,0):function(r,t){return ft[0]=r,lt[ct]=t>>>0,ft[0]}(o=0,t|715094163+(e/3>>>0)>>>0),o*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(n=o*o*(o/r)),xt.assign(o,Ft,1,0),Ft[1]&Ut?(Ft[0]+=1,Ft[1]&=~Ut):Ft[1]|=Ut,o=mt(4294967295&Ft[0],3221225472&Ft[1]),o+=o*(n=((n=r/(o*o))-o)/(o+o+n)))}return function(r){return kr(r,It)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterCbrt=t();
//# sourceMappingURL=browser.js.map
