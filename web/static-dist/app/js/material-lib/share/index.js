!function(e){var r={};function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(a,n,function(r){return e[r]}.bind(null,n));return a},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/static-dist/",t(t.s=1061)}({1061:function(e,r){var t=$("#share-materials-form"),a=$("#target-teachers-input"),n=$("#target-teachers-data").data("value");a.select2({multiple:!0,data:n}),a.on("change",(function(e){$(".jq-validate-error").hide(),$(".has-error").removeClass("has-error")})),t.validate({ajax:!0,currentDom:"#form-submit",rules:{targetUserIds:{required:!0,visible_character:!0}},messages:{targetUserIds:{required:Translator.trans("material.share.teacher_nickname_label")}},submitSuccess:function(){t.closest(".modal").modal("hide")}})}});