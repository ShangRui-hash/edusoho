!function(l){function t(t){for(var e,r,n=t[0],a=t[1],i=t[2],o=0,c=[];o<n.length;o++)r=n[o],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&c.push(u[r][0]),u[r]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(l[e]=a[e]);for(f&&f(t);c.length;)c.shift()();return d.push.apply(d,i||[]),s()}function s(){for(var t,e=0;e<d.length;e++){for(var r=d[e],n=!0,a=1;a<r.length;a++){var i=r[a];0!==u[i]&&(n=!1)}n&&(d.splice(e--,1),t=o(o.s=r[0]))}return t}var r={},u={155:0},d=[];function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=l,o.c=r,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var a=0;a<e.length;a++)t(e[a]);var f=n;d.push([586,0]),s()}({15:function(t,e){t.exports=jQuery},586:function(t,e,r){"use strict";r.r(e);var a=r(4);!function(){if(!$("#detail-data").length)return;if(!$("#detail-data").data("showable"))return Object(a.a)("warning",Translator.trans("course_manage.live_statistics.live_not_end"));$.get($("#detail-data").data("url"),function(t){(t.checkin.errorCode||t.visitor.errorCode)&&(4002==t.checkin.errorCode?$("#checkin-detail").html('<h4 class="col-md-12">'+Translator.trans("course_manage.live_statistics.checkin_not_support")+"</h4>"):Object(a.a)("warning",Translator.trans("course_manage.live_statistics.empty_tips"))),t.checkin.errorCode||t.visitor.errorCode||t.checkin.data.success&&t.visitor.data.success||Object(a.a)("warning",Translator.trans("course_manage.live_statistics.data_not_valid"));var e,r=t.checkin.data,n=t.visitor.data;$("#checkin-time").length&&r&&r.time&&$("#checkin-time").html(r.time),$("#checkin-data").length&&r&&r.detail&&$("#checkin-data").html(r.detail.length),$("#visitor-learn-time").length&&n&&n.totalLearnTime&&(e=$("#course-student-number").html(),$("#visitor-learn-time").html(0<e?Math.ceil(n.totalLearnTime/e):0))})}()}});