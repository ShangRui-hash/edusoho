(window.webpackJsonp=window.webpackJsonp||[]).push([["setting"],{"25ab":function(t,e,i){"use strict";i.r(e),i("8615"),i("456d"),i("ac6a");var n=i("db72"),a=(i("7f7f"),i("ded5")),o=i("3d97"),s=i("5f16"),l=i("28fb"),r=(i("386d"),i("4917"),i("3b2b"),i("515e")),u=i("92a2"),c=i("5b91"),d=i("a89d"),h=i("5e2f"),p=i("f953"),m=i("2f62"),f={data:function(){return{}},props:{portal:{type:String,default:""}},computed:Object(n.a)({},Object(m.c)(["settings"]),{headImg:function(){switch(this.portal){case"miniprogram":return"static/images/miniprogram_head.jpg";case"apps":return"static/images/app_head.jpg";default:return"static/images/find_head_url.jpg"}},headTitle:function(){switch(this.portal){case"miniprogram":return"小程序";case"apps":return this.settings.name;default:return"微网校"}}})},g=i("a6c2"),v=Object(g.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"find-head-img",attrs:{src:this.headImg,alt:""}}),e("div",{staticClass:"find-navbar",class:"find-navbar-"+this.portal},["apps"===this.portal?e("i",{staticClass:"iconfont icon-search"}):this._e(),e("i",{staticClass:"h5-icon h5-icon-houtui"}),this._v(this._s(this.headTitle)+"\n  ")])])}),[],!1,null,null,null).exports,y=i("310e"),b=i.n(y),w={name:"h5-home",components:{moduleTemplate:h.a,draggable:b.a,findFooter:p.a,findHeader:v},mixins:[c.a],data:function(){return{windowHeight:document.documentElement.clientHeight,title:"EduSoho 微网校",modules:[],saveFlag:0,startValidate:!1,incomplete:!0,validateResults:[],currentModuleIndex:0,baseModules:s.c,marketingModules:s.d,typeCount:{},pathName:this.$route.name,couponSwitch:0,moduleLength:0,menuStyle:{},quitDialogVisible:!1}},computed:Object(n.a)({},Object(m.c)(["isLoading","vipLevels","vipSettings","vipSetupStatus","vipPlugin"]),{stopDraggleClasses:function(){return".module-frame__setting, .find-footer,.search__container, .el-dialog__header, .el-dialog__footer"},portal:function(){return u.a[this.pathName]}}),created:function(){this.setStyle(),this.getFind(),this.getCourseCategories(),this.getClassCategories(),this.getCouponSwitch()},beforeDestroy:function(){document.getElementById("app").style.background="#ffffff"},methods:Object(n.a)({},Object(m.b)(["getCourseCategories","getClassCategories","deleteDraft","saveDraft","getDraft","getTemplate"]),{getFind:function(){var t,e,i,n=(t=new RegExp("(^|&)".concat("template","=([^&]*)(&|$)"),"i"),e=window.location.search.substr(1).match(t),i="",null!==e&&(i=e[2]),t=null,e=null,null==i||""===i||"undefined"===i?"":i);n?this.getTheme(n):this.load()},setStyle:function(){document.documentElement.clientHeight,document.getElementById("app").style.background="#f5f5f5",this.menuStyle={height:this.windowHeight+"px",overflow:"auto"}},getCouponSwitch:function(){var t=this;a.a.getCouponSetting().then((function(e){t.couponSwitch=parseInt(e.enabled,10)}))},moduleCountInit:function(){for(var t=new l.a,e=0,i=this.modules.length;e<i;e++)t.addByType(this.modules[e].type);this.typeCount=t},isActive:function(t){return t===this.currentModuleIndex},activeModule:function(t){this.currentModuleIndex=t},updateModule:function(t,e){this.validateResults[e]=t.incomplete},removeModule:function(t,e){this.typeCount.removeByType(t.type),this.currentModuleIndex=Math.max(this.currentModuleIndex-1,0),this.modules.splice(e,1)},scrollBottom:function(){var t=document.body.clientHeight;window.scroll({top:t,left:0,behavior:"smooth"})},addModule:function(t,e){var i=this;switch(t.default.type){case"vip":if(!this.vipSetupStatus)return;if(Object(r.a)("1.7.26",this.vipPlugin.version))return void this.$confirm("请升级会员插件","提示",{confirmButtonText:"去升级",cancelButtonText:"取消"}).then((function(){window.open(window.location.origin+"/admin/app/upgrades")})).catch((function(){}));if(!(this.vipSettings&&this.vipSettings.enabled&&this.vipSettings.h5Enabled))return void this.$confirm("会员功能未开通","提示",{confirmButtonText:"去开通",cancelButtonText:"取消"}).then((function(){window.open(window.location.origin+"/admin/setting/vip")})).catch((function(){}));if(!this.vipLevels||!this.vipLevels.length)return void this.$confirm("请先设置会员等级","提示",{confirmButtonText:"去设置",cancelButtonText:"取消"}).then((function(){window.open(window.location.origin+"/admin/setting/vip/level")})).catch((function(){}));break;case"coupon":if(!this.couponSwitch)return void this.$confirm("优惠券功能未开通","提示",{confirmButtonText:"去开通",cancelButtonText:"取消"}).then((function(){window.open(window.location.origin+"/admin/setting/coupon")})).catch((function(){}))}if("search"===t.default.type&&this.typeCount.getCounterByType(t.default.type)>=1)this.$message({message:"搜索组件最多添加 1 个",type:"warning"});else if(this.typeCount.getCounterByType(t.default.type)>=5)this.$message({message:"同一类型组件最多添加 5 个",type:"warning"});else{this.moduleLength=this.moduleLength+1,this.typeCount.addByType(t.default.type);var n=JSON.parse(JSON.stringify(t.default));n.oldIndex=this.moduleLength,this.modules.push(n),this.currentModuleIndex=Math.max(this.modules.length-1,0),setTimeout((function(){i.scrollBottom()}))}},getTheme:function(t){var e=this;this.getTemplate({portal:this.portal,template:t}).then((function(t){e.formateRes(t)})).catch((function(t){e.formateErr(t)}))},load:function(){var t=this,e=1==this.$route.query.draft?"draft":"published";this.getDraft({portal:this.portal,type:"discovery",mode:e}).then((function(e){t.formateRes(e)})).catch((function(e){t.formateErr(e)}))},formateRes:function(t){var e=this;Object.keys(t).forEach((function(i,n){t[i]=e.formateH5Display(t[i].type,t[i]),t[i].oldIndex=n})),this.moduleLength=Object.keys(t).length-1,this.modules=Object.values(t),this.moduleCountInit()},formateErr:function(t){this.moduleCountInit(),this.$message({message:t.message,type:"error"})},formateH5Display:function(t,e){return"course_list"!==t&&"classroom_list"!==t||e.data.displayStyle||("app"===this.portal?e.data.displayStyle="distichous":"h5"===this.portal&&(e.data.displayStyle="row")),e},quit:function(){this.quitDialogVisible=!0},reset:function(){var t=this;this.quitDialogVisible=!1,this.deleteDraft({portal:this.portal,type:"discovery",mode:"draft"}).then((function(t){parent.location.href=parent.location.href})).catch((function(e){t.$message({message:e.message||"取消失败",type:"error"})}))},save:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.startValidate=!0,this.saveFlag++,setTimeout((function(){var n,a;n=e.modules,a="published"===t,e.startValidate=!1,e.validate(),i&&(n=Object(d.a)(e.modules,"moduleType")),e.incomplete||e.saveDraft({data:n,mode:t,portal:e.portal,type:"discovery"}).then((function(){if(e.saveFlag=0,a)return e.$message({message:"发布成功",type:"success"}),void(parent.location.href=parent.location.href);e.$store.commit(o.e,n),e.toPreview(a)})).catch((function(t){e.$message({message:t.message||"发布失败，请重新尝试",type:"error"})}))}),500)},toPreview:function(t){this.$router.push({name:"preview",query:{times:10,preview:t?0:1,duration:300,from:this.pathName}})},validate:function(){for(var t=0;t<this.modules.length;t++)if(this.validateResults[t])return void(this.incomplete=this.validateResults[t]);this.incomplete=!1},startDrag:function(){for(var t=document.getElementsByClassName("module-frame__setting"),e=0;e<t.length;e++)t[e].style.display="none"},endDrag:function(){document.getElementsByClassName("module-frame__setting")[this.currentModuleIndex].style.display="block"}})},_=Object(g.a)(w,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h5-home",style:{minHeight:t.windowHeight+"px"}},[i("el-row",[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"h5-home-left",style:t.menuStyle},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-0",collapse:!1}},[i("el-submenu",{attrs:{index:"1"}},[i("template",{slot:"title"},[i("span",[t._v("基础组件")])]),i("el-menu-item-group",t._l(t.baseModules,(function(e,n){return i("el-menu-item",{key:"base-"+n,attrs:{index:"1-"+n},on:{click:function(i){return t.addModule(e,n)}}},[i("i",{class:["iconfont",e.icon]}),t._v("\n                "+t._s(e.name)+"\n              ")])})),1)],2),i("el-submenu",{attrs:{index:"2"}},[i("template",{slot:"title"},[i("span",[t._v("营销组件")])]),i("el-menu-item-group",t._l(t.marketingModules,(function(e,n){return i("el-menu-item",{key:"marketing-"+n,attrs:{index:"2-"+n},on:{click:function(i){return t.addModule(e,n)}}},[i("i",{class:["iconfont",e.icon]}),t._v("\n                "+t._s(e.name)+"\n              ")])})),1)],2)],1)],1)]),i("el-col",{staticClass:"el-full",attrs:{span:16}},[i("div",{staticClass:"h5-home-center"},[i("div",{staticClass:"setting-page setting-page-h5",class:{"setting-page-miniprogram":"miniprogram"===t.portal}},[i("find-header",{attrs:{portal:t.portal}}),i("div",{staticClass:"find-body"},[i("draggable",{attrs:{options:{filter:t.stopDraggleClasses,preventOnFilter:!1,forceFallback:!0}},on:{start:t.startDrag,end:t.endDrag},model:{value:t.modules,callback:function(e){t.modules=e},expression:"modules"}},t._l(t.modules,(function(e,n){return i("module-template",{key:n,attrs:{saveFlag:t.saveFlag,startValidate:t.startValidate,index:n,module:e,active:t.isActive(n),moduleKey:e.type+"-"+n},on:{activeModule:t.activeModule,updateModule:function(e){return t.updateModule(e,n)},removeModule:function(e){return t.removeModule(e,n)}}})})),1)],1),i("find-footer",{attrs:{portal:t.portal}})],1)])])],1),i("div",{staticClass:"setting-button-group"},[i("el-button",{staticClass:"setting-button-group__button text-14 btn-border-primary",attrs:{size:"mini",disabled:t.isLoading},on:{click:t.quit}},[t._v("取消装修")]),i("el-button",{staticClass:"setting-button-group__button text-14 btn-border-primary",attrs:{size:"mini",disabled:t.isLoading},on:{click:function(e){return t.save("draft")}}},[t._v("预 览")]),i("el-button",{staticClass:"setting-button-group__button text-14",attrs:{type:"primary",size:"mini",disabled:t.isLoading},on:{click:function(e){return t.save("published")}}},[t._v("保存并发布")])],1),i("el-dialog",{attrs:{title:"提示",visible:t.quitDialogVisible,width:"30%"},on:{"update:visible":function(e){t.quitDialogVisible=e}}},[i("div",{staticClass:"mtl"},[t._v("退出后编辑的内容不会保存，是否退出？")]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.quitDialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.reset}},[t._v("退出")])],1)])],1)}),[],!1,null,null,null);e.default=_.exports},4917:function(t,e,i){"use strict";var n=i("cb7c"),a=i("9def"),o=i("0390"),s=i("5f1b");i("214f")("match",1,(function(t,e,i,l){return[function(i){var n=t(this),a=null==i?void 0:i[e];return void 0!==a?a.call(i,n):new RegExp(i)[e](String(n))},function(t){var e=l(i,t,this);if(e.done)return e.value;var r=n(t),u=String(this);if(!r.global)return s(r,u);var c=r.unicode;r.lastIndex=0;for(var d,h=[],p=0;null!==(d=s(r,u));){var m=String(d[0]);h[p]=m,""===m&&(r.lastIndex=o(u,a(r.lastIndex),c)),p++}return 0===p?null:h}]}))}}]);