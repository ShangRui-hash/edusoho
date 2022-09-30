/*! For license information please see index.js.LICENSE.txt */
!function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],h=0,f=[];h<s.length;h++)a=s[h],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(l&&l(e);f.length;)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={257:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([1048,0]),r()}({1048:function(t,e,r){"use strict";r.r(e);var n=r(194),o=r.n(n),i=r(349),a=r.n(i),s=r(623),c=r.n(s),u=$("#eslive-params"),l=new c.a;a()(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.connect({container:"eslive-container",url:u.data("url"),watermark:u.data("watermark")});case 2:case"end":return t.stop()}}),t)})))()},194:function(t,e,r){t.exports=r(402)},349:function(t,e,r){var n=r(33);function o(t,e,r,o,i,a,s){try{var c=t[a](s),u=c.value}catch(t){return void r(t)}c.done?e(u):n.resolve(u).then(o,i)}t.exports=function(t){return function(){var e=this,r=arguments;return new n((function(n,i){var a=t.apply(e,r);function s(t){o(a,n,i,s,c,"next",t)}function c(t){o(a,n,i,s,c,"throw",t)}s(void 0)}))}}},402:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:f,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",y={};function m(){}function v(){}function g(){}var w={};c(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(S([])));x&&x!==r&&n.call(x,i)&&(w=x);var E=g.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return v.prototype=g,c(E,"constructor",g),c(g,"constructor",v),v.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(O.prototype),c(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),c(E,s,"Generator"),c(E,i,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},623:function(t,e,r){t.exports=function(){"use strict";function t(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e={exports:{}};!function(t){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=e=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),e(r)}t.exports=e,t.exports.default=t.exports,t.exports.__esModule=!0}(e);var r=t(e.exports);function n(t,e,r,n){function o(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):o(t.value).then(a,s)}c((n=n.apply(t,e||[])).next())}))}var o={exports:{}};function i(){}i.prototype={on:function(t,e,r){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:r}),this},once:function(t,e,r){var n=this;function o(){n.off(t,o),e.apply(r,arguments)}return o._=e,this.on(t,o,r)},emit:function(t){for(var e=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=r.length;n<o;n++)r[n].fn.apply(r[n].ctx,e);return this},off:function(t,e){var r=this.e||(this.e={}),n=r[t],o=[];if(n&&e)for(var i=0,a=n.length;i<a;i++)n[i].fn!==e&&n[i].fn._!==e&&o.push(n[i]);return o.length?r[t]=o:delete r[t],this}},o.exports=i;var a=o.exports.TinyEmitter=i,s="application/x-postmate-v1+json",c=5,u=0,l=function(){return++u},h=function(t){var e=document.createElement("a");e.href=t;var r=e.protocol.length>4?e.protocol:window.location.protocol,n=e.host.length?"80"===e.port||"443"===e.port?e.hostname:e.host:window.location.host;return e.origin||r+"//"+n},f={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},p=function(t,e){return!("string"==typeof e&&t.origin!==e||!t.data||"object"===r(t.data)&&!("postmate"in t.data)||t.data.type!==s||!f[t.data.postmate])},d=function(t,e){var r="function"==typeof t[e]?t[e]():t[e];return v.Promise.resolve(r)},y=function(){function t(t){var e=this;this.parent=t.parent,this.frame=t.frame,this.child=t.child,this.childOrigin=t.childOrigin,this.events={},this.listener=function(t){if(!p(t,e.childOrigin))return!1;var r=((t||{}).data||{}).value||{},n=r.data,o=r.name;"emit"===t.data.postmate&&o in e.events&&e.events[o].call(e,n)},this.parent.addEventListener("message",this.listener,!1)}var e=t.prototype;return e.get=function(t){var e=this;return new v.Promise((function(r){var n=l(),o=function t(o){o.data.uid===n&&"reply"===o.data.postmate&&(e.parent.removeEventListener("message",t,!1),r(o.data.value))};e.parent.addEventListener("message",o,!1),e.child.postMessage({postmate:"request",type:s,property:t,uid:n},e.childOrigin)}))},e.call=function(t,e){this.child.postMessage({postmate:"call",type:s,property:t,data:e},this.childOrigin)},e.on=function(t,e){this.events[t]=e},e.destroy=function(){window.removeEventListener("message",this.listener,!1),this.frame.parentNode.removeChild(this.frame)},t}(),m=function(){function t(t){var e=this;this.model=t.model,this.parent=t.parent,this.parentOrigin=t.parentOrigin,this.child=t.child,this.child.addEventListener("message",(function(t){if(p(t,e.parentOrigin)){var r=t.data,n=r.property,o=r.uid,i=r.data;"call"!==t.data.postmate?d(e.model,n).then((function(e){return t.source.postMessage({property:n,postmate:"reply",type:s,uid:o,value:e},t.origin)})):n in e.model&&"function"==typeof e.model[n]&&e.model[n](i)}}))}return t.prototype.emit=function(t,e){this.parent.postMessage({postmate:"emit",type:s,value:{name:t,data:e}},this.parentOrigin)},t}(),v=function(){function t(t){var e=t.container,r=void 0===e?void 0!==r?r:document.body:e,n=t.model,o=t.url,i=t.name,a=t.classListArray,s=void 0===a?[]:a;return this.parent=window,this.frame=document.createElement("iframe"),this.frame.name=i||"",this.frame.classList.add.apply(this.frame.classList,s),r.appendChild(this.frame),this.child=this.frame.contentWindow||this.frame.contentDocument.parentWindow,this.model=n||{},this.sendHandshake(o)}return t.prototype.sendHandshake=function(e){var r,n=this,o=h(e),i=0;return new t.Promise((function(t,a){var u=function e(i){return!!p(i,o)&&("handshake-reply"===i.data.postmate?(clearInterval(r),n.parent.removeEventListener("message",e,!1),n.childOrigin=i.origin,t(new y(n))):a("Failed handshake"))};n.parent.addEventListener("message",u,!1);var l=function(){i++,n.child.postMessage({postmate:"handshake",type:s,model:n.model},o),i===c&&clearInterval(r)},h=function(){l(),r=setInterval(l,500)};n.frame.attachEvent?n.frame.attachEvent("onload",h):n.frame.onload=h,n.frame.src=e}))},t}();v.debug=!1,v.Promise=function(){try{return window?window.Promise:Promise}catch(t){return null}}(),v.Model=function(){function t(t){return this.child=window,this.model=t,this.parent=this.child.parent,this.sendHandshakeReply()}return t.prototype.sendHandshakeReply=function(){var t=this;return new v.Promise((function(e,r){var n=function n(o){if(o.data.postmate){if("handshake"===o.data.postmate){t.child.removeEventListener("message",n,!1),o.source.postMessage({postmate:"handshake-reply",type:s},o.origin),t.parentOrigin=o.origin;var i=o.data.model;return i&&Object.keys(i).forEach((function(e){t.model[e]=i[e]})),e(new m(t))}return r("Handshake Reply Failed")}};t.child.addEventListener("message",n,!1)}))},t}();class g extends a{constructor(){super(...arguments),this.child=void 0}connect(t){return n(this,void 0,void 0,(function*(){return console.log("ESLiveWebSDK v1.2.3"),new Promise(((e,r)=>{const o=document.getElementById(t.container);if(!o)return void r(new Error(`container id '${t.container}' is not exist in page html`));const i=new v({container:o,url:t.url,name:"live-sdk-iframe"}),a=o.getElementsByTagName("iframe")[0];a.allowFullscreen=!0,a.allow="microphone; camera; screen-wake-lock; display-capture",a.scrolling="no",a.style.position="absolute",a.style.left="0",a.style.top="0",a.style.right="0",a.style.bottom="0",a.style.height="100%",a.style.width="100%",a.style.border="0px",a.style.overflow="hidden",i.then((r=>n(this,void 0,void 0,(function*(){this.child=r,r.on("ScreenMode",(t=>this.emit("ScreenMode",t))),r.on("Goods.Buy",(t=>this.emit("Goods.Buy",t))),r.on("Goods.Goto",(t=>this.emit("Goods.Goto",t))),r.on("Reload",(()=>this.emit("Reload"))),r.on("Tab.Switch",(t=>this.emit("Tab.Switch",t))),t.floatButtons&&r.call("setFloatButtons",t.floatButtons),t.tabs&&r.call("setTabs",t.tabs),t.trailer&&r.call("setTrailer",t.trailer),t.watermark&&r.call("setWatermark",t.watermark),e()}))))}))}))}notify(t,e){this.child&&this.child.call(t,e)}}return g}()}});