!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/static-dist/",n(n.s=1278)}({1278:function(e,t,n){"use strict";n.r(t);var o=$("#page-message-container"),r=o.data("goto"),i=o.data("duration"),u=o.data("os"),a=o.data("token"),d=$(".js-count-down"),c=o.data("h5Goto");"iOS"===u?window.webkit.messageHandlers.login.postMessage(a):"Android"===u?window.android.login(a):(r=c,i>0&&r&&function e(t,n,o){t.text(n),--n>0?setTimeout((function(){e(t,n,o)}),1e3):window.location.href=o}(d,i,r))}});