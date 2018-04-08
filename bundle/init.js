"use strict";

!function(a) {
    a.preload = function() {
        for (var e = [], t = arguments.length; t--; ) e.push(a("<img />").attr("src", arguments[t]));
    };
}(jQuery);

var typeTop = "20px", typeLeft = "0", interest_fund = $("#analysis .select_wrapper:eq(0)"), select_fund = $("#analysis .select_wrapper:eq(1)"), radio_outer = $("#analysis .fund_list, #analysis .inline.formula"), radio_fund = $("#analysis .see_fund_interest"), sliderDiv = $("#slider"), base_cost = 0, target_refund = 0, moneyContent = $(".silder_wrapper .cost input"), costContent = $("#analysis .money"), fund_index = 0, fund_rate = 0, base_money = function(e, t) {
    return Math.round(e / (36 * (100 + t) / 100));
}, fund_data = [ {
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
        var i = $(".slide_bar"), t = $(".kv"), a = $(".content"), n = $(".outer.left"), d = $(window).width(), r = $(window).height(), l = ($("#kv .circle_01").offset().left + $("#kv .circle_01").width()) / d;
        $("#kv .bar").width();
        n.width(d * l), i.css("left", d * l - i.width() / 2 + "px"), a.width(d);
        var s = function(e) {
            var t, a, s = {
                w: d + "px",
                h: r + "px",
                cw: (t = e) * d + "px",
                ch: t * r + "px"
            };
            i.css("left", e * d - i.width() / 2), o(), a = s, n.css("width", a.cw);
        }, o = function() {
            var e = $("#kv .circle_01"), t = $("#kv .circle_02"), a = $("#kv .circle_03"), s = $("#kv .circle_04"), i = e.offset().left, n = t.offset().left, r = a.offset().left, o = s.offset().left;
            i < d * l ? e.addClass("show") : e.removeClass("show"), n < d * l ? t.addClass("show") : t.removeClass("show"), 
            r < d * l ? a.addClass("show") : a.removeClass("show"), o < d * l ? s.addClass("show") : s.removeClass("show");
        }, _ = function(e, t) {
            var a, s, i;
            return a = (e - c) / d, s = 0, i = 1, Math.max(s, Math.min(i, a));
        }, c = 0;
        i.on("movestart", function(e) {
            e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY ? e.preventDefault() : e.distX < e.distY && e.distX < -e.distY || e.distX > e.distY && (e.distX, 
            e.distY), t.addClass("active"), c = t.offset().left, t.offset().top, d, n.height(), 
            i.hasClass("hideTip") || i.addClass("hideTip");
        }), i.on("move", function(e) {
            t.hasClass("active") && (l = _(e.pageX, e.pageY), s(l));
        }), i.on("moveend", function() {
            t.removeClass("active");
        }), i.on("touchmove", function(e) {
            e.preventDefault();
        }), $(window).on("resize", function(e) {
            d = $(window).width(), r = $(window).height(), a.width(d), $("#kv .bar").width(), 
            s(l);
        });
    },
    changeBg: function() {
        var s = $(".content"), i = $(".content.left"), n = $(".content.right"), r = $("#kv .change_theme li"), o = $("#kv .active");
        r.click(function(e) {
            e.preventDefault();
            var t, a = $(this).data("class");
            (typeTop = $(this).data("top"), typeLeft = $(this).data("left"), $(this).hasClass("active")) || (r.removeClass("active"), 
            menuCtrl.chkDevice() ? o.css("top", "0px").stop().animate({
                left: typeLeft
            }, 500) : o.css("left", "0").stop().animate({
                top: typeTop
            }, 500), $(this).addClass("active"), t = a, s.stop().fadeOut("fast", function() {
                i.removeClass("money car work son retire").addClass(t), n.removeClass("money car work son retire").addClass(t);
            }).fadeIn("slow"));
        }).eq(0).click(), $(window).resize(function() {
            menuCtrl.chkDevice() ? o.css("top", "0px").css("left", typeLeft) : o.css("top", typeTop).css("left", "0");
        });
    },
    playBtn: function() {
        var e = $(".go_formula");
        90 < $(window).scrollTop() ? e.addClass("show") : e.removeClass("show"), $(window).scroll(function() {
            90 < $(window).scrollTop() ? e.addClass("show") : e.removeClass("show");
        });
    },
    play: function() {
        var a = this, e = $("#top .indexPage li:eq(1), .go_formula"), s = 0;
        e.click(function(e) {
            e.preventDefault();
            var t = menuCtrl.chkDevice() ? $("#analysis .mb").height() : 0;
            s = menuCtrl.chkDevice() ? a.caloffset("#analysis") + t : $("#kv").height() + $("#top").height(), 
            menuCtrl.scrollPage(s);
        });
    },
    setFunds: function() {
        radio_outer.hide(), interest_fund.change(function() {
            var e = interest_fund.find(":selected").val();
            radio_fund.find(".fund_select").hide(), radio_fund.find("." + e).show(), 999 != e ? radio_outer.show() : radio_outer.hide(), 
            fund_index = 0, $("input:radio[name=fund_interest]").prop("checked", !1), sliderDiv.slider("value", 36e4), 
            sliderDiv.slider("disable");
        }), $("input:radio[name=fund_interest]").change(function() {
            sliderDiv.slider("value", 36e4), fund_index = this.value, base_cost = base_money(36e4, fund_data[fund_index].avg_rate), 
            costContent.text(base_cost), sliderDiv.slider("enable");
        });
    },
    slider: function() {
        sliderDiv.slider({
            range: "min",
            value: target_refund,
            min: 36e4,
            max: 36e5,
            step: 1,
            create: function() {
                moneyContent.val($(this).slider("value")), target_refund = $(this).slider("value"), 
                base_cost = base_money(target_refund, fund_data[fund_index].avg_rate), costContent.text(base_cost);
            },
            change: function(e, t) {
                moneyContent.val(t.value), target_refund = $(this).slider("value"), base_cost = base_money(target_refund, fund_data[fund_index].avg_rate), 
                costContent.text(base_cost);
            }
        }), moneyContent.keyup(function(e) {
            var t = $(this).val();
            !sliderDiv.hasClass("ui-slider-disabled") && "" != t && 36e4 <= t && t <= 36e5 && (target_refund = t, 
            sliderDiv.slider("value", t));
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