"use strict";

!function(e) {
    e.getUrlParam = function(e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), n = window.location.search.substr(1).match(t);
        return null != n ? unescape(n[2]) : null;
    };
}(jQuery);

var menuCtrl = {
    init: function() {
        this.menuBar(), $("#attention .f19").click(function(e) {
            e.preventDefault(), $(this).toggleClass("show"), $(this).parent().find(".f13").slideToggle();
        });
    },
    menuBar: function() {
        var e = $("#top .indexPage"), t = $("#menuToggle");
        t.click(function(t) {
            t.preventDefault(), $(this).toggleClass("show"), e.toggleClass("show");
        }), e.find("li").click(function(n) {
            n.preventDefault();
            var a = $(this).index();
            if (!$(this).hasClass("active")) switch (a) {
              case 0:
                trackWaitJump("", "index.html");
                break;

              case 1:
                gaclick("analysis_all"), t.removeClass("show"), e.removeClass("show");
                break;

              case 2:
                trackWaitJump("header_all", "fund_list.html");
                break;

              case 3:
                gaclick("header_homebank"), window.open("http://www.ctbcbank.com/html/fileUpload/homebank/", "_blank");
            }
        });
    },
    scrollPage: function(e) {
        var t = e || 0;
        $("html, body").stop().animate({
            scrollTop: t
        }, 500);
    },
    chkDevice: function() {
        var e = !1;
        return (isMobile.phone || $(window).width() < 769) && (e = !0), e;
    }
};

$(function() {
    menuCtrl.init();
});