(window.webpackJsonp=window.webpackJsonp||[]).push([["coupon_receive"],{1527:function(e,t,n){"use strict";n("e7e5");var r=n("d399"),i=n("7185");t.a={data:function(){return{count:{showCount:!1,num:60,codeBtnDisable:!1}}},methods:{validateMobileOrPsw:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mobile",t=this.userinfo[e],n=i.a[e];0===t.length&&(this.errorMessage[e]=""),this.errorMessage[e]=n.validator(t)?"":n.message},validatedChecker:function(){this.userinfo.mobile.length>11&&(this.userinfo.mobile=this.userinfo.mobile.substring(0,11));var e=this.userinfo.mobile,t=i.a.mobile;this.validated.mobile=t.validator(e)},countDown:function(){var e=this;this.$nextTick((function(){e.$refs.smsCode.$refs.input.focus()})),this.count.showCount=!0,this.count.codeBtnDisable=!0,this.count.num=60;var t=setInterval((function(){if(e.count.num<=0)return e.count.codeBtnDisable=!1,e.count.showCount=!1,void clearInterval(t);e.count.num-=1}),1e3)},handleSubmit:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.btnDisable||this.fastLogin({mobile:this.userinfo.mobile,smsToken:this.userinfo.smsToken,smsCode:this.userinfo.smsCode,loginType:"sms",client:"h5"}).then((function(t){return e(t)})).catch((function(e){t&&t(e.message),r.a.fail(e.message)}))},handleSendSms:function(){var e=this;this.sendSmsSend(this.userinfo).then((function(t){e.userinfo.smsToken=t.smsToken,e.countDown(),e.dragEnable=!1,e.userinfo.dragCaptchaToken=""})).catch((function(t){switch(t.code){case 4030301:case 4030302:e.dragKey+=1,e.userinfo.dragCaptchaToken="",e.userinfo.smsToken="",r.a.fail(t.message);break;case 4030303:e.dragEnable?r.a.fail(t.message):e.dragEnable=!0;break;default:r.a.fail(t.message)}}))},clickSmsBtn:function(){!this.count.codeBtnDisable&&this.validated.mobile&&(this.dragEnable?this.$refs.dragComponent.dragToEnd?this.$refs.dragComponent.initDragCaptcha():Object(r.a)("请先完成拼图验证"):this.handleSendSms())}}}},5118:function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("6017"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,o,s,a,c=1,u={},l=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){p(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(s="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(s)&&p(+t.data.slice(s.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),r=function(t){e.postMessage(s+t,"*")}):e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){o.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,r=function(e){var t=d.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(p,0,e)},f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return u[c]=i,r(c),c++},f.clearImmediate=h}function h(e){delete u[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=u[e];if(t){l=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{h(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("c8ba"),n("f28c"))},7067:function(e,t,n){"use strict";n("e17f");var r=n("2241"),i=(n("e7e5"),n("d399")),o=n("a026"),s=n("3ce7"),a=/micromessenger/.test(navigator.userAgent.toLowerCase());t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||n&&!t)i.a.fail("缺少分享参数");else{var c={domainUri:location.origin,itemUri:"",source:"h5"};s.a.marketingActivities({query:{activityId:e},data:c}).then((function(e){var s=-1!==e.url.indexOf("?")?"&":"?",c=n?"".concat(t).concat(s,"ticket=").concat(e.ticket):e.url;a?window.location.href=c:r.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{o.default.prototype.$copyText(c).then((function(){i.a.success("复制成功")}),(function(){i.a.fail("请更换浏览器复制")}))}catch(e){i.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(e){i.a.fail(e.message)}))}}},"8b9d":function(e,t,n){"use strict";n("6762"),n("2fdb"),n("ac6a"),n("8615"),n("e7e5");var r=n("d399"),i=n("3ce7"),o={classroom:"classroom",course:"course",vip:"vip",all:"all"};t.a={methods:{couponHandle:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.$store.state.token)if(e.currentUserCoupon||t)this.hasreceiveCoupon(e);else{var n=e.token;i.a.receiveCoupon({disableLoading:!0,data:{token:n}}).then((function(t){e.currentUserCoupon=t,r.a.success({message:"领取成功",duration:2e3})})).catch((function(t){r.a.fail(t.message),e.unreceivedNum="0"}))}else this.$router.push({name:"login",query:{redirect:this.$route.fullPath}})},hasreceiveCoupon:function(e){var t=this,n=e.targetDetail.product,i=e.targetDetail.numType;if(Object.values(o).includes(n)){if("single"===i){var s=e.target.id;if(n===o.vip)return void this.$router.push({path:"/vip",query:{id:s}});this.getPathParams(n,s).then((function(e){var r=e.id;r&&t.$router.push({path:"/".concat(n,"/").concat(r)})}))}else if(["multi","all"].indexOf(i)>-1){if("vip"===n)return void this.$router.push({path:"/".concat(e.targetDetail.product)});if("all"===n)return void this.$router.push({path:"/"});this.$router.push({path:"/".concat(e.targetDetail.product,"/explore")})}}else r.a.fail("暂不支持查看：".concat(n,"类型商品"))},getPathParams:function(e,t){return e!==o.course?Promise.resolve({id:t}):i.a.getCourseByCourseSet({query:{id:t}}).then((function(e){return e.length&&e[0]?{id:e[0].id}:{message:"当前课程不存在了"}})).catch((function(e){r.a.fail(e.message)}))}}}},"8e6c":function(e,t,n){"use strict";n("6b54"),n("28a5"),function(e){var t,n;void 0===e.btoa&&(e.btoa=(t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),function(e){var n,r,i,o,s,a,c;for(r=i=0,o=e.length,a=(o-=s=o%3)/3<<2,s>0&&(a+=4),n=new Array(a);r<o;)c=e.charCodeAt(r++)<<16|e.charCodeAt(r++)<<8|e.charCodeAt(r++),n[i++]=t[c>>18]+t[c>>12&63]+t[c>>6&63]+t[63&c];return 1==s?(c=e.charCodeAt(r++),n[i++]="".concat(t[c>>2]+t[(3&c)<<4],"==")):2==s&&(c=e.charCodeAt(r++)<<8|e.charCodeAt(r++),n[i++]="".concat(t[c>>10]+t[c>>4&63]+t[(15&c)<<2],"=")),n.join("")})),void 0===e.atob&&(e.atob=(n=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],function(e){var t,r,i,o,s,a,c,u,l,d;if((c=e.length)%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(e))return"";for(l=c,(u="="==e.charAt(c-2)?1:"="==e.charAt(c-1)?2:0)>0&&(l-=4),l=3*(l>>2)+u,d=new Array(l),s=a=0;s<c&&-1!=(t=n[e.charCodeAt(s++)])&&-1!=(r=n[e.charCodeAt(s++)])&&(d[a++]=String.fromCharCode(t<<2|(48&r)>>4),-1!=(i=n[e.charCodeAt(s++)]))&&(d[a++]=String.fromCharCode((15&r)<<4|(60&i)>>2),-1!=(o=n[e.charCodeAt(s++)]));)d[a++]=String.fromCharCode((3&i)<<6|o);return d.join("")}));var r=2654435769;function i(e,t){var n=e.length,r=n<<2;if(t){var i=e[n-1];if(i<(r-=4)-3||i>r)return null;r=i}for(var o=0;o<n;o++)e[o]=String.fromCharCode(255&e[o],e[o]>>>8&255,e[o]>>>16&255,e[o]>>>24&255);var s=e.join("");return t?s.substring(0,r):s}function o(e,t){var n,r=e.length,i=r>>2;0!=(3&r)&&++i,t?(n=new Array(i+1))[i]=r:n=new Array(i);for(var o=0;o<r;++o)n[o>>2]|=e.charCodeAt(o)<<((3&o)<<3);return n}function s(e){return 4294967295&e}function a(e,t,n,r,i,o){return(n>>>5^t<<2)+(t>>>3^n<<4)^(e^t)+(o[3&r^i]^n)}function c(e){return e.length<4&&(e.length=4),e}function u(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var t=[],n=e.length,r=0,i=0;r<n;++r,++i){var o=e.charCodeAt(r);if(o<128)t[i]=e.charAt(r);else if(o<2048)t[i]=String.fromCharCode(192|o>>6,128|63&o);else{if(!(o<55296||o>57343)){if(r+1<n){var s=e.charCodeAt(r+1);if(o<56320&&s>=56320&&s<=57343){var a=65536+((1023&o)<<10|1023&s);t[i]=String.fromCharCode(240|a>>18&63,128|a>>12&63,128|a>>6&63,128|63&a),++r;continue}}throw new Error("Malformed string")}t[i]=String.fromCharCode(224|o>>12,128|o>>6&63,128|63&o)}}return t.join("")}function l(e,t){return(void 0===t||null===t||t<0)&&(t=e.length),0===t?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?t===e.length?e:e.substr(0,t):t<65535?function(e,t){for(var n=new Array(t),r=0,i=0,o=e.length;r<t&&i<o;r++){var s=e.charCodeAt(i++);switch(s>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n[r]=s;break;case 12:case 13:if(!(i<o))throw new Error("Unfinished UTF-8 octet sequence");n[r]=(31&s)<<6|63&e.charCodeAt(i++);break;case 14:if(!(i+1<o))throw new Error("Unfinished UTF-8 octet sequence");n[r]=(15&s)<<12|(63&e.charCodeAt(i++))<<6|63&e.charCodeAt(i++);break;case 15:if(!(i+2<o))throw new Error("Unfinished UTF-8 octet sequence");var a=((7&s)<<18|(63&e.charCodeAt(i++))<<12|(63&e.charCodeAt(i++))<<6|63&e.charCodeAt(i++))-65536;if(!(a>=0&&a<=1048575))throw new Error("Character outside valid Unicode range: 0x".concat(a.toString(16)));n[r++]=a>>10&1023|55296,n[r]=1023&a|56320;break;default:throw new Error("Bad UTF-8 encoding 0x".concat(s.toString(16)))}}return r<t&&(n.length=r),String.fromCharCode.apply(String,n)}(e,t):function(e,t){for(var n=[],r=new Array(32768),i=0,o=0,s=e.length;i<t&&o<s;i++){var a=e.charCodeAt(o++);switch(a>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:r[i]=a;break;case 12:case 13:if(!(o<s))throw new Error("Unfinished UTF-8 octet sequence");r[i]=(31&a)<<6|63&e.charCodeAt(o++);break;case 14:if(!(o+1<s))throw new Error("Unfinished UTF-8 octet sequence");r[i]=(15&a)<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++);break;case 15:if(!(o+2<s))throw new Error("Unfinished UTF-8 octet sequence");var c=((7&a)<<18|(63&e.charCodeAt(o++))<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++))-65536;if(!(c>=0&&c<=1048575))throw new Error("Character outside valid Unicode range: 0x".concat(c.toString(16)));r[i++]=c>>10&1023|55296,r[i]=1023&c|56320;break;default:throw new Error("Bad UTF-8 encoding 0x".concat(a.toString(16)))}if(i>=32766){var u=i+1;r.length=u,n[n.length]=String.fromCharCode.apply(String,r),t-=u,i=-1}}return i>0&&(r.length=i,n[n.length]=String.fromCharCode.apply(String,r)),n.join("")}(e,t)}function d(e,t){return void 0===e||null===e||0===e.length?e:(e=u(e),t=u(t),i(function(e,t){var n,i,o,c,u,l,d=e.length,f=d-1;for(i=e[f],o=0,l=0|Math.floor(6+52/d);l>0;--l){for(c=(o=s(o+r))>>>2&3,u=0;u<f;++u)n=e[u+1],i=e[u]=s(e[u]+a(o,n,i,u,c,t));n=e[0],i=e[f]=s(e[f]+a(o,n,i,f,c,t))}return e}(o(e,!0),c(o(t,!1))),!1))}function f(e,t){return void 0===e||null===e||0===e.length?e:(t=u(t),l(i(function(e,t){var n,i,o,c,u,l=e.length,d=l-1;for(n=e[0],o=s(Math.floor(6+52/l)*r);0!==o;o=s(o-r)){for(c=o>>>2&3,u=d;u>0;--u)i=e[u-1],n=e[u]=s(e[u]-a(o,n,i,u,c,t));i=e[d],n=e[0]=s(e[0]-a(o,n,i,0,c,t))}return e}(o(e,!1),c(o(t,!1))),!0)))}e.XXTEA={utf8Encode:u,utf8Decode:l,encrypt:d,encryptToBase64:function(t,n){return e.btoa(d(t,n))},decrypt:f,decryptFromBase64:function(t,n){return void 0===t||null===t||0===t.length?t:f(e.atob(t),n)}}}(window)},a262:function(e,t,n){"use strict";var r=n("7067");t.a={methods:{activityHandle:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(r.a)(e,t,n)}}}},cda6:function(e,t,n){"use strict";n.r(t),n("8e6e"),n("e7e5");var r=n("d399"),i=(n("ac6a"),n("456d"),n("bd86")),o=n("2f62"),s=n("3ce7");function a(e){for(var t=e.toString().split("."),n=["","0","00","000","0000"].reverse(),r=0;r<t.length;r+=1){var i=t[r].length;t[r]=n[i]+t[r]}return t.join("")}n("c5f6"),n("6b54"),n("28a5");var c=function(e,t){var n=a(e),r=a(t);return Number(n)<=Number(r)},u=(n("96cf"),n("3b8d")),l=n("f13d"),d=(n("7185"),n("8e6c"),n("a262")),f=n("d863"),h=n("1527");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={name:"CouponFast",components:{EDrag:l.a},mixins:[d.a,f.a,h.a],data:function(){return{isShow:!1,userinfo:{mobile:"",dragCaptchaToken:void 0,smsCode:"",smsToken:"",type:"sms_login"},dragEnable:!1,dragKey:0,errorMessage:{mobile:""},validated:{mobile:!1},count:{showCount:!1,num:60,codeBtnDisable:!1}}},computed:{btnDisable:function(){return!(this.userinfo.mobile&&this.userinfo.smsCode)},cansentCode:function(){return!(this.count.codeBtnDisable||!this.validated.mobile)}},methods:m(m({},Object(o.c)(["addUser","setMobile","sendSmsSend","fastLogin"])),{},{handleSubmitSuccess:function(){var e={mobile:this.userinfo.mobile,smsToken:this.userinfo.smsToken,smsCode:this.userinfo.smsCode};this.$emit("lReceiveCoupon",e)},handleSmsSuccess:function(e){this.userinfo.dragCaptchaToken=e,this.handleSendSms()}})},v=n("0c7c"),b=Object(v.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"coupon-receive-login"},[n("div",{staticClass:"receive-login-input"},[n("van-field",{attrs:{border:!1,"error-message":e.errorMessage.mobile,type:"number",placeholder:"请输入手机号码",clearable:""},on:{blur:function(t){return e.validateMobileOrPsw("mobile")},keyup:function(t){return e.validatedChecker()}},model:{value:e.userinfo.mobile,callback:function(t){e.$set(e.userinfo,"mobile",t)},expression:"userinfo.mobile"}})],1),e.dragEnable?n("div",{staticClass:"mobile-drag"},[n("div",{staticClass:"mobile-drag-content"},[e.dragEnable?n("e-drag",{key:e.dragKey,ref:"dragComponent",attrs:{"limit-type":"receive_coupon"},on:{success:e.handleSmsSuccess}}):e._e()],1)]):e._e(),n("div",{staticClass:"receive-login-input"},[n("van-field",{ref:"smsCode",attrs:{border:!1,type:"number",placeholder:"请输入验证码",clearable:"",maxlength:"6"},model:{value:e.userinfo.smsCode,callback:function(t){e.$set(e.userinfo,"smsCode",t)},expression:"userinfo.smsCode"}},[n("div",{class:["code-btn",e.cansentCode?"":"code-btn--disabled"],attrs:{slot:"button"},on:{click:e.clickSmsBtn},slot:"button"},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.count.showCount,expression:"!count.showCount"}]},[e._v("发送验证码")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.count.showCount,expression:"count.showCount"}]},[e._v(e._s(e.count.num)+" s")])])])],1),n("div",{class:["receive-login__btn",e.btnDisable?"disabled__btn":""],on:{click:function(t){return e.handleSubmit(e.handleSubmitSuccess)}}},[e._v("\n    立即领取\n  ")]),e._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"receive-login__text"},[t("span",{staticClass:"receive-login-tools"},[this._v("新用户领取将为您自动注册")])])}],!1,null,null,null).exports,C=n("8813"),y=n("8b9d"),O=n("5118");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={name:"FastReceive",components:{fastLogin:b},mixins:[C.a,y.a],data:function(){return{coupons:null,currentUserCoupon:null,login:!1,canuse:!1,hasReceive:!1,receiveFail:!1,failmessage:"优惠券已失效",successmessage:"",loginMethods:!1}},created:function(){this.getCouponInfo()},computed:_(_({},Object(o.e)({user:function(e){return e.user},isLoading:function(e){return e.isLoading},settings:function(e){return e.settings},couponSwitch:function(e){return e.couponSwitch}})),{},{username:{get:function(){if(this.$store.state.token)return this.user.verifiedMobile?this.user.verifiedMobile:this.user.nickname}}}),filters:{couponType:function(e){return"discount"==e?"折":"元"}},methods:{getCouponInfo:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$route.params.token,t.next=3,s.a.getCouponInfo({query:{token:n}}).then((function(t){e.coupons=t,!e.cantUseCoupon(t)&&e.isLogin()})).catch((function(e){r.a.fail(e.message)}));case 3:case"end":return t.stop()}}),t)})))()},isLogin:function(){if(this.$store.state.token){this.login=!0;var e={token:this.$route.params.token};this.newReceiveCoupon(e)}},couponType:function(e){var t=e.targetDetail.numType,n=e.targetDetail.product;if("single"===t)switch(n){case"course":case"classroom":return"指定商品";case"vip":return"指定会员";default:return""}else if("all"===t)switch(n){case"course":return"全部课程";case"classroom":return"全部班级";case"all":return"全部商品";case"vip":return"全部会员";default:return""}else switch(n){case"course":case"classroom":return"部分商品";default:return""}},newReceiveCoupon:function(e,t){var n=this;s.a.pluginsReceiveCoupon({data:e}).then((function(e){t?(r.a.success("领取成功，正在跳转到详情页..."),Object(O.setTimeout)((function(){n.useCoupon()}),3e3)):(n.currentUserCoupon=e,n.successmessage="领取成功，优惠券已放入",n.hasReceive=!0)})).catch((function(e){t?"5004507"==e.code?(r.a.success("您已领取过该优惠券，正在跳转到详情页..."),Object(O.setTimeout)((function(){n.useCoupon()}),3e3)):r.a.fail("领取失败，"+e.message):"5004507"==e.code?(n.successmessage="您已领取过，优惠券已放入",n.hasReceive=!0):(n.receiveFail=!0,n.failmessage="领取失败，"+e.message)}))},useCoupon:function(){null!=this.currentUserCoupon&&this.currentUserCoupon.deadline&&this.isOld(this.currentUserCoupon.deadline)?r.a.fail("优惠券已过期"):this.hasreceiveCoupon(this.coupons)},lReceiveCoupon:function(e,t){var n={token:this.$route.params.token};this.loginMethods=!0,this.newReceiveCoupon(n,!0)},isOld:function(e){var t=new Date,n=new Date(Date.parse(e));return t.getTime()>n.getTime()+864e5},cantUseCoupon:function(e){return null!=e.currentUserCoupon?(this.currentUserCoupon=e.currentUserCoupon,this.successmessage="您已领取过该批次优惠券，优惠券已放入",this.hasReceive=!0,this.canuse=!1,!0):0==Number(e.unreceivedNum)?(this.failmessage="优惠券已领完",this.receiveFail=!0,this.canuse=!1,!0):e.deadline&&this.isOld(e.deadline)?(this.failmessage="优惠券已过期",this.receiveFail=!0,this.canuse=!1,!0):(this.canuse=!0,!1)}}},k=Object(v.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.coupons?n("div",{staticClass:"coupon-receive"},[e.isLoading?n("e-loading"):e._e(),n("div",{staticClass:"coupon-receive-title text-overflow"},[e._v("\n    "+e._s(e.settings.name)+"\n  ")]),n("div",{staticClass:"coupon-receive-ticket"},[n("div",{staticClass:"ticket-discount"},[n("span",{staticClass:"rate"},[e._v(e._s(parseFloat(e.coupons.rate)))]),e._v(e._s(e._f("couponType")(e.coupons.type))+"\n      "),n("span",[e._v("优惠券")])]),n("div",{staticClass:"ticket-expire text-overflow"},["day"===e.coupons.deadlineMode?n("span",[null!=e.currentUserCoupon?n("span",[e._v("\n          优惠券有效至："+e._s(e.receiveTimeExpire(e.currentUserCoupon.deadline))+"\n        ")]):e._e(),null==e.currentUserCoupon?n("span",[e._v("\n          领取后"+e._s(e.coupons.fixedDay)+"天内有效\n        ")]):e._e()]):e._e(),"time"===e.coupons.deadlineMode?n("span",[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.hasReceive,expression:"!hasReceive"}]},[e._v("领券截止日期：")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.hasReceive,expression:"hasReceive"}]},[e._v("优惠券有效至：")]),e._v("\n        "+e._s(e.receiveTimeExpire(e.coupons.deadline))+"\n      ")]):e._e()]),n("div",{staticClass:"ticket-range text-overflow"},[e._v("\n      适用于："+e._s(e.couponType(e.coupons))+"\n    ")])]),e.hasReceive&&!e.loginMethods&&e.couponSwitch?n("div",{staticClass:"receive-status"},[n("img",{staticClass:"status-icon",attrs:{src:"static/images/coupon-yes.png"}}),n("div",{staticClass:"status-text"},[e._v(e._s(e.successmessage))]),n("div",{staticClass:"status-user"},[e._v(e._s(e.username)+"账户")]),n("div",{staticClass:"status__btn",on:{click:function(t){return e.useCoupon()}}},[e._v("立即使用")])]):e._e(),e.receiveFail&&!e.loginMethods||!e.couponSwitch?n("div",{staticClass:"receive-status"},[n("img",{staticClass:"status-icon",attrs:{src:"static/images/coupon-no.png"}}),n("div",{staticClass:"status-text"},[e._v(e._s(e.failmessage))])]):e._e(),!e.login&&e.canuse&&e.couponSwitch?n("fast-login",{on:{lReceiveCoupon:e.lReceiveCoupon}}):e._e()],1):e._e()}),[],!1,null,null,null).exports;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var T={name:"PassReceive",mixins:[C.a,y.a],data:function(){return{item:{},message:"",isReceive:!0}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({couponStatus:function(){return Object.keys(this.item).length?"coupon-receive-success":""}},Object(o.e)(["couponSwitch"])),created:function(){var e=this;if(this.couponSwitch){var t=this.$route.params.token;this.$store.state.token?t&&s.a.receiveCoupon({data:{token:t}}).then((function(t){e.item=t,e.message="恭喜您成功领取了一张优惠券！"})).catch((function(t){e.message="优惠券领取失败！",r.a.fail(t.message)})):this.$router.push({name:"login",query:{redirect:this.$route.fullPath}})}else r.a.fail("优惠券已失效")}};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var x={components:{fastReceive:k,passReceive:Object(v.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"coupon-receive-page"},[n("div",{class:["coupon-card-bg","clearfix",e.couponStatus]},[n("div",{staticClass:"coupon-info"},[e._v(e._s(e.message))]),Object.keys(e.item).length?n("div",{staticClass:"e-coupon__body"},[n("div",{staticClass:"e-coupon__header clearfix"},[n("span",{staticClass:"e-coupon__price",domProps:{innerHTML:e._s(e.priceHtml(e.item))}}),n("div",{staticClass:"e-coupon__name"},[n("div",{staticClass:"text-overflow text-14 coupon-name"},[e._v(e._s(e.item.name))]),e.item.deadlineMode&&"time"!==e.item.deadlineMode?e._e():n("span",{staticClass:"text-10"},[e._v(e._s(e.timeExpire(e.item.createdTime,e.item.deadline)))]),"day"!==e.item.deadlineMode||e.item.currentUserCoupon?e._e():n("span",{staticClass:"text-10"},[e._v("领取后"+e._s(e.item.fixedDay)+"天内有效")]),"day"===e.item.deadlineMode&&e.item.currentUserCoupon?n("span",{staticClass:"text-10"},[e._v(e._s(e.timeExpire(e.item.createdTime,e.item.currentUserCoupon.deadline)))]):e._e()]),n("span",{staticClass:"coupon-button",on:{click:function(t){return e.couponHandle(e.item,e.isReceive)}}},[e._v("去使用")])]),n("div",{staticClass:"e-coupon__middle"}),n("div",{staticClass:"e-coupon__bottom text-overflow"},[e._v("\n        可用范围："+e._s(e.scopeFilter(e.item))+"\n      ")])]):e._e()])])}),[],!1,null,null,null).exports},data:function(){return{sitePlugins:0,cloudSetting:0}},created:function(){this.getsitePlugins()},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(o.e)({isLoading:function(e){return e.isLoading}})),methods:{getsitePlugins:function(){var e=this;s.a.sitePlugins({query:{pluginName:"coupon"}}).then((function(t){Object.keys(t).length>0&&(c("2.2.10",t.version)?e.sitePlugins=1:e.sitePlugins=2,e.getsettingsCloud())})).catch((function(e){r.a.fail(e.message)}))},getsettingsCloud:function(){var e=this;s.a.settingsCloud().then((function(t){t.sms_enabled?e.cloudSetting=1:e.cloudSetting=2})).catch((function(e){r.a.fail(e.message)}))}}},E=Object(v.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"receive-all"},[e.isLoading?n("e-loading"):e._e(),1==e.cloudSetting&&1==e.sitePlugins?n("fast-receive"):e._e(),2==e.cloudSetting||2==e.sitePlugins?n("pass-receive"):e._e()],1)}),[],!1,null,null,null);t.default=E.exports},d863:function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d"),n("a481");var r=n("bd86"),i=n("7067"),o=n("3ce7"),s=n("faa5"),a=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a={data:function(){return{redirect:""}},computed:u({},Object(a.e)({user:function(e){return e.user}})),created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:u(u({},Object(a.d)([s.u])),{},{afterLogin:function(){var e=this;this.checkMobileBind().then((function(t){var n=t.is_bind_mobile,r=t.mobile_bind_mode;e[s.u]({is_bind_mobile:n,mobile_bind_mode:r}),n||"closed"===r?setTimeout(e.jumpAction,1e3):e.$router.replace({name:"binding",query:{redirect:e.$route.query.redirect}})})).catch((function(){setTimeout(e.jumpAction,1e3)}))},jumpAction:function(){var e=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",t=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",n=this.$route.query.callbackType,r=this.$route.query.activityId,o=decodeURIComponent(this.$route.query.callback);if(n)switch(n){case"marketing":Object(i.a)(r,o)}else t?this.$router.replace({path:e,query:{backUrl:t}}):this.$router.replace({path:e})},checkMobileBind:function(){return o.a.mobileBindCheck({query:{userId:this.user.id}})}})}},f13d:function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var r=n("75fc"),i=(n("e7e5"),n("d399")),o=n("bd86"),s=(n("c5f6"),n("3ce7"));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c={props:{tips:{type:String,default:"placeholder.dragTheSliderToCompleteThePuzzle"},limitType:{type:String,default:""}},data:function(){return{imgInfo:{url:"",jigsaw:"",token:""},dragState:{left:0,width:0,currentX:0,currentLeft:0,btnWidth:0,maskWidth:0},dragToEnd:!1}},created:function(){this.initDragCaptcha()},mounted:function(){var e=this.$refs.bar,t=this.$refs.dragBtn,n=e.getBoundingClientRect();Object.assign(this.dragState,{left:Number(n.left.toFixed(2)),width:e.clientWidth,btnWidth:t.offsetWidth/2})},methods:{initDragCaptcha:function(){var e=this,t={};this.limitType&&(t={limitType:this.limitType}),s.a.dragCaptcha({data:t}).then((function(t){e.imgInfo=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t),Object.assign(e.dragState,{currentLeft:0,maskWidth:0}),e.dragToEnd=!1})).catch((function(e){i.a.fail(e.message)}))},handletTouchEnd:function(){var e=this;if(!this.dragToEnd&&this.dragState.currentLeft){var t=this.getToken();this.dragToEnd=!0,s.a.dragValidate({query:{token:t}}).then((function(n){i.a.success(e.$t("e.verificationSuccess")),e.$emit("success",t)})).catch((function(t){i.a.fail(t.message),e.initDragCaptcha()}))}},handleTouchMove:function(e){if(!this.dragToEnd){e.preventDefault();var t=this.$refs.dragBtn,n=this.dragState,r=e.clientX?e.clientX.toFixed(2):e.targetTouches[0].pageX.toFixed(2)-this.$refs.drag.offsetLeft,i=(r-n.left-n.btnWidth).toFixed(2);i<0&&(i=0),r>n.width+this.$refs.drag.offsetLeft&&(i=n.width-this.$refs.dragImg.width),Object.assign(this.dragState,{currentLeft:i,maskWidth:(Number(i)+t.offsetWidth/2).toFixed(2)})}},calPositionX:function(){var e=this.$refs.dragImgBg,t=(e.naturalWidth/e.width).toFixed(2);return(Number(this.dragState.currentLeft).toFixed(2)*t).toFixed(2)},getToken:function(){var e={token:this.imgInfo.token,captcha:this.calPositionX()};return Object(r.a)(btoa(JSON.stringify(e))).reverse().join("")}}},u=n("0c7c"),l=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"drag",staticClass:"e-drag"},[n("div",{staticClass:"e-drag-section"},[n("div",{staticClass:"e-drag-img"},[n("img",{ref:"dragImgBg",attrs:{src:e.imgInfo.url,alt:""}}),n("img",{ref:"dragImg",staticClass:"e-drag-img__dragable",style:{left:e.dragState.currentLeft+"px"},attrs:{src:e.imgInfo.jigsaw,alt:""}})]),n("div",{ref:"bar",staticClass:"e-drag-bar"},[n("span",[e._v(e._s(e.$t(e.tips)))]),n("div",{staticClass:"e-drag-bar__mask",style:{width:e.dragState.maskWidth+"px"}}),n("div",{ref:"dragBtn",staticClass:"e-drag-btn",style:{left:e.dragState.currentLeft+"px"},on:{touchend:e.handletTouchEnd,touchmove:e.handleTouchMove}},[n("img",{attrs:{src:"static/images/drag.png",alt:""}})])])])])}),[],!1,null,null,null);t.a=l.exports}}]);