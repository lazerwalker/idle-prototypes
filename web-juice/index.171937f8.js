function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o=Math.floor,a=Math.random;r=function(t,e){return t+o(a()*(e-t+1))};var i={},f={};f=function(t,e){return t===e||t!=t&&e!=e};var l,u,c={},s={},d={};u="object"==typeof n&&n&&n.Object===Object&&n;var p="object"==typeof self&&self&&self.Object===Object&&self;l=(u||p||Function("return this")()).Symbol;var v={},m=Object.prototype,y=m.hasOwnProperty,b=m.toString,g=l?l.toStringTag:void 0;v=function(t){var e=y.call(t,g),n=t[g];try{t[g]=void 0;var r=!0}catch(t){}var o=b.call(t);return r&&(e?t[g]=n:delete t[g]),o};var x={},j=Object.prototype.toString;x=function(t){return j.call(t)};var h=l?l.toStringTag:void 0;d=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":h&&h in Object(t)?v(t):x(t)};var w={};w=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};s=function(t){if(!w(t))return!1;var e=d(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var O={};O=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},c=function(t){return null!=t&&O(t.length)&&!s(t)};var $={},M=/^(?:0|[1-9]\d*)$/;$=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&M.test(t))&&t>-1&&t%1==0&&t<e},i=function(t,e,n){if(!w(n))return!1;var r=typeof e;return!!("number"==r?c(n)&&$(e,n.length):"string"==r&&e in n)&&f(n[e],t)};var N={},S={},E={},F={},I=/\s/;F=function(t){for(var e=t.length;e--&&I.test(t.charAt(e)););return e};var L=/^\s+/;E=function(t){return t?t.slice(0,F(t)+1).replace(L,""):t};var T={},k={};k=function(t){return null!=t&&"object"==typeof t};T=function(t){return"symbol"==typeof t||k(t)&&"[object Symbol]"==d(t)};var A=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,P=/^0o[0-7]+$/i,_=parseInt;S=function(t){if("number"==typeof t)return t;if(T(t))return NaN;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=E(t);var n=C.test(t);return n||P.test(t)?_(t.slice(2),n?2:8):A.test(t)?NaN:+t};N=function(t){return t?Infinity===(t=S(t))||-Infinity===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var B=parseFloat,D=Math.min,G=Math.random;function U(){const n=document.createElement("div");n.className="window",n.style.left=`${t(e)(0,70)}vw`,n.style.top=`${t(e)(0,70)}vh`,console.log(`${t(e)(0,70)}vw;`,n.style.left,n.style.top),n.addEventListener("click",(t=>{n.animate([{transform:"scale(1)"},{transform:"scale(0)"}],{duration:40}).onfinish=()=>n.remove()})),document.body.appendChild(n),n.animate([{transform:"scale(0)"},{transform:"scale(1)"}],{duration:20}),function(t){(t||document.body).animate([{transform:"translate(1px, 1px) rotate(0deg)"},{transform:"translate(-1px, -1px) rotate(-1deg)"},{transform:"translate(-1px, 0px) rotate(1deg)"},{transform:"translate(0px, 1px) rotate(0deg)"},{transform:"translate(1px, -1px) rotate(1deg)"},{transform:"translate(-1px, 1px) rotate(-1deg)"},{transform:"translate(-2px, 1px) rotate(0deg)"},{transform:"translate(2px, 1px) rotate(-1deg)"},{transform:"translate(-1px, -1px) rotate(1deg)"},{transform:"translate(0px, 1px) rotate(0deg)"},{transform:"translate(0px, -1px) rotate(-1deg)"}],{duration:20})}(n)}e=function(t,e,n){if(n&&"boolean"!=typeof n&&i(t,e,n)&&(e=n=void 0),void 0===n&&("boolean"==typeof e?(n=e,e=void 0):"boolean"==typeof t&&(n=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=N(t),void 0===e?(e=t,t=0):e=N(e)),t>e){var o=t;t=e,e=o}if(n||t%1||e%1){var a=G();return D(t+a*(e-t+B("1e-"+((a+"").length-1))),e)}return r(t,e)},window.addEventListener("DOMContentLoaded",(()=>{console.log("We done loaded");document.getElementById("start").addEventListener("click",U)}));
//# sourceMappingURL=index.171937f8.js.map
