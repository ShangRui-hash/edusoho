!function(e){function t(t){for(var a,s,o=t[0],u=t[1],c=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(l&&l(t);f.length;)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={383:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;r.push([1151,0]),n()}({1151:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),r=n(2),s=n.n(r),o=n(3),u=n.n(o),c=n(12),l=n.n(c),d=n(13),f=n.n(d),h=n(9),p=n.n(h),g=n(338),v=n(134),m=n(177),y=n(80);function b(e){var t=function(){if("undefined"==typeof Reflect||!i.a)return!1;if(i.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(i()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=p()(e);if(t){var r=p()(this).constructor;n=i()(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}new(function(e){l()(n,e);var t=b(n);function n(e){var a;return s()(this,n),(a=t.call(this,e))._init(),a}return u()(n,[{key:"_init",value:function(){Object(y.a)(),Object(y.b)(),Object(y.d)(),Object(y.e)(),Object(y.c)()}},{key:"_getSeq",value:function(){var e=[];return $(".js-testpaper-question,.js-testpaper-question-stem-material").each((function(){e.push($(this).attr("id").replace(/[^0-9]/gi,""))})),e}},{key:"_suspendSubmit",value:function(e){var t=this._getAnswers(),n=this._getAttachments(),a=this._getSeq();$.post(e,{data:t,seq:a,usedTime:this.usedTime,attachments:n}).done((function(){})).error((function(e){notify("error",e.error.message)}))}},{key:"_submitTest",value:function(e){var t=this._getAnswers(),n=this._getSeq(),a=new m.a,i=this._getAttachments();$.post(e,{data:t,seq:n,usedTime:this.usedTime,attachments:i}).done((function(e){e.result&&a.emit("finish",{data:""}),""!=e.goto?(console.log(e.goto),window.location.href=e.goto):""!=e.message&&notify("error",e.message)})).error((function(e){notify("error",e.error.message)}))}}]),n}(g.a))($(".js-task-testpaper-body")),new v.a($(".js-task-testpaper-body"))},205:function(e,t,n){"use strict";var a=n(2),i=n.n(a);t.a=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$("html");i()(this,e),t.attr("unselectable","on").css("user-select","none").on("selectstart",!1)}},22:function(e,t){e.exports=jQuery},338:function(e,t,n){"use strict";var a=n(26),i=n.n(a),r=n(10),s=n.n(r),o=n(2),u=n.n(o),c=n(3),l=n.n(c),d=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each((function(){t.push($(this).val())})),t}}]),e}(),f=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each((function(){t.push($(this).val())})),t}}]),e}(),h=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[],n=$("[name="+e+"]").val();return t.push(n),t}},{key:"getAttachment",value:function(e){var t=[],n=$("[name="+e+"]").parent().find('[data-role="fileId"]').val();return""!=n&&t.push(n),t}}]),e}(),p=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]").each((function(){t.push($(this).val())})),t}}]),e}(),g=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each((function(){t.push($(this).val())})),t}}]),e}(),v=function(){function e(t){u()(this,e),this.type=t}return l()(e,null,[{key:"getTypeBuilder",value:function(e){var t=null;switch(e){case"choice":t=new d;break;case"determine":t=new f;break;case"essay":t=new h;break;case"fill":t=new p;break;case"single_choice":case"uncertain_choice":t=new g;break;default:t=null}return t}}]),e}(),m=n(205),y=n(177),b=n(8),k=function(){function e(t){u()(this,e),this.$container=t,this.answers={},this.usedTime=t.find(".js-used-time").length>0?s()(t.find(".js-used-time").val()):0,this.$form=t.find("form"),this._initEvent(),this._initUsedTimer(),this._isCopy(),this._alwaysSave()}return l()(e,[{key:"_initEvent",value:function(){var e=this;this.$container.on("focusin","textarea",(function(t){return e._showEssayInputEditor(t)})),this.$container.on("click",'[data-role="test-suspend"],[data-role="paper-submit"]',(function(t){return e._btnSubmit(t)})),this.$container.on("click",".js-testpaper-question-list li",(function(t){return e._choiceList(t)})),this.$container.on("click","*[data-anchor]",(function(t){return e._quick2Question(t)})),this.$container.find(".js-testpaper-question-label").on("click","input",(function(t){return e._choiceLable(t)})),this.$container.on("click",".js-marking",(function(t){return e._markingToggle(t)})),this.$container.on("click",".js-favorite",(function(t){return e._favoriteToggle(t)})),this.$container.on("click",".js-analysis",(function(t){return e._analysisToggle(t)})),this.$container.on("blur",'[data-type="fill"]',(function(t){return e.fillChange(t)}))}},{key:"_isCopy",value:function(){this.$container.find(".js-testpaper-body").data("copy")&&new m.a}},{key:"fillChange",value:function(e){var t=$(e.currentTarget);this._renderBtnIndex(t.attr("name"),!!t.val())}},{key:"_markingToggle",value:function(e){var t=$(e.currentTarget).addClass("hidden");t.siblings(".js-marking.hidden").removeClass("hidden");var n=t.closest(".js-testpaper-question").attr("id");$('[data-anchor="#'.concat(n,'"]')).find(".js-marking-card").toggleClass("hidden")}},{key:"_favoriteToggle",value:function(e){var t=$(e.currentTarget),n=t.data("targetType"),a=t.data("targetId");$.post(t.data("url"),{targetType:n,targetId:a},(function(e){t.addClass("hidden").siblings(".js-favorite.hidden").data("url",e.url),t.addClass("hidden").siblings(".js-favorite.hidden").removeClass("hidden")})).error((function(e){Object(b.a)("error",e.error.message)}))}},{key:"_analysisToggle",value:function(e){var t=$(e.currentTarget);t.addClass("hidden"),t.siblings(".js-analysis.hidden").removeClass("hidden"),t.closest(".js-testpaper-question").find(".js-testpaper-question-analysis").slideToggle()}},{key:"_initUsedTimer",value:function(){var e=this;this.$usedTimer=window.setInterval((function(){e.usedTime+=1}),1e3)}},{key:"_choiceLable",value:function(e){var t=$(e.currentTarget),n=t.closest(".js-testpaper-question-label");this.changeInput(n,t)}},{key:"_choiceList",value:function(e){var t=$(e.currentTarget),n=t.index(),a=t.closest(".js-testpaper-question").find(".js-testpaper-question-label"),i=a.find("label").eq(n).find("input");i.prop("checked",!i.prop("checked")).change(),this.changeInput(a,i)}},{key:"changeInput",value:function(e,t){var n=0;e.find("label").each((function(e,t){$(t).find("input").prop("checked")?($(t).addClass("active"),n++):$(t).removeClass("active")}));var a=t.attr("name");this._renderBtnIndex(a,n>0)}},{key:"_renderBtnIndex",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=$('[data-anchor="#question'.concat(e,'"]'));t?a.addClass("done"):a.removeClass("done"),n?a.addClass("doing").siblings(".doing").removeClass("doing"):a.removeClass("doing")}},{key:"_showEssayInputEditor",value:function(e){var t=this,n=$(e.currentTarget);if(n.hasClass("essay-input-short")){e.preventDefault(),e.stopPropagation(),$(this).blur();var a=n.siblings(".essay-input-long"),i=a.siblings(".essay-input-btn");n.hide(),a.show(),i.show();var r=CKEDITOR.replace(a.attr("id"),{toolbar:"Minimal",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:a.data("imageUploadUrl")});r.on("blur",(function(){r.updateElement(),setTimeout((function(){a.val(r.getData()),a.change(),a.val()?t._renderBtnIndex(a.attr("name"),!0):t._renderBtnIndex(a.attr("name"),!1)}),1)})),r.on("instanceReady",(function(){this.focus(),i.one("click",(function(){n.val($(r.getData()).text()),r.destroy(),a.hide(),i.hide(),n.show()}))})),r.on("key",(function(){r.updateElement(),setTimeout((function(){a.val(r.getData()),a.change()}),1)})),r.on("insertHtml",(function(){r.updateElement(),setTimeout((function(){a.val(r.getData()),a.change()}),1)}))}}},{key:"_quick2Question",value:function(e){var t=$(e.currentTarget);window.location.hash=t.data("anchor")}},{key:"_suspendSubmit",value:function(e){var t=this._getAnswers(),n=this._getAttachments();$.post(e,{data:t,usedTime:this.usedTime,attachments:n}).done((function(){})).error((function(e){Object(b.a)("error",e.error.message)}))}},{key:"_btnSubmit",value:function(e){var t=$(e.currentTarget);t.button("loading"),clearInterval(this.saveTimer),this._submitTest(t.data("url"),t.data("goto"))}},{key:"_submitTest",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this._getAnswers(),a=new y.a,i=this._getAttachments();$.post(e,{data:n,usedTime:this.usedTime,attachments:i}).done((function(e){e.result&&a.emit("finish",{data:""}),""!=t||""!=e.goto?window.location.href=t:""!=e.goto?window.location.href=e.goto:""!=e.message&&Object(b.a)("error",e.message)})).error((function(e){Object(b.a)("error",e.error.message)}))}},{key:"_getAnswers",value:function(){var e={};return $("*[data-type]").each((function(){var t=$(this).attr("name"),n=$(this).data("type"),a=v.getTypeBuilder(n).getAnswer(t);e[t]=a})),i()(e)}},{key:"_getAttachments",value:function(){var e={};return $('[data-type="essay"]').each((function(){var t=$(this).attr("name"),n=v.getTypeBuilder("essay").getAttachment(t);e[t]=n})),e}},{key:"_alwaysSave",value:function(){if($('input[name="testSuspend"]').length>0){var e=this,t=$('input[name="testSuspend"]').data("url");this.saveTimer=setInterval((function(){e._suspendSubmit(t);var n=(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds();Object(b.a)("success",n+Translator.trans("testpaper.widget.save_success_hint"))}),18e4)}}}]),e}();t.a=k},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u}));n(353);var a=n(21),i=function(){var e=$(".js-panel-card");e.perfectScrollbar(),e.perfectScrollbar("update")},r=function(){if(console.log("ok"),!Object(a.f)()){var e=$(".js-testpaper-card");if(!(e.length<=0)){var t=e.offset().top;$(window).scroll((function(){$(window).scrollTop()>=t?e.addClass("affix"):e.removeClass("affix")}))}}},s=function(){$(".js-btn-index").click((function(e){var t=$(e.currentTarget);$(".js-testpaper-heading").length<=0&&t.addClass("doing").siblings(".doing").removeClass("doing")}))},o=function(){$("#showWrong").change((function(e){var t=$(e.currentTarget);$(".js-answer-notwrong").each((function(e,n){var a=$($(n).data("anchor")),i=a.closest(".js-testpaper-question-block");t.prop("checked")?(a.hide(),i.find(".js-testpaper-question:visible").length<=0&&i.hide()):(a.show(),i.show())})),i()}))},u=function(){var e=$(".js-testpaper-watermark");e.length>0&&$.get(e.data("watermark-url"),(function(t){e.each((function(){$(this).WaterMark({yPosition:"center",style:{"font-size":10},opacity:.6,contents:t})}))}))}}});