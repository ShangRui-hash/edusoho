!function(u){function t(t){for(var e,n,a=t[0],r=t[1],o=t[2],i=0,s=[];i<a.length;i++)n=a[i],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&s.push(c[n][0]),c[n]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(u[e]=r[e]);for(f&&f(t);s.length;)s.shift()();return p.push.apply(p,o||[]),l()}function l(){for(var t,e=0;e<p.length;e++){for(var n=p[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==c[o]&&(a=!1)}a&&(p.splice(e--,1),t=i(i.s=n[0]))}return t}var n={},c={68:0},p=[];function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=u,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],a=e.push.bind(e);e.push=t,e=e.slice();for(var r=0;r<e.length;r++)t(e[r]);var f=a;p.push([512,0]),l()}({133:function(t,e,n){"use strict";var a=n(19),i=n.n(a),r=n(0),o=n.n(r),s=n(1),u=n.n(s),l=n(69),c=function(){function e(t){o()(this,e),this.cropImg=t.cropImg,this.saveBtn=t.saveBtn,this.selectBtn=t.selectBtn,this.imgs=t.imgs,this.group=t.group,this.lastFile={},this.uploadInput=t.uploadInput||".js-upload-input",this.modal=t.modal||"#modal",this.init()}return u()(e,[{key:"init",value:function(){this.initImage();var t=this.imageCrop();this.initEvent(t)}},{key:"initImage",value:function(){var t=JSON.parse(localStorage.getItem("crop_image_attr"));$(this.cropImg).attr({src:t.src,width:t.width,height:t.height,"data-natural-width":t["natural-width"],"data-natural-height":t["natural-height"]}),localStorage.removeItem("crop_image_attr")}},{key:"initEvent",value:function(e){var n=this;$(this.saveBtn).on("click",function(t){return n.saveEvent(t,e)}),$(this.selectBtn).on("click",function(t){return n.selectEvent(t)})}},{key:"saveEvent",value:function(t,e){t.stopPropagation();var n=$(t.currentTarget);console.log("start crop"),e.crop({imgs:this.imgs,post:!1}),n.button("loading")}},{key:"selectEvent",value:function(){$(this.uploadInput).click()}},{key:"imageCrop",value:function(){var e=this,t=new l.a({element:this.cropImg,cropedWidth:this.imgs.large[0],cropedHeight:this.imgs.large[1],group:this.group});return this.lastFile=$(this.uploadInput)[0].files[0],t.afterCrop=function(t){e.afterCrop(t)},t}},{key:"afterCrop",value:function(n){var a=new FormData,r=$(this.modal),o=$(this.uploadInput);a.append("token",o.data("token"));var t=o[0].files[0]?o[0].files[0]:this.lastFile;a.append("file",t);new i.a(function(e,t){$.ajax({url:o.data("fileUpload"),type:"POST",cache:!1,data:a,processData:!1,contentType:!1}).done(function(t){e(t)})}).then(function(t){return new i.a(function(e,t){$.post(o.data("crop"),n,function(t){e(t)})})}).then(function(t){return n=t,new i.a(function(t,e){$.post(o.data("saveUrl"),{images:n},function(t){t.image&&($(o.data("targetImg")).attr("src",t.image),cd.message({type:"success",message:Translator.trans("site.upload_success_hint")}))}).error(function(){cd.message({type:"danger",message:Translator.trans("site.upload_fail_retry_hint")})}).always(function(){o.val(""),r.modal("hide")})});var n}).catch(function(t){console.log(t)})}}]),e}();e.a=c},512:function(t,e,n){"use strict";n.r(e),new(n(133).a)({cropImg:"#stamp-crop",saveBtn:"#save-btn",selectBtn:"#select-btn",group:"system",imgs:{large:[650,650]},uploadInput:".stamp-upload .js-upload-input",fileInput:".js-stamp-value"})}});