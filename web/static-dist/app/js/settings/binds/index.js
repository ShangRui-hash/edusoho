!function(c){function t(t){for(var e,n,r=t[0],o=t[1],a=t[2],i=0,s=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&s.push(u[n][0]),u[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(c[e]=o[e]);for(p&&p(t);s.length;)s.shift()();return f.push.apply(f,a||[]),l()}function l(){for(var t,e=0;e<f.length;e++){for(var n=f[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==u[a]&&(r=!1)}r&&(f.splice(e--,1),t=i(i.s=n[0]))}return t}var n={},u={303:0},f=[];function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=c,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var p=r;f.push([711,0]),l()}({711:function(t,e,n){"use strict";n.r(e);n(95);var r="WECHAT_BIND_INTRO";$(".js-unbind-btn").on("click",function(){var t=$(this).data("url");cd.confirm({title:Translator.trans("user.settings.unbind_title"),content:Translator.trans("user.settings.unbind_content"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",function(){$.post(t,function(t){cd.message({type:"success",message:Translator.trans(t.message)}),setTimeout(function(){window.location.reload()},3e3)})})});var o,a=$("#wechat_notification_enabled").val();!store.get(r)&&"bind"!==$("#wechat_notification_enabled").data("status")&&a&&(store.set(r,!0),o='<i class="es-icon es-icon-close01"></i>',introJs().setOptions({steps:[{element:".js-wechat-btn",intro:Translator.trans("wechat.notification.wechat_bind_hover")}],skipLabel:o,doneLabel:o,showBullets:!1,tooltipPosition:"down",showStepNumbers:!1,exitOnEsc:!1,exitOnOverlayClick:!1,tooltipClass:"wechat-intro-intro"}).start());var i=$("#wechat-login-qrcode");void 0!==i.data("url")&&$.get(i.data("url"),function(t){i.attr("src",t.img)})}});