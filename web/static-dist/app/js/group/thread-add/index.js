!function(u){function e(e){for(var t,r,n=e[0],o=e[1],a=e[2],i=0,l=[];i<n.length;i++)r=n[i],Object.prototype.hasOwnProperty.call(f,r)&&f[r]&&l.push(f[r][0]),f[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(u[t]=o[t]);for(s&&s(e);l.length;)l.shift()();return p.push.apply(p,a||[]),c()}function c(){for(var e,t=0;t<p.length;t++){for(var r=p[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==f[a]&&(n=!1)}n&&(p.splice(t--,1),e=i(i.s=r[0]))}return e}var r={},f={198:0},p=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=u,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var s=n;p.push([620,0]),c()}({15:function(e,t){e.exports=jQuery},620:function(e,t,r){"use strict";r.r(t);var n=r(93),o=$("#user-thread-form"),a="#groupthread-save-btn",i="thread_content";new n.a(o);var l=CKEDITOR.replace(i,{toolbar:"Full",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#"+i).data("imageUploadUrl"),allowedContent:!0,height:300});l.on("change",function(){$("#"+i).val(l.getData())}),l.on("blur",function(){$("#"+i).val(l.getData())});var u=o.validate({currentDom:a,rules:{"thread[title]":{required:!0,minlength:2,maxlength:100},"thread[content]":{required:!0,minlength:2}}});$(a).click(function(){u.form()&&o.submit()})}});