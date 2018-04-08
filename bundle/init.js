"use strict";

!function(e) {
    e.preload = function() {
        for (var t = [], a = arguments.length; a--; ) t.push(e("<img />").attr("src", arguments[a]));
    };
}(jQuery);

var typeTop = "20px", typeLeft = "0", interest_fund = $("#analysis .select_wrapper:eq(0)"), select_fund = $("#analysis .select_wrapper:eq(1)"), radio_fund = $("#analysis .interest li:eq(1)"), sliderDiv = $("#slider"), base_cost = 0, target_refund = 0, fund_index = 0, fund_rate = 0, fund_data = [ {
    best_rate: 26.61,
    worst_rate: 3.06,
    avg_rate: 11.39
}, {
    best_rate: 12.7,
    worst_rate: 1.96,
    avg_rate: 7.72
}, {
    best_rate: 31.87,
    worst_rate: -4.98,
    avg_rate: 13.37
}, {
    best_rate: 46.09,
    worst_rate: 6.8,
    avg_rate: 22.97
}, {
    best_rate: 46.76,
    worst_rate: 2.02,
    avg_rate: 24.25
}, {
    best_rate: 31.56,
    worst_rate: -3.85,
    avg_rate: 13.49
}, {
    best_rate: 39.3,
    worst_rate: -5.65,
    avg_rate: 22.44
}, {
    best_rate: 37.92,
    worst_rate: 4.72,
    avg_rate: 23.36
}, {
    best_rate: 27.25,
    worst_rate: 1.29,
    avg_rate: 14.98
}, {
    best_rate: 47.64,
    worst_rate: 3.86,
    avg_rate: 21.78
}, {
    best_rate: 58.73,
    worst_rate: .94,
    avg_rate: 24.93
} ], indexCtrl = {
    init: function() {
        this.slider(), this.play(), this.pieChart(), this.setFunds(), this.kv(), this.changeBg(), 
        this.fromFunds(), this.playBtn(), $("#kv .slide_bar").fadeIn("slow"), $("#analysis .btn_wrapper .btn_white").click(function(e) {
            e.preventDefault(), trackWaitJump("", "fund_list.html");
        }), $("#weapon .btn_green").click(function(e) {
            e.preventDefault(), gaclick("fund"), window.open("https://www.ctbcbank.com/CTCBPortalWeb/appmanager/ebank/rb?_nfpb=true&_pageLabel=TW_RB_TX_mfund_300014&_windowLabel=T16806467151337672757923&_nffvid=%2FCTCBPortalWeb%2Fpages%2Fmf%2FmfIrRegularApply%2FmfIrRegularApplyStart.faces&firstView=true", "_blank");
        }), $("#weapon .btn_orange").click(function(e) {
            e.preventDefault(), gaclick("open"), window.open("http://www.ctbcbank.com/html/fileUpload/homebank/openacc.html", "_blank");
        }), $(window).on("load", function() {
            $.preload("images/theme1_01.jpg", "images/theme1_02.jpg", "images/theme2_01.jpg", "images/theme2_02.jpg", "images/theme3_01.jpg", "images/theme3_02.jpg", "images/theme4_01.jpg", "images/theme4_02.jpg", "images/theme5_01.jpg", "images/theme5_02.jpg", "images/theme1_01_pad.jpg", "images/theme1_02_pad.jpg", "images/theme2_01_pad.jpg", "images/theme2_02_pad.jpg", "images/theme3_01_pad.jpg", "images/theme3_02_pad.jpg", "images/theme4_01_pad.jpg", "images/theme4_02_pad.jpg", "images/theme5_01_pad.jpg", "images/theme5_02_pad.jpg", "images/theme1_01_m.jpg", "images/theme1_02_m.jpg", "images/theme2_01_m.jpg", "images/theme2_02_m.jpg", "images/theme3_01_m.jpg", "images/theme3_02_m.jpg", "images/theme4_01_m.jpg", "images/theme4_02_m.jpg", "images/theme5_01_m.jpg", "images/theme5_02_m.jpg");
        });
    },
    fromFunds: function() {
        var e = $.getUrlParam("from");
        1 == e && null != e && $(".go_formula").click();
    },
    kv: function() {
        var e = $(".slide_bar"), t = $(".kv"), a = $(".content"), s = $(".outer.left"), i = $(window).width(), n = $(window).height(), r = ($("#kv .circle_01").offset().left + $("#kv .circle_01").width()) / i;
        $("#kv .bar").width();
        s.width(i * r), e.css("left", i * r - e.width() / 2 + "px"), a.width(i);
        var o = function(t) {
            var a = function(e) {
                return {
                    w: i + "px",
                    h: n + "px",
                    cw: e * i + "px",
                    ch: e * n + "px"
                };
            }(t);
            e.css("left", t * i - e.width() / 2), d(), function(e) {
                s.css("width", e.cw);
            }(a);
        }, d = function() {
            var e = $("#kv .circle_01"), t = $("#kv .circle_02"), a = $("#kv .circle_03"), s = $("#kv .circle_04"), n = e.offset().left, o = t.offset().left, d = a.offset().left, l = s.offset().left;
            i * r > n ? e.addClass("show") : e.removeClass("show"), i * r > o ? t.addClass("show") : t.removeClass("show"), 
            i * r > d ? a.addClass("show") : a.removeClass("show"), i * r > l ? s.addClass("show") : s.removeClass("show");
        }, l = function(e, t) {
            return function(e, t, a) {
                return Math.max(t, Math.min(a, e));
            }((e - c) / i, 0, 1);
        }, c = 0;
        e.on("movestart", function(a) {
            a.distX > a.distY && a.distX < -a.distY || a.distX < a.distY && a.distX > -a.distY ? a.preventDefault() : a.distX < a.distY && a.distX < -a.distY || a.distX > a.distY && (a.distX, 
            a.distY), t.addClass("active"), c = t.offset().left, t.offset().top, i, s.height(), 
            e.hasClass("hideTip") || e.addClass("hideTip");
        }), e.on("move", function(e) {
            t.hasClass("active") && (r = l(e.pageX, e.pageY), o(r));
        }), e.on("moveend", function() {
            t.removeClass("active");
        }), e.on("touchmove", function(e) {
            e.preventDefault();
        }), $(window).on("resize", function(e) {
            i = $(window).width(), n = $(window).height(), a.width(i), $("#kv .bar").width(), 
            o(r);
        });
    },
    changeBg: function() {
        var e = $(".content"), t = $(".content.left"), a = $(".content.right"), s = $("#kv .change_theme li"), i = $("#kv .active");
        s.click(function(n) {
            n.preventDefault();
            var r = $(this).data("class");
            typeTop = $(this).data("top"), typeLeft = $(this).data("left"), $(this).hasClass("active") || (s.removeClass("active"), 
            menuCtrl.chkDevice() ? i.css("top", "0px").stop().animate({
                left: typeLeft
            }, 500) : i.css("left", "0").stop().animate({
                top: typeTop
            }, 500), $(this).addClass("active"), function(s) {
                e.stop().fadeOut("fast", function() {
                    t.removeClass("money car work son retire").addClass(s), a.removeClass("money car work son retire").addClass(s);
                }).fadeIn("slow");
            }(r));
        }).eq(0).click(), $(window).resize(function() {
            menuCtrl.chkDevice() ? i.css("top", "0px").css("left", typeLeft) : i.css("top", typeTop).css("left", "0");
        });
    },
    playBtn: function() {
        var e = $(".go_formula");
        $(window).scrollTop() > 90 ? e.addClass("show") : e.removeClass("show"), $(window).scroll(function() {
            $(window).scrollTop() > 90 ? e.addClass("show") : e.removeClass("show");
        });
    },
    play: function() {
        var e = this, t = 0;
        $("#top .indexPage li:eq(1), .go_formula").click(function(a) {
            a.preventDefault();
            var s = menuCtrl.chkDevice() ? $("#analysis .mb").height() : 0;
            t = menuCtrl.chkDevice() ? e.caloffset("#analysis") + s : $("#kv").height() - $("#top").height(), 
            menuCtrl.scrollPage(t);
        });
    },
    setFunds: function() {
        interest_fund.change(function() {
            var e = interest_fund.find(":selected").val();
            radio_fund.find(".see_fund_interest").find("div").hide(), radio_fund.find("." + e).show(), 
            999 != e ? radio_fund.show() : radio_fund.hide(), fund_index = 0, $("input:radio[name=fund_interest]").prop("checked", !1), 
            sliderDiv.slider("value", 0), sliderDiv.slider("disable");
        }), $("input:radio[name=fund_interest]").change(function() {
            sliderDiv.slider("value", 0), fund_index = this.value, sliderDiv.slider("enable");
        });
    },
    slider: function() {
        var e = $(".silder_wrapper font"), t = $("#analysis .money"), a = function(e, t) {
            return Math.round(e / (36 * (100 + t) / 100));
        };
        sliderDiv.slider({
            range: "min",
            value: target_refund,
            min: 0,
            max: 3e4,
            step: 1,
            create: function() {
                e.text($(this).slider("value")), target_refund = $(this).slider("value"), base_cost = a(target_refund, fund_rate), 
                t.text(base_cost);
            },
            slide: function(s, i) {
                e.text(i.value), target_refund = $(this).slider("value"), base_cost = a(target_refund, fund_rate), 
                t.text(base_cost);
            },
            change: function(s, i) {
                e.text(i.value), target_refund = $(this).slider("value"), base_cost = a(target_refund, fund_rate), 
                t.text(base_cost);
            }
        }), sliderDiv.slider("disable");
    },
    pieChart: function() {
        var e = $("#control .go_right"), t = $("#control .pie1, #control .pie2, #control .pie3");
        window.sr = ScrollReveal({
            duration: 0,
            origin: "left",
            afterReveal: function(e) {
                $.each(t, function(e, t) {
                    $(t).addClass("instage");
                });
            }
        }), sr.reveal(e);
    },
    caloffset: function(e) {
        var t = $(e), a = parseInt(t.css("padding-top").replace("px", "")) || 0;
        return t.offset().top - a;
    }
};

$(function() {
    indexCtrl.init();
});