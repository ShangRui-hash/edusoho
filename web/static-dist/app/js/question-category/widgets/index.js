!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static-dist/",r(r.s=699)}({253:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});var i=function(e,t,n){var o=e.find(".js-remove-icon"),r=e.find(".js-remove-text");o.hasClass(t)?(o.removeClass(t).addClass(n),r&&r.text(Translator.trans("收起"))):(o.removeClass(n).addClass(t),r&&r.text(Translator.trans("展开")))},o=function(e,t,n,o){var r=1<arguments.length&&void 0!==t?t:".js-task-chapter",a=2<arguments.length&&void 0!==n?n:"es-icon-remove",s=3<arguments.length&&void 0!==o?o:"es-icon-anonymous-iconfont";$(0<arguments.length&&void 0!==e?e:"body").on("click",r,function(e){var t=$(e.currentTarget);t.nextUntil(r).animate({height:"toggle",opacity:"toggle"},"normal"),i(t,a,s)})}},699:function(e,t,n){"use strict";n.r(t);var o=n(253);$(".js-toggle-show").on("click",function(e){var t=$(e.target).closest(".js-sortable-item");t.nextUntil(".js-sortable-item").animate({height:"toggle",opacity:"toggle"},"normal"),Object(o.b)(t,"cd-icon-add","cd-icon-remove")}),$(document).ready(function(){var e=$(".js-category-search.active");0<e.length&&(e.parents(".js-sortable-list").show(),e.parents(".js-sortable-list.question-category-panel__list").find(".js-toggle-show").removeClass("cd-icon-add").addClass("cd-icon-remove"),e.parents(".js-sortable-list.question-category-panel__list").prev().find(".js-toggle-show").removeClass("cd-icon-add").addClass("cd-icon-remove"))})}});