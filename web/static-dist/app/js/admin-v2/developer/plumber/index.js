!function(t){function e(e){for(var n,i,u=e[0],l=e[1],c=e[2],f=0,s=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(p&&p(e);s.length;)s.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var l=r[u];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={58:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var p=l;a.push([750,0]),r()}({22:function(t,e){t.exports=jQuery},750:function(t,e,r){"use strict";r.r(e);var n=r(8);function o(){setTimeout((function(){$.get($("#plumber-info").data("url"),(function(t){console.log(t),t.length?$("#plumber-info").html(t):o()}))}),1e3)}$(".js-operator-plumber").length&&$("body").on("click",".js-operator-plumber",(function(){$(this).attr("disabled",!0);var t=$(this).data("action");Object(n.a)("warning",Translator.trans("admin_v2.developer.plumber_operate_hint")),$.post($("#plumber-info").data("url"),{action:t,_csrf_token:$("meta[name=csrf-token]").attr("content")},(function(e){"stop"!=t?(o(),$(this).removeAttr("disabled")):window.location.reload()}))}))}});