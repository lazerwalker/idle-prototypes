!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r=Math.floor,i=Math.random;o=function(t,n){return t+r(i()*(n-t+1))};var a={},l={};l=function(t,n){return t===n||t!=t&&n!=n};var u,c,f={},d={},s={};c="object"==typeof e&&e&&e.Object===Object&&e;var v="object"==typeof self&&self&&self.Object===Object&&self;u=(c||v||Function("return this")()).Symbol;var b={},p=Object.prototype,y=p.hasOwnProperty,m=p.toString,g=u?u.toStringTag:void 0;b=function(t){var n=y.call(t,g),e=t[g];try{t[g]=void 0;var o=!0}catch(t){}var r=m.call(t);return o&&(n?t[g]=e:delete t[g]),r};var h={},j=Object.prototype.toString;h=function(t){return j.call(t)};var w=u?u.toStringTag:void 0;s=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?b(t):h(t)};var O={};O=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)};d=function(t){if(!O(t))return!1;var n=s(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n};var M={};M=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},f=function(t){return null!=t&&M(t.length)&&!d(t)};var S={},T=/^(?:0|[1-9]\d*)$/;S=function(t,n){var e=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&T.test(t))&&t>-1&&t%1==0&&t<n},a=function(t,n,e){if(!O(e))return!1;var o=typeof n;return!!("number"==o?f(e)&&S(n,e.length):"string"==o&&n in e)&&l(e[n],t)};var N={},E={},F={},L={},x=/\s/;L=function(t){for(var n=t.length;n--&&x.test(t.charAt(n)););return n};var $=/^\s+/;F=function(t){return t?t.slice(0,L(t)+1).replace($,""):t};var C={},k={};k=function(t){return null!=t&&"object"==typeof t};C=function(t){return"symbol"==typeof t||k(t)&&"[object Symbol]"==s(t)};var z=/^[-+]0x[0-9a-f]+$/i,A=/^0b[01]+$/i,I=/^0o[0-7]+$/i,P=parseInt;E=function(t){if("number"==typeof t)return t;if(C(t))return NaN;if(O(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=O(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=F(t);var e=A.test(t);return e||I.test(t)?P(t.slice(2),e?2:8):z.test(t)?NaN:+t};var _=1/0;N=function(t){return t?(t=E(t))===_||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var B=parseFloat,D=Math.min,G=Math.random;function H(){var e=document.createElement("div");e.innerHTML='\n  <div class="title-bar">\n    <div class="title-bar-text">Title</div>\n    <div class="title-bar-controls">\n      <button aria-label="Minimize"></button>\n      <button aria-label="Maximize"></button>\n      <button aria-label="Close"></button>\n    </div>\n  </div>\n  <div class="window-body">\n    <p>There\'s so much room for activities!</p>\n  </div>',e.className="window",console.log("Spawning popup"),e.style.left="".concat(t(n)(0,70),"vw"),e.style.top="".concat(t(n)(0,70),"vh"),console.log("".concat(t(n)(0,70),"vw;"),e.style.left,e.style.top),e.addEventListener("click",(function(t){e.animate([{transform:"scale(1)"},{transform:"scale(0)"}],{duration:40}).onfinish=function(){return e.remove()}})),document.body.appendChild(e),e.animate([{transform:"scale(0)"},{transform:"scale(1)"}],{duration:20})}n=function(t,n,e){if(e&&"boolean"!=typeof e&&a(t,n,e)&&(n=e=void 0),void 0===e&&("boolean"==typeof n?(e=n,n=void 0):"boolean"==typeof t&&(e=t,t=void 0)),void 0===t&&void 0===n?(t=0,n=1):(t=N(t),void 0===n?(n=t,t=0):n=N(n)),t>n){var r=t;t=n,n=r}if(e||t%1||n%1){var i=G();return D(t+i*(n-t+B("1e-"+((i+"").length-1))),n)}return o(t,n)},window.addEventListener("DOMContentLoaded",(function(){console.log("We done loaded"),document.getElementById("start").addEventListener("click",H)}))}();
//# sourceMappingURL=index.f11a84be.js.map
