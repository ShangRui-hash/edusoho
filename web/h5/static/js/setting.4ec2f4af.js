(window.webpackJsonp=window.webpackJsonp||[]).push([["setting"],{"08a6":function(t,e,i){"use strict";i.r(e),i("e17f");var a=i("2241"),n=(i("e7e5"),i("d399")),o=i("db72"),s=i("2f62"),r=i("3ce7"),c=i("faa5"),p=(i("240b"),{components:{VueCropper:i("7e79").VueCropper},data:function(){return{settings:[{name:"头像",info:""},{name:"用户名",info:""}],dialogVisible:!1,imageCropped:!1,option:{img:"",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedNumber:[1,1],fixed:!0,high:!1,enlarge:2}}},computed:Object(o.a)({},Object(s.d)({user:function(t){return t.user},isLoading:function(t){return t.isLoading}})),created:function(){this.$set(this.settings[0],"info",this.user.avatar.large),this.$set(this.settings[1],"info",this.user.nickname)},methods:Object(o.a)({},Object(s.b)(["setAvatar"]),{handleSetting:function(t){switch(t){case 0:break;case 1:this.$router.push({name:"setting_nickname",query:{nickname:""==this.user.nickname?"":this.user.nickname}});break;case 2:Object(n.a)("更改手机号，后续开通")}},logout:function(){var t=this;a.a.confirm({title:"退出登录",message:"确定要退出登录吗？"}).then((function(){t.$store.commit(c.x,{token:"",user:{}}),t.$router.push({name:"my"})}))},stopCropFn:function(){var t=this,e=this.$refs.cropper[0];e.stopCrop(),this.dialogVisible=!1,e.getCropData((function(e){t.imageCropped=!0,t.uploadImg(e),t.option.img=e}))},beforeUpload:function(t){var e=this,i=t.type,a=t.size/1024/1024;if(-1!==i.indexOf("image"))if(a>2)n.a.fail("文件大小不得超过 2 MB");else{this.dialogVisible=!0;var o=new FileReader;o.onload=function(){e.option.img=o.result},o.readAsDataURL(t)}else n.a.fail("文件类型仅支持图片格式")},uploadImg:function(t){var e=this;if(this.imageCropped){this.imageCropped=!1;var i=new FormData;i.append("file",t),i.append("group","user"),r.a.updateFile({data:i}).then((function(i){e.$set(e.settings[0],"info",t.content),e.setAvatar({avatarId:i.id}).then((function(){n.a.success("修改成功")})).catch((function(t){n.a.fail(t.message)}))})).catch((function(t){n.a.fail(t.message)}))}}})}),u=(i("c4bb"),i("a6c2")),l=Object(u.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my_setting"},[t.isLoading?i("e-loading"):t._e(),t._l(t.settings,(function(e,a){return i("div",{staticClass:"my_setting-item",on:{click:function(e){return t.handleSetting(a)}}},[i("span",{staticClass:"my_setting-title title-18"},[t._v(t._s(e.name))]),i("div",{staticClass:"my_setting-content"},[a?t._e():i("img",{staticClass:"my_setting-avatar",attrs:{src:e.info||t.option.img,alt:""}}),a?i("span",[t._v(t._s(e.info))]):t._e(),i("img",{staticClass:"my_setting-more",attrs:{src:"static/images/more.png",alt:""}})]),a?t._e():i("van-uploader",{attrs:{"before-read":t.beforeUpload}},[i("van-popup",{attrs:{overlay:!1,position:"top"},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[i("div",{staticClass:"cropper-container"},[i("vueCropper",{directives:[{name:"show",rawName:"v-show",value:t.option.img,expression:"option.img"}],ref:"cropper",refInFor:!0,attrs:{img:t.option.img,fixed:t.option.fixed,enlarge:t.option.enlarge,"auto-crop":t.option.autoCrop,"fixed-number":t.option.fixedNumber,"auto-crop-width":t.option.autoCropWidth,"auto-crop-height":t.option.autoCropHeight}})],1),i("div",{staticClass:"dialog-footer"},[i("van-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),i("van-button",{attrs:{type:"primary"},on:{click:t.stopCropFn}},[t._v("确 定")])],1)])],1)],1)})),i("div",{staticClass:"log-out-btn title-18",on:{click:t.logout}},[i("span",[t._v("退出登录")])])],2)}),[],!1,null,null,null);e.default=l.exports},"2a95":function(t,e,i){},c4bb:function(t,e,i){"use strict";var a=i("2a95");i.n(a).a}}]);