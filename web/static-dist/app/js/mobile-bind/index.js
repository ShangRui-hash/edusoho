!function(e){function t(t){for(var r,s,o=t[0],d=t[1],u=t[2],l=0,f=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(c&&c(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var d=n[o];0!==i[d]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={278:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=d;a.push([1419,0]),n()}({1419:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),a=n(3),s=n.n(a),o=n(106),d=n(88),u=n.n(d),c=n(8),l=n(84),f=n(178);new(function(){function e(){i()(this,e),this.$form=$("#mobile-bind-form"),this.$smsCode=this.$form.find(".js-sms-send"),this.drag=null,this.initDrag(),this.dragEvent(),this.initValidator(),this.initMobileCodeSendBtn(),this.bindMobile(),this.initCheckCookie()}return s()(e,[{key:"dragEvent",value:function(){var e=this;this.drag&&this.drag.on("success",(function(t){e.$smsCode.removeClass("disabled").attr("disabled",!1)}))}},{key:"initCheckCookie",value:function(){$(".js-skip-bind").click((function(){var e="is_skip_mobile_bind";u.a.get(e)&&0!=u.a.get(e)||u.a.set(e,1),window.location.href=$("#submit-btn").data("targetUrl")}))}},{key:"initDrag",value:function(){this.drag=$("#drag-btn").length?new l.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"web_register"}):null}},{key:"initValidator",value:function(){var e=this;this.validator=this.$form.validate({currentDom:"#submit-btn",ajax:!0,rules:{mobile:{required:!0,phone:!0,es_remote:{type:"get",callback:function(t){t?(e.$smsCode.removeAttr("disabled"),$(".binded-tip").addClass("hidden")):(e.$smsCode.attr("disabled",!0),$(".binded-tip").removeClass("hidden"))}}},sms_code:{required:!0,unsigned_integer:!0,es_remote:{type:"get"}}},messages:{sms_code:{required:Translator.trans("auth.mobile_captcha_required_error_hint")}},submitSuccess:function(e){Object(c.a)("success",Translator.trans(e.message))},submitError:function(e){Object(c.a)("danger",Translator.trans(e.responseJSON.message))}})}},{key:"initMobileCodeSendBtn",value:function(){var e=this;this.$smsCode.on("click",(function(){e.$smsCode.attr("disabled",!0);var t=(new f.a).getCoordinate(event,$("meta[name=csrf-token]").attr("content"));new o.a({element:".js-sms-send",url:e.$smsCode.data("url"),smsType:"sms_bind",captcha:!0,captchaValidated:!0,captchaNum:"dragCaptchaToken",encryptedPoint:t,preSmsSend:function(){return!0},error:function(t){e.drag.initDragCaptcha()},additionalAction:function(t){return"captchaRequired"==t&&(e.$smsCode.attr("disabled",!0),$(".js-drag-jigsaw").removeClass("hidden"),e.drag&&e.drag.initDragCaptcha(),!0)}})}))}},{key:"bindMobile",value:function(){var e=this;$("#submit-btn").click((function(){e.validator.form()&&$.post(e.$form.data("url"),e.$form.serialize(),(function(e){Object(c.a)("success",Translator.trans(e.message)),window.location.href=$("#submit-btn").data("targetUrl")})).error((function(e){Object(c.a)("danger",Translator.trans(e.responseJSON.message))}))}))}}]),e}())},22:function(e,t){e.exports=jQuery}});