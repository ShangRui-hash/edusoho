(window.webpackJsonp=window.webpackJsonp||[]).push([["testpaperDo"],{"057e":function(e,t,i){"use strict";i("8e6e"),i("ac6a"),i("456d");var n=i("bd86"),s=i("2f62");function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}var a={name:"GuidePage",data:function(){return{isFristVisited:!1}},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},Object(s.e)({user:function(e){return e.user}})),created:function(){this.setVisited()},methods:{setVisited:function(){var e="".concat(this.user.id,"-task-visited");localStorage.getItem(e),localStorage.getItem(e)||(this.isFristVisited=!0,localStorage.setItem(e,!0))}}},c=i("0c7c"),o=Object(c.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.isFristVisited,expression:"isFristVisited"}],staticClass:"guide",on:{click:function(t){e.isFristVisited=!1}}},[i("div",{staticClass:"guide__text"},[e._v("左右切换滑动")]),e._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"guide__gesture"},[t("img",{attrs:{src:"static/images/leftslide.png"}}),t("img",{attrs:{src:"static/images/rightslide.png"}})])}],!1,null,null,null);t.a=o.exports},"3fc6":function(e,t,i){"use strict";i.r(t),i("8e6e"),i("a481"),i("456d"),i("ac6a"),i("c5f6"),i("e7e5");var n=i("d399"),s=i("bd86"),r=(i("e17f"),i("2241")),a=i("3ce7"),c=i("2f62"),o=i("faa5"),u=i("057e"),l=i("f5cc"),m=i("0d25"),f=i("b7cf"),d=i("8ae7"),h=i("c8a5"),p=i("7c97"),g=i("6647");function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){Object(s.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var w="",y={name:"TestpaperDo",components:{itemBank:l.a,guidePage:u.a,OutFocusMask:p.a},filters:{type:function(e){switch(e){case"single_choice":return g.a.t("courseLearning.singleChoice");case"choice":return g.a.t("courseLearning.choice");case"essay":return g.a.t("courseLearning.essay");case"uncertain_choice":return g.a.t("courseLearning.uncertainChoice");case"determine":return g.a.t("courseLearning.determine");case"fill":return"courseLearning.fill";case"material":return g.a.t("courseLearning.material")}}},mixins:[f.a,d.a,h.a],data:function(){return{cardSeq:0,testpaper:{},testpaperResult:{},info:[],answer:{},cardShow:!1,items:{},time:null,timeMeter:null,timeWarn:!1,isHandExam:!1,localtime:null,localtimeName:null,localanswerName:null,localuseTime:null,lastAnswer:null,lastTime:null,startTime:null,backUrl:"",slideIndex:0,forceLeave:!1,interval:null}},mounted:function(){this.initReport(),this.getData(),this.saveAnswerInterval()},beforeRouteEnter:function(e,t,i){w="/"===t.fullPath?"/":"",i()},beforeRouteLeave:function(e,t,i){this.interval&&clearInterval(this.interval),0==this.info.length||this.isHandExam||this.forceLeave||"doing"!=this.testpaperResult.status?i():this.submitPaper().then((function(){i()})).catch((function(){i(!1)}))},beforeDestroy:function(){this.clearTime(),r.a.close()},computed:b({},Object(c.e)({isLoading:function(e){return e.isLoading},user:function(e){return e.user},selectedPlanId:function(e){return e.course.selectedPlanId}})),methods:b(b({},Object(c.c)("course",["handExamdo","saveAnswerdo"])),{},{initReport:function(){this.initReportData(this.selectedPlanId,this.$route.query.targetId,"testpaper")},getData:function(){var e=this,t=this.$route.query.testId,i=this.$route.query.targetId,s=this.$route.query.action;a.a.getExamInfo({query:{testId:t},data:{action:s,targetId:i,targetType:"task"}}).then((function(t){e.afterGetData(t)})).catch((function(t){4032207==t.code||4032204==t.code?e.toIntro():(n.a.fail(t.message),e.showResult())}))},afterGetData:function(e){this.$store.commit(o.v,this.$route.query.title),this.items=e.items,this.testpaper=e.testpaper,this.testpaper.courseId=e.courseId,e.testpaperResult.limitedTime=Number(e.testpaperResult.limitedTime),this.testpaperResult=e.testpaperResult,this.isDoing()||(this.localanswerName="".concat(this.user.id,"-").concat(this.testpaperResult.id),this.localtimeName="".concat(this.user.id,"-").concat(this.testpaperResult.id,"-time"),this.lastTime=localStorage.getItem(this.localtimeName),this.lastAnswer=JSON.parse(localStorage.getItem(this.localanswerName)),this.formatData(e),this.interruption(),this.saveTime(),this.timer())},isDoing:function(){return"doing"!=this.testpaperResult.status&&(this.showResult(),!0)},interruption:function(){var e=this;this.$route.params.KeepDoing||this.canDoing(this.testpaperResult,this.user.id).then((function(){})).catch((function(t){var i=t.answer,n=t.endTime;e.submitExam(i,n)}))},formatData:function(e){var t=this,i=e.items;Object.keys(i).forEach((function(e){"material"!=e&&i[e].forEach((function(e){var i=t.sixType(e.type,e,t.lastAnswer);t.$set(t.answer,e.id,i.answer),t.info.push(i.item)})),"material"==e&&i[e].forEach((function(e){var i=Object.assign({},e,{subs:""});e.subs.forEach((function(n,s){n.parentTitle=i,n.parentType=e.type,n.materialIndex=s+1;var r=t.sixType(n.type,n,t.lastAnswer);t.$set(t.answer,n.id,r.answer),t.info.push(r.item)}))}))}))},formatStatus:function(e,t){var i=0;return("single_choice"==e||"choice"==e||"uncertain_choice"==e||"determine"==e)&&this.answer[t].length>0||"essay"==e&&""!=this.answer[t][0]?i=1:"fill"==e?i=Number(this.answer[t].some((function(e){return""!=e}))):i},slideToNumber:function(e){var t=Number(e);this.cardSeq=t,this.cardShow=!1},timer:function(e){var t=this,i=0,n=60*this.testpaperResult.limitedTime*1e3;if(!(n<=0)){if(this.lastTime){var s=Math.ceil((new Date).getTime()-1e3*this.testpaperResult.beginTime);n-=s}this.timeMeter=setInterval((function(){var e=Object(m.getCountDown)(n,i++),s=e.hours,r=e.minutes,a=e.seconds;t.time="".concat(s,":").concat(r,":").concat(a),0==s&&0==r&&a<60&&(t.timeWarn=!0),(0==Number(s)&&0==Number(r)&&0==Number(a)||Number(a)<0)&&(t.clearTime(),t.submitExam())}),1e3)}},clearTime:function(){clearInterval(this.timeMeter),this.timeMeter=null,clearInterval(this.localtime),this.localtime=null},submitPaper:function(){var e=this,t=0,i=this.$t("courseLearning.sureSubmit"),n=JSON.parse(JSON.stringify(this.answer));return Object.keys(n).forEach((function(e){n[e]=n[e].filter((function(e){return""!==e})),0===n[e].length&&t++})),t>0&&(i=this.$t("courseLearning.notSureSubmit",{number:t})),new Promise((function(t,s){r.a.confirm({title:e.$t("courseLearning.handInThePaper"),cancelButtonText:e.$t("courseLearning.confirmSubmission"),confirmButtonText:e.$t("courseLearning.check"),message:i}).then((function(t){e.cardShow=!0,s(t)})).catch((function(){e.clearTime(),e.submitExam(n).then((function(e){t()})).catch((function(e){s(e)}))}))}))},submitExam:function(e,t){var i=this;e||(e=JSON.parse(JSON.stringify(this.answer)),Object.keys(e).forEach((function(t){e[t]=e[t].filter((function(e){return""!==e}))}))),t=t||(new Date).getTime();var s={answer:e,resultId:this.testpaperResult.id,userId:this.user.id,endTime:t,beginTime:Number(this.testpaperResult.beginTime)};return new Promise((function(e,t){i.handExamdo(s).then((function(t){i.isHandExam=!0,e(),i.showResult()})).catch((function(e){50095204!=e.code?(t(e),n.a.fail(e.message),i.isHandExam=!0,i.showResult()):r.a.confirm({title:"你已提交过答题，当前页面无法重复提交",showCancelButton:!1,confirmButtonText:"退出答题"}).then((function(){return i.exitPage()}))}))}))},saveAnswerInterval:function(){var e=this;this.interval=setInterval((function(){e.saveAnswerAjax()}),3e4)},saveAnswerAjax:function(){var e=this;this.saveAnswerdo({admission_ticket:this.testpaperResult.admission_ticket,answer:JSON.parse(JSON.stringify(this.answer)),resultId:this.testpaperResult.id}).catch((function(t){var i=t.code,n=t.message,s=t.traceId;50095204!==i?50095209!==i?s?r.a.confirm({title:"答题保存失败，请保存截图后，联系技术支持处理",message:"【".concat(n,"】【").concat(s,"】"),confirmButtonText:"退出答题"}).then((function(){return e.exitPage()})):r.a.confirm({title:"网络连接不可用，自动保存失败",showCancelButton:!1,confirmButtonText:"重新保存"}).then((function(){return e.saveAnswerAjax()})):r.a.confirm({title:"有新答题页面，请在新页面中继续答题",showCancelButton:!1,confirmButtonText:"确定"}).then((function(){return e.exitPage()})):r.a.confirm({title:"你已提交过答题，当前页面无法重复提交",showCancelButton:!1,confirmButtonText:"退出答题"}).then((function(){return e.exitPage()}))}))},exitPage:function(){this.forceLeave=!0,this.$router.push("/course/".concat(this.testpaper.courseId))},saveTime:function(){var e=this;this.localuseTime="".concat(this.user.id,"-").concat(this.testpaperResult.id,"-usedTime");var t=localStorage.getItem(this.localuseTime)||0;this.localtime=setInterval((function(){e.testpaperResult.limitedTime||localStorage.setItem(e.localuseTime,++t),localStorage.setItem(e.localtimeName,(new Date).getTime())}),1e3)},showResult:function(){this.$router.replace({name:"testpaperResult",query:{resultId:this.testpaperResult.id,testId:this.$route.query.testId,targetId:this.$route.query.targetId,backUrl:w}})},toIntro:function(){this.$router.replace({name:"testpaperIntro",query:{testId:this.$route.query.testId,targetId:this.$route.query.targetId}})}})},T=i("0c7c"),O=Object(T.a)(y,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"paper-swiper"},[i("out-focus-mask",{attrs:{type:e.outFocusMaskType,isShow:e.isShowOutFocusMask,reportType:e.reportType},on:{outFocusMask:e.outFocusMask}}),e.isLoading?i("e-loading"):e._e(),e.info.length>0?i("item-bank",{attrs:{current:e.cardSeq,info:e.info,answer:e.answer,"slide-index":e.slideIndex,all:e.info.length},on:{"update:current":function(t){e.cardSeq=t},"update:answer":function(t){e.answer=t},"update:slideIndex":function(t){e.slideIndex=t},"update:slide-index":function(t){e.slideIndex=t}}}):e._e(),i("guide-page"),i("div",{staticClass:"paper-footer"},[i("div",[i("span",{on:{click:function(t){e.cardShow=!0}}},[i("i",{staticClass:"mb-8 iconfont icon-Questioncard"}),e._v("\n       "+e._s(e.$t("courseLearning.questionCard"))+"\n      ")])]),i("div",[i("span",{on:{click:function(t){return e.submitPaper()}}},[i("i",{staticClass:"mb-8 iconfont icon-submit"}),e._v("\n        "+e._s(e.$t("courseLearning.handInThePaper"))+"\n      ")])])]),i("van-popup",{attrs:{position:"bottom"},model:{value:e.cardShow,callback:function(t){e.cardShow=t},expression:"cardShow"}},[e.info.length>0?i("div",{staticClass:"card"},[i("div",{staticClass:"card-title"},[i("div",[i("span",{staticClass:"card-finish"},[e._v(e._s(e.$t("courseLearning.completed")))]),i("span",{staticClass:"card-nofinish"},[e._v(e._s(e.$t("courseLearning.notCompleted")))])]),i("i",{staticClass:"iconfont icon-no",on:{click:function(t){e.cardShow=!1}}})]),i("div",{staticClass:"card-list"},e._l(e.items,(function(t,n){return i("div",{key:n,staticClass:"card-item"},[i("div",{staticClass:"card-item-title"},[e._v(e._s(e._f("type")(n)))]),"material"!=n?i("div",{staticClass:"card-item-list"},e._l(e.items[n],(function(t){return i("div",{key:t.id,class:["list-cicle",1==e.formatStatus(t.type,t.id)?"cicle-active":""],on:{click:function(i){return e.slideToNumber(t.seq)}}},[e._v("\n              "+e._s(t.seq)+"\n            ")])})),0):e._e(),"material"==n?i("div",{staticClass:"card-item-list"},[e._l(e.items[n],(function(t){return e._l(t.subs,(function(t){return i("div",{key:t.id,class:["list-cicle",1==e.formatStatus(t.type,t.id)?"cicle-active":""],on:{click:function(i){return e.slideToNumber(t.seq)}}},[e._v("\n                "+e._s(t.seq)+"\n              ")])}))}))],2):e._e()])})),0)]):e._e()]),i("div",{class:["time",e.timeWarn?"warn":""]},[e._v("\n    "+e._s(e.time)+"\n  ")])],1)}),[],!1,null,null,null);t.default=O.exports},b7cf:function(e,t,i){"use strict";i("c5f6"),i("e17f");var n=i("2241");i("456d"),i("ac6a"),t.a={methods:{canDoing:function(e,t){return new Promise((function(i,s){if(e&&"doing"===e.status){var r="".concat(t,"-").concat(e.id),a=JSON.parse(localStorage.getItem(r));a=a?Object.keys(a).forEach((function(e){a[e]=a[e].filter((function(e){return""!==e}))})):{},n.a.confirm({title:"提示",cancelButtonText:"放弃考试",confirmButtonText:"继续考试",message:"您有未完成的考试，是否继续？"}).then((function(){if(Number(e.limitedTime)>0){var t=Math.ceil(((new Date).getTime()-1e3*e.beginTime)/1e3/60);if(Number(t)>Number(e.limitedTime)){var n=Number(1e3*e.beginTime)+Number(60*e.limitedTime*1e3);return void s({answer:a,endTime:n})}}i()})).catch((function(){s({answer:a,endTime:null})}))}}))}}}}}]);