(window.webpackJsonp=window.webpackJsonp||[]).push([["myOrder"],{8807:function(t,e,s){"use strict";s("a481"),s("ac6a"),s("456d"),s("7f7f"),s("c5f6"),s("8e6e");var r=s("bd86"),i=s("2f62");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){Object(r.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var a={props:{type:{type:String,default:"price"},course:{type:Object,default:function(){return{}}},order:{type:Object,default:function(){return{}}}},data:function(){return{isFree:0==this.course.price}},computed:c(c({},Object(i.e)(["courseSettings"])),{},{rate:function(){return parseInt(this.course.publishedTaskNum)?parseInt(this.course.progress.percent):0},showStudent:function(){return!this.courseSettings||Number(this.courseSettings.show_student_num_enabled)}}),filters:{numFilter:function(t){return t?parseFloat(t).toFixed(2):""}},methods:{goToPay:function(){this.$router.replace({path:"/pay",query:{id:this.order.id,source:"order",sn:this.order.sn,targetId:this.order.targetId,targetType:this.order.targetType}})},displayPrice:function(t){var e,s=this.type;if("order"===s){var r=t.currency,i=t.coinAmount,o=t.coinName,c=t.amount;return"coin"===r?(e=i?(i/100).toFixed(2):"",e="".concat(e," ").concat(o)):"RMB"===r&&(e=c?(c/100).toFixed(2):"",e="¥ ".concat(e)),e}if("confirmOrder"===s){var a=t.priceType,n=t.coinPayAmount,u=t.coinName,l=t.totalPrice;return"Coin"===a?(e=n?parseFloat(n).toFixed(2):"",e="".concat(e," ").concat(u)):"RMB"===a&&(e="¥ ".concat(l)),e}}}},n=s("0c7c"),u={components:{switchBox:Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"e-course-switch-box"},["price"===t.type?s("div",{staticClass:"switch-box"},[s("span",{staticClass:"text-12"},[t.isFree?s("p",{staticClass:"free"},[t._v(t._s(t.$t("e.free")))]):t._e(),t.isFree?t._e():s("p",{staticClass:"price"},[t._v("¥ "+t._s(t.course.price))])]),s("span",{staticClass:"text-12"},[t.showStudent?s("p",[t._v(t._s(t.$t("e.personStudying",{number:t.course.studentNum})))]):t._e()])]):t._e(),"order"===t.type?s("div",{staticClass:"switch-box"},[s("span",{staticClass:"text-12"},[t.isFree?s("p",{staticClass:"free"},[t._v(t._s(t.$t("e.free")))]):t._e(),t.isFree?t._e():s("p",{staticClass:"price"},[t._v("\n        "+t._s(t.displayPrice(t.order.priceConvert))+"\n      ")])]),s("span",{staticClass:"text-12"},["created"!==t.order.status&&"paying"!==t.order.status?s("p",{class:t.order.status},[t._v("\n        "+t._s(t._f("filterOrderStatus")(t.order.status))+"\n      ")]):t._e(),"created"===t.order.status||"paying"===t.order.status?s("span",{staticClass:"order-pay",on:{click:t.goToPay}},[t._v(t._s(t._f("filterOrderStatus")(t.order.status)))]):t._e()])]):t._e(),"confirmOrder"===t.type?s("div",{staticClass:"switch-box"},[s("span",{staticClass:"text-12"},[s("p",{staticClass:"price"},[t._v(t._s(t.displayPrice(t.order)))])])]):t._e(),"rank"===t.type?s("div",{staticClass:"rank-box"},[s("div",{staticClass:"progress round-conner"},[s("div",{staticClass:"curRate round-conner",style:{width:t.rate+"%"}})]),s("span",[t._v(t._s(this.rate)+"%")])]):t._e()])}),[],!1,null,null,null).exports},props:{course:{type:Object,default:function(){return{}}},order:{type:Object,default:function(){return{}}},type:{type:String,default:"price"},feedback:{type:Boolean,default:!0},typeList:{type:String,default:"course_list"},duration:{type:[Number,String],default:0}},data:function(){return{pathName:this.$route.name}},computed:{imgSrc:function(){if("classroom_list"===this.typeList)return this.course.cover.middle;var t=this.course.courseSet;return(t?t.cover.middle:this.order.cover.middle)||""},title:function(){return"classroom_list"===this.typeList?this.course.title:this.course.courseSetTitle||(this.course.courseSet?this.course.courseSet.title:"")||this.order.title},teachPlan:function(){return!!this.course.title&&this.course.title},imgClass:function(){return"vip"===this.typeList?"e-vip__img":"e-course__img"}},watch:{course:{handler:function(t){var e=t.courseSet;if("miniprogramSetting"===this.pathName&&e)for(var s=Object.keys(e.cover),r=0;r<s.length;r++)e.cover[s[r]]=e.cover[s[r]].replace(/^(\/\/)|(http:\/\/)/,"https://")},immediate:!0}},methods:{onClick:function(t){if(this.feedback&&"vip"!==this.typeList){var e="order"===this.type,s=this.course.id||this.order.targetId;"SPAN"!==t.target.tagName&&(e?"course"===this.typeList||"classroom"===this.typeList?this.$router.push({path:"/goods/".concat(this.order.goodsId,"/show"),query:{targetId:this.order.targetId,type:this.typeList+"_list"}}):location.href=this.order.targetUrl:"course"!==this.typeList&&("classroom_list"===this.typeList&&this.$router.push({path:"/classroom/".concat(s)}),"course_list"===this.typeList&&this.$router.push({path:"/course/".concat(s)})))}}}},l=Object(n.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"e-course"},[s("div",{staticClass:"clearfix",on:{click:t.onClick}},[s("div",{staticClass:"e-course__left pull-left"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgSrc,expression:"imgSrc"}],class:t.imgClass})]),s("div",{staticClass:"e-course__right pull-left"},["confirmOrder"===t.type?s("div",{staticClass:"e-course__title course-confirm-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]):s("div",[s("div",{staticClass:"e-course__title text-overflow"},[t._v(t._s(t.title))]),"classroom_list"===t.typeList?s("div",{staticClass:"e-course__count"},[t._v("\n          "+t._s(t.$t("e.totalOfTwoCourses",{number:t.course.courseNum}))+"\n        ")]):t._e(),"course_list"===t.typeList?s("div",{staticClass:"e-course__project text-overflow"},[t.teachPlan?s("span",[t._v(t._s(t.teachPlan))]):t._e()]):t._e()]),s("switchBox",{attrs:{type:t.type,course:t.course,order:t.order,"student-num":t.course.studentNum,"published-task-num":t.course.publishedTaskNum}})],1)])])}),[],!1,null,null,null);e.a=l.exports},bc05:function(t,e,s){"use strict";s.r(e),s("e7e5");var r=s("d399"),i=s("75fc"),o=s("8807"),c=s("3ce7"),a={components:{eCourse:o.a},data:function(){return{list:[],isFirstRequestCompile:!1,loading:!1,finished:!1,offset:0}},created:function(){},methods:{onLoad:function(){var t=this,e={offset:this.offset};c.a.getMyOrder({params:e}).then((function(e){var s=e.data,r=e.paging;t.isFirstRequestCompile=!0,t.list=[].concat(Object(i.a)(t.list),Object(i.a)(s)),t.offset=t.list.length,t.list.length==r.total&&(t.finished=!0),t.loading=!1})).catch((function(e){r.a.fail(e.message),t.isFirstRequestCompile=!0,t.loading=!1}))}}},n=s("0c7c"),u=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orders"},[0===t.list.length&&t.isFirstRequestCompile?s("div",{staticClass:"orders-container__empty"},[s("img",{attrs:{src:"static/images/orderEmpty.png"}}),s("span",[t._v(t._s(t.$t("order.noOrderRecord")))])]):s("div",{staticClass:"order"},[s("van-list",{staticClass:"tab-list",attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t){return s("e-course",{key:t.id,attrs:{order:t,"type-list":t.targetType,type:"order"}})})),1)],1)])}),[],!1,null,null,null);e.default=u.exports}}]);