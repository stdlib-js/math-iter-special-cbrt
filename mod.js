// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(r,t,n){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(c.call(r,t)||f.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},y=e,v=l,p=n()?y:v;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,m=/./;var d=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,A=_;var g=function(r){return A.call(r)},O=Object.prototype.hasOwnProperty;var h=function(r,t){return null!=r&&O.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=h,S=E,P=_;var F=g,I=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},N=j()?I:F,T=Boolean.prototype.toString;var G=N,V=function(r){try{return T.call(r),!0}catch(r){return!1}},x=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(x?V(r):"[object Boolean]"===G(r)))},B=d,L=H;var k=s,M=function(r){return B(r)||L(r)},W=H;k(M,"isPrimitive",d),k(M,"isObject",W);var C="object"==typeof self?self:null,R="object"==typeof window?window:null,X=M.isPrimitive,Y=function(){return new Function("return this;")()},z=C,D=R,q=r(Object.freeze({__proto__:null}));var J=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Y()}if(z)return z;if(D)return D;if(q)return q;throw new Error("unexpected error. Unable to resolve global object.")},K=J(),Q=K.document&&K.document.childNodes,Z=Int8Array,$=m,rr=Q,tr=Z;var nr=function(){return"function"==typeof $||"object"==typeof tr||"function"==typeof rr};var er=function(){return/^\s*function\s*([^(]*)/i},or=er;s(or,"REGEXP",er());var ur=or,ir=N;var ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)},cr=ar;var fr=function(r){return null!==r&&"object"==typeof r};s(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!cr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(fr));var lr=fr;var yr=N,vr=ur.REGEXP,pr=function(r){return lr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var br=function(r){var t,n,e;if(("Object"===(n=yr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=vr.exec(e.toString()))return t[1]}return pr(r)?"Buffer":n},sr=br;var mr=br;var dr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t},wr=function(r){return mr(r).toLowerCase()},jr=nr()?wr:dr;var _r=function(r){return"function"===jr(r)},Ar=_r;var gr=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Ar(r.next)};var Or=function(r){return"number"==typeof r},hr=Number,Er=hr.prototype.toString;var Ur=N,Sr=hr,Pr=function(r){try{return Er.call(r),!0}catch(r){return!1}},Fr=j();var Ir=function(r){return"object"==typeof r&&(r instanceof Sr||(Fr?Pr(r):"[object Number]"===Ur(r)))},Nr=Or,Tr=Ir;var Gr=s,Vr=function(r){return Nr(r)||Tr(r)},xr=Ir;Gr(Vr,"isPrimitive",Or),Gr(Vr,"isObject",xr);var Hr=Vr,Br=h;var Lr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Br(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,kr=ar;var Mr=function(r){return"object"==typeof r&&null!==r&&!kr(r)},Wr=Object.getPrototypeOf;var Cr=function(r){return r.__proto__},Rr=N,Xr=Cr;var Yr=function(r){var t=Xr(r);return t||null===t?t:"[object Function]"===Rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},zr=Wr,Dr=Yr,qr=_r(Object.getPrototypeOf)?zr:Dr;var Jr=Mr,Kr=_r,Qr=function(r){return null==r?null:(r=Object(r),qr(r))},Zr=h,$r=N,rt=Object.prototype;var tt=function(r){var t;return!!Jr(r)&&(!(t=Qr(r))||!Zr(r,"constructor")&&Zr(t,"constructor")&&Kr(t.constructor)&&"[object Function]"===$r(t.constructor)&&Zr(t,"isPrototypeOf")&&Kr(t.isPrototypeOf)&&(t===rt||function(r){var t;for(t in r)if(!Zr(r,t))return!1;return!0}(r)))},nt=tt,et=h;var ot=s,ut=_r,it=gr,at=Hr.isPrimitive,ct=Lr,ft=function(r,t){return nt(t)?(et(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var lt=function r(t,n,e){var o,u,i,a;if(!it(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ut(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=ft(o,e)))throw i;return ot(u={},"next",c),ot(u,"return",f),ct&&ut(t[ct])&&ot(u,ct,l),u;function c(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:at(r.value)?n(r.value):o.invalid,done:!1}}function f(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[ct](),n,o)}},yt=lt,vt=N,pt="function"==typeof Uint32Array;var bt="function"==typeof Uint32Array?Uint32Array:null,st=function(r){return pt&&r instanceof Uint32Array||"[object Uint32Array]"===vt(r)},mt=bt;var dt=function(){var r,t;if("function"!=typeof mt)return!1;try{t=new mt(t=[1,3.14,-3.14,4294967296,4294967297]),r=st(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var wt="function"==typeof Uint32Array?Uint32Array:void 0,jt=function(){throw new Error("not implemented")},_t=dt()?wt:jt,At=N,gt="function"==typeof Float64Array;var Ot="function"==typeof Float64Array?Float64Array:null,ht=function(r){return gt&&r instanceof Float64Array||"[object Float64Array]"===At(r)},Et=Ot;var Ut=function(){var r,t;if("function"!=typeof Et)return!1;try{t=new Et([1,3.14,-3.14,NaN]),r=ht(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var St="function"==typeof Float64Array?Float64Array:void 0,Pt=function(){throw new Error("not implemented")},Ft=Ut()?St:Pt,It=N,Nt="function"==typeof Uint8Array;var Tt="function"==typeof Uint8Array?Uint8Array:null,Gt=function(r){return Nt&&r instanceof Uint8Array||"[object Uint8Array]"===It(r)},Vt=Tt;var xt=function(){var r,t;if("function"!=typeof Vt)return!1;try{t=new Vt(t=[1,3.14,-3.14,256,257]),r=Gt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Ht="function"==typeof Uint8Array?Uint8Array:void 0,Bt=function(){throw new Error("not implemented")},Lt=xt()?Ht:Bt,kt=N,Mt="function"==typeof Uint16Array;var Wt="function"==typeof Uint16Array?Uint16Array:null,Ct=function(r){return Mt&&r instanceof Uint16Array||"[object Uint16Array]"===kt(r)},Rt=Wt;var Xt=function(){var r,t;if("function"!=typeof Rt)return!1;try{t=new Rt(t=[1,3.14,-3.14,65536,65537]),r=Ct(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Yt,zt="function"==typeof Uint16Array?Uint16Array:void 0,Dt=function(){throw new Error("not implemented")},qt={uint16:Xt()?zt:Dt,uint8:Lt};(Yt=new qt.uint16(1))[0]=4660;var Jt=52===new qt.uint8(Yt.buffer)[0],Kt=_t,Qt=!0===Jt?1:0,Zt=new Ft(1),$t=new Kt(Zt.buffer);var rn=function(r){return Zt[0]=r,$t[Qt]},tn=_t,nn=!0===Jt?1:0,en=new Ft(1),on=new tn(en.buffer);var un=function(r,t){return en[0]=r,on[nn]=t>>>0,en[0]},an=un,cn=Number.POSITIVE_INFINITY,fn=hr.NEGATIVE_INFINITY,ln=cn,yn=fn;var vn,pn,bn=function(r){return r===ln||r===yn};!0===Jt?(vn=1,pn=0):(vn=0,pn=1);var sn=_t,mn={HIGH:vn,LOW:pn},dn=new Ft(1),wn=new sn(dn.buffer),jn=mn.HIGH,_n=mn.LOW;var An,gn,On=function(r,t){return wn[jn]=r,wn[_n]=t,dn[0]},hn=On;!0===Jt?(An=1,gn=0):(An=0,gn=1);var En=_t,Un={HIGH:An,LOW:gn},Sn=new Ft(1),Pn=new En(Sn.buffer),Fn=Un.HIGH,In=Un.LOW;var Nn=function(r,t){return Sn[0]=t,r[0]=Pn[Fn],r[1]=Pn[In],r};var Tn=rn,Gn=an,Vn=bn,xn=hn,Hn=function(r,t){return 1===arguments.length?Nn([0,0],r):Nn(r,t)},Bn=function(r){return r!=r},Ln=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)},kn=Tn(22250738585072014e-324),Mn=[0,0];var Wn=yt,Cn=function(r){var t,n,e,o,u;return 0===r||Bn(r)||Vn(r)?r:(t=(2147483648&(n=Tn(r)>>>0))>>>0,(n&=2147483647)<kn?(e=(2147483647&Tn(u=0x40000000000000*r))>>>0,u=xn(t|(e=696219795+(e/3>>>0)>>>0),0)):u=Gn(u=0,t|(e=715094163+(n/3>>>0)>>>0)),u*=Ln(o=u*u*(u/r)),Hn(Mn,u),2147483648&Mn[1]?(Mn[0]+=1,Mn[1]&=2147483647):Mn[1]|=2147483648,u=xn(4294967295&Mn[0],3221225472&Mn[1]),u+=u*(o=((o=r/(u*u))-u)/(u+u+o)))};var Rn=function(r){return Wn(r,Cn)},Xn=Rn;export{Xn as default};
//# sourceMappingURL=mod.js.map