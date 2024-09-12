function BR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var D0={exports:{}},Gc={},x0={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ol=Symbol.for("react.element"),zR=Symbol.for("react.portal"),WR=Symbol.for("react.fragment"),qR=Symbol.for("react.strict_mode"),HR=Symbol.for("react.profiler"),GR=Symbol.for("react.provider"),$R=Symbol.for("react.context"),KR=Symbol.for("react.forward_ref"),QR=Symbol.for("react.suspense"),YR=Symbol.for("react.memo"),XR=Symbol.for("react.lazy"),ly=Symbol.iterator;function JR(t){return t===null||typeof t!="object"?null:(t=ly&&t[ly]||t["@@iterator"],typeof t=="function"?t:null)}var O0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b0=Object.assign,L0={};function so(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||O0}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M0(){}M0.prototype=so.prototype;function Hp(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||O0}var Gp=Hp.prototype=new M0;Gp.constructor=Hp;b0(Gp,so.prototype);Gp.isPureReactComponent=!0;var uy=Array.isArray,V0=Object.prototype.hasOwnProperty,$p={current:null},F0={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)V0.call(e,r)&&!F0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ol,type:t,key:s,ref:o,props:i,_owner:$p.current}}function ZR(t,e){return{$$typeof:ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ol}function e1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cy=/\/+/g;function pd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e1(""+t.key):e.toString(36)}function Tu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ol:case zR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pd(o,0):r,uy(i)?(n="",t!=null&&(n=t.replace(cy,"$&/")+"/"),Tu(i,e,n,"",function(c){return c})):i!=null&&(Kp(i)&&(i=ZR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",uy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+pd(s,a);o+=Tu(s,e,n,u,i)}else if(u=JR(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+pd(s,a++),o+=Tu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Kl(t,e,n){if(t==null)return t;var r=[],i=0;return Tu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function t1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Iu={transition:null},n1={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Iu,ReactCurrentOwner:$p};function B0(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Kl,forEach:function(t,e,n){Kl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Kl(t,function(){e++}),e},toArray:function(t){return Kl(t,function(e){return e})||[]},only:function(t){if(!Kp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=so;ne.Fragment=WR;ne.Profiler=HR;ne.PureComponent=Hp;ne.StrictMode=qR;ne.Suspense=QR;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n1;ne.act=B0;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=b0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$p.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)V0.call(e,u)&&!F0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ol,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:$R,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:GR,_context:t},t.Consumer=t};ne.createElement=U0;ne.createFactory=function(t){var e=U0.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:KR,render:t}};ne.isValidElement=Kp;ne.lazy=function(t){return{$$typeof:XR,_payload:{_status:-1,_result:t},_init:t1}};ne.memo=function(t,e){return{$$typeof:YR,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Iu.transition;Iu.transition={};try{t()}finally{Iu.transition=e}};ne.unstable_act=B0;ne.useCallback=function(t,e){return Mt.current.useCallback(t,e)};ne.useContext=function(t){return Mt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Mt.current.useEffect(t,e)};ne.useId=function(){return Mt.current.useId()};ne.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Mt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};ne.useRef=function(t){return Mt.current.useRef(t)};ne.useState=function(t){return Mt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Mt.current.useTransition()};ne.version="18.3.1";x0.exports=ne;var b=x0.exports;const ge=jR(b),r1=BR({__proto__:null,default:ge},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1=b,s1=Symbol.for("react.element"),o1=Symbol.for("react.fragment"),a1=Object.prototype.hasOwnProperty,l1=i1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u1={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)a1.call(e,r)&&!u1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:s1,type:t,key:s,ref:o,props:i,_owner:l1.current}}Gc.Fragment=o1;Gc.jsx=j0;Gc.jsxs=j0;D0.exports=Gc;var V=D0.exports,z0={exports:{}},rn={},W0={exports:{}},q0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var Q=z.length;z.push(K);e:for(;0<Q;){var fe=Q-1>>>1,ee=z[fe];if(0<i(ee,K))z[fe]=K,z[Q]=ee,Q=fe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Q=z.pop();if(Q!==K){z[0]=Q;e:for(var fe=0,ee=z.length,oe=ee>>>1;fe<oe;){var Fe=2*(fe+1)-1,je=z[Fe],st=Fe+1,Pt=z[st];if(0>i(je,Q))st<ee&&0>i(Pt,je)?(z[fe]=Pt,z[st]=Q,fe=st):(z[fe]=je,z[Fe]=Q,fe=Fe);else if(st<ee&&0>i(Pt,Q))z[fe]=Pt,z[st]=Q,fe=st;else break e}}return K}function i(z,K){var Q=z.sortIndex-K.sortIndex;return Q!==0?Q:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,v=!1,T=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=z)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function N(z){if(R=!1,w(z),!T)if(n(u)!==null)T=!0,Nn(L);else{var K=n(c);K!==null&&Ge(N,K.startTime-z)}}function L(z,K){T=!1,R&&(R=!1,E(g),g=-1),v=!0;var Q=m;try{for(w(K),f=n(u);f!==null&&(!(f.expirationTime>K)||z&&!P());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,m=f.priorityLevel;var ee=fe(f.expirationTime<=K);K=t.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(u)&&r(u),w(K)}else r(u);f=n(u)}if(f!==null)var oe=!0;else{var Fe=n(c);Fe!==null&&Ge(N,Fe.startTime-K),oe=!1}return oe}finally{f=null,m=Q,v=!1}}var F=!1,A=null,g=-1,I=5,C=-1;function P(){return!(t.unstable_now()-C<I)}function D(){if(A!==null){var z=t.unstable_now();C=z;var K=!0;try{K=A(!0,z)}finally{K?k():(F=!1,A=null)}}else F=!1}var k;if(typeof _=="function")k=function(){_(D)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Ft=Ve.port2;Ve.port1.onmessage=D,k=function(){Ft.postMessage(null)}}else k=function(){S(D,0)};function Nn(z){A=z,F||(F=!0,k())}function Ge(z,K){g=S(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){T||v||(T=!0,Nn(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var Q=m;m=K;try{return z()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=m;m=z;try{return K()}finally{m=Q}},t.unstable_scheduleCallback=function(z,K,Q){var fe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?fe+Q:fe):Q=fe,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Q+ee,z={id:d++,callback:K,priorityLevel:z,startTime:Q,expirationTime:ee,sortIndex:-1},Q>fe?(z.sortIndex=Q,e(c,z),n(u)===null&&z===n(c)&&(R?(E(g),g=-1):R=!0,Ge(N,Q-fe))):(z.sortIndex=ee,e(u,z),T||v||(T=!0,Nn(L))),z},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(z){var K=m;return function(){var Q=m;m=K;try{return z.apply(this,arguments)}finally{m=Q}}}})(q0);W0.exports=q0;var c1=W0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1=b,nn=c1;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H0=new Set,Ca={};function Ki(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(Ca[t]=e,t=0;t<e.length;t++)H0.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cf=Object.prototype.hasOwnProperty,d1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hy={},dy={};function f1(t){return cf.call(dy,t)?!0:cf.call(hy,t)?!1:d1.test(t)?dy[t]=!0:(hy[t]=!0,!1)}function p1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function m1(t,e,n,r){if(e===null||typeof e>"u"||p1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qp=/[\-:]([a-z])/g;function Yp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qp,Yp);dt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qp,Yp);dt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qp,Yp);dt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xp(t,e,n,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(m1(e,n,i,r)&&(n=null),r||i===null?f1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var yr=h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ql=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),Jp=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),ff=Symbol.for("react.suspense_list"),em=Symbol.for("react.memo"),Rr=Symbol.for("react.lazy"),K0=Symbol.for("react.offscreen"),fy=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=fy&&t[fy]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,md;function Yo(t){if(md===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);md=e&&e[1]||""}return`
`+md+t}var gd=!1;function _d(t,e){if(!t||gd)return"";gd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{gd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yo(t):""}function g1(t){switch(t.tag){case 5:return Yo(t.type);case 16:return Yo("Lazy");case 13:return Yo("Suspense");case 19:return Yo("SuspenseList");case 0:case 2:case 15:return t=_d(t.type,!1),t;case 11:return t=_d(t.type.render,!1),t;case 1:return t=_d(t.type,!0),t;default:return""}}function pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case hf:return"Profiler";case Jp:return"StrictMode";case df:return"Suspense";case ff:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $0:return(t.displayName||"Context")+".Consumer";case G0:return(t._context.displayName||"Context")+".Provider";case Zp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case em:return e=t.displayName||null,e!==null?e:pf(t.type)||"Memo";case Rr:e=t._payload,t=t._init;try{return pf(t(e))}catch{}}return null}function _1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pf(e);case 8:return e===Jp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Q0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y1(t){var e=Q0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yl(t){t._valueTracker||(t._valueTracker=y1(t))}function Y0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Q0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mf(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function py(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function X0(t,e){e=e.checked,e!=null&&Xp(t,"checked",e,!1)}function gf(t,e){X0(t,e);var n=ei(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_f(t,e.type,n):e.hasOwnProperty("defaultValue")&&_f(t,e.type,ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function my(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _f(t,e,n){(e!=="number"||Gu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xo=Array.isArray;function Ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ei(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Xo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ei(n)}}function J0(t,e){var n=ei(e.value),r=ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _y(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Z0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Z0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xl,ew=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xl=Xl||document.createElement("div"),Xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v1=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){v1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function tw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function nw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var E1=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ef(t,e){if(e){if(E1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tf=null;function tm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var If=null,Ns=null,Ds=null;function yy(t){if(t=ul(t)){if(typeof If!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Xc(e),If(t.stateNode,t.type,e))}}function rw(t){Ns?Ds?Ds.push(t):Ds=[t]:Ns=t}function iw(){if(Ns){var t=Ns,e=Ds;if(Ds=Ns=null,yy(t),e)for(t=0;t<e.length;t++)yy(e[t])}}function sw(t,e){return t(e)}function ow(){}var yd=!1;function aw(t,e,n){if(yd)return t(e,n);yd=!0;try{return sw(t,e,n)}finally{yd=!1,(Ns!==null||Ds!==null)&&(ow(),iw())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var r=Xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Af=!1;if(ur)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){Af=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{Af=!1}function w1(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var aa=!1,$u=null,Ku=!1,Sf=null,T1={onError:function(t){aa=!0,$u=t}};function I1(t,e,n,r,i,s,o,a,u){aa=!1,$u=null,w1.apply(T1,arguments)}function A1(t,e,n,r,i,s,o,a,u){if(I1.apply(this,arguments),aa){if(aa){var c=$u;aa=!1,$u=null}else throw Error(B(198));Ku||(Ku=!0,Sf=c)}}function Qi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vy(t){if(Qi(t)!==t)throw Error(B(188))}function S1(t){var e=t.alternate;if(!e){if(e=Qi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vy(i),t;if(s===r)return vy(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function uw(t){return t=S1(t),t!==null?cw(t):null}function cw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cw(t);if(e!==null)return e;t=t.sibling}return null}var hw=nn.unstable_scheduleCallback,Ey=nn.unstable_cancelCallback,C1=nn.unstable_shouldYield,R1=nn.unstable_requestPaint,Be=nn.unstable_now,k1=nn.unstable_getCurrentPriorityLevel,nm=nn.unstable_ImmediatePriority,dw=nn.unstable_UserBlockingPriority,Qu=nn.unstable_NormalPriority,P1=nn.unstable_LowPriority,fw=nn.unstable_IdlePriority,$c=null,Vn=null;function N1(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot($c,t,void 0,(t.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:O1,D1=Math.log,x1=Math.LN2;function O1(t){return t>>>=0,t===0?32:31-(D1(t)/x1|0)|0}var Jl=64,Zl=4194304;function Jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Jo(a):(s&=o,s!==0&&(r=Jo(s)))}else o=n&~i,o!==0?r=Jo(o):s!==0&&(r=Jo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-An(e),i=1<<n,r|=t[n],e&=~i;return r}function b1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-An(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=b1(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pw(){var t=Jl;return Jl<<=1,!(Jl&4194240)&&(Jl=64),t}function vd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-An(e),t[e]=n}function M1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-An(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-An(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function mw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gw,im,_w,yw,vw,Rf=!1,eu=[],jr=null,zr=null,Wr=null,Pa=new Map,Na=new Map,Pr=[],V1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wy(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function Fo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ul(e),e!==null&&im(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function F1(t,e,n,r,i){switch(e){case"focusin":return jr=Fo(jr,t,e,n,r,i),!0;case"dragenter":return zr=Fo(zr,t,e,n,r,i),!0;case"mouseover":return Wr=Fo(Wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pa.set(s,Fo(Pa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Na.set(s,Fo(Na.get(s)||null,t,e,n,r,i)),!0}return!1}function Ew(t){var e=wi(t.target);if(e!==null){var n=Qi(e);if(n!==null){if(e=n.tag,e===13){if(e=lw(n),e!==null){t.blockedOn=e,vw(t.priority,function(){_w(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tf=r,n.target.dispatchEvent(r),Tf=null}else return e=ul(n),e!==null&&im(e),t.blockedOn=n,!1;e.shift()}return!0}function Ty(t,e,n){Au(t)&&n.delete(e)}function U1(){Rf=!1,jr!==null&&Au(jr)&&(jr=null),zr!==null&&Au(zr)&&(zr=null),Wr!==null&&Au(Wr)&&(Wr=null),Pa.forEach(Ty),Na.forEach(Ty)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,Rf||(Rf=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,U1)))}function Da(t){function e(i){return Uo(i,t)}if(0<eu.length){Uo(eu[0],t);for(var n=1;n<eu.length;n++){var r=eu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jr!==null&&Uo(jr,t),zr!==null&&Uo(zr,t),Wr!==null&&Uo(Wr,t),Pa.forEach(e),Na.forEach(e),n=0;n<Pr.length;n++)r=Pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Pr.length&&(n=Pr[0],n.blockedOn===null);)Ew(n),n.blockedOn===null&&Pr.shift()}var xs=yr.ReactCurrentBatchConfig,Xu=!0;function B1(t,e,n,r){var i=me,s=xs.transition;xs.transition=null;try{me=1,sm(t,e,n,r)}finally{me=i,xs.transition=s}}function j1(t,e,n,r){var i=me,s=xs.transition;xs.transition=null;try{me=4,sm(t,e,n,r)}finally{me=i,xs.transition=s}}function sm(t,e,n,r){if(Xu){var i=kf(t,e,n,r);if(i===null)Pd(t,e,r,Ju,n),wy(t,r);else if(F1(i,t,e,n,r))r.stopPropagation();else if(wy(t,r),e&4&&-1<V1.indexOf(t)){for(;i!==null;){var s=ul(i);if(s!==null&&gw(s),s=kf(t,e,n,r),s===null&&Pd(t,e,r,Ju,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Pd(t,e,r,null,n)}}var Ju=null;function kf(t,e,n,r){if(Ju=null,t=tm(r),t=wi(t),t!==null)if(e=Qi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ju=t,null}function ww(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k1()){case nm:return 1;case dw:return 4;case Qu:case P1:return 16;case fw:return 536870912;default:return 16}default:return 16}}var Mr=null,om=null,Su=null;function Tw(){if(Su)return Su;var t,e=om,n=e.length,r,i="value"in Mr?Mr.value:Mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Su=i.slice(t,1<r?1-r:void 0)}function Cu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tu(){return!0}function Iy(){return!1}function sn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tu:Iy,this.isPropagationStopped=Iy,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},am=sn(oo),ll=Oe({},oo,{view:0,detail:0}),z1=sn(ll),Ed,wd,Bo,Kc=Oe({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bo&&(Bo&&t.type==="mousemove"?(Ed=t.screenX-Bo.screenX,wd=t.screenY-Bo.screenY):wd=Ed=0,Bo=t),Ed)},movementY:function(t){return"movementY"in t?t.movementY:wd}}),Ay=sn(Kc),W1=Oe({},Kc,{dataTransfer:0}),q1=sn(W1),H1=Oe({},ll,{relatedTarget:0}),Td=sn(H1),G1=Oe({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),$1=sn(G1),K1=Oe({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q1=sn(K1),Y1=Oe({},oo,{data:0}),Sy=sn(Y1),X1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ek(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Z1[t])?!!e[t]:!1}function lm(){return ek}var tk=Oe({},ll,{key:function(t){if(t.key){var e=X1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lm,charCode:function(t){return t.type==="keypress"?Cu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nk=sn(tk),rk=Oe({},Kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cy=sn(rk),ik=Oe({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lm}),sk=sn(ik),ok=Oe({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ak=sn(ok),lk=Oe({},Kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uk=sn(lk),ck=[9,13,27,32],um=ur&&"CompositionEvent"in window,la=null;ur&&"documentMode"in document&&(la=document.documentMode);var hk=ur&&"TextEvent"in window&&!la,Iw=ur&&(!um||la&&8<la&&11>=la),Ry=" ",ky=!1;function Aw(t,e){switch(t){case"keyup":return ck.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function dk(t,e){switch(t){case"compositionend":return Sw(e);case"keypress":return e.which!==32?null:(ky=!0,Ry);case"textInput":return t=e.data,t===Ry&&ky?null:t;default:return null}}function fk(t,e){if(gs)return t==="compositionend"||!um&&Aw(t,e)?(t=Tw(),Su=om=Mr=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iw&&e.locale!=="ko"?null:e.data;default:return null}}var pk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Py(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pk[t.type]:e==="textarea"}function Cw(t,e,n,r){rw(r),e=Zu(e,"onChange"),0<e.length&&(n=new am("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ua=null,xa=null;function mk(t){Vw(t,0)}function Qc(t){var e=vs(t);if(Y0(e))return t}function gk(t,e){if(t==="change")return e}var Rw=!1;if(ur){var Id;if(ur){var Ad="oninput"in document;if(!Ad){var Ny=document.createElement("div");Ny.setAttribute("oninput","return;"),Ad=typeof Ny.oninput=="function"}Id=Ad}else Id=!1;Rw=Id&&(!document.documentMode||9<document.documentMode)}function Dy(){ua&&(ua.detachEvent("onpropertychange",kw),xa=ua=null)}function kw(t){if(t.propertyName==="value"&&Qc(xa)){var e=[];Cw(e,xa,t,tm(t)),aw(mk,e)}}function _k(t,e,n){t==="focusin"?(Dy(),ua=e,xa=n,ua.attachEvent("onpropertychange",kw)):t==="focusout"&&Dy()}function yk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qc(xa)}function vk(t,e){if(t==="click")return Qc(e)}function Ek(t,e){if(t==="input"||t==="change")return Qc(e)}function wk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:wk;function Oa(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cf.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function xy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oy(t,e){var n=xy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xy(n)}}function Pw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nw(){for(var t=window,e=Gu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gu(t.document)}return e}function cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tk(t){var e=Nw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pw(n.ownerDocument.documentElement,n)){if(r!==null&&cm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Oy(n,s);var o=Oy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ik=ur&&"documentMode"in document&&11>=document.documentMode,_s=null,Pf=null,ca=null,Nf=!1;function by(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nf||_s==null||_s!==Gu(r)||(r=_s,"selectionStart"in r&&cm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&Oa(ca,r)||(ca=r,r=Zu(Pf,"onSelect"),0<r.length&&(e=new am("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function nu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:nu("Animation","AnimationEnd"),animationiteration:nu("Animation","AnimationIteration"),animationstart:nu("Animation","AnimationStart"),transitionend:nu("Transition","TransitionEnd")},Sd={},Dw={};ur&&(Dw=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Yc(t){if(Sd[t])return Sd[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dw)return Sd[t]=e[n];return t}var xw=Yc("animationend"),Ow=Yc("animationiteration"),bw=Yc("animationstart"),Lw=Yc("transitionend"),Mw=new Map,Ly="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ai(t,e){Mw.set(t,e),Ki(e,[t])}for(var Cd=0;Cd<Ly.length;Cd++){var Rd=Ly[Cd],Ak=Rd.toLowerCase(),Sk=Rd[0].toUpperCase()+Rd.slice(1);ai(Ak,"on"+Sk)}ai(xw,"onAnimationEnd");ai(Ow,"onAnimationIteration");ai(bw,"onAnimationStart");ai("dblclick","onDoubleClick");ai("focusin","onFocus");ai("focusout","onBlur");ai(Lw,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ck=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function My(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,A1(r,e,void 0,t),t.currentTarget=null}function Vw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;My(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;My(i,a,c),s=u}}}if(Ku)throw t=Sf,Ku=!1,Sf=null,t}function Te(t,e){var n=e[Lf];n===void 0&&(n=e[Lf]=new Set);var r=t+"__bubble";n.has(r)||(Fw(e,t,2,!1),n.add(r))}function kd(t,e,n){var r=0;e&&(r|=4),Fw(n,t,r,e)}var ru="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[ru]){t[ru]=!0,H0.forEach(function(n){n!=="selectionchange"&&(Ck.has(n)||kd(n,!1,t),kd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ru]||(e[ru]=!0,kd("selectionchange",!1,e))}}function Fw(t,e,n,r){switch(ww(e)){case 1:var i=B1;break;case 4:i=j1;break;default:i=sm}n=i.bind(null,e,n,t),i=void 0,!Af||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}aw(function(){var c=s,d=tm(n),f=[];e:{var m=Mw.get(t);if(m!==void 0){var v=am,T=t;switch(t){case"keypress":if(Cu(n)===0)break e;case"keydown":case"keyup":v=nk;break;case"focusin":T="focus",v=Td;break;case"focusout":T="blur",v=Td;break;case"beforeblur":case"afterblur":v=Td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ay;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sk;break;case xw:case Ow:case bw:v=$1;break;case Lw:v=ak;break;case"scroll":v=z1;break;case"wheel":v=uk;break;case"copy":case"cut":case"paste":v=Q1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Cy}var R=(e&4)!==0,S=!R&&t==="scroll",E=R?m!==null?m+"Capture":null:m;R=[];for(var _=c,w;_!==null;){w=_;var N=w.stateNode;if(w.tag===5&&N!==null&&(w=N,E!==null&&(N=ka(_,E),N!=null&&R.push(La(_,N,w)))),S)break;_=_.return}0<R.length&&(m=new v(m,T,null,n,d),f.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Tf&&(T=n.relatedTarget||n.fromElement)&&(wi(T)||T[cr]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(T=n.relatedTarget||n.toElement,v=c,T=T?wi(T):null,T!==null&&(S=Qi(T),T!==S||T.tag!==5&&T.tag!==6)&&(T=null)):(v=null,T=c),v!==T)){if(R=Ay,N="onMouseLeave",E="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(R=Cy,N="onPointerLeave",E="onPointerEnter",_="pointer"),S=v==null?m:vs(v),w=T==null?m:vs(T),m=new R(N,_+"leave",v,n,d),m.target=S,m.relatedTarget=w,N=null,wi(d)===c&&(R=new R(E,_+"enter",T,n,d),R.target=w,R.relatedTarget=S,N=R),S=N,v&&T)t:{for(R=v,E=T,_=0,w=R;w;w=as(w))_++;for(w=0,N=E;N;N=as(N))w++;for(;0<_-w;)R=as(R),_--;for(;0<w-_;)E=as(E),w--;for(;_--;){if(R===E||E!==null&&R===E.alternate)break t;R=as(R),E=as(E)}R=null}else R=null;v!==null&&Vy(f,m,v,R,!1),T!==null&&S!==null&&Vy(f,S,T,R,!0)}}e:{if(m=c?vs(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var L=gk;else if(Py(m))if(Rw)L=Ek;else{L=yk;var F=_k}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=vk);if(L&&(L=L(t,c))){Cw(f,L,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&_f(m,"number",m.value)}switch(F=c?vs(c):window,t){case"focusin":(Py(F)||F.contentEditable==="true")&&(_s=F,Pf=c,ca=null);break;case"focusout":ca=Pf=_s=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,by(f,n,d);break;case"selectionchange":if(Ik)break;case"keydown":case"keyup":by(f,n,d)}var A;if(um)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else gs?Aw(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Iw&&n.locale!=="ko"&&(gs||g!=="onCompositionStart"?g==="onCompositionEnd"&&gs&&(A=Tw()):(Mr=d,om="value"in Mr?Mr.value:Mr.textContent,gs=!0)),F=Zu(c,g),0<F.length&&(g=new Sy(g,t,null,n,d),f.push({event:g,listeners:F}),A?g.data=A:(A=Sw(n),A!==null&&(g.data=A)))),(A=hk?dk(t,n):fk(t,n))&&(c=Zu(c,"onBeforeInput"),0<c.length&&(d=new Sy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}Vw(f,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ka(t,n),s!=null&&r.unshift(La(t,s,i)),s=ka(t,e),s!=null&&r.push(La(t,s,i))),t=t.return}return r}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ka(n,s),u!=null&&o.unshift(La(n,u,a))):i||(u=ka(n,s),u!=null&&o.push(La(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Rk=/\r\n?/g,kk=/\u0000|\uFFFD/g;function Fy(t){return(typeof t=="string"?t:""+t).replace(Rk,`
`).replace(kk,"")}function iu(t,e,n){if(e=Fy(e),Fy(t)!==e&&n)throw Error(B(425))}function ec(){}var Df=null,xf=null;function Of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,Pk=typeof clearTimeout=="function"?clearTimeout:void 0,Uy=typeof Promise=="function"?Promise:void 0,Nk=typeof queueMicrotask=="function"?queueMicrotask:typeof Uy<"u"?function(t){return Uy.resolve(null).then(t).catch(Dk)}:bf;function Dk(t){setTimeout(function(){throw t})}function Nd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Da(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Da(e)}function qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function By(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),On="__reactFiber$"+ao,Ma="__reactProps$"+ao,cr="__reactContainer$"+ao,Lf="__reactEvents$"+ao,xk="__reactListeners$"+ao,Ok="__reactHandles$"+ao;function wi(t){var e=t[On];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cr]||n[On]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=By(t);t!==null;){if(n=t[On])return n;t=By(t)}return e}t=n,n=t.parentNode}return null}function ul(t){return t=t[On]||t[cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Xc(t){return t[Ma]||null}var Mf=[],Es=-1;function li(t){return{current:t}}function Ce(t){0>Es||(t.current=Mf[Es],Mf[Es]=null,Es--)}function Ee(t,e){Es++,Mf[Es]=t.current,t.current=e}var ti={},Rt=li(ti),qt=li(!1),xi=ti;function zs(t,e){var n=t.type.contextTypes;if(!n)return ti;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function tc(){Ce(qt),Ce(Rt)}function jy(t,e,n){if(Rt.current!==ti)throw Error(B(168));Ee(Rt,e),Ee(qt,n)}function Uw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,_1(t)||"Unknown",i));return Oe({},n,r)}function nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ti,xi=Rt.current,Ee(Rt,t),Ee(qt,qt.current),!0}function zy(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=Uw(t,e,xi),r.__reactInternalMemoizedMergedChildContext=t,Ce(qt),Ce(Rt),Ee(Rt,t)):Ce(qt),Ee(qt,n)}var Yn=null,Jc=!1,Dd=!1;function Bw(t){Yn===null?Yn=[t]:Yn.push(t)}function bk(t){Jc=!0,Bw(t)}function ui(){if(!Dd&&Yn!==null){Dd=!0;var t=0,e=me;try{var n=Yn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yn=null,Jc=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(t+1)),hw(nm,ui),i}finally{me=e,Dd=!1}}return null}var ws=[],Ts=0,rc=null,ic=0,on=[],an=0,Oi=null,Xn=1,Jn="";function _i(t,e){ws[Ts++]=ic,ws[Ts++]=rc,rc=t,ic=e}function jw(t,e,n){on[an++]=Xn,on[an++]=Jn,on[an++]=Oi,Oi=t;var r=Xn;t=Jn;var i=32-An(r)-1;r&=~(1<<i),n+=1;var s=32-An(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xn=1<<32-An(e)+i|n<<i|r,Jn=s+t}else Xn=1<<s|n<<i|r,Jn=t}function hm(t){t.return!==null&&(_i(t,1),jw(t,1,0))}function dm(t){for(;t===rc;)rc=ws[--Ts],ws[Ts]=null,ic=ws[--Ts],ws[Ts]=null;for(;t===Oi;)Oi=on[--an],on[an]=null,Jn=on[--an],on[an]=null,Xn=on[--an],on[an]=null}var en=null,Yt=null,Pe=!1,En=null;function zw(t,e){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,en=t,Yt=qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,en=t,Yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Oi!==null?{id:Xn,overflow:Jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,en=t,Yt=null,!0):!1;default:return!1}}function Vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ff(t){if(Pe){var e=Yt;if(e){var n=e;if(!Wy(t,e)){if(Vf(t))throw Error(B(418));e=qr(n.nextSibling);var r=en;e&&Wy(t,e)?zw(r,n):(t.flags=t.flags&-4097|2,Pe=!1,en=t)}}else{if(Vf(t))throw Error(B(418));t.flags=t.flags&-4097|2,Pe=!1,en=t}}}function qy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;en=t}function su(t){if(t!==en)return!1;if(!Pe)return qy(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Of(t.type,t.memoizedProps)),e&&(e=Yt)){if(Vf(t))throw Ww(),Error(B(418));for(;e;)zw(t,e),e=qr(e.nextSibling)}if(qy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Yt=qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Yt=null}}else Yt=en?qr(t.stateNode.nextSibling):null;return!0}function Ww(){for(var t=Yt;t;)t=qr(t.nextSibling)}function Ws(){Yt=en=null,Pe=!1}function fm(t){En===null?En=[t]:En.push(t)}var Lk=yr.ReactCurrentBatchConfig;function jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function ou(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hy(t){var e=t._init;return e(t._payload)}function qw(t){function e(E,_){if(t){var w=E.deletions;w===null?(E.deletions=[_],E.flags|=16):w.push(_)}}function n(E,_){if(!t)return null;for(;_!==null;)e(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=Kr(E,_),E.index=0,E.sibling=null,E}function s(E,_,w){return E.index=w,t?(w=E.alternate,w!==null?(w=w.index,w<_?(E.flags|=2,_):w):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,_,w,N){return _===null||_.tag!==6?(_=Fd(w,E.mode,N),_.return=E,_):(_=i(_,w),_.return=E,_)}function u(E,_,w,N){var L=w.type;return L===ms?d(E,_,w.props.children,N,w.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Rr&&Hy(L)===_.type)?(N=i(_,w.props),N.ref=jo(E,_,w),N.return=E,N):(N=Ou(w.type,w.key,w.props,null,E.mode,N),N.ref=jo(E,_,w),N.return=E,N)}function c(E,_,w,N){return _===null||_.tag!==4||_.stateNode.containerInfo!==w.containerInfo||_.stateNode.implementation!==w.implementation?(_=Ud(w,E.mode,N),_.return=E,_):(_=i(_,w.children||[]),_.return=E,_)}function d(E,_,w,N,L){return _===null||_.tag!==7?(_=Ri(w,E.mode,N,L),_.return=E,_):(_=i(_,w),_.return=E,_)}function f(E,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Fd(""+_,E.mode,w),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ql:return w=Ou(_.type,_.key,_.props,null,E.mode,w),w.ref=jo(E,null,_),w.return=E,w;case ps:return _=Ud(_,E.mode,w),_.return=E,_;case Rr:var N=_._init;return f(E,N(_._payload),w)}if(Xo(_)||Mo(_))return _=Ri(_,E.mode,w,null),_.return=E,_;ou(E,_)}return null}function m(E,_,w,N){var L=_!==null?_.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return L!==null?null:a(E,_,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ql:return w.key===L?u(E,_,w,N):null;case ps:return w.key===L?c(E,_,w,N):null;case Rr:return L=w._init,m(E,_,L(w._payload),N)}if(Xo(w)||Mo(w))return L!==null?null:d(E,_,w,N,null);ou(E,w)}return null}function v(E,_,w,N,L){if(typeof N=="string"&&N!==""||typeof N=="number")return E=E.get(w)||null,a(_,E,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ql:return E=E.get(N.key===null?w:N.key)||null,u(_,E,N,L);case ps:return E=E.get(N.key===null?w:N.key)||null,c(_,E,N,L);case Rr:var F=N._init;return v(E,_,w,F(N._payload),L)}if(Xo(N)||Mo(N))return E=E.get(w)||null,d(_,E,N,L,null);ou(_,N)}return null}function T(E,_,w,N){for(var L=null,F=null,A=_,g=_=0,I=null;A!==null&&g<w.length;g++){A.index>g?(I=A,A=null):I=A.sibling;var C=m(E,A,w[g],N);if(C===null){A===null&&(A=I);break}t&&A&&C.alternate===null&&e(E,A),_=s(C,_,g),F===null?L=C:F.sibling=C,F=C,A=I}if(g===w.length)return n(E,A),Pe&&_i(E,g),L;if(A===null){for(;g<w.length;g++)A=f(E,w[g],N),A!==null&&(_=s(A,_,g),F===null?L=A:F.sibling=A,F=A);return Pe&&_i(E,g),L}for(A=r(E,A);g<w.length;g++)I=v(A,E,g,w[g],N),I!==null&&(t&&I.alternate!==null&&A.delete(I.key===null?g:I.key),_=s(I,_,g),F===null?L=I:F.sibling=I,F=I);return t&&A.forEach(function(P){return e(E,P)}),Pe&&_i(E,g),L}function R(E,_,w,N){var L=Mo(w);if(typeof L!="function")throw Error(B(150));if(w=L.call(w),w==null)throw Error(B(151));for(var F=L=null,A=_,g=_=0,I=null,C=w.next();A!==null&&!C.done;g++,C=w.next()){A.index>g?(I=A,A=null):I=A.sibling;var P=m(E,A,C.value,N);if(P===null){A===null&&(A=I);break}t&&A&&P.alternate===null&&e(E,A),_=s(P,_,g),F===null?L=P:F.sibling=P,F=P,A=I}if(C.done)return n(E,A),Pe&&_i(E,g),L;if(A===null){for(;!C.done;g++,C=w.next())C=f(E,C.value,N),C!==null&&(_=s(C,_,g),F===null?L=C:F.sibling=C,F=C);return Pe&&_i(E,g),L}for(A=r(E,A);!C.done;g++,C=w.next())C=v(A,E,g,C.value,N),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?g:C.key),_=s(C,_,g),F===null?L=C:F.sibling=C,F=C);return t&&A.forEach(function(D){return e(E,D)}),Pe&&_i(E,g),L}function S(E,_,w,N){if(typeof w=="object"&&w!==null&&w.type===ms&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ql:e:{for(var L=w.key,F=_;F!==null;){if(F.key===L){if(L=w.type,L===ms){if(F.tag===7){n(E,F.sibling),_=i(F,w.props.children),_.return=E,E=_;break e}}else if(F.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Rr&&Hy(L)===F.type){n(E,F.sibling),_=i(F,w.props),_.ref=jo(E,F,w),_.return=E,E=_;break e}n(E,F);break}else e(E,F);F=F.sibling}w.type===ms?(_=Ri(w.props.children,E.mode,N,w.key),_.return=E,E=_):(N=Ou(w.type,w.key,w.props,null,E.mode,N),N.ref=jo(E,_,w),N.return=E,E=N)}return o(E);case ps:e:{for(F=w.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===w.containerInfo&&_.stateNode.implementation===w.implementation){n(E,_.sibling),_=i(_,w.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else e(E,_);_=_.sibling}_=Ud(w,E.mode,N),_.return=E,E=_}return o(E);case Rr:return F=w._init,S(E,_,F(w._payload),N)}if(Xo(w))return T(E,_,w,N);if(Mo(w))return R(E,_,w,N);ou(E,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,w),_.return=E,E=_):(n(E,_),_=Fd(w,E.mode,N),_.return=E,E=_),o(E)):n(E,_)}return S}var qs=qw(!0),Hw=qw(!1),sc=li(null),oc=null,Is=null,pm=null;function mm(){pm=Is=oc=null}function gm(t){var e=sc.current;Ce(sc),t._currentValue=e}function Uf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){oc=t,pm=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function fn(t){var e=t._currentValue;if(pm!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(oc===null)throw Error(B(308));Is=t,oc.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var Ti=null;function _m(t){Ti===null?Ti=[t]:Ti.push(t)}function Gw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_m(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function ym(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $w(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,_m(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function Ru(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rm(t,n)}}function Gy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ac(t,e,n,r){var i=t.updateQueue;kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,R=a;switch(m=e,v=n,R.tag){case 1:if(T=R.payload,typeof T=="function"){f=T.call(v,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=R.payload,m=typeof T=="function"?T.call(v,f,m):T,m==null)break e;f=Oe({},f,m);break e;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,u=f):d=d.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Li|=o,t.lanes=o,t.memoizedState=f}}function $y(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var cl={},Fn=li(cl),Va=li(cl),Fa=li(cl);function Ii(t){if(t===cl)throw Error(B(174));return t}function vm(t,e){switch(Ee(Fa,e),Ee(Va,t),Ee(Fn,cl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vf(e,t)}Ce(Fn),Ee(Fn,e)}function Hs(){Ce(Fn),Ce(Va),Ce(Fa)}function Kw(t){Ii(Fa.current);var e=Ii(Fn.current),n=vf(e,t.type);e!==n&&(Ee(Va,t),Ee(Fn,n))}function Em(t){Va.current===t&&(Ce(Fn),Ce(Va))}var De=li(0);function lc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xd=[];function wm(){for(var t=0;t<xd.length;t++)xd[t]._workInProgressVersionPrimary=null;xd.length=0}var ku=yr.ReactCurrentDispatcher,Od=yr.ReactCurrentBatchConfig,bi=0,xe=null,$e=null,et=null,uc=!1,ha=!1,Ua=0,Mk=0;function _t(){throw Error(B(321))}function Tm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function Im(t,e,n,r,i,s){if(bi=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ku.current=t===null||t.memoizedState===null?Bk:jk,t=n(r,i),ha){s=0;do{if(ha=!1,Ua=0,25<=s)throw Error(B(301));s+=1,et=$e=null,e.updateQueue=null,ku.current=zk,t=n(r,i)}while(ha)}if(ku.current=cc,e=$e!==null&&$e.next!==null,bi=0,et=$e=xe=null,uc=!1,e)throw Error(B(300));return t}function Am(){var t=Ua!==0;return Ua=0,t}function xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?xe.memoizedState=et=t:et=et.next=t,et}function pn(){if($e===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=et===null?xe.memoizedState:et.next;if(e!==null)et=e,$e=t;else{if(t===null)throw Error(B(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},et===null?xe.memoizedState=et=t:et=et.next=t}return et}function Ba(t,e){return typeof e=="function"?e(t):e}function bd(t){var e=pn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((bi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,xe.lanes|=d,Li|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Rn(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ld(t){var e=pn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Qw(){}function Yw(t,e){var n=xe,r=pn(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,Sm(Zw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,ja(9,Jw.bind(null,n,r,i,e),void 0,null),it===null)throw Error(B(349));bi&30||Xw(n,e,i)}return i}function Xw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jw(t,e,n,r){e.value=n,e.getSnapshot=r,eT(e)&&tT(t)}function Zw(t,e,n){return n(function(){eT(e)&&tT(t)})}function eT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function tT(t){var e=hr(t,1);e!==null&&Sn(e,t,1,-1)}function Ky(t){var e=xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=Uk.bind(null,xe,t),[e.memoizedState,t]}function ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nT(){return pn().memoizedState}function Pu(t,e,n,r){var i=xn();xe.flags|=t,i.memoizedState=ja(1|e,n,void 0,r===void 0?null:r)}function Zc(t,e,n,r){var i=pn();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&Tm(r,o.deps)){i.memoizedState=ja(e,n,s,r);return}}xe.flags|=t,i.memoizedState=ja(1|e,n,s,r)}function Qy(t,e){return Pu(8390656,8,t,e)}function Sm(t,e){return Zc(2048,8,t,e)}function rT(t,e){return Zc(4,2,t,e)}function iT(t,e){return Zc(4,4,t,e)}function sT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function oT(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4,4,sT.bind(null,e,t),n)}function Cm(){}function aT(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lT(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function uT(t,e,n){return bi&21?(Rn(n,e)||(n=pw(),xe.lanes|=n,Li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function Vk(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Od.transition;Od.transition={};try{t(!1),e()}finally{me=n,Od.transition=r}}function cT(){return pn().memoizedState}function Fk(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hT(t))dT(e,n);else if(n=Gw(t,e,n,r),n!==null){var i=Lt();Sn(n,t,r,i),fT(n,e,r)}}function Uk(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hT(t))dT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var u=e.interleaved;u===null?(i.next=i,_m(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Gw(t,e,i,r),n!==null&&(i=Lt(),Sn(n,t,r,i),fT(n,e,r))}}function hT(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function dT(t,e){ha=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rm(t,n)}}var cc={readContext:fn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},Bk={readContext:fn,useCallback:function(t,e){return xn().memoizedState=[t,e===void 0?null:e],t},useContext:fn,useEffect:Qy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pu(4194308,4,sT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pu(4,2,t,e)},useMemo:function(t,e){var n=xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Fk.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=xn();return t={current:t},e.memoizedState=t},useState:Ky,useDebugValue:Cm,useDeferredValue:function(t){return xn().memoizedState=t},useTransition:function(){var t=Ky(!1),e=t[0];return t=Vk.bind(null,t[1]),xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=xn();if(Pe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),it===null)throw Error(B(349));bi&30||Xw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qy(Zw.bind(null,r,s,t),[t]),r.flags|=2048,ja(9,Jw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xn(),e=it.identifierPrefix;if(Pe){var n=Jn,r=Xn;n=(r&~(1<<32-An(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Mk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jk={readContext:fn,useCallback:aT,useContext:fn,useEffect:Sm,useImperativeHandle:oT,useInsertionEffect:rT,useLayoutEffect:iT,useMemo:lT,useReducer:bd,useRef:nT,useState:function(){return bd(Ba)},useDebugValue:Cm,useDeferredValue:function(t){var e=pn();return uT(e,$e.memoizedState,t)},useTransition:function(){var t=bd(Ba)[0],e=pn().memoizedState;return[t,e]},useMutableSource:Qw,useSyncExternalStore:Yw,useId:cT,unstable_isNewReconciler:!1},zk={readContext:fn,useCallback:aT,useContext:fn,useEffect:Sm,useImperativeHandle:oT,useInsertionEffect:rT,useLayoutEffect:iT,useMemo:lT,useReducer:Ld,useRef:nT,useState:function(){return Ld(Ba)},useDebugValue:Cm,useDeferredValue:function(t){var e=pn();return $e===null?e.memoizedState=t:uT(e,$e.memoizedState,t)},useTransition:function(){var t=Ld(Ba)[0],e=pn().memoizedState;return[t,e]},useMutableSource:Qw,useSyncExternalStore:Yw,useId:cT,unstable_isNewReconciler:!1};function yn(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var eh={isMounted:function(t){return(t=t._reactInternals)?Qi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=$r(t),s=rr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(Sn(e,t,i,r),Ru(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=$r(t),s=rr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(Sn(e,t,i,r),Ru(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=$r(t),i=rr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hr(t,i,r),e!==null&&(Sn(e,t,r,n),Ru(e,t,r))}};function Yy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oa(n,r)||!Oa(i,s):!0}function pT(t,e,n){var r=!1,i=ti,s=e.contextType;return typeof s=="object"&&s!==null?s=fn(s):(i=Ht(e)?xi:Rt.current,r=e.contextTypes,s=(r=r!=null)?zs(t,i):ti),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=eh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&eh.enqueueReplaceState(e,e.state,null)}function jf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ym(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=fn(s):(s=Ht(e)?xi:Rt.current,i.context=zs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&eh.enqueueReplaceState(i,i.state,null),ac(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",r=e;do n+=g1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Md(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Wk=typeof WeakMap=="function"?WeakMap:Map;function mT(t,e,n){n=rr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){dc||(dc=!0,Jf=r),zf(t,e)},n}function gT(t,e,n){n=rr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zf(t,e),typeof r!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Wk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=rP.bind(null,t,e,n),e.then(t,t))}function Zy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ev(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rr(-1,1),e.tag=2,Hr(n,e,1))),n.lanes|=1),t)}var qk=yr.ReactCurrentOwner,zt=!1;function Ot(t,e,n,r){e.child=t===null?Hw(e,null,n,r):qs(e,t.child,n,r)}function tv(t,e,n,r,i){n=n.render;var s=e.ref;return Os(e,i),r=Im(t,e,n,r,s,i),n=Am(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Pe&&n&&hm(e),e.flags|=1,Ot(t,e,r,i),e.child)}function nv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_T(t,e,s,r,i)):(t=Ou(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(o,r)&&t.ref===e.ref)return dr(t,e,i)}return e.flags|=1,t=Kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function _T(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oa(s,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,dr(t,e,i)}return Wf(t,e,n,r,i)}function yT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Ss,Kt),Kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(Ss,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(Ss,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(Ss,Kt),Kt|=r;return Ot(t,e,i,n),e.child}function vT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wf(t,e,n,r,i){var s=Ht(n)?xi:Rt.current;return s=zs(e,s),Os(e,i),n=Im(t,e,n,r,s,i),r=Am(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Pe&&r&&hm(e),e.flags|=1,Ot(t,e,n,i),e.child)}function rv(t,e,n,r,i){if(Ht(n)){var s=!0;nc(e)}else s=!1;if(Os(e,i),e.stateNode===null)Nu(t,e),pT(e,n,r),jf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=fn(c):(c=Ht(n)?xi:Rt.current,c=zs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Xy(e,o,r,c),kr=!1;var m=e.memoizedState;o.state=m,ac(e,r,o,i),u=e.memoizedState,a!==r||m!==u||qt.current||kr?(typeof d=="function"&&(Bf(e,n,d,r),u=e.memoizedState),(a=kr||Yy(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$w(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:yn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=fn(u):(u=Ht(n)?xi:Rt.current,u=zs(e,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Xy(e,o,r,u),kr=!1,m=e.memoizedState,o.state=m,ac(e,r,o,i);var T=e.memoizedState;a!==f||m!==T||qt.current||kr?(typeof v=="function"&&(Bf(e,n,v,r),T=e.memoizedState),(c=kr||Yy(e,n,c,r,m,T,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return qf(t,e,n,r,s,i)}function qf(t,e,n,r,i,s){vT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zy(e,n,!1),dr(t,e,s);r=e.stateNode,qk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):Ot(t,e,a,s),e.memoizedState=r.state,i&&zy(e,n,!0),e.child}function ET(t){var e=t.stateNode;e.pendingContext?jy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jy(t,e.context,!1),vm(t,e.containerInfo)}function iv(t,e,n,r,i){return Ws(),fm(i),e.flags|=256,Ot(t,e,n,r),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Gf(t){return{baseLanes:t,cachePool:null,transitions:null}}function wT(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(De,i&1),t===null)return Ff(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rh(o,r,0,null),t=Ri(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gf(n),e.memoizedState=Hf,t):Rm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Hk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Kr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Kr(a,s):(s=Ri(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Gf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hf,r}return s=t.child,t=s.sibling,r=Kr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rm(t,e){return e=rh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function au(t,e,n,r){return r!==null&&fm(r),qs(e,t.child,null,n),t=Rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Hk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Md(Error(B(422))),au(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rh({mode:"visible",children:r.children},i,0,null),s=Ri(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=Gf(o),e.memoizedState=Hf,s);if(!(e.mode&1))return au(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Md(s,r,void 0),au(t,e,o,r)}if(a=(o&t.childLanes)!==0,zt||a){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hr(t,i),Sn(r,t,i,-1))}return Om(),r=Md(Error(B(421))),au(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=iP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Yt=qr(i.nextSibling),en=e,Pe=!0,En=null,t!==null&&(on[an++]=Xn,on[an++]=Jn,on[an++]=Oi,Xn=t.id,Jn=t.overflow,Oi=e),e=Rm(e,r.children),e.flags|=4096,e)}function sv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uf(t.return,e,n)}function Vd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function TT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ot(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sv(t,n,e);else if(t.tag===19)sv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&lc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&lc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vd(e,!0,n,null,s);break;case"together":Vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Gk(t,e,n){switch(e.tag){case 3:ET(e),Ws();break;case 5:Kw(e);break;case 1:Ht(e.type)&&nc(e);break;case 4:vm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(sc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?wT(t,e,n):(Ee(De,De.current&1),t=dr(t,e,n),t!==null?t.sibling:null);Ee(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return TT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,yT(t,e,n)}return dr(t,e,n)}var IT,$f,AT,ST;IT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};AT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ii(Fn.current);var s=null;switch(n){case"input":i=mf(t,i),r=mf(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=yf(t,i),r=yf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ec)}Ef(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Te("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ST=function(t,e,n,r){n!==r&&(e.flags|=4)};function zo(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $k(t,e,n){var r=e.pendingProps;switch(dm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Ht(e.type)&&tc(),yt(e),null;case 3:return r=e.stateNode,Hs(),Ce(qt),Ce(Rt),wm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(su(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,En!==null&&(tp(En),En=null))),$f(t,e),yt(e),null;case 5:Em(e);var i=Ii(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)AT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return yt(e),null}if(t=Ii(Fn.current),su(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[On]=e,r[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<Zo.length;i++)Te(Zo[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":py(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":gy(r,s),Te("invalid",r)}Ef(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&iu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&iu(r.textContent,a,t),i=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Yl(r),my(r,s,!0);break;case"textarea":Yl(r),_y(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ec)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Z0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[On]=e,t[Ma]=r,IT(t,e,!1,!1),e.stateNode=t;e:{switch(o=wf(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Zo.length;i++)Te(Zo[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":py(t,r),i=mf(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Te("invalid",t);break;case"textarea":gy(t,r),i=yf(t,r),Te("invalid",t);break;default:i=r}Ef(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?nw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ew(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ra(t,u):typeof u=="number"&&Ra(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Te("scroll",t):u!=null&&Xp(t,s,u,o))}switch(n){case"input":Yl(t),my(t,r,!1);break;case"textarea":Yl(t),_y(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ei(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ec)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)ST(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Ii(Fa.current),Ii(Fn.current),su(e)){if(r=e.stateNode,n=e.memoizedProps,r[On]=e,(s=r.nodeValue!==n)&&(t=en,t!==null))switch(t.tag){case 3:iu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&iu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return yt(e),null;case 13:if(Ce(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&Yt!==null&&e.mode&1&&!(e.flags&128))Ww(),Ws(),e.flags|=98560,s=!1;else if(s=su(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[On]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else En!==null&&(tp(En),En=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Qe===0&&(Qe=3):Om())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Hs(),$f(t,e),t===null&&ba(e.stateNode.containerInfo),yt(e),null;case 10:return gm(e.type._context),yt(e),null;case 17:return Ht(e.type)&&tc(),yt(e),null;case 19:if(Ce(De),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zo(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lc(t),o!==null){for(e.flags|=128,zo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&Be()>$s&&(e.flags|=128,r=!0,zo(s,!1),e.lanes=4194304)}else{if(!r)if(t=lc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pe)return yt(e),null}else 2*Be()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,r=!0,zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,n=De.current,Ee(De,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return xm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function Kk(t,e){switch(dm(e),e.tag){case 1:return Ht(e.type)&&tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),Ce(qt),Ce(Rt),wm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Em(e),null;case 13:if(Ce(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(De),null;case 4:return Hs(),null;case 10:return gm(e.type._context),null;case 22:case 23:return xm(),null;case 24:return null;default:return null}}var lu=!1,wt=!1,Qk=typeof WeakSet=="function"?WeakSet:Set,q=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function Kf(t,e,n){try{n()}catch(r){Me(t,e,r)}}var ov=!1;function Yk(t,e){if(Df=Xu,t=Nw(),cm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xf={focusedElem:t,selectionRange:n},Xu=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var R=T.memoizedProps,S=T.memoizedState,E=e.stateNode,_=E.getSnapshotBeforeUpdate(e.elementType===e.type?R:yn(e.type,R),S);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(N){Me(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return T=ov,ov=!1,T}function da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kf(e,n,s)}i=i.next}while(i!==r)}}function th(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function CT(t){var e=t.alternate;e!==null&&(t.alternate=null,CT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[Ma],delete e[Lf],delete e[xk],delete e[Ok])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function RT(t){return t.tag===5||t.tag===3||t.tag===4}function av(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||RT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ec));else if(r!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}function Xf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}var at=null,vn=!1;function Sr(t,e,n){for(n=n.child;n!==null;)kT(t,e,n),n=n.sibling}function kT(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount($c,n)}catch{}switch(n.tag){case 5:wt||As(n,e);case 6:var r=at,i=vn;at=null,Sr(t,e,n),at=r,vn=i,at!==null&&(vn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(vn?(t=at,n=n.stateNode,t.nodeType===8?Nd(t.parentNode,n):t.nodeType===1&&Nd(t,n),Da(t)):Nd(at,n.stateNode));break;case 4:r=at,i=vn,at=n.stateNode.containerInfo,vn=!0,Sr(t,e,n),at=r,vn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kf(n,e,o),i=i.next}while(i!==r)}Sr(t,e,n);break;case 1:if(!wt&&(As(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Me(n,e,a)}Sr(t,e,n);break;case 21:Sr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,Sr(t,e,n),wt=r):Sr(t,e,n);break;default:Sr(t,e,n)}}function lv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Qk),e.forEach(function(r){var i=sP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _n(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,vn=!1;break e;case 3:at=a.stateNode.containerInfo,vn=!0;break e;case 4:at=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(at===null)throw Error(B(160));kT(s,o,i),at=null,vn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Me(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)PT(e,t),e=e.sibling}function PT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_n(e,t),Dn(t),r&4){try{da(3,t,t.return),th(3,t)}catch(R){Me(t,t.return,R)}try{da(5,t,t.return)}catch(R){Me(t,t.return,R)}}break;case 1:_n(e,t),Dn(t),r&512&&n!==null&&As(n,n.return);break;case 5:if(_n(e,t),Dn(t),r&512&&n!==null&&As(n,n.return),t.flags&32){var i=t.stateNode;try{Ra(i,"")}catch(R){Me(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&X0(i,s),wf(a,o);var c=wf(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?nw(i,f):d==="dangerouslySetInnerHTML"?ew(i,f):d==="children"?Ra(i,f):Xp(i,d,f,c)}switch(a){case"input":gf(i,s);break;case"textarea":J0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ps(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ps(i,!!s.multiple,s.defaultValue,!0):Ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ma]=s}catch(R){Me(t,t.return,R)}}break;case 6:if(_n(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Me(t,t.return,R)}}break;case 3:if(_n(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Da(e.containerInfo)}catch(R){Me(t,t.return,R)}break;case 4:_n(e,t),Dn(t);break;case 13:_n(e,t),Dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nm=Be())),r&4&&lv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(c=wt)||d,_n(e,t),wt=c):_n(e,t),Dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(f=q=d;q!==null;){switch(m=q,v=m.child,m.tag){case 0:case 11:case 14:case 15:da(4,m,m.return);break;case 1:As(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(R){Me(r,n,R)}}break;case 5:As(m,m.return);break;case 22:if(m.memoizedState!==null){cv(f);continue}}v!==null?(v.return=m,q=v):cv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=tw("display",o))}catch(R){Me(t,t.return,R)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(R){Me(t,t.return,R)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:_n(e,t),Dn(t),r&4&&lv(t);break;case 21:break;default:_n(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(RT(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ra(i,""),r.flags&=-33);var s=av(t);Xf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=av(t);Yf(t,a,o);break;default:throw Error(B(161))}}catch(u){Me(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Xk(t,e,n){q=t,NT(t)}function NT(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||lu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||wt;a=lu;var c=wt;if(lu=o,(wt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?hv(i):u!==null?(u.return=o,q=u):hv(i);for(;s!==null;)q=s,NT(s),s=s.sibling;q=i,lu=a,wt=c}uv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):uv(t)}}function uv(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||th(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$y(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$y(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}wt||e.flags&512&&Qf(e)}catch(m){Me(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function cv(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function hv(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{th(4,e)}catch(u){Me(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Me(e,i,u)}}var s=e.return;try{Qf(e)}catch(u){Me(e,s,u)}break;case 5:var o=e.return;try{Qf(e)}catch(u){Me(e,o,u)}}}catch(u){Me(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var Jk=Math.ceil,hc=yr.ReactCurrentDispatcher,km=yr.ReactCurrentOwner,cn=yr.ReactCurrentBatchConfig,ce=0,it=null,We=null,ct=0,Kt=0,Ss=li(0),Qe=0,za=null,Li=0,nh=0,Pm=0,fa=null,Bt=null,Nm=0,$s=1/0,Qn=null,dc=!1,Jf=null,Gr=null,uu=!1,Vr=null,fc=0,pa=0,Zf=null,Du=-1,xu=0;function Lt(){return ce&6?Be():Du!==-1?Du:Du=Be()}function $r(t){return t.mode&1?ce&2&&ct!==0?ct&-ct:Lk.transition!==null?(xu===0&&(xu=pw()),xu):(t=me,t!==0||(t=window.event,t=t===void 0?16:ww(t.type)),t):1}function Sn(t,e,n,r){if(50<pa)throw pa=0,Zf=null,Error(B(185));al(t,n,r),(!(ce&2)||t!==it)&&(t===it&&(!(ce&2)&&(nh|=n),Qe===4&&Nr(t,ct)),Gt(t,r),n===1&&ce===0&&!(e.mode&1)&&($s=Be()+500,Jc&&ui()))}function Gt(t,e){var n=t.callbackNode;L1(t,e);var r=Yu(t,t===it?ct:0);if(r===0)n!==null&&Ey(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ey(n),e===1)t.tag===0?bk(dv.bind(null,t)):Bw(dv.bind(null,t)),Nk(function(){!(ce&6)&&ui()}),n=null;else{switch(mw(r)){case 1:n=nm;break;case 4:n=dw;break;case 16:n=Qu;break;case 536870912:n=fw;break;default:n=Qu}n=FT(n,DT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function DT(t,e){if(Du=-1,xu=0,ce&6)throw Error(B(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var r=Yu(t,t===it?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pc(t,r);else{e=r;var i=ce;ce|=2;var s=OT();(it!==t||ct!==e)&&(Qn=null,$s=Be()+500,Ci(t,e));do try{tP();break}catch(a){xT(t,a)}while(!0);mm(),hc.current=s,ce=i,We!==null?e=0:(it=null,ct=0,e=Qe)}if(e!==0){if(e===2&&(i=Cf(t),i!==0&&(r=i,e=ep(t,i))),e===1)throw n=za,Ci(t,0),Nr(t,r),Gt(t,Be()),n;if(e===6)Nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Zk(i)&&(e=pc(t,r),e===2&&(s=Cf(t),s!==0&&(r=s,e=ep(t,s))),e===1))throw n=za,Ci(t,0),Nr(t,r),Gt(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:yi(t,Bt,Qn);break;case 3:if(Nr(t,r),(r&130023424)===r&&(e=Nm+500-Be(),10<e)){if(Yu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bf(yi.bind(null,t,Bt,Qn),e);break}yi(t,Bt,Qn);break;case 4:if(Nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-An(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jk(r/1960))-r,10<r){t.timeoutHandle=bf(yi.bind(null,t,Bt,Qn),r);break}yi(t,Bt,Qn);break;case 5:yi(t,Bt,Qn);break;default:throw Error(B(329))}}}return Gt(t,Be()),t.callbackNode===n?DT.bind(null,t):null}function ep(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(Ci(t,e).flags|=256),t=pc(t,e),t!==2&&(e=Bt,Bt=n,e!==null&&tp(e)),t}function tp(t){Bt===null?Bt=t:Bt.push.apply(Bt,t)}function Zk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(t,e){for(e&=~Pm,e&=~nh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-An(e),r=1<<n;t[n]=-1,e&=~r}}function dv(t){if(ce&6)throw Error(B(327));bs();var e=Yu(t,0);if(!(e&1))return Gt(t,Be()),null;var n=pc(t,e);if(t.tag!==0&&n===2){var r=Cf(t);r!==0&&(e=r,n=ep(t,r))}if(n===1)throw n=za,Ci(t,0),Nr(t,e),Gt(t,Be()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yi(t,Bt,Qn),Gt(t,Be()),null}function Dm(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&($s=Be()+500,Jc&&ui())}}function Mi(t){Vr!==null&&Vr.tag===0&&!(ce&6)&&bs();var e=ce;ce|=1;var n=cn.transition,r=me;try{if(cn.transition=null,me=1,t)return t()}finally{me=r,cn.transition=n,ce=e,!(ce&6)&&ui()}}function xm(){Kt=Ss.current,Ce(Ss)}function Ci(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Pk(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(dm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tc();break;case 3:Hs(),Ce(qt),Ce(Rt),wm();break;case 5:Em(r);break;case 4:Hs();break;case 13:Ce(De);break;case 19:Ce(De);break;case 10:gm(r.type._context);break;case 22:case 23:xm()}n=n.return}if(it=t,We=t=Kr(t.current,null),ct=Kt=e,Qe=0,za=null,Pm=nh=Li=0,Bt=fa=null,Ti!==null){for(e=0;e<Ti.length;e++)if(n=Ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ti=null}return t}function xT(t,e){do{var n=We;try{if(mm(),ku.current=cc,uc){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uc=!1}if(bi=0,et=$e=xe=null,ha=!1,Ua=0,km.current=null,n===null||n.return===null){Qe=1,za=e,We=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=ct,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Zy(o);if(v!==null){v.flags&=-257,ev(v,o,a,s,e),v.mode&1&&Jy(s,c,e),e=v,u=c;var T=e.updateQueue;if(T===null){var R=new Set;R.add(u),e.updateQueue=R}else T.add(u);break e}else{if(!(e&1)){Jy(s,c,e),Om();break e}u=Error(B(426))}}else if(Pe&&a.mode&1){var S=Zy(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ev(S,o,a,s,e),fm(Gs(u,a));break e}}s=u=Gs(u,a),Qe!==4&&(Qe=2),fa===null?fa=[s]:fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=mT(s,u,e);Gy(s,E);break e;case 1:a=u;var _=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Gr===null||!Gr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=gT(s,a,e);Gy(s,N);break e}}s=s.return}while(s!==null)}LT(n)}catch(L){e=L,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function OT(){var t=hc.current;return hc.current=cc,t===null?cc:t}function Om(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),it===null||!(Li&268435455)&&!(nh&268435455)||Nr(it,ct)}function pc(t,e){var n=ce;ce|=2;var r=OT();(it!==t||ct!==e)&&(Qn=null,Ci(t,e));do try{eP();break}catch(i){xT(t,i)}while(!0);if(mm(),ce=n,hc.current=r,We!==null)throw Error(B(261));return it=null,ct=0,Qe}function eP(){for(;We!==null;)bT(We)}function tP(){for(;We!==null&&!C1();)bT(We)}function bT(t){var e=VT(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?LT(t):We=e,km.current=null}function LT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kk(n,e),n!==null){n.flags&=32767,We=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,We=null;return}}else if(n=$k(n,e,Kt),n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Qe===0&&(Qe=5)}function yi(t,e,n){var r=me,i=cn.transition;try{cn.transition=null,me=1,nP(t,e,n,r)}finally{cn.transition=i,me=r}return null}function nP(t,e,n,r){do bs();while(Vr!==null);if(ce&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M1(t,s),t===it&&(We=it=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uu||(uu=!0,FT(Qu,function(){return bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=cn.transition,cn.transition=null;var o=me;me=1;var a=ce;ce|=4,km.current=null,Yk(t,n),PT(n,t),Tk(xf),Xu=!!Df,xf=Df=null,t.current=n,Xk(n),R1(),ce=a,me=o,cn.transition=s}else t.current=n;if(uu&&(uu=!1,Vr=t,fc=i),s=t.pendingLanes,s===0&&(Gr=null),N1(n.stateNode),Gt(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(dc)throw dc=!1,t=Jf,Jf=null,t;return fc&1&&t.tag!==0&&bs(),s=t.pendingLanes,s&1?t===Zf?pa++:(pa=0,Zf=t):pa=0,ui(),null}function bs(){if(Vr!==null){var t=mw(fc),e=cn.transition,n=me;try{if(cn.transition=null,me=16>t?16:t,Vr===null)var r=!1;else{if(t=Vr,Vr=null,fc=0,ce&6)throw Error(B(331));var i=ce;for(ce|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:da(8,d,s)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var m=d.sibling,v=d.return;if(CT(d),d===c){q=null;break}if(m!==null){m.return=v,q=m;break}q=v}}}var T=s.alternate;if(T!==null){var R=T.child;if(R!==null){T.child=null;do{var S=R.sibling;R.sibling=null,R=S}while(R!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,q=E;break e}q=s.return}}var _=t.current;for(q=_;q!==null;){o=q;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,q=w;else e:for(o=_;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:th(9,a)}}catch(L){Me(a,a.return,L)}if(a===o){q=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,q=N;break e}q=a.return}}if(ce=i,ui(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot($c,t)}catch{}r=!0}return r}finally{me=n,cn.transition=e}}return!1}function fv(t,e,n){e=Gs(n,e),e=mT(t,e,1),t=Hr(t,e,1),e=Lt(),t!==null&&(al(t,1,e),Gt(t,e))}function Me(t,e,n){if(t.tag===3)fv(t,t,n);else for(;e!==null;){if(e.tag===3){fv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gr===null||!Gr.has(r))){t=Gs(n,t),t=gT(e,t,1),e=Hr(e,t,1),t=Lt(),e!==null&&(al(e,1,t),Gt(e,t));break}}e=e.return}}function rP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(ct&n)===n&&(Qe===4||Qe===3&&(ct&130023424)===ct&&500>Be()-Nm?Ci(t,0):Pm|=n),Gt(t,e)}function MT(t,e){e===0&&(t.mode&1?(e=Zl,Zl<<=1,!(Zl&130023424)&&(Zl=4194304)):e=1);var n=Lt();t=hr(t,e),t!==null&&(al(t,e,n),Gt(t,n))}function iP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),MT(t,n)}function sP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),MT(t,n)}var VT;VT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,Gk(t,e,n);zt=!!(t.flags&131072)}else zt=!1,Pe&&e.flags&1048576&&jw(e,ic,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nu(t,e),t=e.pendingProps;var i=zs(e,Rt.current);Os(e,n),i=Im(null,e,r,t,i,n);var s=Am();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(s=!0,nc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ym(e),i.updater=eh,e.stateNode=i,i._reactInternals=e,jf(e,r,t,n),e=qf(null,e,r,!0,s,n)):(e.tag=0,Pe&&s&&hm(e),Ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=aP(r),t=yn(r,t),i){case 0:e=Wf(null,e,r,t,n);break e;case 1:e=rv(null,e,r,t,n);break e;case 11:e=tv(null,e,r,t,n);break e;case 14:e=nv(null,e,r,yn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Wf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),rv(t,e,r,i,n);case 3:e:{if(ET(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$w(t,e),ac(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gs(Error(B(423)),e),e=iv(t,e,r,n,i);break e}else if(r!==i){i=Gs(Error(B(424)),e),e=iv(t,e,r,n,i);break e}else for(Yt=qr(e.stateNode.containerInfo.firstChild),en=e,Pe=!0,En=null,n=Hw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),r===i){e=dr(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return Kw(e),t===null&&Ff(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Of(r,i)?o=null:s!==null&&Of(r,s)&&(e.flags|=32),vT(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&Ff(e),null;case 13:return wT(t,e,n);case 4:return vm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qs(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),tv(t,e,r,i,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(sc,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!qt.current){e=dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=rr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Uf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Uf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Os(e,n),i=fn(i),r=r(i),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,i=yn(r,e.pendingProps),i=yn(r.type,i),nv(t,e,r,i,n);case 15:return _T(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Nu(t,e),e.tag=1,Ht(r)?(t=!0,nc(e)):t=!1,Os(e,n),pT(e,r,i),jf(e,r,i,n),qf(null,e,r,!0,t,n);case 19:return TT(t,e,n);case 22:return yT(t,e,n)}throw Error(B(156,e.tag))};function FT(t,e){return hw(t,e)}function oP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new oP(t,e,n,r)}function bm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aP(t){if(typeof t=="function")return bm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zp)return 11;if(t===em)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ou(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Ri(n.children,i,s,e);case Jp:o=8,i|=8;break;case hf:return t=ln(12,n,e,i|2),t.elementType=hf,t.lanes=s,t;case df:return t=ln(13,n,e,i),t.elementType=df,t.lanes=s,t;case ff:return t=ln(19,n,e,i),t.elementType=ff,t.lanes=s,t;case K0:return rh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G0:o=10;break e;case $0:o=9;break e;case Zp:o=11;break e;case em:o=14;break e;case Rr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ri(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function rh(t,e,n,r){return t=ln(22,t,r,e),t.elementType=K0,t.lanes=n,t.stateNode={isHidden:!1},t}function Fd(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function Ud(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vd(0),this.expirationTimes=vd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lm(t,e,n,r,i,s,o,a,u){return t=new lP(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ym(s),t}function uP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function UT(t){if(!t)return ti;t=t._reactInternals;e:{if(Qi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Ht(n))return Uw(t,n,e)}return e}function BT(t,e,n,r,i,s,o,a,u){return t=Lm(n,r,!0,t,i,s,o,a,u),t.context=UT(null),n=t.current,r=Lt(),i=$r(n),s=rr(r,i),s.callback=e??null,Hr(n,s,i),t.current.lanes=i,al(t,i,r),Gt(t,r),t}function ih(t,e,n,r){var i=e.current,s=Lt(),o=$r(i);return n=UT(n),e.context===null?e.context=n:e.pendingContext=n,e=rr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hr(i,e,o),t!==null&&(Sn(t,i,o,s),Ru(t,i,o)),o}function mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mm(t,e){pv(t,e),(t=t.alternate)&&pv(t,e)}function cP(){return null}var jT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vm(t){this._internalRoot=t}sh.prototype.render=Vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));ih(t,e,null,null)};sh.prototype.unmount=Vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mi(function(){ih(null,t,null,null)}),e[cr]=null}};function sh(t){this._internalRoot=t}sh.prototype.unstable_scheduleHydration=function(t){if(t){var e=yw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pr.length&&e!==0&&e<Pr[n].priority;n++);Pr.splice(n,0,t),n===0&&Ew(t)}};function Fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mv(){}function hP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=mc(o);s.call(c)}}var o=BT(e,r,t,0,null,!1,!1,"",mv);return t._reactRootContainer=o,t[cr]=o.current,ba(t.nodeType===8?t.parentNode:t),Mi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=mc(u);a.call(c)}}var u=Lm(t,0,!1,null,null,!1,!1,"",mv);return t._reactRootContainer=u,t[cr]=u.current,ba(t.nodeType===8?t.parentNode:t),Mi(function(){ih(e,u,n,r)}),u}function ah(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=mc(o);a.call(u)}}ih(e,o,t,i)}else o=hP(n,e,t,i,r);return mc(o)}gw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jo(e.pendingLanes);n!==0&&(rm(e,n|1),Gt(e,Be()),!(ce&6)&&($s=Be()+500,ui()))}break;case 13:Mi(function(){var r=hr(t,1);if(r!==null){var i=Lt();Sn(r,t,1,i)}}),Mm(t,1)}};im=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=Lt();Sn(e,t,134217728,n)}Mm(t,134217728)}};_w=function(t){if(t.tag===13){var e=$r(t),n=hr(t,e);if(n!==null){var r=Lt();Sn(n,t,e,r)}Mm(t,e)}};yw=function(){return me};vw=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};If=function(t,e,n){switch(e){case"input":if(gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xc(r);if(!i)throw Error(B(90));Y0(r),gf(r,i)}}}break;case"textarea":J0(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};sw=Dm;ow=Mi;var dP={usingClientEntryPoint:!1,Events:[ul,vs,Xc,rw,iw,Dm]},Wo={findFiberByHostInstance:wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fP={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uw(t),t===null?null:t.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||cP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{$c=cu.inject(fP),Vn=cu}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dP;rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fm(e))throw Error(B(200));return uP(t,e,null,n)};rn.createRoot=function(t,e){if(!Fm(t))throw Error(B(299));var n=!1,r="",i=jT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lm(t,1,!1,null,null,n,!1,r,i),t[cr]=e.current,ba(t.nodeType===8?t.parentNode:t),new Vm(e)};rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=uw(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t){return Mi(t)};rn.hydrate=function(t,e,n){if(!oh(e))throw Error(B(200));return ah(null,t,e,!0,n)};rn.hydrateRoot=function(t,e,n){if(!Fm(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=jT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=BT(e,null,t,1,n??null,i,!1,s,o),t[cr]=e.current,ba(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sh(e)};rn.render=function(t,e,n){if(!oh(e))throw Error(B(200));return ah(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!oh(t))throw Error(B(40));return t._reactRootContainer?(Mi(function(){ah(null,null,t,!1,function(){t._reactRootContainer=null,t[cr]=null})}),!0):!1};rn.unstable_batchedUpdates=Dm;rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return ah(t,e,n,!1,r)};rn.version="18.3.1-next-f1338f8080-20240426";function zT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zT)}catch(t){console.error(t)}}zT(),z0.exports=rn;var pP=z0.exports,WT,gv=pP;WT=gv.createRoot,gv.hydrateRoot;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wa(){return Wa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wa.apply(this,arguments)}var Fr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fr||(Fr={}));const _v="popstate";function mP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return np("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:HT(i)}return _P(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gP(){return Math.random().toString(36).substr(2,8)}function yv(t,e){return{usr:t.state,key:t.key,idx:e}}function np(t,e,n,r){return n===void 0&&(n=null),Wa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?lo(e):e,{state:n,key:e&&e.key||r||gP()})}function HT(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function lo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function _P(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Fr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Wa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Fr.Pop;let S=d(),E=S==null?null:S-c;c=S,u&&u({action:a,location:R.location,delta:E})}function m(S,E){a=Fr.Push;let _=np(R.location,S,E);c=d()+1;let w=yv(_,c),N=R.createHref(_);try{o.pushState(w,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(N)}s&&u&&u({action:a,location:R.location,delta:1})}function v(S,E){a=Fr.Replace;let _=np(R.location,S,E);c=d();let w=yv(_,c),N=R.createHref(_);o.replaceState(w,"",N),s&&u&&u({action:a,location:R.location,delta:0})}function T(S){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof S=="string"?S:HT(S);return _=_.replace(/ $/,"%20"),Ye(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let R={get action(){return a},get location(){return t(i,o)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(_v,f),u=S,()=>{i.removeEventListener(_v,f),u=null}},createHref(S){return e(i,S)},createURL:T,encodeLocation(S){let E=T(S);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:v,go(S){return o.go(S)}};return R}var vv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vv||(vv={}));function yP(t,e,n){return n===void 0&&(n="/"),vP(t,e,n,!1)}function vP(t,e,n,r){let i=typeof e=="string"?lo(e):e,s=KT(i.pathname||"/",n);if(s==null)return null;let o=GT(t);EP(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=DP(s);a=PP(o[u],c,r)}return a}function GT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ye(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ki([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),GT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:RP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of $T(s.path))i(s,o,u)}),e}function $T(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$T(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function EP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:kP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wP=/^:[\w-]+$/,TP=3,IP=2,AP=1,SP=10,CP=-2,Ev=t=>t==="*";function RP(t,e){let n=t.split("/"),r=n.length;return n.some(Ev)&&(r+=CP),e&&(r+=IP),n.filter(i=>!Ev(i)).reduce((i,s)=>i+(wP.test(s)?TP:s===""?AP:SP),r)}function kP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function PP(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=wv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=wv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:ki([s,f.pathname]),pathnameBase:VP(ki([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=ki([s,f.pathnameBase]))}return o}function wv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=NP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:v}=d;if(m==="*"){let R=a[f]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const T=a[f];return v&&!T?c[m]=void 0:c[m]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function NP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function DP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function KT(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function xP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?lo(t):t;return{pathname:n?n.startsWith("/")?n:OP(n,e):e,search:FP(r),hash:UP(i)}}function OP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function LP(t,e){let n=bP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function MP(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=lo(t):(i=Wa({},t),Ye(!i.pathname||!i.pathname.includes("?"),Bd("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),Bd("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),Bd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=xP(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const ki=t=>t.join("/").replace(/\/\/+/g,"/"),VP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),FP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,UP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function BP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const QT=["post","put","patch","delete"];new Set(QT);const jP=["get",...QT];new Set(jP);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qa.apply(this,arguments)}const Um=b.createContext(null),zP=b.createContext(null),lh=b.createContext(null),uh=b.createContext(null),uo=b.createContext({outlet:null,matches:[],isDataRoute:!1}),YT=b.createContext(null);function ch(){return b.useContext(uh)!=null}function XT(){return ch()||Ye(!1),b.useContext(uh).location}function JT(t){b.useContext(lh).static||b.useLayoutEffect(t)}function hh(){let{isDataRoute:t}=b.useContext(uo);return t?tN():WP()}function WP(){ch()||Ye(!1);let t=b.useContext(Um),{basename:e,future:n,navigator:r}=b.useContext(lh),{matches:i}=b.useContext(uo),{pathname:s}=XT(),o=JSON.stringify(LP(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return JT(()=>{a.current=!0}),b.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=MP(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ki([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}function qP(t,e){return HP(t,e)}function HP(t,e,n,r){ch()||Ye(!1);let{navigator:i}=b.useContext(lh),{matches:s}=b.useContext(uo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=XT(),d;if(e){var f;let S=typeof e=="string"?lo(e):e;u==="/"||(f=S.pathname)!=null&&f.startsWith(u)||Ye(!1),d=S}else d=c;let m=d.pathname||"/",v=m;if(u!=="/"){let S=u.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(S.length).join("/")}let T=yP(t,{pathname:v}),R=YP(T&&T.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:ki([u,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:ki([u,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&R?b.createElement(uh.Provider,{value:{location:qa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Fr.Pop}},R):R}function GP(){let t=eN(),e=BP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const $P=b.createElement(GP,null);class KP extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(uo.Provider,{value:this.props.routeContext},b.createElement(YT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QP(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(Um);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(uo.Provider,{value:e},r)}function YP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ye(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:v}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let v,T=!1,R=null,S=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,R=f.route.errorElement||$P,u&&(c<0&&m===0?(T=!0,S=null):c===m&&(T=!0,S=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),_=()=>{let w;return v?w=R:T?w=S:f.route.Component?w=b.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=d,b.createElement(QP,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:w})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?b.createElement(KP,{location:n.location,revalidation:n.revalidation,component:R,error:v,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var ZT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ZT||{}),gc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(gc||{});function XP(t){let e=b.useContext(Um);return e||Ye(!1),e}function JP(t){let e=b.useContext(zP);return e||Ye(!1),e}function ZP(t){let e=b.useContext(uo);return e||Ye(!1),e}function eI(t){let e=ZP(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function eN(){var t;let e=b.useContext(YT),n=JP(gc.UseRouteError),r=eI(gc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function tN(){let{router:t}=XP(ZT.UseNavigateStable),e=eI(gc.UseNavigateStable),n=b.useRef(!1);return JT(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,qa({fromRouteId:e},s)))},[t,e])}function bu(t){Ye(!1)}function nN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Fr.Pop,navigator:s,static:o=!1,future:a}=t;ch()&&Ye(!1);let u=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:s,static:o,future:qa({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=lo(r));let{pathname:d="/",search:f="",hash:m="",state:v=null,key:T="default"}=r,R=b.useMemo(()=>{let S=KT(d,u);return S==null?null:{location:{pathname:S,search:f,hash:m,state:v,key:T},navigationType:i}},[u,d,f,m,v,T,i]);return R==null?null:b.createElement(lh.Provider,{value:c},b.createElement(uh.Provider,{children:n,value:R}))}function rN(t){let{children:e,location:n}=t;return qP(rp(e),n)}new Promise(()=>{});function rp(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,rp(r.props.children,s));return}r.type!==bu&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const iN="6";try{window.__reactRouterVersion=iN}catch{}const sN="startTransition",Tv=r1[sN];function oN(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=mP({window:i,v5Compat:!0}));let o=s.current,[a,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=b.useCallback(f=>{c&&Tv?Tv(()=>u(f)):u(f)},[u,c]);return b.useLayoutEffect(()=>o.listen(d),[o,d]),b.createElement(nN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Iv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Iv||(Iv={}));var Av;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Av||(Av={}));const aN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdTSURBVHgB7Z3dTtRaFMcXdaKi0YhRExMT6o0X3ihXiMak8wTqExzmCTznCZQ30CcQn0B9AiYhQOACOCEhgQRSEi5IIHwGGAgfrn/Ze1LKdPq1d3eZmV/SdGiGYfpnde2111rd7aKCMDExYZ+dnTn80rYsqxd7bOfn5w+6uroe+N/Lx7b52Da/dLE/PT39n/ezfNx99+7dLBWALjIEhGRBPt64ceMDC/I6KF5ahOiz/Nl/+LN/DwwMuGSAXIWdmZl5UKvVPvPLQbqwyDxwWeTveYuci7Cjo6NOqVT6wi8dMkuVLfr727dvf5NmtApbIEGDuOzPh9gfD5MmtAhbYEGDuCcnJ5X3799XSTFKhYUPPTw8/MGDx0e6XgzzNqTSBysTdnx8HGL+UDW6G0Cpe8gsLKz06OjoCw8K/1ILwOfxrbu7e6ivr2+bMpBJWMSivBuh/EKnvHB5K2dxDRalZGxs7DX/d2eo9UQFNm8jOEdKSSphJycn/2FfOnKN/WkcbJ5UjOBcKQWJXQH+EDv5YWojOHcx2N/f/zPJ7yQSth1FlSQVN7aw8DdtcPmHIrJo5bjZs1jCtvDonwiIywN2X5xoIXLwQpxKHVE9kBvm3YjQpCmRwiL4p46ofmyetn+JelNTV8B+dZCd9g/qcAW23k/N0o+hwnb8anPgb2/duvU8bOrbzBV0XEAT4G/ZTYZezQ0tlq3VoQtr7RAB53PLjfK5pZD3G/WrnCSnR48e0d27d+n+/fvEU0vvGOAToePjYwyqtLm5Sbu7u95rg98VV3Y1ePyKxZocsCBeb28v9fT01IWMw/r6Oq2urhoTuJHVXvn2LGpkKKEDWOaLFy8SCSp5/Pix9/srKyueFedNI6u9NHiJKoBNOfPw4UN6+fJlKlElPEJ7/xgIbAAHdT7/gUvCcgjxmXIGguDyV0Vaq8+KsNo6dWFF3OpQzjx79swTVxXSTxvA8U9168JyXJZ7ZRWCwj+qJungp4qDg4N63a8urAk3oMsfQlSImzc88NerDZ6wwg3YlDOIU3VhaBCzp6enPT/kCWvCDYA7d+6QLlT67STUarVP2HvCshv4QC0GZmsmkFpKi01d5s2CKavSCQvraWlNTU29NlXH0jkF5foUmQBZL/hZi+e5NhmiFYUFXGEoW6bcANjf3ydd7OzskEFsi538KzLE1tYW6ULnZ0eBm1MsUXk0AlwB8qmqwZVgMkdLsFgyXH5BHlU1a2trZBjbqMUCWKxKq4WlIvFtEkRZVhFahpaWlrySS1bwGfPz82QaGGvq/liVwMqWl5cpK/gMw761TiGEBSipLC4uphJGWqqJskwY+SctmwBhMKLbth077Qf/DFdSFEuVlMS9p4VpzYRACwsLXtpPFgmDOQVYKOJUDFI6wrWsoEumJO6iLlzPqz9aQOL65s2b3mtMVYtmnUFgrHAFLhW8lQgWqiJqyBEXcewKdVAKa7oDYV3qoBTWdFa6gkKBwQp+FfuwSoD0s9gXzediIYoSZ2KqZBAUFO/du1dvgEtbVeDSsycw0oV7e3taU5JRwAt4TXHj4+NbeYZcKCI+efLE6yjUVf+XmbO8m+UQZb1586anJH7ALTYOaQaCIvjPozQtm0Gw5dmNCP+KfUn88IfFdUgjaCXCZgIpMMTVkab0Ay2xl+VvbWuk4FJHJ6EpUf3gO2TtaoxCaukJK24Ic0kDBlsrGyL7cDXhypvr/NmtRDfhxgEWUiRRJfhOOq4grJAkX9eFrdVq30ghGDyKcPmHobp9FPhdal3YcrmMZEyVFFFkUSVPnz4lhVT999gGE91DpAidnYSqUNnq6XcD4JKwrHiVFFmtTPO1CW7w9s9GpRklVjs3N1fovCmmwEioK+KKZmF3JuKuRIcUIIPzokQHmOai70BhfQwh1vPgwbBIGf8BhxSA6SQ2jMAQF34N/jevFk6ZM0BSZmNjQ3nCHEv4NToeevc3J2Z+6VxKD7Mf5A4gsH8Dcu+/1TMIBJIdhdhzuFgv22CDkLg1VHPlYZittaGwoXM7/nIVPkFHV9YLJ1zEQmACXGoyHoX2FYi4tkIdwmi6yGTThg2EEMH4rMNFzMqiDjd7T5w1Yb5SAcs3BnG7u7u/Rr0pUljhEsqolVMHl7dynJU6Y/VuwZewsG0tLs797OzsU9wVOmM3xWGFNI4Q/qM2Beee5BkLiReN5FnZIBle2sQAlajBKkjiNk7xByrt4BbEOSYWFaRe8RiLSFqW9YtadAkpiIpxJe0jVjpLSTfGJVNLSQP8YZ6j97XSJALncvv27b6BjEv3Z15VXiIGtWu7uhwufU76VPr7+5W0Aih9wARcA3/BrxyapFrX2hT8nX/zbKqSdYl+P0qFlYgl/BCS2VRsqnSRTKmSYrQIKymwe6iSJkElWoWVYKE0sZiPQ2apkmZBJbkIKxE+WIpsUz64vP3kkf6bSh8aRa7C+vGJrOXRfqKDsj0e7dcM8TgAW4j8Sggd+TBKuniqEW5QcdGdbkrIIH8BDAGBkF/hM9YAAAAASUVORK5CYII=",lN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASdSURBVHgB3ZvBa9RAFMZfrYqwFVuQ9qAiFVER9eBB9GBBBLGX3v0jPXuqFL1URBFaxHpQtBWxB1u0C7IFcX5Nxk7fziSZbHaTzQePbSazs/PlvXnvzct0QvyYNTJvZM5IR4aDrpE1I58lHieMLEgyT40dI7tGNo180zcn1DXk7gYGGgZ6Rp5KPFDG3QL9eKjL6ecBjjk3Z4wsyujIgn0ph5MF+6HAx0ambcOkc+ORJKYyKkD2nSTmF4vfRk4bOVOgLxwvGvnKb1qTXpL+tbotyRrbkfKaqAPW/1xS7fBZhv15I5fVzXUjq5LY/l8ZLzBn66zmnHYUug3h65KsX4tPRt7K+AONou0ptxGnNa06lgkTTcW6up6D8Ixq3Jb2QDvEzjFpN3q64bgMDkLZTCr8jUfHszfSUgYhDLlrRq6KP35DfEuS0NaVhqAsYbR5X7LzbB4C8RBP+ULKJRiVo8wahuxDKb6p6KT9p6UBiCXM5NGsNmHMl/i9ln5qEyb3XZDRpq5exJr0TenX7IYkRHX6eSPtb8H3rqV9a0Oshs+rawI7WZkv1+behmq7IjVrOYYwzsedrN3AZwHS7sPAtGekRsQQ1hP9kf+Vg8C/mTPOSBFDWJti0djazRlnpIghrNdp0bA0lTPOSBFDeEdd48CKaGs2Z5yRIoYwmZJ2QLdyvkNoci2BNV1rjg1hl0TWumSyH1QbYeampy+av+25tyU1g8TjjSQTQ2N5YeajJLUiV2tokZwZze2l9y6I38mtS82YkHjYXDrG22JF1IfrWL9P3IsymwcmfaS4nQNbDK/VWVlMSjn8kWQ9ouWpwDho9b0cVj/rwhE/UsakfSD06IrHsOrZ7nsv0JPD3Rp+RD/cIyZdRYlH0h8adriBKO+TdMLTce5Dlqpr0PlWRXjY0FvNEDpyGPtXfR2aTpglcs/IOYnDfPrZR7rJhG1pyJezs14xXUyY/IHykS5OzPsGrcppVQ00imZ9yQta8/mLrAf0H2XD0jDBGrwj/XPD669IuPppy8JsaoLvj6vQ8Gz6I+6Lq710YjZUFEHWeqVUVPQFX6amByFc9HhE37GDwFihSUJ0Q+Ln5h2vrEnbAYuUazAv3k7wcH3aRqMPjJxS7Tyg51JuhxU0byaBKbED6qWd8rKjQs4hgG76Gzvp98mWQidxXsrgKSm/seQ2EJYwS1t+PTgWkDOAj6x7PAKged+xA753VbIRs17z0PfAIOzWmrPWY4gse1ydym074iveh1BmvUahaOIRQ9YFyQGkCTWXMvrRB7JD30IWIVyWrAVm9UoSQqzZ6XQsfAahq4jfqAx5hAcl68J6zlrrWlkVjyrJNgYhwq0kC3yEW0sW+Ai3liwIadhFa8iCvDJtq8iCLMKtIwtChFtJFkBYJ9j2kEoboPcGuxDWRxdqPZJQMXT+/pMCwL66gZcObdbHCWxY9FZ0HcKYtD5Iba970qBzkgVAMeOsJHt8rV14vLY1LbS6KA04KTckYMXPjHQnnYbvkvz3RxNLt4PAvpv+xYVLjlegXySnrjtmwA+tSEoWhMq0kKaaaA9+jxNYq0QeW205gn8V7PTp/QnotgAAAABJRU5ErkJggg==",uN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcDSURBVHgB7VvNb9xEFH8z9kYVpMGoCQKltA6UzQohdXvrjc2ttKFduHFquPXW9AScsrnBqclf0OQfoAlqSuFS9wS3urd8VIqDElEgFW4TKWmy9vCe90Njx95sdu0la/hJ++HZsdfz/N6bN7/3hkHC0PWivp/ZK3CunBcgdCGEDgw0BkyX++FvFr7ZjDH6fOI4jikywny2+MCCBMEgAZw+N1pgCrvmglsMDvSowPMtV7gGc9ns+tN7BsSM2ASg6QWtt6f3Jl5xnA4hAXjCcJ1JR3GNuDSjbQF0YuAhsNFkZhzmTLcriLYE8E72k6LClDvQeOA2vkx8PRHMNYGDmXF7bGtxzpI76bmiXoayzlzQBIMCNp3HVwEa3nxFIzZW7s9Ai2hLAO8Of7pKji3kJxq0gVef3t7dNm3LsKEFkHad7OktuFwUmWDXo/qRIPbZ/kgr2tCWAE4Pj/4N/qdvVwc91eqgo/B27pKuAC+AYBMRjpXMYnJjaWEKjgAF2sDJgXN/4EeekRwZfLf9avuLP5/+/GDXtnYhZmxvPrW3NlfMrecr030DWUaah/8rC/8EHl/qO5WFl8+XHzV73USmwU6gohFKKcw0MNaY2Vhe+LKZ63StAGoYHL4yjk9+AgKOGIVgohAuHHZ+1wuA4GmDUB4eiC6b0IS2fMBxAfmH1wfen0cBFGW/gGF1/mT/Bxr6jZ+izk2FAAiRQgB2EYXwAoXwa9h5qTABGRHmYJdZ+UJYnMAhZfAGqYjPoBKM1aCpQr0T1v+ACVB4q/Xnfnmjf/iGdipnv3i+9AS6DFt/rTxDtX9FcYHUrIeZgs8ESH0yIvNQCm/t9aV7b0KXAiPVu/hRlJpsDNaG5CjVZwKqq16XY3v8Hms467u57OgEhdL0wrn8NiQAtPtbEDAFXLmOy33qAqCnj9PGmPwjHs9CAsBF1G3UvRJUghdih8ZRICWIGZ4/EDDta2RwkxZZtcO6AGihEXj61vrivRIkALz22IFGvDFIAOqeSoujSC2oC4ALZcJ3pismIQWwrDk7TAtqXz0BEIcXXNcT7QRJIXhDFSRiboQwLTidGy3QF08AQhW+FRXF0EmysevLnmlNV2+KOIRJnG3GISF4WkAEjQynMjuo9MaFZ//135DNnYeEUR1wYoM+ACRqcIj1KZFxdo3+n5P3D6r/zt6OASmDuqsSL1k3Axrz0NDnZ3nGVfOBvkbcdNZxQNUMTLltT90d4aj4fgG40HWh7xHgGxsDnlfx/bzciFy7AR3AmezV6y5zpzAIspHWKv22/ENis0ANRMszIQW/XOgcjUGXOylc6Yj6CyZK+KGRLZIgoBNw/CaA2n+W4434uLTMq55V6AACjrcjGSWMbXwPlwPXeJBHW139fg1SimBsQw8hdYTIUfG/AOA/Du5VZkig6AhSCop65WNKqnKcg32eEaOjrqXADoNaVnX5GNc8NkcxWIF+eUgpGPdPt0iIrpEPWPM38tQKoFp4ITeY3KvakMH9oXHK4A/7wTG5AweYn7xMGqYFul6kMRXkNsGFySk6CswEWu+J3tSZgdNTLsjHNGYauxcH4HTgZ4BEMgztvwmXi2u+BlGhyCqBEIO5QP9CmszAy3mIQM6DV3IengCQ/zfgkAxKN8MrrpJQzXkY9J1LrQ0zKN2MRjmPugAOy6B0KygHGeAebDnnURdAVAYlGD93E8LynYhZmRfwZ4dDtEAVaiKZW/BT1BYkAAWUiWC+EzPGU/4+8h3Zi7shhQW5RjU2rUIusuSMf/Nyc9mEGHFm+CpN5V/7Gl1x6/flHw25KbRGCHP2D8EfNdnCdUc2Vu7HepNJgVQfNfcxSFwjPf2NpYWhYN9QQgTVhGrrfKbAuXK3G/xBrcoFAjXMSPePhPUPFUA1PPalx8mW6MLHWQghJT4eaCxRyd7IOkGy+b7+LJEjF6VmDR1L8bWB9+apLg+OEaIGT5lnVP1vo847tE5wMHdlJliQ3E59fhIY/PBynjvK3QNPnonZjcWFsUbnNlUoicHEY+wZXCG2VJ8fN8jbI7VVgqSLpcM0ofpHMw53JjutDVVPTzFKMfhbM0++hqZrhbc2V+ZoowIESAUqSCa/0Hcqqx1lo0KroPVJ/1sffYVprRkI5y+nUStvQJM4cq1wVH1+5WLxb2uroYndaS2ZZEvF0lH1+TLINFzHnd9xdox2Nk31qshOKR5BU4DoJKpBsUvHN00N5i6PNdjEJMPAPma5XH6kMMVGft7CxZcld6husaUB5qvbbEm96dVwS167jrjtcvmqMyK1JAfZKf4gtt1pse0XaGJbWxyIfVteMpunc17hJZoHfNyuMGgR45G2yFvWaKw4kfiOES9EddW8V4xF9UgCdKpKCds+7+UpK6m6NUrYZKDHCG6xjRv/AF0bOBSDHmXQAAAAAElFTkSuQmCC",cN="/assets/logo_icon-Bug9MN-U.png",hN="/assets/logo_big-Cp0kVrXR.png",dN="/assets/logo-9xkPj2hX.png",fN="/assets/pic1-Cav6XP8G.png",pN="/assets/pic2-CxFhh4uq.png",mN="/assets/pic3-LJNB-Dr0.png",gN="/assets/pic4-BREKihcV.png",_N="/assets/profile_richard-Bfd_-P-Z.png",yN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJjSURBVHgB1ZiBcdswDEUhT6BOUG7QbBBt0G4QbVBvYI+QDdxO0Gwge4K2E1Ab2BsgQMRcFAikSEnkJe8OpxNNgl8gRMGsYAGI2NDljuzeXWtnzI2sd3Yhe6qqqodSkLia7EB2xXT+krWQk5UCJTaLYHJ655xvTUdmYAvI0c/ARBzdE0fHPUw9Gscr0JDtnSAflsfCGnBYap/A41hYhC9D9ivgb5nYQCQfUwR6BHebiHXONEctbIRbEYlNCgLqL866PIoX+yd28EEZvIdMuFSSNHODtCV/hMzgNGe7uQF7nOaMgfxCm6So4jQ3WygE52ZUVJWn4rd88Ta0QGjU/DuyRrRdqNq5QSForjMMldYrLHKy07DQb6LtCcpzEfeqUCPa/kF55JwyeKrQHsrTi3sjO7DQd4lbMj9HzM65g08CC333NLQ1fIXyzG6HLLQXbV+gPEbc/5cddkpjA+W5F/e97MBC5dbwHcrTiPvpFumpnEp+Qlsxt9X67dzhwFm0Z6tDFR7E/dnbUynzroXKvFZZTRMaUOP0gKGDjLiUs2LOU8xA7ekOkAmc1qHhaIrBXQmxOBxeSI4pDrTl2EysS7FO8W+XOOMjGu1AzOKKFwyHSt6in4clTn1imRPO/a2dCuwwDq/YKjCBoQu/+cbTpYdhz+NP8PhLUrsxXPz+AH/BwWO0w42W9vbfkAKGD7jWcHT+W0yM7JxgdmhxPR2KI6LNxTqnnG+pEeZc5+ObBsKBCIqtYCFuYjYutM3op5uzl9x1f4dj/LV00b5M6TmbG8yRBrnwiL3CRwQja9QPAb7tNC8n3s9GsmlLVaiiEgAAAABJRU5ErkJggg==",vN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAduSURBVHgB7Z0/bBtVHMe/73wJKajFI1vciU60naALShYkBmgyMCC1ohmKVImqZUMopU6JEBIDiYrE0KFBGRgYmtKNpRFLCwuBBTYuGxsuiNRpknu87ztfcrbPvj/23T3/+Sx2nXNP99Hvfu/3/tyzgCFMVWXl4AAzQqACgWkB9SpRkUBZvS8Hj1Wf1dRnNXWcAxc1KfCret2SLpy9z8QWDECgIBoi5yzgvBJzplVeWrR0gS3Xxf3SHjbqnwsHBZCr2PJ1Wd45gWvqpJfAiMwHx5VYzVtyLmLtRTlTEripzjaDIhHYlAdYfbYsNpAxmYo1Rmg7jOKlvU/FGjIiE7EGC23FOXCxsL8sNtFn+ipW59DjuKsajzkMEFJizdrDUj9zcN/ETi7KOVhKap9a9wLoa3roWSyj9OmL6raXuI4hQMldeeFfLNVWRA090JPYqY9kRU7iIfIrnfLCEc8w20tqsJCSiY/lGXcSv2D4pBIdMLxGpCSV2KlP5HvCxsMBzqdxqFjqGnmtSEHiVMATqW7jGkYI9hTrt8Q3Cb8Tn1GU6pNUbmyxzDcjcPt3o+buYzbu6FkssUPc+ielpqqFs3GqhcjGi3XqWOoh2gWdRB0YKVYX/2OpQSr/HddOutI1FUzckJcsgbsY04aarZjvNvzYUew4r0ZSO/YPTnbq+nZMBe7EOAVEUH56vPPdHBqxU2o8VVo6WsdEoMZzZ8PGc0MjVkkd59WYlErhDVmbWDZYGKeA+EjMcMak9eM2sZaILiXGNBMWtU1i9SzAOFqTExK1TWJFCdcwhLx1Cni9gkxpjdpDsaxbaR5DQnkK+OA14OcrwLaqNH90gIuph61joNwFu7r24ecTgzWz2gkt9Jwnlbyh6pvf/gIWZ5Xgv5EpOyf0vF+V7w/Fqop2oNNAUCjfM0rf+fZIKqP15S+RKapTwNmGauP9Yff1TwwgrUIJpTJS+UqpizPev5kOskZMolJfFNs6YgcxDYQJJWFSKTQPqUTuYl69rHipwMJ5rn8cBDoJJUGpX7wJXG3k2eU8O+d06YuVUq9PNZrpsifqwtl2oSQo9c78UQXw4I/8olWjXPJFvKDmsvZtvT7ASCiUt/PFs52PYQNFqbV6s1TCBmu7pzUtyWGetfcsVEyMVhb0zJFRhX03qetb+UslB7uYtVVOyLJsTkxcoeR7dZu/f897z47AKy81/z3X3BqAz1HYQuI0DAjZJELJukpelze8fPvDQrvUoqJVIzDNiC0XWREkFUqipJKiopXwiR+bj/ygANIIJRS2vOk1at+9Gy610GglyqndeI4qN9IKJUGpjNTpcufjCqZs57VkiK01hU6nPFtcqYVHq0fZRoYwB15QQq+eSy+UxJXqH2sCmYlldIZ1O5OSRKoh0apJvaI7CrbcD35HT1y+F18qMSVaicVnT5EBjByWRJSTJor4PUZgEqmmRKuiZomMxPpQDvvrcaOJXVN2Ufk9llI/XYmWSqHrsVat5kbN0o+m5wBvaQpe7zLc40vlaBSlMlLj5Gj+nwZFK3sIjqWGDLeRE93Sgy+VgypJpBoYrewgPGHj5SBnWtMD5bz6tSf17VPxpZLbjwyLVug9E7ZsFbGOKGgQhunBjzbK4Zjrnbn43+d3vnoM83CV2FIJm9JFYfjRxkhNIpWYVF4FkbbKsfWqcGTGlUEcmGOTYGRu9ajtVcWW7iBwDxUUTNKZVFOjFQ2XXs/LxX0YQFxZBkfroUsvYkvYgAEwYtdjTGsaG604cqnFMs+igLIrDFYK3fKt0dGqHDZcHg3CqIor9nOiWaJLqEed/25ytKoCdtV/eyi2bmEFhnD7cXjUGh6tTSn1aNiwKril3SYM4Ek9PGqNjlblzk8DpHlF9wGWYAiM2mBX1fRo5UZpwX83ia3zeSWDojYYoZfvwWSc1sc/22YQTIpaRqjfcch1YVtChGx3Fjr88txN+dCU5xH8aXKDxTq7t8TJ1g9DJxMZtdIyQ6zJkUq4hV/Y56GTicy1UpjRGzMZ5Wit076IHWdpnwksmDDqZTCOmjDs2B51nv5mXdshzMd4DVawbm2l67qCRgmxijHNuFitR2wuGblgY9fSzy05GOPjHLO9Z7m6Eb0SRqUEYWF2nG81Dl3UqtE7dcZaYqSnb0ZcLq/dtTDfLa8Gib12S8/jSHyIEYXXTgdxj0++aeQNeUmO2JZRqgJYqCfcCTnxakOegCcahbSgf6wihVSSeqnGRFWesVxwzKmCIYRS2a4kuf2D9LaVdFVWpDukW0krqXEbqjB6WnjME6s6lw9jDk8nQhX/x9Q19SKV9G3VVqNRu4kBjV7e+rbqwu/06edS+rZUXjdqXq1rxGxvEjiS97yFkzt9/A2aTNYZNrbwY0lWgclIbOrBFNN/EqUVY9NDhkJ9clkZy43S9J5eRU/35CDUJ9clx7o8O8BcY8ekCvLB4SqfKQsrcQZP+kVBa7kDki2cb2ydUkYfaPSWWNTf58qUXsumtBQmthX25MS+imJuTCFwWouO8WOUkmPFEttc8s/V6UWJbOV/J4waAuvSu7cAAAAASUVORK5CYII=",EN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJElEQVR4nO2aS0sVYRjHRwzTtmGBlzblLi/RouJ4apFF9QUCo2UoXhd+h26ifhItEEzzCxgGrhKsNqbVNrMg8cAvHnxfeHw7ozPvvEenOn+Yzcw8t/M+9zlRVEUVVRw5gBNAG3AduGOuInBBnkV5BVADdAPjwFtgh3jIs2XgOVAQ2jwYcAoYAT7ijw/AMNBwXCfwEPh6gIK7wDqwaq51cy8OX4AHR2nEGWChjCIlYA4YBC4CdWVo64B2YAiYNzQu5oDGShtx2fxyGtvG35s8+DWZuBIeGptAV6WMuAF8dwROA80BeLcAMw7vLcl0YbTffxLaiF/Ao6BC9uT0ORlvK9jJAGcddxI3uBmEeXl5PY6rbWaOGZOdFpyTqJgRFsAt52TmoiwwKVYjuDsdILvfkd2bpdjpOjEdXNvDdXih5H8G6n2YjDhxkTk7eejQCvxQegz6xIZuO555KjJmei+5xjx5TCg93qfqzUwDaLHrU+wMnynFZypDjSkpPtfSEEu1tXjlo0AoQwRO5nwSJYVxBT+/rIwhw4rPmzRDkc7h7TkwpNOpZbVJiNqc+KjLgSEnnTg5n4RIRlKLjYSCRoGnZS6ZBC2WY94ZTShjU/HqTkJwTxG8SyhkBX+sJJSxqmju/leGFP8C1yqkDfZSToK93ifY/430K3BcYig6fkNGFJ+lNISyTLCYz4Ehi4rP4zSEBSdOmnPUNF5J28bLBtBi/Bjb+Emlx1rWRk0Gq5boiAGcA34qPQZ8mDQ425OZimh7sA4vlfwNr1HXMOplP/qCaxsve8CRfT8Lsxqzi7WQ+tITVOPycm87tWw2BNNGpz3YrqQx7O209ILuE3A6FPMus77UJ9MfhPmf7rSj5HwDOkILKTrGYPZOrYGykw5sa8Thc4enwEuOm2H2ThM+RdMUu0knxVp3CnsSMTGjE4CFVN/Xpi/qkPE0ZmTtNO8sxnzomQ0WEylSs6wx41Ayud9+etuIUdxCnvun2IzG1JvPaLIB9MWaCXK/YhcasgGU5ZnsnQ75PC3zxJJ0scDVKM8AamWKM6tX+4eBgrmXbCiqoooqopD4DZWgAQzdjA4yAAAAAElFTkSuQmCC",wN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8ElEQVR4nO3dzWoUQRRA4ZFAtiZZJVka9QV8AX/ACApZ5R1EyS4afAPXYdC3EMW1P4+j7nUVOVJM1hm7u5p7uTkf9K4aqjj0DF0zdC8WkiRJkiRJkroDbgCPgFfA2ZrjFHjYzjHFDIAd4DvDfQO2jdI/yGfG+2iQvjHuMt1to/QLctQhyJFB+gU57hDk2CAGqQmvkFwwSC4YJBcMkgsGyQWD5AIcdrgPeRy9jjKALeDPhBi/gZvR6yiF1Zb6WKfR8y8JeAH8GBCijX0ePe/SgA3gFnBvzdHGbETPV5IkSZIkSdcXsA88u/zR6qqjjdmPnm9ZwCbwDvg7YLf3Ali2c6PnXw7wnvGW0fOv+DF1MSFIO3cveh1lsPo+mOpp9DrKwH+d5IJBcsEguWCQXDBILhgkFwySCwbJBW8MS26d7EavoxRWu7ZjnUfPv+r2+3LgldLGnrv9Pm+YvQE/UPkxJUmSJEmSpOgHBxz8x4MD2hgfHDBzjBPg14Dd3p/Ay1kndV0BbxjvdfT8SwG2Jz6eqZ27Fb2OMoAnTHcYvY4y8F8nuWCQXDBILhgkFwySCwbJBYPkgkFywVce5QLc6XCnfhC9jlKATxNifIief9UNxq8jYnzxxZLzvnr1QdtOB96uOdqY+756VZIkSZIkSVrM4h8rzbcQzwZwVgAAAABJRU5ErkJggg==",TN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABCCAYAAAACPxW5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAAH7SURBVGhD7dq/SsNQFMfxJnYQHBxKUereIV2d3ARxc+sTCILgQ/QpdBKfIEgnH8HZoQ0FZ0cn8c9QuN5fORERmya5f865cL9LuJcM+ZBwh0M6sVgsFoutb4uuIppMJulgMOjNZrMP2jIupauEkvl8fr1cLh/H4/EB7RmX0JW7RKNukiS5pPWzUuo4z/MXWrdOAvAvrswKkhu4DldmjOQEbsKVGSFZTlGclv1+/1bjLmirqp6+7yzLsvuiKN5or3Ycp+jqtNQPfU7rjek3+K5P1y9aNsr3J1r3s/xJ45407mQ6nb7SVqN8Ar3jkC8gCw75ALLhkGsgKw65BLLjkCugCBxyARSDQ7aBonDIJlAcDtkCisQhG0CxOGQKFI1DJkDxONQWGAQOtQEGg0NNgUHhUBNgcDgkafDrpEZDp6IoHrIs29Nv8ZC2KtP37adpejocDvPFYvFJ215rPFULDdlqbBgSsvVcNBSk0eA3BKQREElHGgORZKQVIJKKtAZEEpFWgUga0joQSUI6ASIpSGdAJAHpFIi4kc6BiBPpBYi4kN6AiAPpFYh8IzlGFmo0Gl0ppe5ovTGN3Ol2u9u0bJTJ4Ne0ukOs8H4EKqvxuRr/ysUKRBVIKz/jsQPRP0grOCQCiH4hd23hkKTB7+p01aflkS1cLBaLxWKVdTrf5kX+OXj25HwAAAAASUVORK5CYII=",IN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArElEQVR4nO2STQrCMBBG3wnsmUy68AAiLmq9j1RP1kUn7jyCrVeoMgVFJJBJwV0ffBCyeMwfLPyVsqXwHbULXDT61r9ZMtexd8LDB57fccJQBnbZMi+Mv7JPhNEsLVuKWGWR9Jsbq6TQC0eDbMr6yiHdrnC2Cr3QWCpsrEIXOKWFHXWGsLIuZTDI7qalKHoSqbNxwpYcJmmgj51LtuyNtqRz0s1PCVTmNheYywsBbeNMCHkbYwAAAABJRU5ErkJggg==",Qt={avatar_icon:aN,gallery_icon:lN,help_icon:uN,logo_big:hN,logo_icon:cN,logo:dN,pic1:fN,pic2:pN,pic3:mN,pic4:gN,profile_img:_N,search_icon:yN,send_button:vN,add_icon:EN,menu_icon:wN,arrow_icon:TN,green_dot:IN};var Sv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=function(t,e){if(!t)throw co(e)},co=function(t){return new Error("Firebase Database ("+tI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new SN;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rI=function(t){const e=nI(t);return Bm.encodeByteArray(e,!0)},_c=function(t){return rI(t).replace(/\./g,"")},yc=function(t){try{return Bm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t){return iI(void 0,t)}function iI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!RN(n)||(t[n]=iI(t[n],e[n]));return t}function RN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=()=>kN().__FIREBASE_DEFAULTS__,NN=()=>{if(typeof process>"u"||typeof Sv>"u")return;const t=Sv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yc(t[1]);return e&&JSON.parse(e)},dh=()=>{try{return PN()||NN()||DN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sI=t=>{var e,n;return(n=(e=dh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},oI=t=>{const e=sI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},aI=()=>{var t;return(t=dh())===null||t===void 0?void 0:t.config},lI=t=>{var e;return(e=dh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_c(JSON.stringify(n)),_c(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function xN(){var t;const e=(t=dh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ON(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bN(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hI(){return tI.NODE_ADMIN===!0}function LN(){return!xN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MN(){try{return typeof indexedDB=="object"}catch{return!1}}function VN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FN,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hl.prototype.create)}}class hl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?UN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,a,r)}}function UN(t,e){return t.replace(BN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return JSON.parse(t)}function lt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ha(yc(s[0])||""),n=Ha(yc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},jN=function(t){const e=dI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zN=function(t){const e=dI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ks(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ip(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ga(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cv(s)&&Cv(o)){if(!Ga(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ea(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ta(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function qN(t,e){const n=new HN(t,e);return n.subscribe.bind(n)}class HN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jd),i.error===void 0&&(i.error=jd),i.complete===void 0&&(i.complete=jd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jd(){}function $N(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,W(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XN(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YN(t){return t===vi?void 0:t}function XN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const ZN={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},eD=re.INFO,tD={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},nD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ph{constructor(e){this.name=e,this._logLevel=eD,this._logHandler=nD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const rD=(t,e)=>e.some(n=>t instanceof n);let Rv,kv;function iD(){return Rv||(Rv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sD(){return kv||(kv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fI=new WeakMap,sp=new WeakMap,pI=new WeakMap,zd=new WeakMap,Wm=new WeakMap;function oD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fI.set(n,t)}).catch(()=>{}),Wm.set(e,t),e}function aD(t){if(sp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sp.set(t,e)}let op={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lD(t){op=t(op)}function uD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wd(this),e,...n);return pI.set(r,e.sort?e.sort():[e]),Qr(r)}:sD().includes(t)?function(...e){return t.apply(Wd(this),e),Qr(fI.get(this))}:function(...e){return Qr(t.apply(Wd(this),e))}}function cD(t){return typeof t=="function"?uD(t):(t instanceof IDBTransaction&&aD(t),rD(t,iD())?new Proxy(t,op):t)}function Qr(t){if(t instanceof IDBRequest)return oD(t);if(zd.has(t))return zd.get(t);const e=cD(t);return e!==t&&(zd.set(t,e),Wm.set(e,t)),e}const Wd=t=>Wm.get(t);function hD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Qr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Qr(o.result),u.oldVersion,u.newVersion,Qr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const dD=["get","getKey","getAll","getAllKeys","count"],fD=["put","add","delete","clear"],qd=new Map;function Pv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qd.get(e))return qd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dD.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return qd.set(e,s),s}lD(t=>({...t,get:(e,n,r)=>Pv(e,n)||t.get(e,n,r),has:(e,n)=>!!Pv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ap="@firebase/app",Nv="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new ph("@firebase/app"),gD="@firebase/app-compat",_D="@firebase/analytics-compat",yD="@firebase/analytics",vD="@firebase/app-check-compat",ED="@firebase/app-check",wD="@firebase/auth",TD="@firebase/auth-compat",ID="@firebase/database",AD="@firebase/database-compat",SD="@firebase/functions",CD="@firebase/functions-compat",RD="@firebase/installations",kD="@firebase/installations-compat",PD="@firebase/messaging",ND="@firebase/messaging-compat",DD="@firebase/performance",xD="@firebase/performance-compat",OD="@firebase/remote-config",bD="@firebase/remote-config-compat",LD="@firebase/storage",MD="@firebase/storage-compat",VD="@firebase/firestore",FD="@firebase/vertexai-preview",UD="@firebase/firestore-compat",BD="firebase",jD="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="[DEFAULT]",zD={[ap]:"fire-core",[gD]:"fire-core-compat",[yD]:"fire-analytics",[_D]:"fire-analytics-compat",[ED]:"fire-app-check",[vD]:"fire-app-check-compat",[wD]:"fire-auth",[TD]:"fire-auth-compat",[ID]:"fire-rtdb",[AD]:"fire-rtdb-compat",[SD]:"fire-fn",[CD]:"fire-fn-compat",[RD]:"fire-iid",[kD]:"fire-iid-compat",[PD]:"fire-fcm",[ND]:"fire-fcm-compat",[DD]:"fire-perf",[xD]:"fire-perf-compat",[OD]:"fire-rc",[bD]:"fire-rc-compat",[LD]:"fire-gcs",[MD]:"fire-gcs-compat",[VD]:"fire-fst",[UD]:"fire-fst-compat",[FD]:"fire-vertex","fire-js":"fire-js",[BD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new Map,WD=new Map,up=new Map;function Dv(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(up.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;up.set(e,t);for(const n of Ec.values())Dv(n,t);for(const n of WD.values())Dv(n,t);return!0}function mh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yr=new hl("app","Firebase",qD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=jD;function mI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yr.create("bad-app-name",{appName:String(i)});if(n||(n=aI()),!n)throw Yr.create("no-options");const s=Ec.get(i);if(s){if(Ga(n,s.options)&&Ga(r,s.config))return s;throw Yr.create("duplicate-app",{appName:i})}const o=new JN(i);for(const u of up.values())o.addComponent(u);const a=new HD(n,r,o);return Ec.set(i,a),a}function qm(t=lp){const e=Ec.get(t);if(!e&&t===lp&&aI())return mI();if(!e)throw Yr.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let i=(r=zD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}ni(new fr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD="firebase-heartbeat-database",$D=1,$a="firebase-heartbeat-store";let Hd=null;function gI(){return Hd||(Hd=hD(GD,$D,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($a)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),Hd}async function KD(t){try{const n=(await gI()).transaction($a),r=await n.objectStore($a).get(_I(t));return await n.done,r}catch(e){if(e instanceof Hn)pr.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function xv(t,e){try{const r=(await gI()).transaction($a,"readwrite");await r.objectStore($a).put(e,_I(t)),await r.done}catch(n){if(n instanceof Hn)pr.warn(n.message);else{const r=Yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function _I(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=1024,YD=30*24*60*60*1e3;class XD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ov();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=YD}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ov(),{heartbeatsToSend:r,unsentEntries:i}=JD(this._heartbeatsCache.heartbeats),s=_c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pr.warn(n),""}}}function Ov(){return new Date().toISOString().substring(0,10)}function JD(t,e=QD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MN()?VN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await KD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bv(t){return _c(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){ni(new fr("platform-logger",e=>new pD(e),"PRIVATE")),ni(new fr("heartbeat",e=>new XD(e),"PRIVATE")),hn(ap,Nv,t),hn(ap,Nv,"esm2017"),hn("fire-js","")}ex("");var tx="firebase",nx="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(tx,nx,"app");function Hm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rx=yI,vI=new hl("auth","Firebase",yI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new ph("@firebase/auth");function ix(t,...e){wc.logLevel<=re.WARN&&wc.warn(`Auth (${ci}): ${t}`,...e)}function Lu(t,...e){wc.logLevel<=re.ERROR&&wc.error(`Auth (${ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,...e){throw Gm(t,...e)}function Un(t,...e){return Gm(t,...e)}function EI(t,e,n){const r=Object.assign(Object.assign({},rx()),{[e]:n});return new hl("auth","Firebase",r).create(e,{appName:t.name})}function ir(t){return EI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vI.create(t,...e)}function Y(t,e,...n){if(!t)throw Gm(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lu(e),new Error(e)}function mr(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sx(){return Lv()==="http:"||Lv()==="https:"}function Lv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sx()||ON()||"connection"in navigator)?navigator.onLine:!0}function ax(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=zm()||cI()}get(){return ox()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=new dl(3e4,6e4);function Er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wr(t,e,n,r,i={}){return TI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ho(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),wI.fetch()(II(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function TI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lx),e);try{const i=new hx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw hu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw hu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw EI(t,d,c);kn(t,d)}}catch(i){if(i instanceof Hn)throw i;kn(t,"network-request-failed",{message:String(i)})}}async function fl(t,e,n,r,i={}){const s=await wr(t,e,n,r,i);return"mfaPendingCredential"in s&&kn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function II(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$m(t.config,i):`${t.config.apiScheme}://${i}`}function cx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Un(this.auth,"network-request-failed")),ux.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Un(t,e,r);return i.customData._tokenResponse=n,i}function Mv(t){return t!==void 0&&t.enterprise!==void 0}class dx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fx(t,e){return wr(t,"GET","/v2/recaptchaConfig",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function AI(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mx(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),i=Km(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ma(Gd(i.auth_time)),issuedAtTime:ma(Gd(i.iat)),expirationTime:ma(Gd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gd(t){return Number(t)*1e3}function Km(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lu("JWT malformed, contained fewer than 3 sections"),null;try{const i=yc(n);return i?JSON.parse(i):(Lu("Failed to decode base64 JWT payload"),null)}catch(i){return Lu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vv(t){const e=Km(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&gx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ma(this.lastLoginAt),this.creationTime=ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ka(t,AI(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?SI(s.providerUserInfo):[],a=vx(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function yx(t){const e=Ne(t);await Tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SI(t){return t.map(e=>{var{providerId:n}=e,r=Hm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex(t,e){const n=await TI(t,{},async()=>{const r=ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=II(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wx(t,e){return wr(t,"POST","/v2/accounts:revokeToken",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Vv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ex(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ls;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Hm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _x(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ka(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mx(this,e)}reload(){return yx(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(ir(this.auth));const e=await this.getIdToken();return await Ka(this,px(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:w,emailVerified:N,isAnonymous:L,providerData:F,stsTokenManager:A}=n;Y(w&&A,e,"internal-error");const g=Ls.fromJSON(this.name,A);Y(typeof w=="string",e,"internal-error"),Cr(f,e.name),Cr(m,e.name),Y(typeof N=="boolean",e,"internal-error"),Y(typeof L=="boolean",e,"internal-error"),Cr(v,e.name),Cr(T,e.name),Cr(R,e.name),Cr(S,e.name),Cr(E,e.name),Cr(_,e.name);const I=new er({uid:w,auth:e,email:m,emailVerified:N,displayName:f,isAnonymous:L,photoURL:T,phoneNumber:v,tenantId:R,stsTokenManager:g,createdAt:E,lastLoginAt:_});return F&&Array.isArray(F)&&(I.providerData=F.map(C=>Object.assign({},C))),S&&(I._redirectEventId=S),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ls;i.updateFromServerResponse(n);const s=new er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Tc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?SI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ls;a.updateFromIdToken(r);const u=new er({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new hp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=new Map;function tr(t){mr(t instanceof Function,"Expected a class definition");let e=Fv.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}CI.type="NONE";const Uv=CI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ms(tr(Uv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||tr(Uv);const o=Mu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=er._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ms(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ms(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xI(e))return"Blackberry";if(OI(e))return"Webos";if(kI(e))return"Safari";if((e.includes("chrome/")||PI(e))&&!e.includes("edge/"))return"Chrome";if(DI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RI(t=kt()){return/firefox\//i.test(t)}function kI(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PI(t=kt()){return/crios\//i.test(t)}function NI(t=kt()){return/iemobile/i.test(t)}function DI(t=kt()){return/android/i.test(t)}function xI(t=kt()){return/blackberry/i.test(t)}function OI(t=kt()){return/webos/i.test(t)}function Qm(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tx(t=kt()){var e;return Qm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ix(){return bN()&&document.documentMode===10}function bI(t=kt()){return Qm(t)||DI(t)||OI(t)||xI(t)||/windows phone/i.test(t)||NI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t,e=[]){let n;switch(t){case"Browser":n=Bv(kt());break;case"Worker":n=`${Bv(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(t,e={}){return wr(t,"GET","/v2/passwordPolicy",Er(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=6;class Rx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Cx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jv(this),this.idTokenSubscription=new jv(this),this.beforeStateQueue=new Ax(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await AI(this,{idToken:e}),r=await er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ax()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(ir(this));const n=e?Ne(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sx(this),n=new Rx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=LI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ix(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hi(t){return Ne(t)}class jv{constructor(e){this.auth=e,this.observer=null,this.addObserver=qN(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Px(t){gh=t}function MI(t){return gh.loadJS(t)}function Nx(){return gh.recaptchaEnterpriseScript}function Dx(){return gh.gapiScript}function xx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ox="recaptcha-enterprise",bx="NO_RECAPTCHA";class Lx{constructor(e){this.type=Ox,this.auth=hi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{fx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new dx(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Mv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(bx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Mv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Nx();u.length!==0&&(u+=a),MI(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function zv(t,e,n,r=!1){const i=new Lx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ic(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await zv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await zv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t,e){const n=mh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ga(s,e??{}))return i;kn(i,"already-initialized")}return n.initialize({options:e})}function Vx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Fx(t,e,n){const r=hi(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=VI(e),{host:o,port:a}=Ux(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Bx()}function VI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ux(t){const e=VI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wv(o)}}}function Wv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function jx(t,e){return wr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zx(t,e){return fl(t,"POST","/v1/accounts:signInWithPassword",Er(t,e))}async function Wx(t,e){return wr(t,"POST","/v1/accounts:sendOobCode",Er(t,e))}async function qx(t,e){return Wx(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hx(t,e){return fl(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}async function Gx(t,e){return fl(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Ym{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Qa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,n,"signInWithPassword",zx);case"emailLink":return Hx(e,{email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ic(e,r,"signUpPassword",jx);case"emailLink":return Gx(e,{idToken:n,email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t,e){return fl(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="http://localhost";class Vi extends Ym{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Hm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:$x,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qx(t){const e=ea(ta(t)).link,n=e?ea(ta(e)).deep_link_id:null,r=ea(ta(t)).deep_link_id;return(r?ea(ta(r)).link:null)||r||n||e||t}class Xm{constructor(e){var n,r,i,s,o,a;const u=ea(ta(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=Kx((i=u.mode)!==null&&i!==void 0?i:null);Y(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Qx(e);try{return new Xm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.providerId=fo.PROVIDER_ID}static credential(e,n){return Qa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xm.parseLink(n);return Y(r,"argument-error"),Qa._fromEmailAndCode(e,r.code,r.tenantId)}}fo.PROVIDER_ID="password";fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends FI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends pl{constructor(){super("facebook.com")}static credential(e){return Vi._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.GOOGLE_SIGN_IN_METHOD="google.com";xr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends pl{constructor(){super("github.com")}static credential(e){return Vi._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends pl{constructor(){super("twitter.com")}static credential(e,n){return Vi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return br.credential(n,r)}catch{return null}}}br.TWITTER_SIGN_IN_METHOD="twitter.com";br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(t,e){return fl(t,"POST","/v1/accounts:signUp",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await er._fromIdTokenResponse(e,r,i),o=qv(r);return new Fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qv(r);return new Fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends Hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ac.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ac(e,n,r,i)}}function UI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ac._fromErrorAndOperation(t,s,e,r):s})}async function Xx(t,e,n=!1){const r=await Ka(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(t,e,n=!1){const{auth:r}=t;if(bn(r.app))return Promise.reject(ir(r));const i="reauthenticate";try{const s=await Ka(t,UI(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Km(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(t,e,n=!1){if(bn(t.app))return Promise.reject(ir(t));const r="signIn",i=await UI(t,r,e),s=await Fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Zx(t,e){return BI(hi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(t){const e=hi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eO(t,e,n){const r=hi(t);await Ic(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",qx)}async function tO(t,e,n){if(bn(t.app))return Promise.reject(ir(t));const r=hi(t),o=await Ic(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yx).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&jI(t),u}),a=await Fi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function nO(t,e,n){return bn(t.app)?Promise.reject(ir(t)):Zx(Ne(t),fo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jI(t),r})}function rO(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function iO(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function zI(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function sO(t){return Ne(t).signOut()}const Sc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sc,"1"),this.storage.removeItem(Sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=1e3,aO=10;class qI extends WI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ix()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qI.type="LOCAL";const lO=qI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI extends WI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}HI.type="SESSION";const GI=HI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _h(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await uO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_h.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Jm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return window}function hO(t){Bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function dO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pO(){return $I()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="firebaseLocalStorageDb",mO=1,Cc="firebaseLocalStorage",QI="fbase_key";class ml{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yh(t,e){return t.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function gO(){const t=indexedDB.deleteDatabase(KI);return new ml(t).toPromise()}function dp(){const t=indexedDB.open(KI,mO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cc,{keyPath:QI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cc)?e(r):(r.close(),await gO(),e(await dp()))})})}async function Hv(t,e,n){const r=yh(t,!0).put({[QI]:e,value:n});return new ml(r).toPromise()}async function _O(t,e){const n=yh(t,!1).get(e),r=await new ml(n).toPromise();return r===void 0?null:r.value}function Gv(t,e){const n=yh(t,!0).delete(e);return new ml(n).toPromise()}const yO=800,vO=3;class YI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $I()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_h._getInstance(pO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dO(),!this.activeServiceWorker)return;this.sender=new cO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dp();return await Hv(e,Sc,"1"),await Gv(e,Sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_O(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yh(i,!1).getAll();return new ml(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YI.type="LOCAL";const EO=YI;new dl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(t,e){return e?tr(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm extends Ym{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TO(t){return BI(t.auth,new Zm(t),t.bypassAuthState)}function IO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Jx(n,new Zm(t),t.bypassAuthState)}async function AO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Xx(n,new Zm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TO;case"linkViaPopup":case"linkViaRedirect":return AO;case"reauthViaPopup":case"reauthViaRedirect":return IO;default:kn(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=new dl(2e3,1e4);class Cs extends XI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=Jm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SO.get())};e()}}Cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO="pendingRedirect",Vu=new Map;class RO extends XI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vu.get(this.auth._key());if(!e){try{const r=await kO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vu.set(this.auth._key(),e)}return this.bypassAuthState||Vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kO(t,e){const n=DO(e),r=NO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function PO(t,e){Vu.set(t._key(),e)}function NO(t){return tr(t._redirectPersistence)}function DO(t){return Mu(CO,t.config.apiKey,t.name)}async function xO(t,e,n=!1){if(bn(t.app))return Promise.reject(ir(t));const r=hi(t),i=wO(r,e),o=await new RO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO=10*60*1e3;class bO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!JI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OO&&this.cachedEventUids.clear(),this.cachedEventUids.has($v(e))}saveEventToCache(e){this.cachedEventUids.add($v(e)),this.lastProcessedEventTime=Date.now()}}function $v(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function JI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return JI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FO=/^https?/;async function UO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MO(t);for(const n of e)try{if(BO(n))return}catch{}kn(t,"unauthorized-domain")}function BO(t){const e=cp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FO.test(n))return!1;if(VO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=new dl(3e4,6e4);function Kv(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zO(t){return new Promise((e,n)=>{var r,i,s;function o(){Kv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kv(),n(Un(t,"network-request-failed"))},timeout:jO.get()})}if(!((i=(r=Bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bn().gapi)===null||s===void 0)&&s.load)o();else{const a=xx("iframefcb");return Bn()[a]=()=>{gapi.load?o():n(Un(t,"network-request-failed"))},MI(`${Dx()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Fu=null,e})}let Fu=null;function WO(t){return Fu=Fu||zO(t),Fu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=new dl(5e3,15e3),HO="__/auth/iframe",GO="emulator/auth/iframe",$O={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QO(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$m(e,GO):`https://${t.config.authDomain}/${HO}`,r={apiKey:e.apiKey,appName:t.name,v:ci},i=KO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ho(r).slice(1)}`}async function YO(t){const e=await WO(t),n=Bn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:QO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$O,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Un(t,"network-request-failed"),a=Bn().setTimeout(()=>{s(o)},qO.get());function u(){Bn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JO=500,ZO=600,eb="_blank",tb="http://localhost";class Qv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nb(t,e,n,r=JO,i=ZO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},XO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=kt().toLowerCase();n&&(a=PI(c)?eb:n),RI(c)&&(e=e||tb,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[v,T])=>`${m}${v}=${T},`,"");if(Tx(c)&&a!=="_self")return rb(e||"",a),new Qv(null);const f=window.open(e||"",a,d);Y(f,t,"popup-blocked");try{f.focus()}catch{}return new Qv(f)}function rb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="__/auth/handler",sb="emulator/auth/handler",ob=encodeURIComponent("fac");async function Yv(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ci,eventId:i};if(e instanceof FI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ip(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof pl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${ob}=${encodeURIComponent(u)}`:"";return`${ab(t)}?${ho(a).slice(1)}${c}`}function ab({config:t}){return t.emulator?$m(t,sb):`https://${t.authDomain}/${ib}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="webStorageSupport";class lb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=GI,this._completeRedirectFn=xO,this._overrideRedirectResult=PO}async _openPopup(e,n,r,i){var s;mr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Yv(e,n,r,cp(),i);return nb(e,o,Jm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Yv(e,n,r,cp(),i);return hO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YO(e),r=new bO(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($d,{type:$d},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$d];o!==void 0&&n(!!o),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bI()||kI()||Qm()}}const ub=lb;var Xv="@firebase/auth",Jv="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function db(t){ni(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LI(t)},c=new kx(r,i,s,u);return Vx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new fr("auth-internal",e=>{const n=hi(e.getProvider("auth").getImmediate());return(r=>new cb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Xv,Jv,hb(t)),hn(Xv,Jv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=5*60,pb=lI("authIdTokenMaxAge")||fb;let Zv=null;const mb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pb)return;const i=n==null?void 0:n.token;Zv!==i&&(Zv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gb(t=qm()){const e=mh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mx(t,{popupRedirectResolver:ub,persistence:[EO,lO,GI]}),r=lI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=mb(s.toString());iO(n,o,()=>o(n.currentUser)),rO(n,a=>o(a))}}const i=sI("auth");return i&&Fx(n,`http://${i}`),n}function _b(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Px({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_b().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});db("Browser");var eE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pi,ZI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,g){function I(){}I.prototype=g.prototype,A.D=g.prototype,A.prototype=new I,A.prototype.constructor=A,A.C=function(C,P,D){for(var k=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)k[Ve-2]=arguments[Ve];return g.prototype[P].apply(C,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,g,I){I||(I=0);var C=Array(16);if(typeof g=="string")for(var P=0;16>P;++P)C[P]=g.charCodeAt(I++)|g.charCodeAt(I++)<<8|g.charCodeAt(I++)<<16|g.charCodeAt(I++)<<24;else for(P=0;16>P;++P)C[P]=g[I++]|g[I++]<<8|g[I++]<<16|g[I++]<<24;g=A.g[0],I=A.g[1],P=A.g[2];var D=A.g[3],k=g+(D^I&(P^D))+C[0]+3614090360&4294967295;g=I+(k<<7&4294967295|k>>>25),k=D+(P^g&(I^P))+C[1]+3905402710&4294967295,D=g+(k<<12&4294967295|k>>>20),k=P+(I^D&(g^I))+C[2]+606105819&4294967295,P=D+(k<<17&4294967295|k>>>15),k=I+(g^P&(D^g))+C[3]+3250441966&4294967295,I=P+(k<<22&4294967295|k>>>10),k=g+(D^I&(P^D))+C[4]+4118548399&4294967295,g=I+(k<<7&4294967295|k>>>25),k=D+(P^g&(I^P))+C[5]+1200080426&4294967295,D=g+(k<<12&4294967295|k>>>20),k=P+(I^D&(g^I))+C[6]+2821735955&4294967295,P=D+(k<<17&4294967295|k>>>15),k=I+(g^P&(D^g))+C[7]+4249261313&4294967295,I=P+(k<<22&4294967295|k>>>10),k=g+(D^I&(P^D))+C[8]+1770035416&4294967295,g=I+(k<<7&4294967295|k>>>25),k=D+(P^g&(I^P))+C[9]+2336552879&4294967295,D=g+(k<<12&4294967295|k>>>20),k=P+(I^D&(g^I))+C[10]+4294925233&4294967295,P=D+(k<<17&4294967295|k>>>15),k=I+(g^P&(D^g))+C[11]+2304563134&4294967295,I=P+(k<<22&4294967295|k>>>10),k=g+(D^I&(P^D))+C[12]+1804603682&4294967295,g=I+(k<<7&4294967295|k>>>25),k=D+(P^g&(I^P))+C[13]+4254626195&4294967295,D=g+(k<<12&4294967295|k>>>20),k=P+(I^D&(g^I))+C[14]+2792965006&4294967295,P=D+(k<<17&4294967295|k>>>15),k=I+(g^P&(D^g))+C[15]+1236535329&4294967295,I=P+(k<<22&4294967295|k>>>10),k=g+(P^D&(I^P))+C[1]+4129170786&4294967295,g=I+(k<<5&4294967295|k>>>27),k=D+(I^P&(g^I))+C[6]+3225465664&4294967295,D=g+(k<<9&4294967295|k>>>23),k=P+(g^I&(D^g))+C[11]+643717713&4294967295,P=D+(k<<14&4294967295|k>>>18),k=I+(D^g&(P^D))+C[0]+3921069994&4294967295,I=P+(k<<20&4294967295|k>>>12),k=g+(P^D&(I^P))+C[5]+3593408605&4294967295,g=I+(k<<5&4294967295|k>>>27),k=D+(I^P&(g^I))+C[10]+38016083&4294967295,D=g+(k<<9&4294967295|k>>>23),k=P+(g^I&(D^g))+C[15]+3634488961&4294967295,P=D+(k<<14&4294967295|k>>>18),k=I+(D^g&(P^D))+C[4]+3889429448&4294967295,I=P+(k<<20&4294967295|k>>>12),k=g+(P^D&(I^P))+C[9]+568446438&4294967295,g=I+(k<<5&4294967295|k>>>27),k=D+(I^P&(g^I))+C[14]+3275163606&4294967295,D=g+(k<<9&4294967295|k>>>23),k=P+(g^I&(D^g))+C[3]+4107603335&4294967295,P=D+(k<<14&4294967295|k>>>18),k=I+(D^g&(P^D))+C[8]+1163531501&4294967295,I=P+(k<<20&4294967295|k>>>12),k=g+(P^D&(I^P))+C[13]+2850285829&4294967295,g=I+(k<<5&4294967295|k>>>27),k=D+(I^P&(g^I))+C[2]+4243563512&4294967295,D=g+(k<<9&4294967295|k>>>23),k=P+(g^I&(D^g))+C[7]+1735328473&4294967295,P=D+(k<<14&4294967295|k>>>18),k=I+(D^g&(P^D))+C[12]+2368359562&4294967295,I=P+(k<<20&4294967295|k>>>12),k=g+(I^P^D)+C[5]+4294588738&4294967295,g=I+(k<<4&4294967295|k>>>28),k=D+(g^I^P)+C[8]+2272392833&4294967295,D=g+(k<<11&4294967295|k>>>21),k=P+(D^g^I)+C[11]+1839030562&4294967295,P=D+(k<<16&4294967295|k>>>16),k=I+(P^D^g)+C[14]+4259657740&4294967295,I=P+(k<<23&4294967295|k>>>9),k=g+(I^P^D)+C[1]+2763975236&4294967295,g=I+(k<<4&4294967295|k>>>28),k=D+(g^I^P)+C[4]+1272893353&4294967295,D=g+(k<<11&4294967295|k>>>21),k=P+(D^g^I)+C[7]+4139469664&4294967295,P=D+(k<<16&4294967295|k>>>16),k=I+(P^D^g)+C[10]+3200236656&4294967295,I=P+(k<<23&4294967295|k>>>9),k=g+(I^P^D)+C[13]+681279174&4294967295,g=I+(k<<4&4294967295|k>>>28),k=D+(g^I^P)+C[0]+3936430074&4294967295,D=g+(k<<11&4294967295|k>>>21),k=P+(D^g^I)+C[3]+3572445317&4294967295,P=D+(k<<16&4294967295|k>>>16),k=I+(P^D^g)+C[6]+76029189&4294967295,I=P+(k<<23&4294967295|k>>>9),k=g+(I^P^D)+C[9]+3654602809&4294967295,g=I+(k<<4&4294967295|k>>>28),k=D+(g^I^P)+C[12]+3873151461&4294967295,D=g+(k<<11&4294967295|k>>>21),k=P+(D^g^I)+C[15]+530742520&4294967295,P=D+(k<<16&4294967295|k>>>16),k=I+(P^D^g)+C[2]+3299628645&4294967295,I=P+(k<<23&4294967295|k>>>9),k=g+(P^(I|~D))+C[0]+4096336452&4294967295,g=I+(k<<6&4294967295|k>>>26),k=D+(I^(g|~P))+C[7]+1126891415&4294967295,D=g+(k<<10&4294967295|k>>>22),k=P+(g^(D|~I))+C[14]+2878612391&4294967295,P=D+(k<<15&4294967295|k>>>17),k=I+(D^(P|~g))+C[5]+4237533241&4294967295,I=P+(k<<21&4294967295|k>>>11),k=g+(P^(I|~D))+C[12]+1700485571&4294967295,g=I+(k<<6&4294967295|k>>>26),k=D+(I^(g|~P))+C[3]+2399980690&4294967295,D=g+(k<<10&4294967295|k>>>22),k=P+(g^(D|~I))+C[10]+4293915773&4294967295,P=D+(k<<15&4294967295|k>>>17),k=I+(D^(P|~g))+C[1]+2240044497&4294967295,I=P+(k<<21&4294967295|k>>>11),k=g+(P^(I|~D))+C[8]+1873313359&4294967295,g=I+(k<<6&4294967295|k>>>26),k=D+(I^(g|~P))+C[15]+4264355552&4294967295,D=g+(k<<10&4294967295|k>>>22),k=P+(g^(D|~I))+C[6]+2734768916&4294967295,P=D+(k<<15&4294967295|k>>>17),k=I+(D^(P|~g))+C[13]+1309151649&4294967295,I=P+(k<<21&4294967295|k>>>11),k=g+(P^(I|~D))+C[4]+4149444226&4294967295,g=I+(k<<6&4294967295|k>>>26),k=D+(I^(g|~P))+C[11]+3174756917&4294967295,D=g+(k<<10&4294967295|k>>>22),k=P+(g^(D|~I))+C[2]+718787259&4294967295,P=D+(k<<15&4294967295|k>>>17),k=I+(D^(P|~g))+C[9]+3951481745&4294967295,A.g[0]=A.g[0]+g&4294967295,A.g[1]=A.g[1]+(P+(k<<21&4294967295|k>>>11))&4294967295,A.g[2]=A.g[2]+P&4294967295,A.g[3]=A.g[3]+D&4294967295}r.prototype.u=function(A,g){g===void 0&&(g=A.length);for(var I=g-this.blockSize,C=this.B,P=this.h,D=0;D<g;){if(P==0)for(;D<=I;)i(this,A,D),D+=this.blockSize;if(typeof A=="string"){for(;D<g;)if(C[P++]=A.charCodeAt(D++),P==this.blockSize){i(this,C),P=0;break}}else for(;D<g;)if(C[P++]=A[D++],P==this.blockSize){i(this,C),P=0;break}}this.h=P,this.o+=g},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var g=1;g<A.length-8;++g)A[g]=0;var I=8*this.o;for(g=A.length-8;g<A.length;++g)A[g]=I&255,I/=256;for(this.u(A),A=Array(16),g=I=0;4>g;++g)for(var C=0;32>C;C+=8)A[I++]=this.g[g]>>>C&255;return A};function s(A,g){var I=a;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=g(A)}function o(A,g){this.h=g;for(var I=[],C=!0,P=A.length-1;0<=P;P--){var D=A[P]|0;C&&D==g||(I[P]=D,C=!1)}this.g=I}var a={};function u(A){return-128<=A&&128>A?s(A,function(g){return new o([g|0],0>g?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return f;if(0>A)return S(c(-A));for(var g=[],I=1,C=0;A>=I;C++)g[C]=A/I|0,I*=4294967296;return new o(g,0)}function d(A,g){if(A.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(A.charAt(0)=="-")return S(d(A.substring(1),g));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(g,8)),C=f,P=0;P<A.length;P+=8){var D=Math.min(8,A.length-P),k=parseInt(A.substring(P,P+D),g);8>D?(D=c(Math.pow(g,D)),C=C.j(D).add(c(k))):(C=C.j(I),C=C.add(c(k)))}return C}var f=u(0),m=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-S(this).m();for(var A=0,g=1,I=0;I<this.g.length;I++){var C=this.i(I);A+=(0<=C?C:4294967296+C)*g,g*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(T(this))return"0";if(R(this))return"-"+S(this).toString(A);for(var g=c(Math.pow(A,6)),I=this,C="";;){var P=N(I,g).g;I=E(I,P.j(g));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(A);if(I=P,T(I))return D+C;for(;6>D.length;)D="0"+D;C=D+C}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function T(A){if(A.h!=0)return!1;for(var g=0;g<A.g.length;g++)if(A.g[g]!=0)return!1;return!0}function R(A){return A.h==-1}t.l=function(A){return A=E(this,A),R(A)?-1:T(A)?0:1};function S(A){for(var g=A.g.length,I=[],C=0;C<g;C++)I[C]=~A.g[C];return new o(I,~A.h).add(m)}t.abs=function(){return R(this)?S(this):this},t.add=function(A){for(var g=Math.max(this.g.length,A.g.length),I=[],C=0,P=0;P<=g;P++){var D=C+(this.i(P)&65535)+(A.i(P)&65535),k=(D>>>16)+(this.i(P)>>>16)+(A.i(P)>>>16);C=k>>>16,D&=65535,k&=65535,I[P]=k<<16|D}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(A,g){return A.add(S(g))}t.j=function(A){if(T(this)||T(A))return f;if(R(this))return R(A)?S(this).j(S(A)):S(S(this).j(A));if(R(A))return S(this.j(S(A)));if(0>this.l(v)&&0>A.l(v))return c(this.m()*A.m());for(var g=this.g.length+A.g.length,I=[],C=0;C<2*g;C++)I[C]=0;for(C=0;C<this.g.length;C++)for(var P=0;P<A.g.length;P++){var D=this.i(C)>>>16,k=this.i(C)&65535,Ve=A.i(P)>>>16,Ft=A.i(P)&65535;I[2*C+2*P]+=k*Ft,_(I,2*C+2*P),I[2*C+2*P+1]+=D*Ft,_(I,2*C+2*P+1),I[2*C+2*P+1]+=k*Ve,_(I,2*C+2*P+1),I[2*C+2*P+2]+=D*Ve,_(I,2*C+2*P+2)}for(C=0;C<g;C++)I[C]=I[2*C+1]<<16|I[2*C];for(C=g;C<2*g;C++)I[C]=0;return new o(I,0)};function _(A,g){for(;(A[g]&65535)!=A[g];)A[g+1]+=A[g]>>>16,A[g]&=65535,g++}function w(A,g){this.g=A,this.h=g}function N(A,g){if(T(g))throw Error("division by zero");if(T(A))return new w(f,f);if(R(A))return g=N(S(A),g),new w(S(g.g),S(g.h));if(R(g))return g=N(A,S(g)),new w(S(g.g),g.h);if(30<A.g.length){if(R(A)||R(g))throw Error("slowDivide_ only works with positive integers.");for(var I=m,C=g;0>=C.l(A);)I=L(I),C=L(C);var P=F(I,1),D=F(C,1);for(C=F(C,2),I=F(I,2);!T(C);){var k=D.add(C);0>=k.l(A)&&(P=P.add(I),D=k),C=F(C,1),I=F(I,1)}return g=E(A,P.j(g)),new w(P,g)}for(P=f;0<=A.l(g);){for(I=Math.max(1,Math.floor(A.m()/g.m())),C=Math.ceil(Math.log(I)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),D=c(I),k=D.j(g);R(k)||0<k.l(A);)I-=C,D=c(I),k=D.j(g);T(D)&&(D=m),P=P.add(D),A=E(A,k)}return new w(P,A)}t.A=function(A){return N(this,A).h},t.and=function(A){for(var g=Math.max(this.g.length,A.g.length),I=[],C=0;C<g;C++)I[C]=this.i(C)&A.i(C);return new o(I,this.h&A.h)},t.or=function(A){for(var g=Math.max(this.g.length,A.g.length),I=[],C=0;C<g;C++)I[C]=this.i(C)|A.i(C);return new o(I,this.h|A.h)},t.xor=function(A){for(var g=Math.max(this.g.length,A.g.length),I=[],C=0;C<g;C++)I[C]=this.i(C)^A.i(C);return new o(I,this.h^A.h)};function L(A){for(var g=A.g.length+1,I=[],C=0;C<g;C++)I[C]=A.i(C)<<1|A.i(C-1)>>>31;return new o(I,A.h)}function F(A,g){var I=g>>5;g%=32;for(var C=A.g.length-I,P=[],D=0;D<C;D++)P[D]=0<g?A.i(D+I)>>>g|A.i(D+I+1)<<32-g:A.i(D+I);return new o(P,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ZI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Pi=o}).apply(typeof eE<"u"?eE:typeof self<"u"?self:typeof window<"u"?window:{});var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eA,tA,na,nA,Uu,fp,rA,iA,sA;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof du=="object"&&du];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var x=l[y];if(!(x in p))break e;p=p[x]}l=l[l.length-1],y=p[l],h=h(y),h!=y&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,y=!1,x={next:function(){if(!y&&p<l.length){var O=p++;return{value:h(O,l[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,y),l.apply(h,x)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function v(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function T(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,x,O){for(var j=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)j[ye-2]=arguments[ye];return h.prototype[x].apply(y,j)}}function R(l){const h=l.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=l[y];return p}return[]}function S(l,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const x=l.length||0,O=y.length||0;l.length=x+O;for(let j=0;j<O;j++)l[x+j]=y[j]}else l.push(y)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(l){return/^[\s\xa0]*$/.test(l)}function w(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var L=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function F(l,h,p){for(const y in l)h.call(p,l[y],y,l)}function A(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function g(l){const h={};for(const p in l)h[p]=l[p];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,h){let p,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(p in y)l[p]=y[p];for(let O=0;O<I.length;O++)p=I[O],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function P(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function D(l){a.setTimeout(()=>{throw l},0)}function k(){var l=K;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Ve{constructor(){this.h=this.g=null}add(h,p){const y=Ft.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Ft=new E(()=>new Nn,l=>l.reset());class Nn{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,z=!1,K=new Ve,Q=()=>{const l=a.Promise.resolve(void 0);Ge=()=>{l.then(fe)}};var fe=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(p){D(p)}var h=Ft;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}z=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var Fe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function je(l,h){if(oe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(L){e:{try{N(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:st[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&je.aa.h.call(this)}}T(je,oe);var st={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),qh=0;function cR(l,h,p,y,x){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=x,this.key=++qh,this.da=this.fa=!1}function Dl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function xl(l){this.src=l,this.g={},this.h=0}xl.prototype.add=function(l,h,p,y,x){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var j=Gh(l,h,y,x);return-1<j?(h=l[j],p||(h.fa=!1)):(h=new cR(h,this.src,O,!!y,x),h.fa=p,l.push(h)),h};function Hh(l,h){var p=h.type;if(p in l.g){var y=l.g[p],x=Array.prototype.indexOf.call(y,h,void 0),O;(O=0<=x)&&Array.prototype.splice.call(y,x,1),O&&(Dl(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Gh(l,h,p,y){for(var x=0;x<l.length;++x){var O=l[x];if(!O.da&&O.listener==h&&O.capture==!!p&&O.ha==y)return x}return-1}var $h="closure_lm_"+(1e6*Math.random()|0),Kh={};function u_(l,h,p,y,x){if(Array.isArray(h)){for(var O=0;O<h.length;O++)u_(l,h[O],p,y,x);return null}return p=d_(p),l&&l[Pt]?l.K(h,p,c(y)?!!y.capture:!!y,x):hR(l,h,p,!1,y,x)}function hR(l,h,p,y,x,O){if(!h)throw Error("Invalid event type");var j=c(x)?!!x.capture:!!x,ye=Yh(l);if(ye||(l[$h]=ye=new xl(l)),p=ye.add(h,p,y,j,O),p.proxy)return p;if(y=dR(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)Fe||(x=j),x===void 0&&(x=!1),l.addEventListener(h.toString(),y,x);else if(l.attachEvent)l.attachEvent(h_(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function dR(){function l(p){return h.call(l.src,l.listener,p)}const h=fR;return l}function c_(l,h,p,y,x){if(Array.isArray(h))for(var O=0;O<h.length;O++)c_(l,h[O],p,y,x);else y=c(y)?!!y.capture:!!y,p=d_(p),l&&l[Pt]?(l=l.i,h=String(h).toString(),h in l.g&&(O=l.g[h],p=Gh(O,p,y,x),-1<p&&(Dl(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[h],l.h--)))):l&&(l=Yh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Gh(h,p,y,x)),(p=-1<l?h[l]:null)&&Qh(p))}function Qh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Pt])Hh(h.i,l);else{var p=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(p,y,l.capture):h.detachEvent?h.detachEvent(h_(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Yh(h))?(Hh(p,l),p.h==0&&(p.src=null,h[$h]=null)):Dl(l)}}}function h_(l){return l in Kh?Kh[l]:Kh[l]="on"+l}function fR(l,h){if(l.da)l=!0;else{h=new je(h,this);var p=l.listener,y=l.ha||l.src;l.fa&&Qh(l),l=p.call(y,h)}return l}function Yh(l){return l=l[$h],l instanceof xl?l:null}var Xh="__closure_events_fn_"+(1e9*Math.random()>>>0);function d_(l){return typeof l=="function"?l:(l[Xh]||(l[Xh]=function(h){return l.handleEvent(h)}),l[Xh])}function pt(){ee.call(this),this.i=new xl(this),this.M=this,this.F=null}T(pt,ee),pt.prototype[Pt]=!0,pt.prototype.removeEventListener=function(l,h,p,y){c_(this,l,h,p,y)};function Nt(l,h){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new oe(h,l);else if(h instanceof oe)h.target=h.target||l;else{var x=h;h=new oe(y,l),C(h,x)}if(x=!0,p)for(var O=p.length-1;0<=O;O--){var j=h.g=p[O];x=Ol(j,y,!0,h)&&x}if(j=h.g=l,x=Ol(j,y,!0,h)&&x,x=Ol(j,y,!1,h)&&x,p)for(O=0;O<p.length;O++)j=h.g=p[O],x=Ol(j,y,!1,h)&&x}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],y=0;y<p.length;y++)Dl(p[y]);delete l.g[h],l.h--}}this.F=null},pt.prototype.K=function(l,h,p,y){return this.i.add(String(l),h,!1,p,y)},pt.prototype.L=function(l,h,p,y){return this.i.add(String(l),h,!0,p,y)};function Ol(l,h,p,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,O=0;O<h.length;++O){var j=h[O];if(j&&!j.da&&j.capture==p){var ye=j.listener,ot=j.ha||j.src;j.fa&&Hh(l.i,j),x=ye.call(ot,y)!==!1&&x}}return x&&!y.defaultPrevented}function f_(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function p_(l){l.g=f_(()=>{l.g=null,l.i&&(l.i=!1,p_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class pR extends ee{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:p_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function To(l){ee.call(this),this.h=l,this.g={}}T(To,ee);var m_=[];function g_(l){F(l.g,function(h,p){this.g.hasOwnProperty(p)&&Qh(h)},l),l.g={}}To.prototype.N=function(){To.aa.N.call(this),g_(this)},To.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jh=a.JSON.stringify,mR=a.JSON.parse,gR=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Zh(){}Zh.prototype.h=null;function __(l){return l.h||(l.h=l.i())}function y_(){}var Io={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ed(){oe.call(this,"d")}T(ed,oe);function td(){oe.call(this,"c")}T(td,oe);var fi={},v_=null;function bl(){return v_=v_||new pt}fi.La="serverreachability";function E_(l){oe.call(this,fi.La,l)}T(E_,oe);function Ao(l){const h=bl();Nt(h,new E_(h))}fi.STAT_EVENT="statevent";function w_(l,h){oe.call(this,fi.STAT_EVENT,l),this.stat=h}T(w_,oe);function Dt(l){const h=bl();Nt(h,new w_(h,l))}fi.Ma="timingevent";function T_(l,h){oe.call(this,fi.Ma,l),this.size=h}T(T_,oe);function So(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Co(){this.g=!0}Co.prototype.xa=function(){this.g=!1};function _R(l,h,p,y,x,O){l.info(function(){if(l.g)if(O)for(var j="",ye=O.split("&"),ot=0;ot<ye.length;ot++){var he=ye[ot].split("=");if(1<he.length){var mt=he[0];he=he[1];var gt=mt.split("_");j=2<=gt.length&&gt[1]=="type"?j+(mt+"="+he+"&"):j+(mt+"=redacted&")}}else j=null;else j=O;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+h+`
`+p+`
`+j})}function yR(l,h,p,y,x,O,j){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+h+`
`+p+`
`+O+" "+j})}function rs(l,h,p,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+ER(l,p)+(y?" "+y:"")})}function vR(l,h){l.info(function(){return"TIMEOUT: "+h})}Co.prototype.info=function(){};function ER(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var x=y[1];if(Array.isArray(x)&&!(1>x.length)){var O=x[0];if(O!="noop"&&O!="stop"&&O!="close")for(var j=1;j<x.length;j++)x[j]=""}}}}return Jh(p)}catch{return h}}var Ll={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},I_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nd;function Ml(){}T(Ml,Zh),Ml.prototype.g=function(){return new XMLHttpRequest},Ml.prototype.i=function(){return{}},nd=new Ml;function Tr(l,h,p,y){this.j=l,this.i=h,this.l=p,this.R=y||1,this.U=new To(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new A_}function A_(){this.i=null,this.g="",this.h=!1}var S_={},rd={};function id(l,h,p){l.L=1,l.v=Bl(Gn(h)),l.m=p,l.P=!0,C_(l,null)}function C_(l,h){l.F=Date.now(),Vl(l),l.A=Gn(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),B_(p.i,"t",y),l.C=0,p=l.j.J,l.h=new A_,l.g=iy(l.j,p?h:null,!l.m),0<l.O&&(l.M=new pR(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,y=l.ca;var x="readystatechange";Array.isArray(x)||(x&&(m_[0]=x.toString()),x=m_);for(var O=0;O<x.length;O++){var j=u_(p,x[O],y||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Ao(),_R(l.i,l.u,l.A,l.l,l.R,l.m)}Tr.prototype.ca=function(l){l=l.target;const h=this.M;h&&$n(l)==3?h.j():this.Y(l)},Tr.prototype.Y=function(l){try{if(l==this.g)e:{const gt=$n(this.g);var h=this.g.Ba();const os=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||$_(this.g)))){this.J||gt!=4||h==7||(h==8||0>=os?Ao(3):Ao(2)),sd(this);var p=this.g.Z();this.X=p;t:if(R_(this)){var y=$_(this.g);l="";var x=y.length,O=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pi(this),Ro(this);var j="";break t}this.h.i=new a.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,l+=this.h.i.decode(y[h],{stream:!(O&&h==x-1)});y.length=0,this.h.g+=l,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=p==200,yR(this.i,this.u,this.A,this.l,this.R,gt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,ot=this.g;if((ye=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ye)){var he=ye;break t}}he=null}if(p=he)rs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,od(this,p);else{this.o=!1,this.s=3,Dt(12),pi(this),Ro(this);break e}}if(this.P){p=!0;let gn;for(;!this.J&&this.C<j.length;)if(gn=wR(this,j),gn==rd){gt==4&&(this.s=4,Dt(14),p=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(gn==S_){this.s=4,Dt(15),rs(this.i,this.l,j,"[Invalid Chunk]"),p=!1;break}else rs(this.i,this.l,gn,null),od(this,gn);if(R_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||j.length!=0||this.h.h||(this.s=1,Dt(16),p=!1),this.o=this.o&&p,!p)rs(this.i,this.l,j,"[Invalid Chunked Response]"),pi(this),Ro(this);else if(0<j.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),dd(mt),mt.M=!0,Dt(11))}}else rs(this.i,this.l,j,null),od(this,j);gt==4&&pi(this),this.o&&!this.J&&(gt==4?ey(this.j,this):(this.o=!1,Vl(this)))}else FR(this.g),p==400&&0<j.indexOf("Unknown SID")?(this.s=3,Dt(12)):(this.s=0,Dt(13)),pi(this),Ro(this)}}}catch{}finally{}};function R_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function wR(l,h){var p=l.C,y=h.indexOf(`
`,p);return y==-1?rd:(p=Number(h.substring(p,y)),isNaN(p)?S_:(y+=1,y+p>h.length?rd:(h=h.slice(y,y+p),l.C=y+p,h)))}Tr.prototype.cancel=function(){this.J=!0,pi(this)};function Vl(l){l.S=Date.now()+l.I,k_(l,l.I)}function k_(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=So(m(l.ba,l),h)}function sd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Tr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(vR(this.i,this.A),this.L!=2&&(Ao(),Dt(17)),pi(this),this.s=2,Ro(this)):k_(this,this.S-l)};function Ro(l){l.j.G==0||l.J||ey(l.j,l)}function pi(l){sd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,g_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function od(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||ad(p.h,l))){if(!l.K&&ad(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Hl(p),Wl(p);else break e;hd(p),Dt(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=So(m(p.Za,p),6e3));if(1>=D_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else gi(p,11)}else if((l.K||p.g==l)&&Hl(p),!_(h))for(x=p.Da.g.parse(h),h=0;h<x.length;h++){let he=x[h];if(p.T=he[0],he=he[1],p.G==2)if(he[0]=="c"){p.K=he[1],p.ia=he[2];const mt=he[3];mt!=null&&(p.la=mt,p.j.info("VER="+p.la));const gt=he[4];gt!=null&&(p.Aa=gt,p.j.info("SVER="+p.Aa));const os=he[5];os!=null&&typeof os=="number"&&0<os&&(y=1.5*os,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const gn=l.g;if(gn){const $l=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($l){var O=y.h;O.g||$l.indexOf("spdy")==-1&&$l.indexOf("quic")==-1&&$l.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ld(O,O.h),O.h=null))}if(y.D){const fd=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;fd&&(y.ya=fd,we(y.I,y.D,fd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var j=l;if(y.qa=ry(y,y.J?y.ia:null,y.W),j.K){x_(y.h,j);var ye=j,ot=y.L;ot&&(ye.I=ot),ye.B&&(sd(ye),Vl(ye)),y.g=j}else J_(y);0<p.i.length&&ql(p)}else he[0]!="stop"&&he[0]!="close"||gi(p,7);else p.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?gi(p,7):cd(p):he[0]!="noop"&&p.l&&p.l.ta(he),p.v=0)}}Ao(4)}catch{}}var TR=class{constructor(l,h){this.g=l,this.map=h}};function P_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function N_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function D_(l){return l.h?1:l.g?l.g.size:0}function ad(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function ld(l,h){l.g?l.g.add(h):l.h=h}function x_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}P_.prototype.cancel=function(){if(this.i=O_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function O_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return R(l.i)}function IR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,y=0;y<p;y++)h.push(l[y]);return h}h=[],p=0;for(y in l)h[p++]=l[y];return h}function AR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const y in l)h[p++]=y;return h}}}function b_(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=AR(l),y=IR(l),x=y.length,O=0;O<x;O++)h.call(void 0,y[O],p&&p[O],l)}var L_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SR(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),x=null;if(0<=y){var O=l[p].substring(0,y);x=l[p].substring(y+1)}else O=l[p];h(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function mi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof mi){this.h=l.h,Fl(this,l.j),this.o=l.o,this.g=l.g,Ul(this,l.s),this.l=l.l;var h=l.i,p=new No;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),M_(this,p),this.m=l.m}else l&&(h=String(l).match(L_))?(this.h=!1,Fl(this,h[1]||"",!0),this.o=ko(h[2]||""),this.g=ko(h[3]||"",!0),Ul(this,h[4]),this.l=ko(h[5]||"",!0),M_(this,h[6]||"",!0),this.m=ko(h[7]||"")):(this.h=!1,this.i=new No(null,this.h))}mi.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Po(h,V_,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Po(h,V_,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Po(p,p.charAt(0)=="/"?kR:RR,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Po(p,NR)),l.join("")};function Gn(l){return new mi(l)}function Fl(l,h,p){l.j=p?ko(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ul(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function M_(l,h,p){h instanceof No?(l.i=h,DR(l.i,l.h)):(p||(h=Po(h,PR)),l.i=new No(h,l.h))}function we(l,h,p){l.i.set(h,p)}function Bl(l){return we(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ko(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Po(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,CR),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function CR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var V_=/[#\/\?@]/g,RR=/[#\?:]/g,kR=/[#\?]/g,PR=/[#\?@]/g,NR=/#/g;function No(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Ir(l){l.g||(l.g=new Map,l.h=0,l.i&&SR(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=No.prototype,t.add=function(l,h){Ir(this),this.i=null,l=is(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function F_(l,h){Ir(l),h=is(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function U_(l,h){return Ir(l),h=is(l,h),l.g.has(h)}t.forEach=function(l,h){Ir(this),this.g.forEach(function(p,y){p.forEach(function(x){l.call(h,x,y,this)},this)},this)},t.na=function(){Ir(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const x=l[y];for(let O=0;O<x.length;O++)p.push(h[y])}return p},t.V=function(l){Ir(this);let h=[];if(typeof l=="string")U_(this,l)&&(h=h.concat(this.g.get(is(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return Ir(this),this.i=null,l=is(this,l),U_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function B_(l,h,p){F_(l,h),0<p.length&&(l.i=null,l.g.set(is(l,h),R(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const O=encodeURIComponent(String(y)),j=this.V(y);for(y=0;y<j.length;y++){var x=O;j[y]!==""&&(x+="="+encodeURIComponent(String(j[y]))),l.push(x)}}return this.i=l.join("&")};function is(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function DR(l,h){h&&!l.j&&(Ir(l),l.i=null,l.g.forEach(function(p,y){var x=y.toLowerCase();y!=x&&(F_(this,y),B_(this,x,p))},l)),l.j=h}function xR(l,h){const p=new Co;if(a.Image){const y=new Image;y.onload=v(Ar,p,"TestLoadImage: loaded",!0,h,y),y.onerror=v(Ar,p,"TestLoadImage: error",!1,h,y),y.onabort=v(Ar,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=v(Ar,p,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function OR(l,h){const p=new Co,y=new AbortController,x=setTimeout(()=>{y.abort(),Ar(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(O=>{clearTimeout(x),O.ok?Ar(p,"TestPingServer: ok",!0,h):Ar(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Ar(p,"TestPingServer: error",!1,h)})}function Ar(l,h,p,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(p)}catch{}}function bR(){this.g=new gR}function LR(l,h,p){const y=p||"";try{b_(l,function(x,O){let j=x;c(x)&&(j=Jh(x)),h.push(y+O+"="+encodeURIComponent(j))})}catch(x){throw h.push(y+"type="+encodeURIComponent("_badmap")),x}}function Do(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Do,Zh),Do.prototype.g=function(){return new jl(this.l,this.j)},Do.prototype.i=function(l){return function(){return l}}({});function jl(l,h){pt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(jl,pt),t=jl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Oo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Oo(this)),this.g&&(this.readyState=3,Oo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;j_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function j_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?xo(this):Oo(this),this.readyState==3&&j_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,xo(this))},t.Qa=function(l){this.g&&(this.response=l,xo(this))},t.ga=function(){this.g&&xo(this)};function xo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Oo(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function Oo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(jl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function z_(l){let h="";return F(l,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function ud(l,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=z_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):we(l,h,p))}function Le(l){pt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Le,pt);var MR=/^https?$/i,VR=["POST","PUT"];t=Le.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nd.g(),this.v=this.o?__(this.o):__(nd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(O){W_(this,O);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)p.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())p.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),x=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(VR,h,void 0))||y||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,j]of p)this.g.setRequestHeader(O,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{G_(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){W_(this,O)}};function W_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,q_(l),zl(l)}function q_(l){l.A||(l.A=!0,Nt(l,"complete"),Nt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Nt(this,"complete"),Nt(this,"abort"),zl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zl(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?H_(this):this.bb())},t.bb=function(){H_(this)};function H_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||$n(l)!=4||l.Z()!=2)){if(l.u&&$n(l)==4)f_(l.Ea,0,l);else if(Nt(l,"readystatechange"),$n(l)==4){l.h=!1;try{const j=l.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=j===0){var x=String(l.D).match(L_)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),y=!MR.test(x?x.toLowerCase():"")}p=y}if(p)Nt(l,"complete"),Nt(l,"success");else{l.m=6;try{var O=2<$n(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",q_(l)}}finally{zl(l)}}}}function zl(l,h){if(l.g){G_(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Nt(l,"ready");try{p.onreadystatechange=y}catch{}}}function G_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function $n(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),mR(h)}};function $_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function FR(l){const h={};l=(l.g&&2<=$n(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(_(l[y]))continue;var p=P(l[y]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=h[x]||[];h[x]=O,O.push(p)}A(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bo(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function K_(l){this.Aa=0,this.i=[],this.j=new Co,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bo("baseRetryDelayMs",5e3,l),this.cb=bo("retryDelaySeedMs",1e4,l),this.Wa=bo("forwardChannelMaxRetries",2,l),this.wa=bo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new P_(l&&l.concurrentRequestLimit),this.Da=new bR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=K_.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,y){Dt(0),this.W=l,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=ry(this,null,this.W),ql(this)};function cd(l){if(Q_(l),l.G==3){var h=l.U++,p=Gn(l.I);if(we(p,"SID",l.K),we(p,"RID",h),we(p,"TYPE","terminate"),Lo(l,p),h=new Tr(l,l.j,h),h.L=2,h.v=Bl(Gn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=iy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Vl(h)}ny(l)}function Wl(l){l.g&&(dd(l),l.g.cancel(),l.g=null)}function Q_(l){Wl(l),l.u&&(a.clearTimeout(l.u),l.u=null),Hl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ql(l){if(!N_(l.h)&&!l.s){l.s=!0;var h=l.Ga;Ge||Q(),z||(Ge(),z=!0),K.add(h,l),l.B=0}}function UR(l,h){return D_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=So(m(l.Ga,l,h),ty(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const x=new Tr(this,this.j,l);let O=this.o;if(this.S&&(O?(O=g(O),C(O,this.S)):O=this.S),this.m!==null||this.O||(x.H=O,O=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=X_(this,x,h),p=Gn(this.I),we(p,"RID",l),we(p,"CVER",22),this.D&&we(p,"X-HTTP-Session-Id",this.D),Lo(this,p),O&&(this.O?h="headers="+encodeURIComponent(String(z_(O)))+"&"+h:this.m&&ud(p,this.m,O)),ld(this.h,x),this.Ua&&we(p,"TYPE","init"),this.P?(we(p,"$req",h),we(p,"SID","null"),x.T=!0,id(x,p,null)):id(x,p,h),this.G=2}}else this.G==3&&(l?Y_(this,l):this.i.length==0||N_(this.h)||Y_(this))};function Y_(l,h){var p;h?p=h.l:p=l.U++;const y=Gn(l.I);we(y,"SID",l.K),we(y,"RID",p),we(y,"AID",l.T),Lo(l,y),l.m&&l.o&&ud(y,l.m,l.o),p=new Tr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=X_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ld(l.h,p),id(p,y,h)}function Lo(l,h){l.H&&F(l.H,function(p,y){we(h,y,p)}),l.l&&b_({},function(p,y){we(h,y,p)})}function X_(l,h,p){p=Math.min(l.i.length,p);var y=l.l?m(l.l.Na,l.l,l):null;e:{var x=l.i;let O=-1;for(;;){const j=["count="+p];O==-1?0<p?(O=x[0].g,j.push("ofs="+O)):O=0:j.push("ofs="+O);let ye=!0;for(let ot=0;ot<p;ot++){let he=x[ot].g;const mt=x[ot].map;if(he-=O,0>he)O=Math.max(0,x[ot].g-100),ye=!1;else try{LR(mt,j,"req"+he+"_")}catch{y&&y(mt)}}if(ye){y=j.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,y}function J_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Ge||Q(),z||(Ge(),z=!0),K.add(h,l),l.v=0}}function hd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=So(m(l.Fa,l),ty(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Z_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=So(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dt(10),Wl(this),Z_(this))};function dd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Z_(l){l.g=new Tr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Gn(l.qa);we(h,"RID","rpc"),we(h,"SID",l.K),we(h,"AID",l.T),we(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&we(h,"TO",l.ja),we(h,"TYPE","xmlhttp"),Lo(l,h),l.m&&l.o&&ud(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Bl(Gn(h)),p.m=null,p.P=!0,C_(p,l)}t.Za=function(){this.C!=null&&(this.C=null,Wl(this),hd(this),Dt(19))};function Hl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ey(l,h){var p=null;if(l.g==h){Hl(l),dd(l),l.g=null;var y=2}else if(ad(l.h,h))p=h.D,x_(l.h,h),y=1;else return;if(l.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var x=l.B;y=bl(),Nt(y,new T_(y,p)),ql(l)}else J_(l);else if(x=h.s,x==3||x==0&&0<h.X||!(y==1&&UR(l,h)||y==2&&hd(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),x){case 1:gi(l,5);break;case 4:gi(l,10);break;case 3:gi(l,6);break;default:gi(l,2)}}}function ty(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function gi(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),y=l.Xa;const x=!y;y=new mi(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Fl(y,"https"),Bl(y),x?xR(y.toString(),p):OR(y.toString(),p)}else Dt(2);l.G=0,l.l&&l.l.sa(h),ny(l),Q_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function ny(l){if(l.G=0,l.ka=[],l.l){const h=O_(l.h);(h.length!=0||l.i.length!=0)&&(S(l.ka,h),S(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function ry(l,h,p){var y=p instanceof mi?Gn(p):new mi(p);if(y.g!="")h&&(y.g=h+"."+y.g),Ul(y,y.s);else{var x=a.location;y=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var O=new mi(null);y&&Fl(O,y),h&&(O.g=h),x&&Ul(O,x),p&&(O.l=p),y=O}return p=l.D,h=l.ya,p&&h&&we(y,p,h),we(y,"VER",l.la),Lo(l,y),y}function iy(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Le(new Do({eb:p})):new Le(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sy(){}t=sy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Gl(){}Gl.prototype.g=function(l,h){return new $t(l,h)};function $t(l,h){pt.call(this),this.g=new K_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!_(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new ss(this)}T($t,pt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){cd(this.g)},$t.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Jh(l),l=p);h.i.push(new TR(h.Ya++,l)),h.G==3&&ql(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,cd(this.g),delete this.g,$t.aa.N.call(this)};function oy(l){ed.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}T(oy,ed);function ay(){td.call(this),this.status=1}T(ay,td);function ss(l){this.g=l}T(ss,sy),ss.prototype.ua=function(){Nt(this.g,"a")},ss.prototype.ta=function(l){Nt(this.g,new oy(l))},ss.prototype.sa=function(l){Nt(this.g,new ay)},ss.prototype.ra=function(){Nt(this.g,"b")},Gl.prototype.createWebChannel=Gl.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,sA=function(){return new Gl},iA=function(){return bl()},rA=fi,fp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ll.NO_ERROR=0,Ll.TIMEOUT=8,Ll.HTTP_ERROR=6,Uu=Ll,I_.COMPLETE="complete",nA=I_,y_.EventType=Io,Io.OPEN="a",Io.CLOSE="b",Io.ERROR="c",Io.MESSAGE="d",pt.prototype.listen=pt.prototype.K,na=y_,tA=Do,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,eA=Le}).apply(typeof du<"u"?du:typeof self<"u"?self:typeof window<"u"?window:{});const tE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new ph("@firebase/firestore");function qo(){return Ui.logLevel}function G(t,...e){if(Ui.logLevel<=re.DEBUG){const n=e.map(eg);Ui.debug(`Firestore (${po}): ${t}`,...n)}}function gr(t,...e){if(Ui.logLevel<=re.ERROR){const n=e.map(eg);Ui.error(`Firestore (${po}): ${t}`,...n)}}function Qs(t,...e){if(Ui.logLevel<=re.WARN){const n=e.map(eg);Ui.warn(`Firestore (${po}): ${t}`,...n)}}function eg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: `+t;throw gr(e),new Error(e)}function ve(t,e){t||X()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class vb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Eb{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new sr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new oA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Et(e)}}class wb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Tb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new wb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ib{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ab{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new Ib(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Sb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function Ys(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Xe(0,0))}static max(){return new J(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ya.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ya?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Ya{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const Cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Ya{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return Cb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Se.fromString(e))}static fromName(e){return new $(Se.fromString(e).popFirst(5))}static empty(){return new $(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Se(e.slice()))}}function Rb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new ri(i,$.empty(),e)}function kb(t){return new ri(t.readTime,t.key,-1)}class ri{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ri(J.min(),$.empty(),-1)}static max(){return new ri(J.max(),$.empty(),-1)}}function Pb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Db{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Nb)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function xb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _l(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tg.oe=-1;function vh(t){return t==null}function Rc(t){return t===0&&1/t==-1/0}function Ob(t){return typeof t=="number"&&Number.isInteger(t)&&!Rc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He=class pp{constructor(e,n){this.comparator=e,this.root=n||Xr.EMPTY}insert(e,n){return new pp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xr.BLACK,null,null))}remove(e){return new pp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fu(this.root,e,this.comparator,!0)}},fu=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Xr=class Kn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Kn.RED,this.left=i??Kn.EMPTY,this.right=s??Kn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Kn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Kn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Kn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}};Xr.EMPTY=null,Xr.RED=!0,Xr.BLACK=!1;Xr.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rE(this.data.getIterator())}getIteratorFrom(e){return new rE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class rE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ht(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new uA("Invalid base64 string: "+s):s}}(e);return new ft(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const bb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ii(t){if(ve(!!t),typeof t=="string"){let e=0;const n=bb.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rg(t){const e=t.mapValue.fields.__previous_value__;return ng(e)?rg(e):e}function Xa(t){const e=ii(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ja{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ja("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ja&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ji(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ng(t)?4:Vb(t)?9007199254740991:Mb(t)?10:11:X()}function qn(t,e){if(t===e)return!0;const n=ji(t);if(n!==ji(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xa(t).isEqual(Xa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ii(i.timestampValue),a=ii(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bi(i.bytesValue).isEqual(Bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),a=Ue(s.doubleValue);return o===a?Rc(o)===Rc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ys(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(nE(o)!==nE(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!qn(o[u],a[u])))return!1;return!0}(t,e);default:return X()}}function Za(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function Xs(t,e){if(t===e)return 0;const n=ji(t),r=ji(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ue(s.integerValue||s.doubleValue),u=Ue(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return iE(t.timestampValue,e.timestampValue);case 4:return iE(Xa(t),Xa(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Bi(s),u=Bi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=de(a[c],u[c]);if(d!==0)return d}return de(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=de(Ue(s.latitude),Ue(o.latitude));return a!==0?a:de(Ue(s.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return sE(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},m=o.fields||{},v=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(u=m.value)===null||u===void 0?void 0:u.arrayValue,R=de(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return R!==0?R:sE(v,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===pu.mapValue&&o===pu.mapValue)return 0;if(s===pu.mapValue)return 1;if(o===pu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=de(u[f],d[f]);if(m!==0)return m;const v=Xs(a[u[f]],c[d[f]]);if(v!==0)return v}return de(u.length,d.length)}(t.mapValue,e.mapValue);default:throw X()}}function iE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=ii(t),r=ii(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function sE(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Xs(n[i],r[i]);if(s)return s}return de(n.length,r.length)}function Js(t){return mp(t)}function mp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ii(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=mp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${mp(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function oE(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gp(t){return!!t&&"integerValue"in t}function ig(t){return!!t&&"arrayValue"in t}function aE(t){return!!t&&"nullValue"in t}function lE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bu(t){return!!t&&"mapValue"in t}function Mb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ga(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ga(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ga(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Vb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ga(n)}setAll(e){let n=ut.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ga(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Bu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Bu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(ga(this.value))}}function cA(t){const e=[];return Yi(t.fields,(n,r)=>{const i=new ut([n]);if(Bu(r)){const s=cA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Tt(e,0,J.min(),J.min(),J.min(),jt.empty(),0)}static newFoundDocument(e,n,r,i){return new Tt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Tt(e,2,n,J.min(),J.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,J.min(),J.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n){this.position=e,this.inclusive=n}}function uE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=Xs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n="asc"){this.field=e,this.dir=n}}function Fb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{}class qe extends hA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Bb(e,n,r):n==="array-contains"?new Wb(e,r):n==="in"?new qb(e,r):n==="not-in"?new Hb(e,r):n==="array-contains-any"?new Gb(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jb(e,r):new zb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xs(n,this.value)):n!==null&&ji(this.value)===ji(n)&&this.matchesComparison(Xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pn extends hA{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Pn(e,n)}matches(e){return dA(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dA(t){return t.op==="and"}function fA(t){return Ub(t)&&dA(t)}function Ub(t){for(const e of t.filters)if(e instanceof Pn)return!1;return!0}function _p(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Js(t.value);if(fA(t))return t.filters.map(e=>_p(e)).join(",");{const e=t.filters.map(n=>_p(n)).join(",");return`${t.op}(${e})`}}function pA(t,e){return t instanceof qe?function(r,i){return i instanceof qe&&r.op===i.op&&r.field.isEqual(i.field)&&qn(r.value,i.value)}(t,e):t instanceof Pn?function(r,i){return i instanceof Pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&pA(o,i.filters[a]),!0):!1}(t,e):void X()}function mA(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Js(n.value)}`}(t):t instanceof Pn?function(n){return n.op.toString()+" {"+n.getFilters().map(mA).join(" ,")+"}"}(t):"Filter"}class Bb extends qe{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class jb extends qe{constructor(e,n){super(e,"in",n),this.keys=gA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zb extends qe{constructor(e,n){super(e,"not-in",n),this.keys=gA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class Wb extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ig(n)&&Za(n.arrayValue,this.value)}}class qb extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Za(this.value.arrayValue,n)}}class Hb extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Za(this.value.arrayValue,n)}}class Gb extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ig(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Za(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function hE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $b(t,e,n,r,i,s,o)}function sg(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_p(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),vh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Js(r)).join(",")),e.ue=n}return e.ue}function og(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cE(t.startAt,e.startAt)&&cE(t.endAt,e.endAt)}function yp(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Kb(t,e,n,r,i,s,o,a){return new yl(t,e,n,r,i,s,o,a)}function Eh(t){return new yl(t)}function dE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _A(t){return t.collectionGroup!==null}function _a(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ht(ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Pc(s,r))}),n.has(ut.keyField().canonicalString())||e.ce.push(new Pc(ut.keyField(),r))}return e.ce}function jn(t){const e=Z(t);return e.le||(e.le=Qb(e,_a(t))),e.le}function Qb(t,e){if(t.limitType==="F")return hE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pc(i.field,s)});const n=t.endAt?new kc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kc(t.startAt.position,t.startAt.inclusive):null;return hE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vp(t,e){const n=t.filters.concat([e]);return new yl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ep(t,e,n){return new yl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wh(t,e){return og(jn(t),jn(e))&&t.limitType===e.limitType}function yA(t){return`${sg(jn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>mA(i)).join(", ")}]`),vh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Js(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Js(i)).join(",")),`Target(${r})`}(jn(t))}; limitType=${t.limitType})`}function Th(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of _a(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=uE(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,_a(r),i)||r.endAt&&!function(o,a,u){const c=uE(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,_a(r),i))}(t,e)}function Yb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vA(t){return(e,n)=>{let r=!1;for(const i of _a(t)){const s=Xb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Xb(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Xs(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new He($.comparator);function _r(){return Jb}const EA=new He($.comparator);function ra(...t){let e=EA;for(const n of t)e=e.insert(n.key,n);return e}function wA(t){let e=EA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ai(){return ya()}function TA(){return ya()}function ya(){return new mo(t=>t.toString(),(t,e)=>t.isEqual(e))}const Zb=new He($.comparator),eL=new ht($.comparator);function ie(...t){let e=eL;for(const n of t)e=e.add(n);return e}const tL=new ht(de);function nL(){return tL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rc(e)?"-0":e}}function IA(t){return{integerValue:""+t}}function rL(t,e){return Ob(e)?IA(e):ag(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this._=void 0}}function iL(t,e,n){return t instanceof el?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ng(s)&&(s=rg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Zs?SA(t,e):t instanceof tl?CA(t,e):function(i,s){const o=AA(i,s),a=fE(o)+fE(i.Pe);return gp(o)&&gp(i.Pe)?IA(a):ag(i.serializer,a)}(t,e)}function sL(t,e,n){return t instanceof Zs?SA(t,e):t instanceof tl?CA(t,e):n}function AA(t,e){return t instanceof Nc?function(r){return gp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class el extends Ih{}class Zs extends Ih{constructor(e){super(),this.elements=e}}function SA(t,e){const n=RA(e);for(const r of t.elements)n.some(i=>qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class tl extends Ih{constructor(e){super(),this.elements=e}}function CA(t,e){let n=RA(e);for(const r of t.elements)n=n.filter(i=>!qn(i,r));return{arrayValue:{values:n}}}class Nc extends Ih{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function fE(t){return Ue(t.integerValue||t.doubleValue)}function RA(t){return ig(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n){this.field=e,this.transform=n}}function oL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Zs&&i instanceof Zs||r instanceof tl&&i instanceof tl?Ys(r.elements,i.elements,qn):r instanceof Nc&&i instanceof Nc?qn(r.Pe,i.Pe):r instanceof el&&i instanceof el}(t.transform,e.transform)}class aL{constructor(e,n){this.version=e,this.transformResults=n}}class zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ah{}function PA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new DA(t.key,zn.none()):new vl(t.key,t.data,zn.none());{const n=t.data,r=jt.empty();let i=new ht(ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new di(t.key,r,new Xt(i.toArray()),zn.none())}}function lL(t,e,n){t instanceof vl?function(i,s,o){const a=i.value.clone(),u=mE(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof di?function(i,s,o){if(!ju(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=mE(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(NA(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function va(t,e,n,r){return t instanceof vl?function(s,o,a,u){if(!ju(s.precondition,o))return a;const c=s.value.clone(),d=gE(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof di?function(s,o,a,u){if(!ju(s.precondition,o))return a;const c=gE(s.fieldTransforms,u,o),d=o.data;return d.setAll(NA(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return ju(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function uL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=AA(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function pE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ys(r,i,(s,o)=>oL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vl extends Ah{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class di extends Ah{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function NA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mE(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sL(o,a,n[i]))}return r}function gE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iL(s,o,e))}return r}class DA extends Ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cL extends Ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=va(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=va(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=TA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=PA(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Ys(this.mutations,e.mutations,(n,r)=>pE(n,r))&&Ys(this.baseMutations,e.baseMutations,(n,r)=>pE(n,r))}}class lg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=function(){return Zb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new lg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ae;function pL(t){switch(t){default:return X();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function xA(t){if(t===void 0)return gr("GRPC error has no .code"),M.UNKNOWN;switch(t){case ze.OK:return M.OK;case ze.CANCELLED:return M.CANCELLED;case ze.UNKNOWN:return M.UNKNOWN;case ze.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ze.INTERNAL:return M.INTERNAL;case ze.UNAVAILABLE:return M.UNAVAILABLE;case ze.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ze.NOT_FOUND:return M.NOT_FOUND;case ze.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ze.ABORTED:return M.ABORTED;case ze.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ze.DATA_LOSS:return M.DATA_LOSS;default:return X()}}(ae=ze||(ze={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=new Pi([4294967295,4294967295],0);function _E(t){const e=mL().encode(t),n=new ZI;return n.update(e),new Uint8Array(n.digest())}function yE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pi([n,r],0),new Pi([i,s],0)]}class ug{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ia(`Invalid padding: ${n}`);if(r<0)throw new ia(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ia(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ia(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Pi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Pi.fromNumber(r)));return i.compare(gL)===1&&(i=new Pi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=_E(e),[r,i]=yE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ug(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=_E(e),[r,i]=yE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sh(J.min(),i,new He(de),_r(),ie())}}class El{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new El(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class OA{constructor(e,n){this.targetId=e,this.me=n}}class bA{constructor(e,n,r=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class vE{constructor(){this.fe=0,this.ge=wE(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new El(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=wE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _L{constructor(e){this.Le=e,this.Be=new Map,this.ke=_r(),this.qe=EE(),this.Qe=new He(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(yp(s))if(r===0){const o=new $(s.path);this.Ue(n,o,Tt.newNoDocument(o,J.min()))}else ve(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Bi(r).toUint8Array()}catch(u){if(u instanceof uA)return Qs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new ug(o,i,s)}catch(u){return Qs(u instanceof ia?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&yp(a.target)){const u=new $(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Tt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Sh(e,n,this.Qe,this.ke,r);return this.ke=_r(),this.qe=EE(),this.Qe=new He(de),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new vE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ht(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new vE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function EE(){return new He($.comparator)}function wE(){return new He($.comparator)}const yL={asc:"ASCENDING",desc:"DESCENDING"},vL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},EL={and:"AND",or:"OR"};class wL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wp(t,e){return t.useProto3Json||vh(e)?e:{value:e}}function Dc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TL(t,e){return Dc(t,e.toTimestamp())}function Wn(t){return ve(!!t),J.fromTimestamp(function(n){const r=ii(n);return new Xe(r.seconds,r.nanos)}(t))}function cg(t,e){return Tp(t,e).canonicalString()}function Tp(t,e){const n=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function MA(t){const e=Se.fromString(t);return ve(jA(e)),e}function Ip(t,e){return cg(t.databaseId,e.path)}function Kd(t,e){const n=MA(e);if(n.get(1)!==t.databaseId.projectId)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(FA(n))}function VA(t,e){return cg(t.databaseId,e)}function IL(t){const e=MA(t);return e.length===4?Se.emptyPath():FA(e)}function Ap(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function FA(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function TE(t,e,n){return{name:Ip(t,e),fields:n.value.mapValue.fields}}function AL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ve(d===void 0||typeof d=="string"),ft.fromBase64String(d||"")):(ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ft.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?M.UNKNOWN:xA(c.code);return new H(d,c.message||"")}(o);n=new bA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kd(t,r.document.name),s=Wn(r.document.updateTime),o=r.document.createTime?Wn(r.document.createTime):J.min(),a=new jt({mapValue:{fields:r.document.fields}}),u=Tt.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new zu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kd(t,r.document),s=r.readTime?Wn(r.readTime):J.min(),o=Tt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new zu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kd(t,r.document),s=r.removedTargetIds||[];n=new zu([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fL(i,s),a=r.targetId;n=new OA(a,o)}}return n}function SL(t,e){let n;if(e instanceof vl)n={update:TE(t,e.key,e.value)};else if(e instanceof DA)n={delete:Ip(t,e.key)};else if(e instanceof di)n={update:TE(t,e.key,e.data),updateMask:bL(e.fieldMask)};else{if(!(e instanceof cL))return X();n={verify:Ip(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof el)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Zs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof tl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Nc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:TL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function CL(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Wn(i.updateTime):Wn(s);return o.isEqual(J.min())&&(o=Wn(s)),new aL(o,i.transformResults||[])}(n,e))):[]}function RL(t,e){return{documents:[VA(t,e.path)]}}function kL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=VA(t,i);const s=function(c){if(c.length!==0)return BA(Pn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:hs(m.field),direction:DL(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=wp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function PL(t){let e=IL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=UA(f);return m instanceof Pn&&fA(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new Pc(ds(T.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,vh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,v=f.values||[];return new kc(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new kc(v,m)}(n.endAt)),Kb(e,i,o,s,a,"F",u,c)}function NL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function UA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ds(n.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ds(n.unaryFilter.field);return qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ds(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(ds(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Pn.create(n.compositeFilter.filters.map(r=>UA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function DL(t){return yL[t]}function xL(t){return vL[t]}function OL(t){return EL[t]}function hs(t){return{fieldPath:t.canonicalString()}}function ds(t){return ut.fromServerFormat(t.fieldPath)}function BA(t){return t instanceof qe?function(n){if(n.op==="=="){if(lE(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NAN"}};if(aE(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lE(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NAN"}};if(aE(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(n.field),op:xL(n.op),value:n.value}}}(t):t instanceof Pn?function(n){const r=n.getFilters().map(i=>BA(i));return r.length===1?r[0]:{compositeFilter:{op:OL(n.op),filters:r}}}(t):X()}function bL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r,i,s=J.min(),o=J.min(),a=ft.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e){this.ct=e}}function ML(t){const e=PL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ep(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(){this.un=new FL}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(ri.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(ri.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class FL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ht(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ht(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new eo(0)}static kn(){return new eo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(){this.changes=new mo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&va(r.mutation,i,Xt.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ra();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=_r();const o=ya(),a=function(){return ya()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof di)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),va(d.mutation,c,d.mutation.getFieldMask(),Xe.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new BL(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ya();let i=new He((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Xt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||ie()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=TA();d.forEach(m=>{if(!s.has(m)){const v=PA(n.get(m),r.get(m));v!==null&&f.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_A(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Ai());let a=-1,u=s;return o.next(c=>U.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ie())).next(d=>({batchId:a,changes:wA(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=ra();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ra();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,u=>{const c=function(f,m){return new yl(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Tt.newInvalidDocument(d)))});let a=ra();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&va(d.mutation,c,Xt.empty(),Xe.now()),Th(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Wn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:ML(i.bundledQuery),readTime:Wn(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(){this.overlays=new He($.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ai();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Ai(),s=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new He((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ai(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Ai(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dL(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.Tr=new ht(Ze.Er),this.dr=new ht(Ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new $(new Se([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new $(new Se([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return $.comparator(e.key,n.key)||de(e.wr,n.wr)}static Ar(e,n){return de(e.wr,n.wr)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ht(Ze.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(de);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new $(s),0);let a=new ht(de);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ze(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e){this.Mr=e,this.docs=function(){return new He($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=_r();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Tt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=_r();const o=n.path,a=new $(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Pb(kb(d),r)<=0||(i.has(d.key)||Th(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $L(this)}getSize(e){return U.resolve(this.size)}}class $L extends UL{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e){this.persistence=e,this.Nr=new mo(n=>sg(n),og),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hg,this.targetCount=0,this.kr=eo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new eo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e,n){this.qr={},this.overlays={},this.Qr=new tg(0),this.Kr=!1,this.Kr=!0,this.$r=new qL,this.referenceDelegate=e(this),this.Ur=new KL(this),this.indexManager=new VL,this.remoteDocumentCache=function(i){return new GL(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new LL(n),this.Gr=new zL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new HL(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new YL(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class YL extends Db{constructor(e){super(),this.currentSequenceNumber=e}}class dg{constructor(e){this.persistence=e,this.Jr=new hg,this.Yr=null}static Zr(e){return new dg(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=$.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new fg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return LN()?8:xb(kt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XL;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(qo()<=re.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(qo()<=re.DEBUG&&G("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(qo()<=re.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jn(n))):U.resolve())}Yi(e,n){if(dE(n))return U.resolve(null);let r=jn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ep(n,null,"F"),r=jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Ep(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return dE(n)||i.isEqual(J.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(qo()<=re.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cs(n)),this.rs(e,o,n,Rb(i,-1)).next(a=>a))})}ts(e,n){let r=new ht(vA(e));return n.forEach((i,s)=>{Th(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return qo()<=re.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",cs(n)),this.Ji.getDocumentsMatchingQuery(e,n,ri.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new He(de),this._s=new mo(s=>sg(s),og),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jL(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function e2(t,e,n,r){return new ZL(t,e,n,r)}async function zA(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ie();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function t2(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let v=U.resolve();return m.forEach(T=>{v=v.next(()=>d.getEntry(u,T)).next(R=>{const S=c.docVersions.get(T);ve(S!==null),R.version.compareTo(S)<0&&(f.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),d.addEntry(R)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ie();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function WA(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function n2(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(ft.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(f,v),function(R,S,E){return R.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,v,d)&&a.push(n.Ur.updateTargetData(s,v))});let u=_r(),c=ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(r2(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(J.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function r2(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=_r();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function i2(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function s2(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Sp(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_l(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function IE(t,e,n){const r=Z(t);let i=J.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=Z(u),m=f._s.get(d);return m!==void 0?U.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,jn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ie())).next(a=>(o2(r,Yb(e),a),{documents:a,Ts:s})))}function o2(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class AE{constructor(){this.activeTargetIds=nL()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a2{constructor(){this.so=new AE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new AE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu=null;function Qd(){return mu===null?mu=function(){return 268435456+Math.round(2147483648*Math.random())}():mu++,"0x"+mu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class h2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Qd(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(G("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Qs("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+po}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=u2[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Qd();return new Promise((o,a)=>{const u=new eA;u.setWithCredentials(!0),u.listenOnce(nA.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Uu.NO_ERROR:const d=u.getResponseJson();G(vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Uu.TIMEOUT:G(vt,`RPC '${e}' ${s} timed out`),a(new H(M.DEADLINE_EXCEEDED,"Request time out"));break;case Uu.HTTP_ERROR:const f=u.getStatus();if(G(vt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const T=function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(E)>=0?E:M.UNKNOWN}(v.status);a(new H(T,v.message))}else a(new H(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new H(M.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{G(vt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(vt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Qd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sA(),a=iA(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new tA({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");G(vt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,v=!1;const T=new c2({Io:S=>{v?G(vt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(m||(G(vt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),G(vt,`RPC '${e}' stream ${i} sending:`,S),f.send(S))},To:()=>f.close()}),R=(S,E,_)=>{S.listen(E,w=>{try{_(w)}catch(N){setTimeout(()=>{throw N},0)}})};return R(f,na.EventType.OPEN,()=>{v||(G(vt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),R(f,na.EventType.CLOSE,()=>{v||(v=!0,G(vt,`RPC '${e}' stream ${i} transport closed`),T.So())}),R(f,na.EventType.ERROR,S=>{v||(v=!0,Qs(vt,`RPC '${e}' stream ${i} transport errored:`,S),T.So(new H(M.UNAVAILABLE,"The operation could not be completed")))}),R(f,na.EventType.MESSAGE,S=>{var E;if(!v){const _=S.data[0];ve(!!_);const w=_,N=w.error||((E=w[0])===null||E===void 0?void 0:E.error);if(N){G(vt,`RPC '${e}' stream ${i} received error:`,N);const L=N.status;let F=function(I){const C=ze[I];if(C!==void 0)return xA(C)}(L),A=N.message;F===void 0&&(F=M.INTERNAL,A="Unknown error status: "+L+" with message "+N.message),v=!0,T.So(new H(F,A)),f.close()}else G(vt,`RPC '${e}' stream ${i} received:`,_),T.bo(_)}}),R(a,rA.STAT_EVENT,S=>{S.stat===fp.PROXY?G(vt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===fp.NOPROXY&&G(vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Yd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t){return new wL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new qA(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(gr(n.toString()),gr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class d2 extends HA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=AL(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Wn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ap(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=yp(u)?{documents:RL(s,u)}:{query:kL(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=LA(s,o.resumeToken);const c=wp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Dc(s,o.snapshotVersion.toTimestamp());const c=wp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=NL(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ap(this.serializer),n.removeTarget=e,this.a_(n)}}class f2 extends HA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=CL(e.writeResults,e.commitTime),r=Wn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ap(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>SL(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Tp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Tp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class m2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(gr(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Xi(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.L_.add(4),await wl(c),c.q_.set("Unknown"),c.L_.delete(4),await Rh(c)}(this))})}),this.q_=new m2(r,i)}}async function Rh(t){if(Xi(t))for(const e of t.B_)await e(!0)}async function wl(t){for(const e of t.B_)await e(!1)}function GA(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),_g(n)?gg(n):go(n).r_()&&mg(n,e))}function pg(t,e){const n=Z(t),r=go(n);n.N_.delete(e),r.r_()&&$A(n,e),n.N_.size===0&&(r.r_()?r.o_():Xi(n)&&n.q_.set("Unknown"))}function mg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}go(t).A_(e)}function $A(t,e){t.Q_.xe(e),go(t).R_(e)}function gg(t){t.Q_=new _L({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),go(t).start(),t.q_.v_()}function _g(t){return Xi(t)&&!go(t).n_()&&t.N_.size>0}function Xi(t){return Z(t).L_.size===0}function KA(t){t.Q_=void 0}async function _2(t){t.q_.set("Online")}async function y2(t){t.N_.forEach((e,n)=>{mg(t,e)})}async function v2(t,e){KA(t),_g(t)?(t.q_.M_(e),gg(t)):t.q_.set("Unknown")}async function E2(t,e,n){if(t.q_.set("Online"),e instanceof bA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xc(t,r)}else if(e instanceof zu?t.Q_.Ke(e):e instanceof OA?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await WA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(ft.EMPTY_BYTE_STRING,d.snapshotVersion)),$A(s,u);const f=new Ur(d.target,u,c,d.sequenceNumber);mg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await xc(t,r)}}async function xc(t,e,n){if(!_l(e))throw e;t.L_.add(1),await wl(t),t.q_.set("Offline"),n||(n=()=>WA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Rh(t)})}function QA(t,e){return e().catch(n=>xc(t,n,e))}async function kh(t){const e=Z(t),n=si(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;w2(e);)try{const i=await i2(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,T2(e,i)}catch(i){await xc(e,i)}YA(e)&&XA(e)}function w2(t){return Xi(t)&&t.O_.length<10}function T2(t,e){t.O_.push(e);const n=si(t);n.r_()&&n.V_&&n.m_(e.mutations)}function YA(t){return Xi(t)&&!si(t).n_()&&t.O_.length>0}function XA(t){si(t).start()}async function I2(t){si(t).p_()}async function A2(t){const e=si(t);for(const n of t.O_)e.m_(n.mutations)}async function S2(t,e,n){const r=t.O_.shift(),i=lg.from(r,e,n);await QA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await kh(t)}async function C2(t,e){e&&si(t).V_&&await async function(r,i){if(function(o){return pL(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();si(r).s_(),await QA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await kh(r)}}(t,e),YA(t)&&XA(t)}async function CE(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Xi(n);n.L_.add(3),await wl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Rh(n)}async function R2(t,e){const n=Z(t);e?(n.L_.delete(2),await Rh(n)):e||(n.L_.add(2),await wl(n),n.q_.set("Unknown"))}function go(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new d2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:_2.bind(null,t),Ro:y2.bind(null,t),mo:v2.bind(null,t),d_:E2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),_g(t)?gg(t):t.q_.set("Unknown")):(await t.K_.stop(),KA(t))})),t.K_}function si(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new f2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:I2.bind(null,t),mo:C2.bind(null,t),f_:A2.bind(null,t),g_:S2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await kh(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new yg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vg(t,e){if(gr("AsyncQueue",`${e}: ${t}`),_l(t))return new H(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=ra(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.W_=new He($.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class to{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new to(e,n,Fs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class P2{constructor(){this.queries=kE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=kE(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new H(M.ABORTED,"Firestore shutting down"))}}function kE(){return new mo(t=>yA(t),wh)}async function Eg(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new k2,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=vg(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Tg(n)}async function wg(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function N2(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Tg(n)}function D2(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Tg(t){t.Y_.forEach(e=>{e.next()})}var Cp,PE;(PE=Cp||(Cp={})).ea="default",PE.Cache="cache";class Ig{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new to(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=to.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Cp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.key=e}}class ZA{constructor(e){this.key=e}}class x2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=vA(e),this.Ra=new Fs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new RE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),v=Th(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),R=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let S=!1;m&&v?m.data.isEqual(v.data)?T!==R&&(r.track({type:3,doc:v}),S=!0):this.ga(m,v)||(r.track({type:2,doc:v}),S=!0,(u&&this.Aa(v,u)>0||c&&this.Aa(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),S=!0):m&&!v&&(r.track({type:1,doc:m}),S=!0,(u||c)&&(a=!0)),S&&(v?(o=o.add(v),s=R?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(v,T){const R=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return R(v)-R(T)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new to(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new RE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new ZA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new JA(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return to.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class O2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class b2{constructor(e){this.key=e,this.va=!1}}class L2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new mo(a=>yA(a),wh),this.Ma=new Map,this.xa=new Set,this.Oa=new He($.comparator),this.Na=new Map,this.La=new hg,this.Ba={},this.ka=new Map,this.qa=eo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function M2(t,e,n=!0){const r=sS(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await eS(r,e,n,!0),i}async function V2(t,e){const n=sS(t);await eS(n,e,!0,!1)}async function eS(t,e,n,r){const i=await s2(t.localStore,jn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await F2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&GA(t.remoteStore,i),a}async function F2(t,e,n,r,i){t.Ka=(f,m,v)=>async function(R,S,E,_){let w=S.view.ma(E);w.ns&&(w=await IE(R.localStore,S.query,!1).then(({documents:A})=>S.view.ma(A,w)));const N=_&&_.targetChanges.get(S.targetId),L=_&&_.targetMismatches.get(S.targetId)!=null,F=S.view.applyChanges(w,R.isPrimaryClient,N,L);return DE(R,S.targetId,F.wa),F.snapshot}(t,f,m,v);const s=await IE(t.localStore,e,!0),o=new x2(e,s.Ts),a=o.ma(s.documents),u=El.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);DE(t,n,c.wa);const d=new O2(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function U2(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!wh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Sp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&pg(r.remoteStore,i.targetId),Rp(r,i.targetId)}).catch(gl)):(Rp(r,i.targetId),await Sp(r.localStore,i.targetId,!0))}async function B2(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pg(n.remoteStore,r.targetId))}async function j2(t,e,n){const r=K2(t);try{const i=await function(o,a){const u=Z(o),c=Xe.now(),d=a.reduce((v,T)=>v.add(T.key),ie());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let T=_r(),R=ie();return u.cs.getEntries(v,d).next(S=>{T=S,T.forEach((E,_)=>{_.isValidDocument()||(R=R.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,T)).next(S=>{f=S;const E=[];for(const _ of a){const w=uL(_,f.get(_.key).overlayedDocument);w!=null&&E.push(new di(_.key,w,cA(w.value.mapValue),zn.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,E,a)}).next(S=>{m=S;const E=S.applyToLocalDocumentSet(f,R);return u.documentOverlayCache.saveOverlays(v,S.batchId,E)})}).then(()=>({batchId:m.batchId,changes:wA(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new He(de)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Tl(r,i.changes),await kh(r.remoteStore)}catch(i){const s=vg(i,"Failed to persist write");n.reject(s)}}async function tS(t,e){const n=Z(t);try{const r=await n2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ve(o.va):i.removedDocuments.size>0&&(ve(o.va),o.va=!1))}),await Tl(n,r,e)}catch(r){await gl(r)}}function NE(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=Z(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&Tg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function z2(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new He($.comparator);o=o.insert(s,Tt.newNoDocument(s,J.min()));const a=ie().add(s),u=new Sh(J.min(),new Map,new He(de),o,a);await tS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ag(r)}else await Sp(r.localStore,e,!1).then(()=>Rp(r,e,n)).catch(gl)}async function W2(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await t2(n.localStore,e);rS(n,r,null),nS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tl(n,i)}catch(i){await gl(i)}}async function q2(t,e,n){const r=Z(t);try{const i=await function(o,a){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(ve(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);rS(r,e,n),nS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tl(r,i)}catch(i){await gl(i)}}function nS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function rS(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Rp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||iS(t,r)})}function iS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(pg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ag(t))}function DE(t,e,n){for(const r of n)r instanceof JA?(t.La.addReference(r.key,e),H2(t,r)):r instanceof ZA?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||iS(t,r.key)):X()}function H2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ag(t))}function Ag(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new $(Se.fromString(e)),r=t.qa.next();t.Na.set(r,new b2(n)),t.Oa=t.Oa.insert(n,r),GA(t.remoteStore,new Ur(jn(Eh(n.path)),r,"TargetPurposeLimboResolution",tg.oe))}}async function Tl(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=fg.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,m=>U.forEach(m.$i,v=>d.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>U.forEach(m.Ui,v=>d.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!_l(f))throw f;G("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=d.os.get(m),T=v.snapshotVersion,R=v.withLastLimboFreeSnapshotVersion(T);d.os=d.os.insert(m,R)}}}(r.localStore,s))}async function G2(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await zA(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new H(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tl(n,r.hs)}}function $2(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function sS(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=z2.bind(null,e),e.Ca.d_=N2.bind(null,e.eventManager),e.Ca.$a=D2.bind(null,e.eventManager),e}function K2(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=W2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q2.bind(null,e),e}class xE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ch(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return e2(this.persistence,new JL,e.initialUser,this.serializer)}createPersistence(e){return new QL(dg.Zr,this.serializer)}createSharedClientState(e){return new a2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Q2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>NE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=G2.bind(null,this.syncEngine),await R2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new P2}()}createDatastore(e){const n=Ch(e.databaseInfo.databaseId),r=function(s){return new h2(s)}(e.databaseInfo);return function(s,o,a,u){return new p2(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new g2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>NE(this.syncEngine,n,0),function(){return SE.D()?new SE:new l2}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new L2(i,s,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);G("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await wl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):gr("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=aA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xd(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await zA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function OE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await J2(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>CE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>CE(e.remoteStore,i)),t._onlineComponents=e}function X2(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function J2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!X2(n))throw n;Qs("Error using user provided cache. Falling back to memory cache: "+n),await Xd(t,new xE)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Xd(t,new xE);return t._offlineComponents}async function oS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await OE(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await OE(t,new Q2))),t._onlineComponents}function Z2(t){return oS(t).then(e=>e.syncEngine)}async function Oc(t){const e=await oS(t),n=e.eventManager;return n.onListen=M2.bind(null,e.syncEngine),n.onUnlisten=U2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=V2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=B2.bind(null,e.syncEngine),n}function eM(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Sg({next:m=>{o.enqueueAndForget(()=>wg(s,f));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new H(M.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&u&&u.source==="server"?c.reject(new H(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Ig(Eh(a.path),d,{includeMetadataChanges:!0,_a:!0});return Eg(s,f)}(await Oc(t),t.asyncQueue,e,n,r)),r.promise}function tM(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Sg({next:m=>{o.enqueueAndForget(()=>wg(s,f)),m.fromCache&&u.source==="server"?c.reject(new H(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Ig(a,d,{includeMetadataChanges:!0,_a:!0});return Eg(s,f)}(await Oc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e,n){if(!n)throw new H(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nM(t,e,n,r){if(e===!0&&r===!0)throw new H(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function LE(t){if(!$.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ME(t){if($.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ph(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ph(t);throw new H(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new VE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new VE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yb;switch(r.type){case"firstParty":return new Tb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=bE.get(n);r&&(G("ComponentProvider","Removing Datastore"),bE.delete(n),r.terminate())}(this),Promise.resolve()}}function rM(t,e,n,r={}){var i;const s=(t=dn(t,Nh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Et.MOCK_USER;else{a=uI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Et(c)}t._authCredentials=new vb(new oA(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ji(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Jr extends Ji{constructor(e,n,r){super(e,n,Eh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new $(e))}withConverter(e){return new Jr(this.firestore,e,this._path)}}function Wu(t,e,...n){if(t=Ne(t),lS("collection","path",e),t instanceof Nh){const r=Se.fromString(e,...n);return ME(r),new Jr(t,null,r)}{if(!(t instanceof Ct||t instanceof Jr))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return ME(r),new Jr(t.firestore,null,r)}}function nt(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=aA.newId()),lS("doc","path",e),t instanceof Nh){const r=Se.fromString(e,...n);return LE(r),new Ct(t,null,new $(r))}{if(!(t instanceof Ct||t instanceof Jr))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return LE(r),new Ct(t.firestore,t instanceof Jr?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new qA(this,"async_queue_retry"),this.Eu=()=>{const n=Yd();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Yd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Yd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new sr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!_l(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw gr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=yg.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&X()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function FE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class zi extends Nh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new iM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uS(this),this._firestoreClient.terminate()}}function sM(t,e){const n=typeof t=="object"?t:qm(),r=typeof t=="string"?t:"(default)",i=mh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=oI("firestore");s&&rM(i,...s)}return i}function Dh(t){return t._firestoreClient||uS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new Lb(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,aS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Y2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this._byteString=e}static fromBase64String(e){try{return new no(ft.fromBase64String(e))}catch(n){throw new H(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new no(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=/^__.*__$/;class aM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new di(e,this.data,this.fieldMask,n,this.fieldTransforms):new vl(e,this.data,n,this.fieldTransforms)}}class cS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Oh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Oh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return bc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(hS(this.wu)&&oM.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class lM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ch(e)}Nu(e,n,r,i=!1){return new Oh({wu:e,methodName:n,Ou:r,path:ut.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kg(t){const e=t._freezeSettings(),n=Ch(t._databaseId);return new lM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uM(t,e,n,r,i,s={}){const o=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);Dg("Data must be an object, but it was:",o,r);const a=dS(r,o);let u,c;if(s.merge)u=new Xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=kp(e,f,n);if(!o.contains(m))throw new H(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);pS(d,m)||d.push(m)}u=new Xt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new aM(new jt(a),u,c)}class bh extends Il{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bh}}function cM(t,e,n){return new Oh({wu:3,Ou:e.settings.Ou,methodName:t._methodName,Du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Pg extends Il{_toFieldTransform(e){return new kA(e.path,new el)}isEqual(e){return e instanceof Pg}}class Ng extends Il{constructor(e,n){super(e),this.Lu=n}_toFieldTransform(e){const n=cM(this,e,!0),r=this.Lu.map(s=>_o(s,n)),i=new Zs(r);return new kA(e.path,i)}isEqual(e){return e instanceof Ng&&Ga(this.Lu,e.Lu)}}function hM(t,e,n,r){const i=t.Nu(1,e,n);Dg("Data must be an object, but it was:",i,r);const s=[],o=jt.empty();Yi(r,(u,c)=>{const d=xg(e,u,n);c=Ne(c);const f=i.Cu(d);if(c instanceof bh)s.push(d);else{const m=_o(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new Xt(s);return new cS(o,a,i.fieldTransforms)}function dM(t,e,n,r,i,s){const o=t.Nu(1,e,n),a=[kp(e,r,n)],u=[i];if(s.length%2!=0)throw new H(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(kp(e,s[m])),u.push(s[m+1]);const c=[],d=jt.empty();for(let m=a.length-1;m>=0;--m)if(!pS(c,a[m])){const v=a[m];let T=u[m];T=Ne(T);const R=o.Cu(v);if(T instanceof bh)c.push(v);else{const S=_o(T,R);S!=null&&(c.push(v),d.set(v,S))}}const f=new Xt(c);return new cS(d,f,o.fieldTransforms)}function fM(t,e,n,r=!1){return _o(n,t.Nu(r?4:3,e))}function _o(t,e){if(fS(t=Ne(t)))return Dg("Unsupported field value:",e,t),dS(t,e);if(t instanceof Il)return function(r,i){if(!hS(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=_o(a,i.Fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Xe.fromDate(r);return{timestampValue:Dc(i.serializer,s)}}if(r instanceof Xe){const s=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dc(i.serializer,s)}}if(r instanceof Cg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof no)return{bytesValue:LA(i.serializer,r._byteString)};if(r instanceof Ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Rg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Mu("VectorValues must only contain numeric values.");return ag(a.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Ph(r)}`)}(t,e)}function dS(t,e){const n={};return lA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(t,(r,i)=>{const s=_o(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Cg||t instanceof no||t instanceof Ct||t instanceof Il||t instanceof Rg)}function Dg(t,e,n){if(!fS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ph(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function kp(t,e,n){if((e=Ne(e))instanceof xh)return e._internalPath;if(typeof e=="string")return xg(t,e);throw bc("Field path arguments must be of type string or ",t,!1,void 0,n)}const pM=new RegExp("[~\\*/\\[\\]]");function xg(t,e,n){if(e.search(pM)>=0)throw bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xh(...e.split("."))._internalPath}catch{throw bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(M.INVALID_ARGUMENT,a+t+u)}function pS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Og("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mM extends mS{data(){return super.data()}}function Og(t,e){return typeof e=="string"?xg(t,e):e instanceof xh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bg{}class gM extends bg{}function _S(t,e,...n){let r=[];e instanceof bg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Lg).length,a=s.filter(u=>u instanceof Lh).length;if(o>1||o>0&&a>0)throw new H(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Lh extends gM{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lh(e,n,r)}_apply(e){const n=this._parse(e);return vS(e._query,n),new Ji(e.firestore,e.converter,vp(e._query,n))}_parse(e){const n=kg(e.firestore);return function(s,o,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){BE(f,d);const v=[];for(const T of f)v.push(UE(u,s,T));m={arrayValue:{values:v}}}else m=UE(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||BE(f,d),m=fM(a,o,f,d==="in"||d==="not-in");return qe.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function yS(t,e,n){const r=e,i=Og("where",t);return Lh._create(i,r,n)}class Lg extends bg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)vS(o,u),o=vp(o,u)}(e._query,n),new Ji(e.firestore,e.converter,vp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function UE(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new H(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_A(e)&&n.indexOf("/")!==-1)throw new H(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!$.isDocumentKey(r))throw new H(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return oE(t,new $(r))}if(n instanceof Ct)return oE(t,n._key);throw new H(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ph(n)}.`)}function BE(t,e){if(!Array.isArray(t)||t.length===0)throw new H(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class _M{convertValue(e,n="none"){switch(ji(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ue(o.doubleValue));return new Rg(s)}convertGeoPoint(e){return new Cg(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const n=ii(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);ve(jA(r));const i=new Ja(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||gr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ES extends mS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Og("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qu extends ES{data(e={}){return super.data(e)}}class wS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new sa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qu(this._firestore,this._userDataWriter,r.key,r,new sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new qu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new sa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new qu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new sa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:vM(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){t=dn(t,Ct);const e=dn(t.firestore,zi);return eM(Dh(e),t._key).then(n=>SS(e,t,n))}class Mg extends _M{constructor(e){super(),this.firestore=e}convertBytes(e){return new no(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function TS(t){t=dn(t,Ji);const e=dn(t.firestore,zi),n=Dh(e),r=new Mg(e);return gS(t._query),tM(n,t._query).then(i=>new wS(e,r,t,i))}function Pp(t,e,n){t=dn(t,Ct);const r=dn(t.firestore,zi),i=yM(t.converter,e);return AS(r,[uM(kg(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zn.none())])}function Tn(t,e,n,...r){t=dn(t,Ct);const i=dn(t.firestore,zi),s=kg(i);let o;return o=typeof(e=Ne(e))=="string"||e instanceof xh?dM(s,"updateDoc",t._key,e,n,r):hM(s,"updateDoc",t._key,e),AS(i,[o.toMutation(t._key,zn.exists(!0))])}function IS(t,...e){var n,r,i;t=Ne(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||FE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(FE(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof Ct)c=dn(t.firestore,zi),d=Eh(t._key.path),u={next:f=>{e[o]&&e[o](SS(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=dn(t,Ji);c=dn(f.firestore,zi),d=f._query;const m=new Mg(c);u={next:v=>{e[o]&&e[o](new wS(c,m,f,v))},error:e[o+1],complete:e[o+2]},gS(t._query)}return function(m,v,T,R){const S=new Sg(R),E=new Ig(v,S,T);return m.asyncQueue.enqueueAndForget(async()=>Eg(await Oc(m),E)),()=>{S.za(),m.asyncQueue.enqueueAndForget(async()=>wg(await Oc(m),E))}}(Dh(c),d,a,u)}function AS(t,e){return function(r,i){const s=new sr;return r.asyncQueue.enqueueAndForget(async()=>j2(await Z2(r),i,s)),s.promise}(Dh(t),e)}function SS(t,e,n){const r=n.docs.get(e._key),i=new Mg(t);return new ES(t,i,e._key,r,new sa(n.hasPendingWrites,n.fromCache),e.converter)}function EM(){return new Pg("serverTimestamp")}function Lc(...t){return new Ng("arrayUnion",t)}(function(e,n=!0){(function(i){po=i})(ci),ni(new fr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new zi(new Eb(r.getProvider("auth-internal")),new Ab(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ja(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),hn(tE,"4.7.1",e),hn(tE,"4.7.1","esm2017")})();function CS(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=CS(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Br(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=CS(t))&&(r&&(r+=" "),r+=e);return r}const nl=t=>typeof t=="number"&&!isNaN(t),Ni=t=>typeof t=="string",Jt=t=>typeof t=="function",Hu=t=>Ni(t)||Jt(t)?t:null,Np=t=>b.isValidElement(t)||Ni(t)||Jt(t)||nl(t);function wM(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Mh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:u,preventExitTransition:c,done:d,nodeRef:f,isIn:m,playToast:v}=o;const T=r?`${e}--${u}`:e,R=r?`${n}--${u}`:n,S=b.useRef(0);return b.useLayoutEffect(()=>{const E=f.current,_=T.split(" "),w=N=>{N.target===f.current&&(v(),E.removeEventListener("animationend",w),E.removeEventListener("animationcancel",w),S.current===0&&N.type!=="animationcancel"&&E.classList.remove(..._))};E.classList.add(..._),E.addEventListener("animationend",w),E.addEventListener("animationcancel",w)},[]),b.useEffect(()=>{const E=f.current,_=()=>{E.removeEventListener("animationend",_),i?wM(E,d,s):d()};m||(c?_():(S.current=1,E.className+=` ${R}`,E.addEventListener("animationend",_)))},[m]),ge.createElement(ge.Fragment,null,a)}}function jE(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const bt=new Map;let rl=[];const Dp=new Set,TM=t=>Dp.forEach(e=>e(t)),RS=()=>bt.size>0;function kS(t,e){var n;if(e)return!((n=bt.get(e))==null||!n.isToastActive(t));let r=!1;return bt.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function PS(t,e){Np(t)&&(RS()||rl.push({content:t,options:e}),bt.forEach(n=>{n.buildToast(t,e)}))}function zE(t,e){bt.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function IM(t){const{subscribe:e,getSnapshot:n,setProps:r}=b.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const u=function(d,f,m){let v=1,T=0,R=[],S=[],E=[],_=f;const w=new Map,N=new Set,L=()=>{E=Array.from(w.values()),N.forEach(g=>g())},F=g=>{S=g==null?[]:S.filter(I=>I!==g),L()},A=g=>{const{toastId:I,onOpen:C,updateId:P,children:D}=g.props,k=P==null;g.staleId&&w.delete(g.staleId),w.set(I,g),S=[...S,g.props.toastId].filter(Ve=>Ve!==g.staleId),L(),m(jE(g,k?"added":"updated")),k&&Jt(C)&&C(b.isValidElement(D)&&D.props)};return{id:d,props:_,observe:g=>(N.add(g),()=>N.delete(g)),toggle:(g,I)=>{w.forEach(C=>{I!=null&&I!==C.props.toastId||Jt(C.toggle)&&C.toggle(g)})},removeToast:F,toasts:w,clearQueue:()=>{T-=R.length,R=[]},buildToast:(g,I)=>{if((ee=>{let{containerId:oe,toastId:Fe,updateId:je}=ee;const st=oe?oe!==d:d!==1,Pt=w.has(Fe)&&je==null;return st||Pt})(I))return;const{toastId:C,updateId:P,data:D,staleId:k,delay:Ve}=I,Ft=()=>{F(C)},Nn=P==null;Nn&&T++;const Ge={..._,style:_.toastStyle,key:v++,...Object.fromEntries(Object.entries(I).filter(ee=>{let[oe,Fe]=ee;return Fe!=null})),toastId:C,updateId:P,data:D,closeToast:Ft,isIn:!1,className:Hu(I.className||_.toastClassName),bodyClassName:Hu(I.bodyClassName||_.bodyClassName),progressClassName:Hu(I.progressClassName||_.progressClassName),autoClose:!I.isLoading&&(z=I.autoClose,K=_.autoClose,z===!1||nl(z)&&z>0?z:K),deleteToast(){const ee=w.get(C),{onClose:oe,children:Fe}=ee.props;Jt(oe)&&oe(b.isValidElement(Fe)&&Fe.props),m(jE(ee,"removed")),w.delete(C),T--,T<0&&(T=0),R.length>0?A(R.shift()):L()}};var z,K;Ge.closeButton=_.closeButton,I.closeButton===!1||Np(I.closeButton)?Ge.closeButton=I.closeButton:I.closeButton===!0&&(Ge.closeButton=!Np(_.closeButton)||_.closeButton);let Q=g;b.isValidElement(g)&&!Ni(g.type)?Q=b.cloneElement(g,{closeToast:Ft,toastProps:Ge,data:D}):Jt(g)&&(Q=g({closeToast:Ft,toastProps:Ge,data:D}));const fe={content:Q,props:Ge,staleId:k};_.limit&&_.limit>0&&T>_.limit&&Nn?R.push(fe):nl(Ve)?setTimeout(()=>{A(fe)},Ve):A(fe)},setProps(g){_=g},setToggle:(g,I)=>{w.get(g).toggle=I},isToastActive:g=>S.some(I=>I===g),getSnapshot:()=>_.newestOnTop?E.reverse():E}}(o,s,TM);bt.set(o,u);const c=u.observe(a);return rl.forEach(d=>PS(d.content,d.options)),rl=[],()=>{c(),bt.delete(o)}},setProps(a){var u;(u=bt.get(o))==null||u.setProps(a)},getSnapshot(){var a;return(a=bt.get(o))==null?void 0:a.getSnapshot()}}}(t)).current;r(t);const i=b.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(a=>{const{position:u}=a.props;o.has(u)||o.set(u,[]),o.get(u).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:kS,count:i==null?void 0:i.length}}function AM(t){const[e,n]=b.useState(!1),[r,i]=b.useState(!1),s=b.useRef(null),o=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:f}=t;var m,v;function T(){n(!0)}function R(){n(!1)}function S(w){const N=s.current;o.canDrag&&N&&(o.didMove=!0,e&&R(),o.delta=t.draggableDirection==="x"?w.clientX-o.start:w.clientY-o.start,o.start!==w.clientX&&(o.canCloseOnClick=!1),N.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,N.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function E(){document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",E);const w=s.current;if(o.canDrag&&o.didMove&&w){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();w.style.transition="transform 0.2s, opacity 0.2s",w.style.removeProperty("transform"),w.style.removeProperty("opacity")}}(v=bt.get((m={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||v.setToggle(m.id,m.fn),b.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||R(),window.addEventListener("focus",T),window.addEventListener("blur",R),()=>{window.removeEventListener("focus",T),window.removeEventListener("blur",R)}},[t.pauseOnFocusLoss]);const _={onPointerDown:function(w){if(t.draggable===!0||t.draggable===w.pointerType){o.didMove=!1,document.addEventListener("pointermove",S),document.addEventListener("pointerup",E);const N=s.current;o.canCloseOnClick=!0,o.canDrag=!0,N.style.transition="none",t.draggableDirection==="x"?(o.start=w.clientX,o.removalDistance=N.offsetWidth*(t.draggablePercent/100)):(o.start=w.clientY,o.removalDistance=N.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(w){const{top:N,bottom:L,left:F,right:A}=s.current.getBoundingClientRect();w.nativeEvent.type!=="touchend"&&t.pauseOnHover&&w.clientX>=F&&w.clientX<=A&&w.clientY>=N&&w.clientY<=L?R():T()}};return a&&u&&(_.onMouseEnter=R,t.stacked||(_.onMouseLeave=T)),f&&(_.onClick=w=>{d&&d(w),o.canCloseOnClick&&c()}),{playToast:T,pauseToast:R,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:_}}function SM(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:u,progress:c,rtl:d,isIn:f,theme:m}=t;const v=s||u&&c===0,T={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(T.transform=`scaleX(${c})`);const R=Br("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),S=Jt(o)?o({rtl:d,type:i,defaultClassName:R}):Br(R,o),E={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{f&&r()}};return ge.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},ge.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${i}`}),ge.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:S,style:T,...E}))}let CM=1;const NS=()=>""+CM++;function RM(t){return t&&(Ni(t.toastId)||nl(t.toastId))?t.toastId:NS()}function Ea(t,e){return PS(t,e),e.toastId}function Mc(t,e){return{...e,type:e&&e.type||t,toastId:RM(e)}}function gu(t){return(e,n)=>Ea(e,Mc(t,n))}function te(t,e){return Ea(t,Mc("default",e))}te.loading=(t,e)=>Ea(t,Mc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),te.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Ni(i)?te.loading(i,n):te.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,f,m)=>{if(f==null)return void te.dismiss(r);const v={type:d,...a,...n,data:m},T=Ni(f)?{render:f}:f;return r?te.update(r,{...v,...T}):te(T.render,{...v,...T}),m},c=Jt(t)?t():t;return c.then(d=>u("success",o,d)).catch(d=>u("error",s,d)),c},te.success=gu("success"),te.info=gu("info"),te.error=gu("error"),te.warning=gu("warning"),te.warn=te.warning,te.dark=(t,e)=>Ea(t,Mc("default",{theme:"dark",...e})),te.dismiss=function(t){(function(e){var n;if(RS()){if(e==null||Ni(n=e)||nl(n))bt.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=bt.get(e.containerId);r?r.removeToast(e.id):bt.forEach(i=>{i.removeToast(e.id)})}}else rl=rl.filter(r=>e!=null&&r.options.toastId!==e)})(t)},te.clearWaitingQueue=function(t){t===void 0&&(t={}),bt.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},te.isActive=kS,te.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=bt.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:NS()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Ea(o,s)}},te.done=t=>{te.update(t,{progress:1})},te.onChange=function(t){return Dp.add(t),()=>{Dp.delete(t)}},te.play=t=>zE(!0,t),te.pause=t=>zE(!1,t);const kM=typeof window<"u"?b.useLayoutEffect:b.useEffect,_u=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return ge.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Jd={info:function(t){return ge.createElement(_u,{...t},ge.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return ge.createElement(_u,{...t},ge.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return ge.createElement(_u,{...t},ge.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return ge.createElement(_u,{...t},ge.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ge.createElement("div",{className:"Toastify__spinner"})}},PM=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=AM(t),{closeButton:o,children:a,autoClose:u,onClick:c,type:d,hideProgressBar:f,closeToast:m,transition:v,position:T,className:R,style:S,bodyClassName:E,bodyStyle:_,progressClassName:w,progressStyle:N,updateId:L,role:F,progress:A,rtl:g,toastId:I,deleteToast:C,isIn:P,isLoading:D,closeOnClick:k,theme:Ve}=t,Ft=Br("Toastify__toast",`Toastify__toast-theme--${Ve}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":g},{"Toastify__toast--close-on-click":k}),Nn=Jt(R)?R({rtl:g,position:T,type:d,defaultClassName:Ft}):Br(Ft,R),Ge=function(fe){let{theme:ee,type:oe,isLoading:Fe,icon:je}=fe,st=null;const Pt={theme:ee,type:oe};return je===!1||(Jt(je)?st=je({...Pt,isLoading:Fe}):b.isValidElement(je)?st=b.cloneElement(je,Pt):Fe?st=Jd.spinner():(qh=>qh in Jd)(oe)&&(st=Jd[oe](Pt))),st}(t),z=!!A||!u,K={closeToast:m,type:d,theme:Ve};let Q=null;return o===!1||(Q=Jt(o)?o(K):b.isValidElement(o)?b.cloneElement(o,K):function(fe){let{closeToast:ee,theme:oe,ariaLabel:Fe="close"}=fe;return ge.createElement("button",{className:`Toastify__close-button Toastify__close-button--${oe}`,type:"button",onClick:je=>{je.stopPropagation(),ee(je)},"aria-label":Fe},ge.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ge.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(K)),ge.createElement(v,{isIn:P,done:C,position:T,preventExitTransition:n,nodeRef:r,playToast:s},ge.createElement("div",{id:I,onClick:c,"data-in":P,className:Nn,...i,style:S,ref:r},ge.createElement("div",{...P&&{role:F},className:Jt(E)?E({type:d}):Br("Toastify__toast-body",E),style:_},Ge!=null&&ge.createElement("div",{className:Br("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},Ge),ge.createElement("div",null,a)),Q,ge.createElement(SM,{...L&&!z?{key:`pb-${L}`}:{},rtl:g,theme:Ve,delay:u,isRunning:e,isIn:P,closeToast:m,hide:f,type:d,style:N,className:w,controlledProgress:z,progress:A||0})))},Vh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},NM=Mh(Vh("bounce",!0));Mh(Vh("slide",!0));Mh(Vh("zoom"));Mh(Vh("flip"));const DM={position:"top-right",transition:NM,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function xM(t){let e={...DM,...t};const n=t.stacked,[r,i]=b.useState(!0),s=b.useRef(null),{getToastToRender:o,isToastActive:a,count:u}=IM(e),{className:c,style:d,rtl:f,containerId:m}=e;function v(R){const S=Br("Toastify__toast-container",`Toastify__toast-container--${R}`,{"Toastify__toast-container--rtl":f});return Jt(c)?c({position:R,rtl:f,defaultClassName:S}):Br(S,Hu(c))}function T(){n&&(i(!0),te.play())}return kM(()=>{if(n){var R;const S=s.current.querySelectorAll('[data-in="true"]'),E=12,_=(R=e.position)==null?void 0:R.includes("top");let w=0,N=0;Array.from(S).reverse().forEach((L,F)=>{const A=L;A.classList.add("Toastify__toast--stacked"),F>0&&(A.dataset.collapsed=`${r}`),A.dataset.pos||(A.dataset.pos=_?"top":"bot");const g=w*(r?.2:1)+(r?0:E*F);A.style.setProperty("--y",`${_?g:-1*g}px`),A.style.setProperty("--g",`${E}`),A.style.setProperty("--s",""+(1-(r?N:0))),w+=A.offsetHeight,N+=.025})}},[r,u,n]),ge.createElement("div",{ref:s,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),te.pause())},onMouseLeave:T},o((R,S)=>{const E=S.length?{...d}:{...d,pointerEvents:"none"};return ge.createElement("div",{className:v(R),style:E,key:`container-${R}`},S.map(_=>{let{content:w,props:N}=_;return ge.createElement(PM,{...N,stacked:n,collapseAll:T,isIn:a(N.toastId,N.containerId),style:N.style,key:`toast-${N.key}`},w)}))}))}const OM={apiKey:"AIzaSyBEwJb5se9jfb-NsH0GD7XtJIvD9s_Ft2E",authDomain:"chat-app-fee23.firebaseapp.com",projectId:"chat-app-fee23",storageBucket:"chat-app-fee23.appspot.com",messagingSenderId:"220649867979",appId:"1:220649867979:web:3647ef822b3a9c4ed2294e"},DS=mI(OM),Zi=gb(DS),Ke=sM(DS),bM=async(t,e,n)=>{try{const i=(await tO(Zi,e,n)).user;await Pp(nt(Ke,"users",i.uid),{id:i.uid,username:t.toLowerCase(),email:e,name:"",avatar:"",bio:"Hey, There I am using this app",lastSeen:Date.now()}),await Pp(nt(Ke,"chats",i.uid),{chatsData:[]})}catch(r){console.error(r),te.error(r.code.split("/")[1].split("-").join(" "))}},LM=async(t,e)=>{try{await nO(Zi,t,e)}catch(n){console.error(n),te.error(n.code.split("/")[1].split("-").join(" "))}},WE=async()=>{try{await sO(Zi)}catch(t){console.error(t),te.error(t.code.split("/")[1].split("-").join(" "))}},MM=async t=>{if(!t)return te.error("Enter your email"),null;try{const e=Wu(Ke,"users"),n=_S(e,yS("email","==",t));(await TS(n)).empty?te.error("Email doesn't exists"):(await eO(Zi,t),te.success("Reset Email Sent"))}catch(e){console.error(e),te.error(e.message)}},VM=()=>{const[t,e]=b.useState("Sign up"),[n,r]=b.useState(""),[i,s]=b.useState(""),[o,a]=b.useState(""),u=c=>{c.preventDefault(),t==="Sign up"?bM(n,i,o):LM(i,o)};return V.jsxs("div",{className:"login",children:[V.jsx("img",{src:Qt.logo_big,alt:"",className:"logo"}),V.jsxs("form",{onSubmit:u,className:"login-form",children:[V.jsx("h2",{children:t}),t==="Sign up"?V.jsx("input",{onChange:c=>r(c.target.value),value:n,type:"text",placeholder:"username",className:"form-input",required:!0}):null,V.jsx("input",{onChange:c=>s(c.target.value),value:i,type:"email",placeholder:"Email address",className:"form-input",required:!0}),V.jsx("input",{onChange:c=>a(c.target.value),value:o,type:"password",placeholder:"password",className:"form-input",required:!0}),V.jsx("button",{type:"submit",children:t==="Sign up"?"Create account":"Login now"}),V.jsxs("div",{className:"login-term",children:[V.jsx("input",{type:"checkbox"}),V.jsx("p",{children:"Agree to the terms of use & privacy policy"})]}),V.jsxs("div",{className:"login-forget",children:[t==="Sign up"?V.jsxs("p",{className:"login-toggle",children:["Already have an account ",V.jsx("span",{onClick:()=>e("Login"),children:"click here"})]}):V.jsxs("p",{className:"login-toggle",children:["Create an account ",V.jsx("span",{onClick:()=>e("Sign up"),children:"click here"})]}),t==="Login"?V.jsxs("p",{className:"login-toggle",children:["Forgot Password ",V.jsx("span",{onClick:()=>MM(i),children:"reset here"})]}):null]})]})]})},es=b.createContext(),FM=t=>{const e=hh(),[n,r]=b.useState(null),[i,s]=b.useState(null),[o,a]=b.useState(null),[u,c]=b.useState([]),[d,f]=b.useState(null),[m,v]=b.useState(!1),T=async S=>{try{const E=nt(Ke,"users",S),w=(await or(E)).data();r(w),w!=null&&w.avatar&&(w!=null&&w.name)?e("/chat"):e("/profile"),await Tn(E,{lastSeen:Date.now()}),setInterval(async()=>{Zi.currentUser&&await Tn(E,{lastSeen:Date.now()})},6e4)}catch(E){console.error("Error loading user data:",E)}};b.useEffect(()=>{if(n){const S=nt(Ke,"chats",n.id),E=IS(S,async _=>{const w=_.data().chatsData,N=[];for(const L of w){const F=nt(Ke,"users",L.rId),g=(await or(F)).data();N.push({...L,userData:g})}return s(N.sort((L,F)=>F.updatedAt-L.updatedAt)),()=>{E()}})}},[n]);const R={userData:n,setUserData:r,chatData:i,setChatData:s,loadUserData:T,messages:u,setMessages:c,messagesId:o,setMessagesId:a,chatUser:d,setChatUser:f,chatVisual:m,setChatVisual:v};return V.jsx(es.Provider,{value:R,children:t.children})};var qE={};const HE="@firebase/database",GE="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xS="";function UM(t){xS=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),lt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ha(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new BM(e)}}catch{}return new jM},Si=OS("localStorage"),zM=OS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new ph("@firebase/database"),WM=function(){let t=1;return function(){return t++}}(),bS=function(t){const e=KN(t),n=new WN;n.update(e);const r=n.digest();return Bm.encodeByteArray(r)},Al=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Al.apply(null,r):typeof r=="object"?e+=lt(r):e+=r,e+=" "}return e};let wa=null,$E=!0;const qM=function(t,e){W(!e,"Can't turn on custom loggers persistently."),Us.logLevel=re.VERBOSE,wa=Us.log.bind(Us)},It=function(...t){if($E===!0&&($E=!1,wa===null&&zM.get("logging_enabled")===!0&&qM()),wa){const e=Al.apply(null,t);wa(e)}},Sl=function(t){return function(...e){It(t,...e)}},xp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Al(...t);Us.error(e)},Wi=function(...t){const e=`FIREBASE FATAL ERROR: ${Al(...t)}`;throw Us.error(e),new Error(e)},tn=function(...t){const e="FIREBASE WARNING: "+Al(...t);Us.warn(e)},HM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},LS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},GM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ro="[MIN_NAME]",qi="[MAX_NAME]",yo=function(t,e){if(t===e)return 0;if(t===ro||e===qi)return-1;if(e===ro||t===qi)return 1;{const n=KE(t),r=KE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},$M=function(t,e){return t===e?0:t<e?-1:1},Ho=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+lt(e))},Vg=function(t){if(typeof t!="object"||t===null)return lt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=lt(e[r]),n+=":",n+=Vg(t[e[r]]);return n+="}",n},MS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function mn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const VS=function(t){W(!LS(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},KM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},QM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},YM=new RegExp("^-?(0*)\\d{1,10}$"),XM=-2147483648,JM=2147483647,KE=function(t){if(YM.test(t)){const e=Number(t);if(e>=XM&&e<=JM)return e}return null},Cl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw tn("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ta=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){tn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(It("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="5",FS="v",US="s",BS="r",jS="f",zS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,WS="ls",qS="p",Op="ac",HS="websocket",GS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Si.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Si.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $S(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let r;if(e===HS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===GS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rV(t)&&(n.ns=t.namespace);const i=[];return mn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(){this.counters_={}}incrementCounter(e,n=1){vr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return CN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd={},ef={};function Ug(t){const e=t.toString();return Zd[e]||(Zd[e]=new iV),Zd[e]}function sV(t,e){const n=t.toString();return ef[n]||(ef[n]=e()),ef[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Cl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="start",aV="close",lV="pLPCommand",uV="pRTLPCB",KS="id",QS="pw",YS="ser",cV="cb",hV="seg",dV="ts",fV="d",pV="dframe",XS=1870,JS=30,mV=XS-JS,gV=25e3,_V=3e4;class Rs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Sl(e),this.stats_=Ug(n),this.urlFn=u=>(this.appCheckToken&&(u[Op]=this.appCheckToken),$S(n,GS,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new oV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_V)),GM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bg((...s)=>{const[o,a,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===QE)this.id=a,this.password=u;else if(o===aV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[QE]="t",r[YS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[cV]=this.scriptTagHolder.uniqueCallbackIdentifier),r[FS]=Fg,this.transportSessionId&&(r[US]=this.transportSessionId),this.lastSessionId&&(r[WS]=this.lastSessionId),this.applicationId&&(r[qS]=this.applicationId),this.appCheckToken&&(r[Op]=this.appCheckToken),typeof location<"u"&&location.hostname&&zS.test(location.hostname)&&(r[BS]=jS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rs.forceAllow_=!0}static forceDisallow(){Rs.forceDisallow_=!0}static isAvailable(){return Rs.forceAllow_?!0:!Rs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!KM()&&!QM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=rI(n),i=MS(r,mV);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[pV]="t",r[KS]=e,r[QS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=lt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=WM(),window[lV+this.uniqueCallbackIdentifier]=e,window[uV+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){It("frame writing exception"),a.stack&&It(a.stack),It(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||It("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[KS]=this.myID,e[QS]=this.myPW,e[YS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+JS+r.length<=XS;){const o=this.pendingSegs.shift();r=r+"&"+hV+i+"="+o.seg+"&"+dV+i+"="+o.ts+"&"+fV+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(gV)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{It("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV=16384,vV=45e3;let Vc=null;typeof MozWebSocket<"u"?Vc=MozWebSocket:typeof WebSocket<"u"&&(Vc=WebSocket);class wn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Sl(this.connId),this.stats_=Ug(n),this.connURL=wn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[FS]=Fg,typeof location<"u"&&location.hostname&&zS.test(location.hostname)&&(o[BS]=jS),n&&(o[US]=n),r&&(o[WS]=r),i&&(o[Op]=i),s&&(o[qS]=s),$S(e,HS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Si.set("previous_websocket_failure",!0);try{let r;hI(),this.mySock=new Vc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){wn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Vc!==null&&!wn.forceDisallow_}static previouslyFailed(){return Si.isInMemoryStorage||Si.get("previous_websocket_failure")===!0}markConnectionHealthy(){Si.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ha(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=lt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=MS(n,yV);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wn.responsesRequiredToBeHealthy=2;wn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rs,wn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=wn&&wn.isAvailable();let r=n&&!wn.previouslyFailed();if(e.webSocketOnly&&(n||tn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wn];else{const i=this.transports_=[];for(const s of il.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);il.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}il.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV=6e4,wV=5e3,TV=10*1024,IV=100*1024,tf="t",YE="d",AV="s",XE="r",SV="e",JE="o",ZE="a",e0="n",t0="p",CV="h";class RV{constructor(e,n,r,i,s,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Sl("c:"+this.id+":"),this.transportManager_=new il(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ta(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tf in e){const n=e[tf];n===ZE?this.upgradeIfSecondaryHealthy_():n===XE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===JE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ho("t",e),r=Ho("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:t0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ZE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:e0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ho("t",e),r=Ho("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ho(tf,e);if(YE in e){const r=e[YE];if(n===CV){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===e0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===AV?this.onConnectionShutdown_(r):n===XE?this.onReset_(r):n===SV?xp("Server Error: "+r):n===JE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Fg!==r&&tn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ta(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(EV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ta(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:t0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Si.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends eC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fc}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=32,r0=768;class Re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Re("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function oi(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Re(t.pieces_,e)}function tC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function nC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Re(e,0)}function rt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Re(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function un(t,e){const n=le(t),r=le(e);if(n===null)return e;if(n===r)return un(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iC(t,e){if(oi(t)!==oi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function In(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(oi(t)>oi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class PV{constructor(e,n){this.errorPrefix_=n,this.parts_=nC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=fh(this.parts_[r]);sC(this)}}function NV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fh(e),sC(t)}function DV(t){const e=t.parts_.pop();t.byteLength_-=fh(e),t.parts_.length>0&&(t.byteLength_-=1)}function sC(t){if(t.byteLength_>r0)throw new Error(t.errorPrefix_+"has a key path longer than "+r0+" bytes ("+t.byteLength_+").");if(t.parts_.length>n0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+n0+") or object contains a cycle "+Ei(t))}function Ei(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends eC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new jg}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=1e3,xV=60*5*1e3,i0=30*1e3,OV=1.3,bV=3e4,LV="server_kill",s0=3;class ar extends ZS{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=ar.nextPersistentConnectionId_++,this.log_=Sl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Go,this.maxReconnectDelay_=xV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!hI())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(lt(s)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new jm,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;ar.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vr(e,"w")){const r=Ks(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();tn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=i0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+lt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xp("Unrecognized action received from server: "+lt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Go,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Go,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bV&&(this.reconnectDelay_=Go),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*OV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ar.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){W(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?It("getToken() completed but was canceled"):(It("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new RV(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{tn(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(LV)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&tn(f),u())}}}interrupt(e){It("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){It("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ip(this.interruptReasons_)&&(this.reconnectDelay_=Go,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Vg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){It("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=s0&&(this.reconnectDelay_=i0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){It("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=s0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xS.replace(/\./g,"-")]=1,zm()?e["framework.cordova"]=1:cI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fc.getInstance().currentlyOnline();return ip(this.interruptReasons_)&&e}}ar.nextPersistentConnectionId_=0;ar.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ue(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ue(ro,e),i=new ue(ro,n);return this.compare(r,i)!==0}minPost(){return ue.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;class oC extends Fh{static get __EMPTY_NODE(){return yu}static set __EMPTY_NODE(e){yu=e}compare(e,n){return yo(e.name,n.name)}isDefinedOn(e){throw co("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ue.MIN}maxPost(){return new ue(qi,yu)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,yu)}toString(){return".key"}}const Bs=new oC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??tt.RED,this.left=i??Wt.EMPTY_NODE,this.right=s??Wt.EMPTY_NODE}copy(e,n,r,i,s){return new tt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Wt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class MV{copy(e,n,r,i,s){return this}insert(e,n,r){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Wt{constructor(e,n=Wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new Wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vu(this.root_,null,this.comparator_,!0,e)}}Wt.EMPTY_NODE=new MV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VV(t,e){return yo(t.name,e.name)}function zg(t,e){return yo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bp;function FV(t){bp=t}const aC=function(t){return typeof t=="number"?"number:"+VS(t):"string:"+t},lC=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vr(e,".sv"),"Priority must be a string or number.")}else W(t===bp||t.isEmpty(),"priority of unexpected type.");W(t===bp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o0;class Je{constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lC(this.priorityNode_)}static set __childrenNodeConstructor(e){o0=e}static get __childrenNodeConstructor(){return o0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:le(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(W(r!==".priority"||oi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+aC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=VS(this.value_):e+=this.value_,this.lazyHash_=bS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Je.VALUE_TYPE_ORDER.indexOf(n),s=Je.VALUE_TYPE_ORDER.indexOf(r);return W(i>=0,"Unknown leaf type: "+n),W(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uC,cC;function UV(t){uC=t}function BV(t){cC=t}class jV extends Fh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?yo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(qi,new Je("[PRIORITY-POST]",cC))}makePost(e,n){const r=uC(e);return new ue(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const St=new jV;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV=Math.log(2);class WV{constructor(e){const n=s=>parseInt(Math.log(s)/zV,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Uc=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let f,m;if(d===0)return null;if(d===1)return f=t[u],m=n?n(f):f,new tt(m,f.node,tt.BLACK,null,null);{const v=parseInt(d/2,10)+u,T=i(u,v),R=i(v+1,c);return f=t[v],m=n?n(f):f,new tt(m,f.node,tt.BLACK,T,R)}},s=function(u){let c=null,d=null,f=t.length;const m=function(T,R){const S=f-T,E=f;f-=T;const _=i(S+1,E),w=t[S],N=n?n(w):w;v(new tt(N,w.node,R,null,_))},v=function(T){c?(c.left=T,c=T):(d=T,c=T)};for(let T=0;T<u.count;++T){const R=u.nextBitIsOne(),S=Math.pow(2,u.count-(T+1));R?m(S,tt.BLACK):(m(S,tt.BLACK),m(S,tt.RED))}return d},o=new WV(t.length),a=s(o);return new Wt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf;const ls={};class nr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return W(ls&&St,"ChildrenNode.ts has not been loaded"),nf=nf||new nr({".priority":ls},{".priority":St}),nf}get(e){const n=Ks(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Wt?n:null}hasIndex(e){return vr(this.indexSet_,e.toString())}addIndex(e,n){W(e!==Bs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ue.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Uc(r,e.getCompare()):a=ls;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new nr(d,c)}addToIndexes(e,n){const r=vc(this.indexes_,(i,s)=>{const o=Ks(this.indexSet_,s);if(W(o,"Missing index implementation for "+s),i===ls)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ue.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Uc(a,o.getCompare())}else return ls;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new ue(e.name,a))),u.insert(e,e.node)}});return new nr(r,this.indexSet_)}removeFromIndexes(e,n){const r=vc(this.indexes_,i=>{if(i===ls)return i;{const s=n.get(e.name);return s?i.remove(new ue(e.name,s)):i}});return new nr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;class pe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&lC(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $o||($o=new pe(new Wt(zg),null,nr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$o}updatePriority(e){return this.children_.isEmpty()?this:new pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$o:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ue(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$o:this.priorityNode_;return new pe(i,o,s)}}updateChild(e,n){const r=le(e);if(r===null)return n;{W(le(e)!==".priority"||oi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(St,(o,a)=>{n[o]=a.val(e),r++,s&&pe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+aC(this.getPriority().val())+":"),this.forEachChild(St,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":bS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ue(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ue(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ue(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ue.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rl?-1:0}withIndex(e){if(e===Bs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new pe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Bs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(St),i=n.getIterator(St);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Bs?null:this.indexMap_.get(e.toString())}}pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qV extends pe{constructor(){super(new Wt(zg),pe.EMPTY_NODE,nr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pe.EMPTY_NODE}isEmpty(){return!1}}const Rl=new qV;Object.defineProperties(ue,{MIN:{value:new ue(ro,pe.EMPTY_NODE)},MAX:{value:new ue(qi,Rl)}});oC.__EMPTY_NODE=pe.EMPTY_NODE;Je.__childrenNodeConstructor=pe;FV(Rl);BV(Rl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HV=!0;function At(t,e=null){if(t===null)return pe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,At(e))}if(!(t instanceof Array)&&HV){const n=[];let r=!1;if(mn(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=At(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ue(o,u)))}}),n.length===0)return pe.EMPTY_NODE;const s=Uc(n,VV,o=>o.name,zg);if(r){const o=Uc(n,St.getCompare());return new pe(s,At(e),new nr({".priority":o},{".priority":St}))}else return new pe(s,At(e),nr.Default)}else{let n=pe.EMPTY_NODE;return mn(t,(r,i)=>{if(vr(t,r)&&r.substring(0,1)!=="."){const s=At(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(At(e))}}UV(At);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV extends Fh{constructor(e){super(),this.indexPath_=e,W(!se(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?yo(e.name,n.name):s}makePost(e,n){const r=At(e),i=pe.EMPTY_NODE.updateChild(this.indexPath_,r);return new ue(n,i)}maxPost(){const e=pe.EMPTY_NODE.updateChild(this.indexPath_,Rl);return new ue(qi,e)}toString(){return nC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V extends Fh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?yo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,n){const r=At(e);return new ue(n,r)}toString(){return".value"}}const KV=new $V;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QV(t){return{type:"value",snapshotNode:t}}function YV(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function XV(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function a0(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function JV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=St}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ro}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===St}copy(){const e=new Wg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function l0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===St?n="$priority":t.index_===KV?n="$value":t.index_===Bs?n="$key":(W(t.index_ instanceof GV,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=lt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=lt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+lt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=lt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+lt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function u0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==St&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends ZS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Sl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Bc.getListenId_(e,r),a={};this.listens_[o]=a;const u=l0(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Ks(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Bc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=l0(e._queryParams),r=e._path.toString(),i=new jm;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ho(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Ha(a.responseText)}catch{tn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&tn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(){this.rootNode_=pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(){return{value:null,children:new Map}}function hC(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,jc());const i=t.children.get(r);e=Ae(e),hC(i,e,n)}}function Lp(t,e,n){t.value!==null?n(e,t.value):eF(t,(r,i)=>{const s=new Re(e.toString()+"/"+r);Lp(i,s,n)})}function eF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&mn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=10*1e3,nF=30*1e3,rF=5*60*1e3;class iF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tF(e);const r=c0+(nF-c0)*Math.random();Ta(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;mn(e,(i,s)=>{s>0&&vr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ta(this.reportStats_.bind(this),Math.floor(Math.random()*2*rF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ln;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ln||(Ln={}));function dC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fC(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function pC(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ln.ACK_USER_WRITE,this.source=dC()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Re(e));return new zc(_e(),n,this.revert)}}else return W(le(this.path)===e,"operationForChild called for unrelated child."),new zc(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ln.OVERWRITE}operationForChild(e){return se(this.path)?new Hi(this.source,_e(),this.snap.getImmediateChild(e)):new Hi(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ln.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new Re(e));return n.isEmpty()?null:n.value?new Hi(this.source,_e(),n.value):new sl(this.source,_e(),n)}else return W(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new sl(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function sF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(JV(o.childName,o.snapshotNode))}),Ko(t,i,"child_removed",e,r,n),Ko(t,i,"child_added",e,r,n),Ko(t,i,"child_moved",s,r,n),Ko(t,i,"child_changed",e,r,n),Ko(t,i,"value",e,r,n),i}function Ko(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>aF(t,a,u)),o.forEach(a=>{const u=oF(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function oF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function aF(t,e,n){if(e.childName==null||n.childName==null)throw co("Should only compare child_ events.");const r=new ue(e.childName,e.snapshotNode),i=new ue(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t,e){return{eventCache:t,serverCache:e}}function Ia(t,e,n,r){return mC(new qg(e,n,r),t.serverCache)}function gC(t,e,n,r){return mC(t.eventCache,new qg(e,n,r))}function Mp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rf;const lF=()=>(rf||(rf=new Wt($M)),rf);class Ie{constructor(e,n=lF()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return mn(e,(r,i)=>{n=n.set(new Re(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(se(e))return null;{const r=le(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ae(e),n);return s!=null?{path:rt(new Re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=le(e),r=this.children.get(n);return r!==null?r.subtree(Ae(e)):new Ie(null)}}set(e,n){if(se(e))return new Ie(n,this.children);{const r=le(e),s=(this.children.get(r)||new Ie(null)).set(Ae(e),n),o=this.children.insert(r,s);return new Ie(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=le(e),r=this.children.get(n);if(r){const i=r.remove(Ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ie(null):new Ie(this.value,s)}else return this}}get(e){if(se(e))return this.value;{const n=le(e),r=this.children.get(n);return r?r.get(Ae(e)):null}}setTree(e,n){if(se(e))return n;{const r=le(e),s=(this.children.get(r)||new Ie(null)).setTree(Ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ie(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(rt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(se(e))return null;{const s=le(e),o=this.children.get(s);return o?o.findOnPath_(Ae(e),rt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const i=le(e),s=this.children.get(i);return s?s.foreachOnPath_(Ae(e),rt(n,i),r):new Ie(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(rt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.writeTree_=e}static empty(){return new Cn(new Ie(null))}}function Aa(t,e,n){if(se(e))return new Cn(new Ie(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=un(i,e);return s=s.updateChild(o,n),new Cn(t.writeTree_.set(i,s))}else{const i=new Ie(n),s=t.writeTree_.setTree(e,i);return new Cn(s)}}}function h0(t,e,n){let r=t;return mn(n,(i,s)=>{r=Aa(r,rt(e,i),s)}),r}function d0(t,e){if(se(e))return Cn.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new Cn(n)}}function Vp(t,e){return ts(t,e)!=null}function ts(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(un(n.path,e)):null}function f0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(St,(r,i)=>{e.push(new ue(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ue(r,i.value))}),e}function Zr(t,e){if(se(e))return t;{const n=ts(t,e);return n!=null?new Cn(new Ie(n)):new Cn(t.writeTree_.subtree(e))}}function Fp(t){return t.writeTree_.isEmpty()}function io(t,e){return _C(_e(),t.writeTree_,e)}function _C(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(W(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=_C(rt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(rt(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t,e){return IC(e,t)}function uF(t,e,n,r,i){W(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Aa(t.visibleWrites,e,n)),t.lastWriteId=r}function cF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function hF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&dF(a,r.path)?i=!1:In(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return fF(t),!0;if(r.snap)t.visibleWrites=d0(t.visibleWrites,r.path);else{const a=r.children;mn(a,u=>{t.visibleWrites=d0(t.visibleWrites,rt(r.path,u))})}return!0}else return!1}function dF(t,e){if(t.snap)return In(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&In(rt(t.path,n),e))return!0;return!1}function fF(t){t.visibleWrites=vC(t.allWrites,pF,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pF(t){return t.visible}function vC(t,e,n){let r=Cn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)In(n,o)?(a=un(n,o),r=Aa(r,a,s.snap)):In(o,n)&&(a=un(o,n),r=Aa(r,_e(),s.snap.getChild(a)));else if(s.children){if(In(n,o))a=un(n,o),r=h0(r,a,s.children);else if(In(o,n))if(a=un(o,n),se(a))r=h0(r,_e(),s.children);else{const u=Ks(s.children,le(a));if(u){const c=u.getChild(Ae(a));r=Aa(r,_e(),c)}}}else throw co("WriteRecord should have .snap or .children")}}return r}function EC(t,e,n,r,i){if(!r&&!i){const s=ts(t.visibleWrites,e);if(s!=null)return s;{const o=Zr(t.visibleWrites,e);if(Fp(o))return n;if(n==null&&!Vp(o,_e()))return null;{const a=n||pe.EMPTY_NODE;return io(o,a)}}}else{const s=Zr(t.visibleWrites,e);if(!i&&Fp(s))return n;if(!i&&n==null&&!Vp(s,_e()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(In(c.path,e)||In(e,c.path))},a=vC(t.allWrites,o,e),u=n||pe.EMPTY_NODE;return io(a,u)}}}function mF(t,e,n){let r=pe.EMPTY_NODE;const i=ts(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(St,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Zr(t.visibleWrites,e);return n.forEachChild(St,(o,a)=>{const u=io(Zr(s,new Re(o)),a);r=r.updateImmediateChild(o,u)}),f0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Zr(t.visibleWrites,e);return f0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function gF(t,e,n,r,i){W(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=rt(e,n);if(Vp(t.visibleWrites,s))return null;{const o=Zr(t.visibleWrites,s);return Fp(o)?i.getChild(n):io(o,i.getChild(n))}}function _F(t,e,n,r){const i=rt(e,n),s=ts(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Zr(t.visibleWrites,i);return io(o,r.getNode().getImmediateChild(n))}else return null}function yF(t,e){return ts(t.visibleWrites,e)}function vF(t,e,n,r,i,s,o){let a;const u=Zr(t.visibleWrites,e),c=ts(u,_e());if(c!=null)a=c;else if(n!=null)a=io(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=m.getNext();for(;v&&d.length<i;)f(v,r)!==0&&d.push(v),v=m.getNext();return d}else return[]}function EF(){return{visibleWrites:Cn.empty(),allWrites:[],lastWriteId:-1}}function Up(t,e,n,r){return EC(t.writeTree,t.treePath,e,n,r)}function wC(t,e){return mF(t.writeTree,t.treePath,e)}function p0(t,e,n,r){return gF(t.writeTree,t.treePath,e,n,r)}function Wc(t,e){return yF(t.writeTree,rt(t.treePath,e))}function wF(t,e,n,r,i,s){return vF(t.writeTree,t.treePath,e,n,r,i,s)}function Hg(t,e,n){return _F(t.writeTree,t.treePath,e,n)}function TC(t,e){return IC(rt(t.treePath,e),t.writeTree)}function IC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,a0(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,XV(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,YV(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,a0(r,e.snapshotNode,i.oldSnap));else throw co("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const AC=new IF;class Gg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new qg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gi(this.viewCache_),s=wF(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function AF(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function SF(t,e,n,r,i){const s=new TF;let o,a;if(n.type===Ln.OVERWRITE){const c=n;c.source.fromUser?o=Bp(t,e,c.path,c.snap,r,i,s):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=qc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Ln.MERGE){const c=n;c.source.fromUser?o=RF(t,e,c.path,c.children,r,i,s):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=jp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Ln.ACK_USER_WRITE){const c=n;c.revert?o=NF(t,e,c.path,r,i,s):o=kF(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Ln.LISTEN_COMPLETE)o=PF(t,e,n.path,r,s);else throw co("Unknown operation type: "+n.type);const u=s.getChanges();return CF(e,o,u),{viewCache:o,changes:u}}function CF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Mp(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(QV(Mp(e)))}}function SC(t,e,n,r,i,s){const o=e.eventCache;if(Wc(r,n)!=null)return e;{let a,u;if(se(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gi(e),d=c instanceof pe?c:pe.EMPTY_NODE,f=wC(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Up(r,Gi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=le(n);if(c===".priority"){W(oi(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=p0(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Ae(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=p0(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=Hg(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return Ia(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function qc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const v=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),v,null)}else{const v=le(n);if(!u.isCompleteForPath(n)&&oi(n)>1)return e;const T=Ae(n),S=u.getNode().getImmediateChild(v).updateChild(T,r);v===".priority"?c=d.updatePriority(u.getNode(),S):c=d.updateChild(u.getNode(),v,S,T,AC,null)}const f=gC(e,c,u.isFullyInitialized()||se(n),d.filtersNodes()),m=new Gg(i,f,s);return SC(t,f,n,i,m,a)}function Bp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const d=new Gg(i,e,s);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Ia(e,c,!0,t.filter.filtersNodes());else{const f=le(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Ia(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Ae(n),v=a.getNode().getImmediateChild(f);let T;if(se(m))T=r;else{const R=d.getCompleteChild(f);R!=null?tC(m)===".priority"&&R.getChild(rC(m)).isEmpty()?T=R:T=R.updateChild(m,r):T=pe.EMPTY_NODE}if(v.equals(T))u=e;else{const R=t.filter.updateChild(a.getNode(),f,T,m,d,o);u=Ia(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function m0(t,e){return t.eventCache.isCompleteForChild(e)}function RF(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const d=rt(n,u);m0(e,le(d))&&(a=Bp(t,a,d,c,i,s,o))}),r.foreach((u,c)=>{const d=rt(n,u);m0(e,le(d))||(a=Bp(t,a,d,c,i,s,o))}),a}function g0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function jp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;se(n)?c=r:c=new Ie(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const v=e.serverCache.getNode().getImmediateChild(f),T=g0(t,v,m);u=qc(t,u,new Re(f),T,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const v=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!v){const T=e.serverCache.getNode().getImmediateChild(f),R=g0(t,T,m);u=qc(t,u,new Re(f),R,i,s,o,a)}}),u}function kF(t,e,n,r,i,s,o){if(Wc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(se(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return qc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(se(n)){let c=new Ie(null);return u.getNode().forEachChild(Bs,(d,f)=>{c=c.set(new Re(d),f)}),jp(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ie(null);return r.foreach((d,f)=>{const m=rt(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),jp(t,e,n,c,i,s,a,o)}}function PF(t,e,n,r,i){const s=e.serverCache,o=gC(e,s.getNode(),s.isFullyInitialized()||se(n),s.isFiltered());return SC(t,o,n,r,AC,i)}function NF(t,e,n,r,i,s){let o;if(Wc(r,n)!=null)return e;{const a=new Gg(r,e,i),u=e.eventCache.getNode();let c;if(se(n)||le(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Up(r,Gi(e));else{const f=e.serverCache.getNode();W(f instanceof pe,"serverChildren would be complete if leaf node"),d=wC(r,f)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=le(n);let f=Hg(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,Ae(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,pe.EMPTY_NODE,Ae(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Up(r,Gi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Wc(r,_e())!=null,Ia(e,c,o,t.filter.filtersNodes())}}function DF(t,e){const n=Gi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function _0(t,e,n,r){e.type===Ln.MERGE&&e.source.queryId!==null&&(W(Gi(t.viewCache_),"We should always have a full cache before handling merges"),W(Mp(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=SF(t.processor_,i,e,n,r);return AF(t.processor_,s.viewCache),W(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,xF(t,s.changes,s.viewCache.eventCache.getNode())}function xF(t,e,n,r){const i=t.eventRegistrations_;return sF(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y0;function OF(t){W(!y0,"__referenceConstructor has already been defined"),y0=t}function $g(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return W(s!=null,"SyncTree gave us an op for an invalid query."),_0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(_0(o,e,n,r));return s}}function Kg(t,e){let n=null;for(const r of t.views.values())n=n||DF(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v0;function bF(t){W(!v0,"__referenceConstructor has already been defined"),v0=t}class E0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=EF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function LF(t,e,n,r,i){return uF(t.pendingWriteTree_,e,n,r,i),i?Bh(t,new Hi(dC(),e,n)):[]}function ks(t,e,n=!1){const r=cF(t.pendingWriteTree_,e);if(hF(t.pendingWriteTree_,e)){let s=new Ie(null);return r.snap!=null?s=s.set(_e(),!0):mn(r.children,o=>{s=s.set(new Re(o),!0)}),Bh(t,new zc(r.path,s,n))}else return[]}function Uh(t,e,n){return Bh(t,new Hi(fC(),e,n))}function MF(t,e,n){const r=Ie.fromObject(n);return Bh(t,new sl(fC(),e,r))}function VF(t,e,n,r){const i=PC(t,r);if(i!=null){const s=NC(i),o=s.path,a=s.queryId,u=un(o,e),c=new Hi(pC(a),u,n);return DC(t,o,c)}else return[]}function FF(t,e,n,r){const i=PC(t,r);if(i){const s=NC(i),o=s.path,a=s.queryId,u=un(o,e),c=Ie.fromObject(n),d=new sl(pC(a),u,c);return DC(t,o,d)}else return[]}function CC(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=un(o,e),c=Kg(a,u);if(c)return c});return EC(i,e,s,n,!0)}function Bh(t,e){return RC(e,t.syncPointTree_,null,yC(t.pendingWriteTree_,_e()))}function RC(t,e,n,r){if(se(t.path))return kC(t,e,n,r);{const i=e.get(_e());n==null&&i!=null&&(n=Kg(i,_e()));let s=[];const o=le(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=TC(r,o);s=s.concat(RC(a,u,c,d))}return i&&(s=s.concat($g(i,t,r,n))),s}}function kC(t,e,n,r){const i=e.get(_e());n==null&&i!=null&&(n=Kg(i,_e()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=TC(r,o),d=t.operationForChild(o);d&&(s=s.concat(kC(d,a,u,c)))}),i&&(s=s.concat($g(i,t,r,n))),s}function PC(t,e){return t.tagToQueryMap.get(e)}function NC(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Re(t.substr(0,e))}}function DC(t,e,n){const r=t.syncPointTree_.get(e);W(r,"Missing sync point for query tag that we're tracking");const i=yC(t.pendingWriteTree_,e);return $g(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Qg(n)}node(){return this.node_}}class Yg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=rt(this.path_,e);return new Yg(this.syncTree_,n)}node(){return CC(this.syncTree_,this.path_)}}const UF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},w0=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return BF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jF(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},BF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},jF=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&W(!1,"Unexpected increment value: "+r);const i=e.node();if(W(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},zF=function(t,e,n,r){return Xg(e,new Yg(n,t),r)},WF=function(t,e,n){return Xg(t,new Qg(e),n)};function Xg(t,e,n){const r=t.getPriority().val(),i=w0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=w0(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Je(a,At(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Je(i))),o.forEachChild(St,(a,u)=>{const c=Xg(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Zg(t,e){let n=e instanceof Re?e:new Re(e),r=t,i=le(n);for(;i!==null;){const s=Ks(r.node.children,i)||{children:{},childCount:0};r=new Jg(i,r,s),n=Ae(n),i=le(n)}return r}function vo(t){return t.node.value}function xC(t,e){t.node.value=e,zp(t)}function OC(t){return t.node.childCount>0}function qF(t){return vo(t)===void 0&&!OC(t)}function jh(t,e){mn(t.node.children,(n,r)=>{e(new Jg(n,t,r))})}function bC(t,e,n,r){n&&!r&&e(t),jh(t,i=>{bC(i,e,!0,r)}),n&&r&&e(t)}function HF(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function kl(t){return new Re(t.parent===null?t.name:kl(t.parent)+"/"+t.name)}function zp(t){t.parent!==null&&GF(t.parent,t.name,t)}function GF(t,e,n){const r=qF(n),i=vr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,zp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,zp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $F=/[\[\].#$\/\u0000-\u001F\u007F]/,KF=/[\[\].#$\u0000-\u001F\u007F]/,sf=10*1024*1024,LC=function(t){return typeof t=="string"&&t.length!==0&&!$F.test(t)},QF=function(t){return typeof t=="string"&&t.length!==0&&!KF.test(t)},YF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),QF(t)},MC=function(t,e,n){const r=n instanceof Re?new PV(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ei(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ei(r)+" with contents = "+e.toString());if(LS(e))throw new Error(t+"contains "+e.toString()+" "+Ei(r));if(typeof e=="string"&&e.length>sf/3&&fh(e)>sf)throw new Error(t+"contains a string greater than "+sf+" utf8 bytes "+Ei(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(mn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!LC(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ei(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);NV(r,o),MC(t,a,r),DV(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ei(r)+" in addition to actual children.")}},XF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!LC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YF(n))throw new Error($N(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ZF(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!iC(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ns(t,e,n){ZF(t,n),eU(t,r=>In(r,e)||In(e,r))}function eU(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(tU(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tU(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();wa&&It("event: "+n.toString()),Cl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nU="repo_interrupt",rU=25;class iU{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jc(),this.transactionQueueTree_=new Jg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sU(t,e,n){if(t.stats_=Ug(t.repoInfo_),t.forceRestClient_||ZM())t.server_=new Bc(t.repoInfo_,(r,i,s,o)=>{T0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>I0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{lt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ar(t.repoInfo_,e,(r,i,s,o)=>{T0(t,r,i,s,o)},r=>{I0(t,r)},r=>{aU(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=sV(t.repoInfo_,()=>new iF(t.stats_,t.server_)),t.infoData_=new ZV,t.infoSyncTree_=new E0({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Uh(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),e_(t,"connected",!1),t.serverSyncTree_=new E0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);ns(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function oU(t){const n=t.infoData_.getNode(new Re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function VC(t){return UF({timestamp:oU(t)})}function T0(t,e,n,r,i){t.dataUpdateCount++;const s=new Re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=vc(n,c=>At(c));o=FF(t.serverSyncTree_,s,u,i)}else{const u=At(n);o=VF(t.serverSyncTree_,s,u,i)}else if(r){const u=vc(n,c=>At(c));o=MF(t.serverSyncTree_,s,u)}else{const u=At(n);o=Uh(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=n_(t,s)),ns(t.eventQueue_,a,o)}function I0(t,e){e_(t,"connected",e),e===!1&&uU(t)}function aU(t,e){mn(e,(n,r)=>{e_(t,n,r)})}function e_(t,e,n){const r=new Re("/.info/"+e),i=At(n);t.infoData_.updateSnapshot(r,i);const s=Uh(t.infoSyncTree_,r,i);ns(t.eventQueue_,r,s)}function lU(t){return t.nextWriteId_++}function uU(t){FC(t,"onDisconnectEvents");const e=VC(t),n=jc();Lp(t.onDisconnect_,_e(),(i,s)=>{const o=zF(i,s,t.serverSyncTree_,e);hC(n,i,o)});let r=[];Lp(n,_e(),(i,s)=>{r=r.concat(Uh(t.serverSyncTree_,i,s));const o=fU(t,i);n_(t,o)}),t.onDisconnect_=jc(),ns(t.eventQueue_,_e(),r)}function cU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nU)}function FC(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),It(n,...e)}function UC(t,e,n){return CC(t.serverSyncTree_,e,n)||pe.EMPTY_NODE}function t_(t,e=t.transactionQueueTree_){if(e||zh(t,e),vo(e)){const n=jC(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&hU(t,kl(e),n)}else OC(e)&&jh(e,n=>{t_(t,n)})}function hU(t,e,n){const r=n.map(c=>c.currentWriteId),i=UC(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];W(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=un(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{FC(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(ks(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();zh(t,Zg(t.transactionQueueTree_,e)),t_(t,t.transactionQueueTree_),ns(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)Cl(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{tn("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}n_(t,e)}},o)}function n_(t,e){const n=BC(t,e),r=kl(n),i=jC(t,n);return dU(t,i,r),r}function dU(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=un(n,u.path);let d=!1,f;if(W(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,i=i.concat(ks(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=rU)d=!0,f="maxretry",i=i.concat(ks(t.serverSyncTree_,u.currentWriteId,!0));else{const m=UC(t,u.path,o);u.currentInputSnapshot=m;const v=e[a].update(m.val());if(v!==void 0){MC("transaction failed: Data returned ",v,u.path);let T=At(v);typeof v=="object"&&v!=null&&vr(v,".priority")||(T=T.updatePriority(m.getPriority()));const S=u.currentWriteId,E=VC(t),_=WF(T,m,E);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=_,u.currentWriteId=lU(t),o.splice(o.indexOf(S),1),i=i.concat(LF(t.serverSyncTree_,u.path,_,u.currentWriteId,u.applyLocally)),i=i.concat(ks(t.serverSyncTree_,S,!0))}else d=!0,f="nodata",i=i.concat(ks(t.serverSyncTree_,u.currentWriteId,!0))}ns(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}zh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Cl(r[a]);t_(t,t.transactionQueueTree_)}function BC(t,e){let n,r=t.transactionQueueTree_;for(n=le(e);n!==null&&vo(r)===void 0;)r=Zg(r,n),e=Ae(e),n=le(e);return r}function jC(t,e){const n=[];return zC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function zC(t,e,n){const r=vo(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);jh(e,i=>{zC(t,i,n)})}function zh(t,e){const n=vo(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,xC(e,n.length>0?n:void 0)}jh(e,r=>{zh(t,r)})}function fU(t,e){const n=kl(BC(t,e)),r=Zg(t.transactionQueueTree_,e);return HF(r,i=>{of(t,i)}),of(t,r),bC(r,i=>{of(t,i)}),n}function of(t,e){const n=vo(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(W(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(W(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ks(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?xC(e,void 0):n.length=s+1,ns(t.eventQueue_,kl(e),i);for(let o=0;o<r.length;o++)Cl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pU(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function mU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):tn(`Invalid query segment '${n}' in query '${t}'`)}return e}const A0=function(t,e){const n=gU(t),r=n.namespace;n.domain==="firebase.com"&&Wi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||HM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new nV(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Re(n.pathString)}},gU=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=pU(t.substring(d,f)));const m=mU(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const v=e.slice(0,c);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return se(this._path)?null:tC(this._path)}get ref(){return new Eo(this._repo,this._path)}get _queryIdentifier(){const e=u0(this._queryParams),n=Vg(e);return n==="{}"?"default":n}get _queryObject(){return u0(this._queryParams)}isEqual(e){if(e=Ne(e),!(e instanceof r_))return!1;const n=this._repo===e._repo,r=iC(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+kV(this._path)}}class Eo extends r_{constructor(e,n){super(e,n,new Wg,!1)}get parent(){const e=rC(this._path);return e===null?null:new Eo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}OF(Eo);bF(Eo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _U="FIREBASE_DATABASE_EMULATOR_HOST",Wp={};let yU=!1;function vU(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),It("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=A0(s,i),a=o.repoInfo,u;typeof process<"u"&&qE&&(u=qE[_U]),u?(s=`http://${u}?ns=${a.namespace}`,o=A0(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new tV(t.name,t.options,e);XF("Invalid Firebase Database URL",o),se(o.path)||Wi("Database URL must point to the root of a Firebase Database (not including a child path).");const d=wU(a,t,c,new eV(t.name,n));return new TU(d,t)}function EU(t,e){const n=Wp[e];(!n||n[t.key]!==t)&&Wi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),cU(t),delete n[t.key]}function wU(t,e,n,r){let i=Wp[e.name];i||(i={},Wp[e.name]=i);let s=i[t.toURLString()];return s&&Wi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new iU(t,yU,n,r),i[t.toURLString()]=s,s}class TU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Eo(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wi("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IU(t){UM(ci),ni(new fr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return vU(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),hn(HE,GE,t),hn(HE,GE,"esm2017")}ar.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ar.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};IU();const AU=()=>{const t=hh(),{userData:e,chatData:n,chatUser:r,setChatUser:i,setMessagesId:s,messagesId:o,chatVisual:a,setChatVisual:u}=b.useContext(es),[c,d]=b.useState(null),[f,m]=b.useState(!1),v=async S=>{S.preventDefault();try{const E=S.target.value;if(E){m(!0);const _=Wu(Ke,"users"),w=_S(_,yS("username","==",E.toLowerCase())),N=await TS(w);if(!N.empty&&N.docs[0].data().id!==e.id){let L=!1;n.map(F=>{F.rId===N.docs[0].data().id&&(L=!0)}),L||d(N.docs[0].data())}else d(null)}else m(!1)}catch(E){console.log(E)}},T=async()=>{const S=Wu(Ke,"messages"),E=Wu(Ke,"chats");try{const _=nt(S);await Pp(_,{createAt:EM(),messages:[]}),await Tn(nt(E,c.id),{chatsData:Lc({messageId:_.id,lastMessage:"",rId:e.id,updatedAt:Date.now(),messageSeen:!0})}),await Tn(nt(E,e.id),{chatsData:Lc({messageId:_.id,lastMessage:"",rId:c.id,updatedAt:Date.now(),messageSeen:!0})});const N=(await or(nt(Ke,"users",c.id))).data();R({messagesId:_.id,lastMessage:"",rId:c.id,updatedAt:Date.now(),messageSeen:!0,userData:N}),m(!1),u(!0)}catch(_){te.error(_.message),console.error(_)}},R=async S=>{try{s(S.messageId),i(S),console.log(r);const E=nt(Ke,"chats",e.id),w=(await or(E)).data(),N=w.chatsData.findIndex(L=>L.messageId===S.messageId);w.chatsData[N].messageSeen=!0,await Tn(E,{chatsData:w.chatsData}),u(!0)}catch(E){te.error(E.message)}};return b.useEffect(()=>{(async()=>{if(r){const E=nt(Ke,"users",r.userData.id),w=(await or(E)).data();i(N=>({...N,userData:w}))}})()},[n]),V.jsxs("div",{className:`ls ${a?"hidden":""}`,children:[V.jsxs("div",{className:"ls-top",children:[V.jsxs("div",{className:"ls-nav",children:[V.jsx("img",{className:"logo",src:Qt.logo,alt:""}),V.jsxs("div",{className:"menu",children:[V.jsx("img",{src:Qt.menu_icon,alt:""}),V.jsxs("div",{className:"sub-menu",children:[V.jsx("p",{onClick:()=>t("/profile"),children:"Edit Profile"}),V.jsx("hr",{}),V.jsx("p",{children:"Logout"})]})]})]}),V.jsxs("div",{className:"ls-search",children:[V.jsx("img",{src:Qt.search_icon,alt:""}),V.jsx("input",{onChange:v,type:"text",placeholder:"Search here.."})]})]}),V.jsx("div",{className:"ls-list",children:f&&c?V.jsxs("div",{onClick:T,className:"friends add-user",children:[V.jsx("img",{src:c.avatar,alt:""}),V.jsx("p",{children:c.name})]}):n==null?void 0:n.map((S,E)=>V.jsxs("div",{onClick:()=>R(S),className:`friends ${S.messageSeen||S.messageId===o?"":"border"}`,children:[V.jsx("img",{src:S.userData.avatar,alt:""}),V.jsxs("div",{children:[V.jsx("p",{children:S.userData.name}),V.jsx("span",{children:S.lastMessage})]})]},E))})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="firebasestorage.googleapis.com",qC="storageBucket",SU=2*60*1e3,CU=10*60*1e3,RU=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Hn{constructor(e,n,r=0){super(af(e),`Firebase Storage: ${n} (${af(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return af(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function af(t){return"storage/"+t}function i_(){const t="An unknown error occurred, please check the error payload for server response.";return new be(ke.UNKNOWN,t)}function kU(t){return new be(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function PU(t){return new be(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(ke.UNAUTHENTICATED,t)}function DU(){return new be(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function xU(t){return new be(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function HC(){return new be(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function GC(){return new be(ke.CANCELED,"User canceled the upload/download.")}function OU(t){return new be(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function bU(t){return new be(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function LU(){return new be(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qC+"' property when initializing the app?")}function $C(){return new be(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function MU(){return new be(ke.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function VU(){return new be(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function FU(t){return new be(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qp(t){return new be(ke.INVALID_ARGUMENT,t)}function KC(){return new be(ke.APP_DELETED,"The Firebase app was deleted.")}function UU(t){return new be(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Sa(t,e){return new be(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Qo(t){throw new be(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Zt.makeFromUrl(e,n)}catch{return new Zt(e,"")}if(r.path==="")return r;throw bU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),T={bucket:1,path:3},R=n===WC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",E=new RegExp(`^https?://${R}/${i}/${S}`,"i"),w=[{regex:a,indices:u,postModify:s},{regex:v,indices:T,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<w.length;N++){const L=w[N],F=L.regex.exec(e);if(F){const A=F[L.indices.bucket];let g=F[L.indices.path];g||(g=""),r=new Zt(A,g),L.postModify(r);break}}if(r==null)throw OU(e);return r}}class BU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function d(...S){c||(c=!0,e.apply(null,S))}function f(S){i=setTimeout(()=>{i=null,t(v,u())},S)}function m(){s&&clearTimeout(s)}function v(S,...E){if(c){m();return}if(S){m(),d.call(null,S,...E);return}if(u()||o){m(),d.call(null,S,...E);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,f(w)}let T=!1;function R(S){T||(T=!0,m(),!c&&(i!==null?(S||(a=2),clearTimeout(i),f(0)):S||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function zU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WU(t){return t!==void 0}function qU(t){return typeof t=="function"}function HU(t){return typeof t=="object"&&!Array.isArray(t)}function Wh(t){return typeof t=="string"||t instanceof String}function S0(t){return s_()&&t instanceof Blob}function s_(){return typeof Blob<"u"}function C0(t,e,n,r){if(r<e)throw qp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function QC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Di;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Di||(Di={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GU{constructor(e,n,r,i,s,o,a,u,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,T)=>{this.resolve_=v,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Eu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Di.NO_ERROR,u=s.getStatus();if(!a||YC(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Di.ABORT;r(!1,new Eu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Eu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());WU(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=i_();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?KC():GC();o(u)}else{const u=HC();o(u)}};this.canceled_?n(!1,new Eu(!1,null,!0)):this.backoffId_=jU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Eu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $U(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XU(t,e,n,r,i,s,o=!0){const a=QC(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return QU(c,e),$U(c,n),KU(c,s),YU(c,r),new GU(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZU(...t){const e=JU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(s_())return new Blob(t);throw new be(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function e4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t4(t){if(typeof atob>"u")throw FU("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lf{constructor(e,n){this.data=e,this.contentType=n||null}}function n4(t,e){switch(t){case Mn.RAW:return new lf(XC(e));case Mn.BASE64:case Mn.BASE64URL:return new lf(JC(t,e));case Mn.DATA_URL:return new lf(i4(e),s4(e))}throw i_()}function XC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function r4(t){let e;try{e=decodeURIComponent(t)}catch{throw Sa(Mn.DATA_URL,"Malformed data URL.")}return XC(e)}function JC(t,e){switch(t){case Mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Sa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Sa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=t4(e)}catch(i){throw i.message.includes("polyfill")?i:Sa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ZC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Sa(Mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=o4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function i4(t){const e=new ZC(t);return e.base64?JC(Mn.BASE64,e.rest):r4(e.rest)}function s4(t){return new ZC(t).contentType}function o4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){let r=0,i="";S0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(S0(this.data_)){const r=this.data_,i=e4(r,e,n);return i===null?null:new Lr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Lr(r,!0)}}static getBlob(...e){if(s_()){const n=e.map(r=>r instanceof Lr?r.data_:r);return new Lr(ZU.apply(null,n))}else{const n=e.map(o=>Wh(o)?n4(Mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Lr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(t){let e;try{e=JSON.parse(t)}catch{return null}return HU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function l4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function tR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u4(t,e){return e}class xt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||u4}}let wu=null;function c4(t){return!Wh(t)||t.length<2?t:tR(t)}function nR(){if(wu)return wu;const t=[];t.push(new xt("bucket")),t.push(new xt("generation")),t.push(new xt("metageneration")),t.push(new xt("name","fullPath",!0));function e(s,o){return c4(o)}const n=new xt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new xt("size");return i.xform=r,t.push(i),t.push(new xt("timeCreated")),t.push(new xt("updated")),t.push(new xt("md5Hash",null,!0)),t.push(new xt("cacheControl",null,!0)),t.push(new xt("contentDisposition",null,!0)),t.push(new xt("contentEncoding",null,!0)),t.push(new xt("contentLanguage",null,!0)),t.push(new xt("contentType",null,!0)),t.push(new xt("metadata","customMetadata",!0)),wu=t,wu}function h4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Zt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function d4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return h4(r,t),r}function rR(t,e,n){const r=eR(e);return r===null?null:d4(t,r,n)}function f4(t,e,n,r){const i=eR(e);if(i===null||!Wh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),v=Pl(m,n,r),T=QC({alt:"media",token:c});return v+T})[0]}function iR(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class wo{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){if(!t)throw i_()}function o_(t,e){function n(r,i){const s=rR(t,i,e);return lr(s!==null),s}return n}function p4(t,e){function n(r,i){const s=rR(t,i,e);return lr(s!==null),f4(s,i,t.host,t._protocol)}return n}function Nl(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=DU():i=NU():n.getStatus()===402?i=PU(t.bucket):n.getStatus()===403?i=xU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function sR(t){const e=Nl(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=kU(t.path)),s.serverResponse=i.serverResponse,s}return n}function m4(t,e,n){const r=e.fullServerUrl(),i=Pl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new wo(i,s,o_(t,n),o);return a.errorHandler=sR(e),a}function g4(t,e,n){const r=e.fullServerUrl(),i=Pl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new wo(i,s,p4(t,n),o);return a.errorHandler=sR(e),a}function _4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function oR(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=_4(null,e)),r}function y4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let N=0;N<2;N++)w=w+Math.random().toString().slice(2);return w}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=oR(e,r,i),d=iR(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",v=Lr.getBlob(f,r,m);if(v===null)throw $C();const T={name:c.fullPath},R=Pl(s,t.host,t._protocol),S="POST",E=t.maxUploadRetryTime,_=new wo(R,S,o_(t,n),E);return _.urlParams=T,_.headers=o,_.body=v.uploadData(),_.errorHandler=Nl(e),_}class Hc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function a_(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{lr(!1)}return lr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function v4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=oR(e,r,i),a={name:o.fullPath},u=Pl(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=iR(o,n),m=t.maxUploadRetryTime;function v(R){a_(R);let S;try{S=R.getResponseHeader("X-Goog-Upload-URL")}catch{lr(!1)}return lr(Wh(S)),S}const T=new wo(u,c,v,m);return T.urlParams=a,T.headers=d,T.body=f,T.errorHandler=Nl(e),T}function E4(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=a_(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{lr(!1)}f||lr(!1);const m=Number(f);return lr(!isNaN(m)),new Hc(m,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,u=new wo(n,o,s,a);return u.headers=i,u.errorHandler=Nl(e),u}const R0=256*1024;function w4(t,e,n,r,i,s,o,a){const u=new Hc(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw MU();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const f=u.current,m=f+d;let v="";d===0?v="finalize":c===d?v="upload, finalize":v="upload";const T={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${u.current}`},R=r.slice(f,m);if(R===null)throw $C();function S(N,L){const F=a_(N,["active","final"]),A=u.current+d,g=r.size();let I;return F==="final"?I=o_(e,s)(N,L):I=null,new Hc(A,g,F==="final",I)}const E="POST",_=e.maxUploadRetryTime,w=new wo(n,E,S,_);return w.headers=T,w.body=R.uploadData(),w.progressCallback=a||null,w.errorHandler=Nl(t),w}const Ut={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function uf(t){switch(t){case"running":case"pausing":case"canceling":return Ut.RUNNING;case"paused":return Ut.PAUSED;case"success":return Ut.SUCCESS;case"canceled":return Ut.CANCELED;case"error":return Ut.ERROR;default:return Ut.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e,n,r){if(qU(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class I4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Di.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Di.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Di.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Qo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class A4 extends I4{initXhr(){this.xhr_.responseType="text"}}function fs(){return new A4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=nR(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ke.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(YC(i.status,[]))if(s)i=HC();else{this.sleepTime=Math.max(this.sleepTime*2,RU),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ke.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=v4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,fs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=E4(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,fs,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=R0*this._chunkMultiplier,n=new Hc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=w4(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,fs,i,s,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){R0*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=m4(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,fs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=y4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,fs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=GC(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=uf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new T4(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(uf(this._state)){case Ut.SUCCESS:us(this._resolve.bind(null,this.snapshot))();break;case Ut.CANCELED:case Ut.ERROR:const n=this._reject;us(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(uf(this._state)){case Ut.RUNNING:case Ut.PAUSED:e.next&&us(e.next.bind(e,this.snapshot))();break;case Ut.SUCCESS:e.complete&&us(e.complete.bind(e))();break;case Ut.CANCELED:case Ut.ERROR:e.error&&us(e.error.bind(e,this._error))();break;default:e.error&&us(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this._service=e,n instanceof Zt?this._location=n:this._location=Zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $i(e,n)}get root(){const e=new Zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tR(this._location.path)}get storage(){return this._service}get parent(){const e=a4(this._location.path);if(e===null)return null;const n=new Zt(this._location.bucket,e);return new $i(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw UU(e)}}function C4(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new S4(t,new Lr(e),n)}function R4(t){t._throwIfRoot("getDownloadURL");const e=g4(t.storage,t._location,nR());return t.storage.makeRequestWithTokens(e,fs).then(n=>{if(n===null)throw VU();return n})}function k4(t,e){const n=l4(t._location.path,e),r=new Zt(t._location.bucket,n);return new $i(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P4(t){return/^[A-Za-z]+:\/\//.test(t)}function N4(t,e){return new $i(t,e)}function aR(t,e){if(t instanceof l_){const n=t;if(n._bucket==null)throw LU();const r=new $i(n,n._bucket);return e!=null?aR(r,e):r}else return e!==void 0?k4(t,e):t}function D4(t,e){if(e&&P4(e)){if(t instanceof l_)return N4(t,e);throw qp("To use ref(service, url), the first argument must be a Storage instance.")}else return aR(t,e)}function k0(t,e){const n=e==null?void 0:e[qC];return n==null?null:Zt.makeFromBucketSpec(n,t)}function x4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:uI(i,t.app.options.projectId))}class l_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=WC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SU,this._maxUploadRetryTime=CU,this._requests=new Set,i!=null?this._bucket=Zt.makeFromBucketSpec(i,this._host):this._bucket=k0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Zt.makeFromBucketSpec(this._url,e):this._bucket=k0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $i(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new BU(KC());{const o=XU(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const P0="@firebase/storage",N0="0.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="storage";function O4(t,e,n){return t=Ne(t),C4(t,e,n)}function b4(t){return t=Ne(t),R4(t)}function L4(t,e){return t=Ne(t),D4(t,e)}function M4(t=qm(),e){t=Ne(t);const r=mh(t,lR).getImmediate({identifier:e}),i=oI("storage");return i&&V4(r,...i),r}function V4(t,e,n,r={}){x4(t,e,n,r)}function F4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new l_(n,r,i,e,ci)}function U4(){ni(new fr(lR,F4,"PUBLIC").setMultipleInstances(!0)),hn(P0,N0,""),hn(P0,N0,"esm2017")}U4();const uR=async t=>{const e=M4(),n=L4(e,`images/${Date.now()+t.name}`),r=O4(n,t);return new Promise((i,s)=>{console.log("HEY THERE"),r.on("state_changed",o=>{const a=o.bytesTransferred/o.totalBytes*100;switch(console.log("Upload is "+a+"% done"),o.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},o=>{},()=>{b4(r.snapshot.ref).then(o=>{i(o)})})})},B4=()=>{const{userData:t,messagesId:e,chatVisual:n,setChatVisual:r,chatUser:i,messages:s,setMessages:o}=b.useContext(es),[a,u]=b.useState(""),c=async m=>{try{const v=await uR(m.target.files[0]);v&&e&&(await Tn(nt(Ke,"messages",e),{messages:Lc({sId:t.id,image:v,createdAt:new Date})}),[i.rId,t.id].forEach(async R=>{const S=nt(Ke,"chats",R),E=await or(S);if(E.exists()){const _=E.data(),w=_.chatsData.findIndex(N=>N.messageId===e);_.chatsData[w].lastMessage="image",_.chatsData[w].updateAt=Date.now(),_.chatsData[w].rId===t.id&&(_.chatsData[w].messageSeen=!1),await Tn(S,{chatsData:_.chatsData})}}))}catch(v){toast.error(v.message)}},d=m=>{let v=m.toDate(),T=v.getHours(),R=v.getMinutes().toString().padStart(2,"0");return T===0?`12:${R} AM`:T===12?`12:${R} PM`:T>12?`${T-12}:${R} PM`:`${T}:${R} AM`};b.useEffect(()=>{if(e){const m=IS(nt(Ke,"messages",e),v=>{o(v.data().messages.reverse()),console.log(v.data().messages.reverse())});return()=>{m()}}},[e]);const f=async()=>{try{a&&e&&(await Tn(nt(Ke,"messages",e),{messages:Lc({sId:t.id,text:a,createdAt:new Date})}),[i.rId,t.id].forEach(async v=>{const T=nt(Ke,"chats",v),R=await or(T);if(R.exists()){const S=R.data(),E=S.chatsData.findIndex(_=>_.messageId===e);S.chatsData[E].lastMessage=a.slice(0,30),S.chatsData[E].updateAt=Date.now(),S.chatsData[E].rId===t.id&&(S.chatsData[E].messageSeen=!1),await Tn(T,{chatsData:S.chatsData})}}))}catch(m){toast.error(m.message)}u("")};return i?V.jsxs("div",{className:`chat-box ${n?"":"hidden"}`,children:[V.jsxs("div",{className:"chat-user",children:[V.jsx("img",{src:i.userData.avatar,alt:""}),V.jsxs("p",{children:[i.userData.name," ",Date.now()-(i==null?void 0:i.userData.lastSeen)<=7e4?V.jsx("img",{className:"dot",src:Qt.green_dot,alt:""}):null]}),V.jsx("img",{src:Qt.help_icon,className:"help",alt:""}),V.jsx("img",{onClick:()=>r(!1),src:Qt.arrow_icon,className:"arrow",alt:""})]}),V.jsx("div",{className:"chat-msg",children:s.map((m,v)=>V.jsxs("div",{className:m.sId===t.id?"s-msg":"r-msg",children:[m.image?V.jsx("img",{className:"msg-img",src:m.image,alt:""}):V.jsx("p",{className:"msg",children:m.text}),V.jsxs("div",{children:[V.jsx("img",{src:m.sid===t.rId?t.avatar:i.userData.avatar,alt:""}),V.jsxs("p",{children:[" ",d(m.createdAt)]})]})]},v))}),V.jsxs("div",{className:"chat-input",children:[V.jsx("input",{onChange:m=>u(m.target.value),value:a,type:"text",placeholder:"Send a message"}),V.jsx("input",{onChange:c,type:"file",id:"image",accept:"image/png, image/jpg",hidden:!0}),V.jsx("label",{htmlFor:"image",children:V.jsx("img",{src:Qt.gallery_icon,alt:""})}),V.jsx("img",{onClick:f,src:Qt.send_button,alt:""})]})]}):V.jsxs("div",{className:`chat-welcome ${n?"":"hidden"}`,children:[V.jsx("img",{src:Qt.logo_icon,alt:""}),V.jsx("p",{children:"Chat anytime, anywhere"})]})},j4=()=>{const{chatUser:t,messages:e}=b.useContext(es),[n,r]=b.useState([]);return b.useEffect(()=>{let i=[];e.map(s=>{s.image&&i.push(s.image)}),r(i)},[e]),t?V.jsxs("div",{className:"rs",children:[V.jsxs("div",{className:"rs-profile",children:[V.jsx("img",{src:t==null?void 0:t.userData.avatar,alt:""}),V.jsxs("h3",{children:[" ",Date.now()-(t==null?void 0:t.userData.lastSeen)<=7e4?V.jsx("img",{className:"dot",src:Qt.green_dot,alt:""}):null," ",t==null?void 0:t.userData.name," "]}),V.jsx("p",{children:t==null?void 0:t.userData.bio})]}),V.jsx("hr",{}),V.jsxs("div",{className:"rs-media",children:[V.jsx("p",{children:"Media"}),V.jsx("div",{children:n.map((i,s)=>V.jsx("img",{onClick:()=>window.open(i),src:i,alt:""},s))})]}),V.jsx("button",{onClick:()=>WE(),children:"Logout"})]}):V.jsx("div",{className:"rs",children:V.jsx("button",{onClick:()=>WE(),children:"Logout"})})},z4=()=>{const{chatData:t,userData:e}=b.useContext(es),[n,r]=b.useState(!0);return b.useEffect(()=>{t&&e&&r(!1)},[t,e]),V.jsx("div",{className:"chat",children:n?V.jsx("p",{className:"loading",children:"Loading..."}):V.jsxs("div",{className:"chat-container",children:[V.jsx(AU,{}),V.jsx(B4,{}),V.jsx(j4,{})]})})},W4=()=>{const t=hh(),[e,n]=b.useState(null),[r,i]=b.useState(""),[s,o]=b.useState(""),[a,u]=b.useState(""),[c,d]=b.useState(""),{setUserData:f}=b.useContext(es),m=async v=>{v.preventDefault();try{if(!c&&!e){te.error("Upload profile image");return}const T=nt(Ke,"users",a);if(e){const S=await uR(e);d(S),await Tn(T,{avatar:S,bio:s,name:r})}else await Tn(T,{bio:s,name:r});const R=await or(T);f(R.data()),t("/chat"),te.success("Profile updated successfully!")}catch(T){console.error(T),te.error(T.message)}};return b.useEffect(()=>{zI(Zi,async v=>{if(v){u(v.uid);const T=nt(Ke,"users",v.uid),R=await or(T);if(R.exists()){const S=R.data();S.name&&i(S.name),S.bio&&o(S.bio),S.avatar&&d(S.avatar)}}else t("/")})},[]),V.jsx("div",{className:"profile",children:V.jsxs("div",{className:"profile-container",children:[V.jsxs("form",{onSubmit:m,children:[V.jsx("h3",{children:"Profile Details"}),V.jsxs("label",{htmlFor:"avatar",children:[V.jsx("input",{onChange:v=>n(v.target.files[0]),type:"file",accept:".png, .jpg, .jpeg",id:"avatar",hidden:!0}),V.jsx("img",{src:e?URL.createObjectURL(e):c||Qt.avatar_icon,alt:""}),"upload profile image"]}),V.jsx("input",{onChange:v=>i(v.target.value),value:r,type:"text",placeholder:"Your name",required:!0}),V.jsx("textarea",{onChange:v=>o(v.target.value),type:"text",value:s,placeholder:"Write profile bio",required:!0}),V.jsx("button",{type:"submit",children:"Save"})]}),V.jsx("img",{className:"profile-pic",src:e?URL.createObjectURL(e):c||Qt.logo_icon,alt:""})]})})},q4=()=>{const t=hh(),{loadUserData:e}=b.useContext(es);return b.useEffect(()=>{zI(Zi,async n=>{n?(t("/chat"),await e(n.uid)):t("/")})},[]),V.jsxs(V.Fragment,{children:[V.jsx(xM,{}),V.jsxs(rN,{children:[V.jsx(bu,{path:"/",element:V.jsx(VM,{})}),V.jsx(bu,{path:"/chat",element:V.jsx(z4,{})}),V.jsx(bu,{path:"/profile",element:V.jsx(W4,{})})]})]})};WT(document.getElementById("root")).render(V.jsx(oN,{children:V.jsx(FM,{children:V.jsx(q4,{})})}));
