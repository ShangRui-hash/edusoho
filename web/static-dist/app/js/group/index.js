!function(t){function e(e){for(var n,i,l=e[0],s=e[1],c=e[2],d=0,u=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(p&&p(e);u.length;)u.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,l=1;l<o.length;l++){var s=o[l];0!==r[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={229:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static-dist/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=s;a.push([1244,0]),o()}({1244:function(t,e,o){"use strict";o.r(e);var n=o(8),r=o(37),a=o.n(r),i=o(130),l=o(42);!function(){var t,e,o="#post-thread-btn",n=$("#post-thread-form");new i.a(n),$("#post_content").length&&(t={toolbar:"Thread",replace:"post_content"},(e=CKEDITOR.replace(t.replace,{toolbar:t.toolbar,fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#"+t.replace).data("imageUploadUrl"),allowedContent:!0,height:300})).on("change",(function(){$("#"+t.replace).val(e.getData())})),e.on("blur",(function(){$("#"+t.replace).val(e.getData())})));var r=n.validate({currentDom:o,ajax:!0,rules:{content:{required:!0,minlength:2,maxlength:3e3,trim:!0}},messages:{content:{maxlength:Translator.trans("group.thread.reply.max_length.notice")}},submitSuccess:function(t){console.log(t),"/login"!=t?window.location.reload():window.location.href=t}});$(o).click((function(){r.form()}))}(),$(".thread-post-reply-form").each((function(){var t=$(this),e=t.find("textarea").attr("name"),o=t.validate({ignore:"",rules:a()({},"".concat(e),{required:!0,minlength:2,maxlength:3e3,trim:!0}),messages:a()({},"".concat(e),{maxlength:Translator.trans("group.thread.reply.max_length.notice")}),submitHandler:function(t){var e=$(t).find(".reply-btn"),o=e.attr("postId"),r="";r=$("#fromUserId").length>0?$("#fromUserId").val():$("#fromUserIdNosub").length>0?$("#fromUserIdNosub").val():"",e.button("submiting").addClass("disabled"),console.log($(t).attr("action")),console.log("content="+$(t).find("textarea").val()+"&postId="+o+"&fromUserId="+r),$.ajax({url:$(t).attr("action"),data:"content="+$(t).find("textarea").val()+"&postId="+o+"&fromUserId="+r,cache:!1,async:!1,type:"POST",dataType:"text",success:function(t){"/login"!=t?window.location.reload():window.location.href=t},error:function(t){(t=$.parseJSON(t.responseText)).error?Object(n.a)("danger",t.error.message):Object(n.a)("danger",Translator.trans("group.post.reply_fail_hint")),e.button("reset").removeClass("disabled")}})}});t.find("button").click((function(t){o.form()}))}));$("#thread-list").on("click",".uncollect-btn, .collect-btn",(function(t){var e=$(this);e.hasClass("uncollect-btn")?l.a.favorite.unfavorite({data:{targetType:e.data("targetType"),targetId:e.data("targetId")}}).then((function(t){e.hide(),e.hasClass("collect-btn")?e.parent().find(".uncollect-btn").show():e.parent().find(".collect-btn").show()})):e.hasClass("collect-btn")&&l.a.favorite.favorite({data:{targetType:e.data("targetType"),targetId:e.data("targetId")}}).then((function(t){e.hide(),e.hasClass("collect-btn")?e.parent().find(".uncollect-btn").show():e.parent().find(".collect-btn").show()}))})),$(".attach").tooltip(),$(".group-post-list").length>0&&($(".group-post-list").on("click",".li-reply",(function(){var t=$(this).attr("postId"),e=$(this).data("fromUserId");$("#fromUserIdDiv").html('<input type="hidden" id="fromUserId" value="'+e+'">'),$("#li-"+t).show(),$("#reply-content-"+t).focus(),$("#reply-content-"+t).val(Translator.trans("group.post.reply_hint")+" "+$(this).attr("postName")+":")})),$(".group-post-list").on("click",".reply",(function(){var t=$(this).attr("postId");if(""!=$(this).data("fromUserIdNosub")){var e=$(this).data("fromUserIdNosub");$("#fromUserIdNoSubDiv").html('<input type="hidden" id="fromUserIdNosub" value="'+e+'">'),$("#fromUserIdDiv").html("")}$(this).hide(),$("#unreply-"+t).show(),$(".reply-"+t).css("display","")})),$(".group-post-list").on("click",".unreply",(function(){var t=$(this).attr("postId");$(this).hide(),$("#reply-"+t).show(),$(".reply-"+t).css("display","none")})),$(".group-post-list").on("click",".replyToo",(function(){var t=$(this).attr("postId");"hidden"==$(this).attr("data-status")?($(this).attr("data-status",""),$("#li-"+t).show(),$("#reply-content-"+t).focus(),$("#reply-content-"+t).val("")):($("#li-"+t).hide(),$(this).attr("data-status","hidden"))})),$(".group-post-list").on("click",".lookOver",(function(){var t=$(this).attr("postId");$(".li-reply-"+t).css("display",""),$(".lookOver-"+t).hide(),$(".paginator-"+t).css("display","")})),$(".group-post-list").on("click",".postReply-page",(function(){var t=$(this).attr("postId");$.post($(this).data("url"),"",(function(e){$("body,html").animate({scrollTop:$("#post-"+t).offset().top},300),$(".reply-post-list-"+t).replaceWith(e)}))}))),$("#hasAttach").length>0&&$(".ke-icon-accessory").addClass("ke-icon-accessory-red"),$("#post-action").length>0&&($("#post-action").on("click","#closeThread",(function(){var t=$(this);if(!confirm(t.attr("title")+"?"))return!1;$.post(t.data("url"),(function(t){window.location.href=t}))})),$("#post-action").on("click","#elite,#stick,#cancelReward",(function(){var t=$(this);$.post(t.data("url"),(function(t){window.location.href=t}))}))),$(".actions").length>0&&$(".group-post-list").on("click",".post-delete-btn,.post-adopt-btn",(function(){var t=$(this);if(!confirm(t.attr("title")+"?"))return!1;$.post(t.data("url"),(function(){window.location.reload()}))}))},22:function(t,e){t.exports=jQuery}});