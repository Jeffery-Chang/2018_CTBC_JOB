"use strict";var typeTop="20px",typeLeft="0",indexCtrl={init:function(){this.slider(),this.play(),this.pieChart(),this.showAnswer(),this.setFunds(),this.kv(),this.changeBg(),this.fromFunds(),this.playBtn(),$("#kv .slide_bar").delay(200).fadeIn("fast"),$("#weapon .btn_green").click(function(t){t.preventDefault(),window.open("https://www.ctbcbank.com/CTCBPortalWeb/appmanager/ebank/rb?_nfpb=true&_pageLabel=TW_RB_TX_mfund_300014&_windowLabel=T16806467151337672757923&_nffvid=%2FCTCBPortalWeb%2Fpages%2Fmf%2FmfIrRegularApply%2FmfIrRegularApplyStart.faces&firstView=true","_blank")}),$("#weapon .btn_orange").click(function(t){t.preventDefault(),window.open("http://www.ctbcbank.com/html/fileUpload/homebank/openacc.html","_blank")})},fromFunds:function(){var t=$.getUrlParam("from");1==t&&null!=t&&$(".go_formula").click()},kv:function(){var t=$(".slide_bar"),e=$(".kv"),n=$(".content"),s=$(".outer.left"),i=$(window).width(),a=$(window).height(),o=.5,l=$("#kv .bar").width();s.width(i*o),t.css("left",i*o-t.width()/2+"px"),n.width(i);var r=function(t){s.css("width",t.cw),e.css("height",t.h)},c=function(t){var e=i,n=a;return{w:e+"px",h:n+"px",cw:t*e+"px",ch:t*n+"px"}},f=function(e){var n=c(e);t.css("left",e*i-t.width()/2),d(),r(n)},d=function(){var t=$("#kv .circle_01"),e=$("#kv .circle_02"),n=$("#kv .circle_03"),s=$("#kv .circle_04"),a=t.offset().left,l=e.offset().left,r=n.offset().left,c=s.offset().left;i*o>a?t.addClass("show"):t.removeClass("show"),i*o>l?e.addClass("show"):e.removeClass("show"),i*o>r?n.addClass("show"):n.removeClass("show"),i*o>c?s.addClass("show"):s.removeClass("show")},u=function(t,e,n){return Math.max(e,Math.min(n,t))},h=function(t,e){return u((t-p)/i,0,1)},p=0,v=0,w=0,m=0,g=function(t){t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY?t.preventDefault():t.distX<t.distY&&t.distX<-t.distY||t.distX>t.distY&&(t.distX,t.distY),e.addClass("active"),p=e.offset().left,v=e.offset().top,w=i,m=s.height()},C=function(t){e.hasClass("active")&&(o=h(t.pageX,t.pageY),f(o))},k=function(){e.removeClass("active")};t.on("movestart",g),t.on("move",C),t.on("moveend",k),t.on("touchmove",function(t){t.preventDefault()}),$(window).on("resize",function(t){i=$(window).width(),a=$(window).height(),n.width(i),l=$("#kv .bar").width(),f(o)})},changeBg:function(){var t=$(".content"),e=$(".content.left"),n=$(".content.right"),s=$("#kv .change_theme li"),i=$("#kv .active"),a=function(s){t.fadeOut("normal",function(){e.css("background","url(images/theme"+s+"_01.jpg) no-repeat center top").css("backgroundSize","cover"),n.css("background","url(images/theme"+s+"_02.jpg) no-repeat center top").css("backgroundSize","cover")}).delay(200).fadeIn("fast")};s.click(function(t){t.preventDefault();var e=$(this).index();typeTop=$(this).data("top"),typeLeft=$(this).data("left"),$(this).hasClass("active")||(s.removeClass("active"),menuCtrl.chkDevice()?(i.css("top","0px"),i.stop().animate({left:typeLeft},500)):(i.css("left","0"),i.stop().animate({top:typeTop},500)),$(this).addClass("active"),a(e))}).eq(0).click(),$(window).resize(function(){menuCtrl.chkDevice()?(i.css("top","0px"),i.css("left",typeLeft)):(i.css("top",typeTop),i.css("left","0"))})},playBtn:function(){var t=$(".go_formula");$(window).scrollTop()>90?t.addClass("show"):t.removeClass("show"),$(window).scroll(function(){$(window).scrollTop()>90?t.addClass("show"):t.removeClass("show")})},play:function(){var t=this,e=0;$("#top .indexPage li:eq(1), .go_formula").click(function(n){n.preventDefault();var s=menuCtrl.chkDevice()?$("#analysis .mb").height():0;e=t.caloffset("#analysis")+s,menuCtrl.scrollPage(e)})},setFunds:function(){var t=$("#analysis .select_wrapper");t.change(function(){var e=t.find(":selected").val();$("#result .inline li.find_item").hide(),$("."+e).show()}).change()},showAnswer:function(){var t=this,e=$("#analysis .btn_wrapper .btn_green"),n=$("#analysis .btn_wrapper .btn_white"),s=0;e.click(function(n){n.preventDefault();var i=menuCtrl.chkDevice()?$("#analysis .mb").height():0;if(e.hasClass("show"))return s=t.caloffset("#analysis")+i,menuCtrl.scrollPage(s),void $("#result").delay(300).slideUp({duration:500,complete:function(){e.removeClass("show")}});$("#result").slideDown({duration:750,complete:function(){e.addClass("show");var n=t.caloffset("#result")+i;menuCtrl.scrollPage(n)}})}),n.click(function(t){t.preventDefault(),trackWaitJump("","fund_list.html")})},slider:function(){var t=$("#slider"),e=$(".silder_wrapper font");t.slider({range:"min",value:15e3,min:0,max:3e4,step:1,create:function(){e.text($(this).slider("value"))},slide:function(t,n){e.text(n.value)},change:function(t,n){e.text(n.value)}})},pieChart:function(){var t=$("#control .go_right"),e=$("#control .pie1, #control .pie2, #control .pie3");window.sr=ScrollReveal({duration:0,origin:"left",afterReveal:function(t){$.each(e,function(t,e){$(e).addClass("instage")})}}),sr.reveal(t)},caloffset:function(t){return $(t).offset().top-parseInt($(t).css("padding-top").replace("px",""))}};$(function(){indexCtrl.init()});