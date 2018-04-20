"use strict";

!function(e) {
    e.preload = function() {
        for (var t = [], a = arguments.length; a--; ) t.push(e("<img />").attr("src", arguments[a]));
    };
}(jQuery);

var typeTop = "20px", typeLeft = "0", interest_fund = $("#analysis .select_wrapper:eq(0)"), select_fund = $("#analysis .select_wrapper:eq(1)"), step2 = $("#analysis .step2"), step3 = $("#analysis .step3"), tip = $("#analysis .step3 .cost font"), radio_fund = $("#analysis .see_fund_interest"), show_btn_fg = !1, play_btn = $(".go_formula"), playBtn = function() {
    $(window).scrollTop() > 90 || show_btn_fg ? play_btn.addClass("show") : play_btn.removeClass("show");
}, sliderDiv = $("#slider"), base_cost = 0, target_refund = 0, moneyContent = $(".silder_wrapper .cost input"), costContent = $("#analysis .money"), fund_index = 0, fund_rate = 0, base_money = function(e, t) {
    return Math.round(e / t);
}, fund_data = [ {
    avg_rate: 40.67,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=03800004&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=03800004"
}, {
    avg_rate: 40.47,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=03900029&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=03900029"
}, {
    avg_rate: 41.01,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01800023&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01800023"
}, {
    avg_rate: 38.91,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=04100016&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=04100016"
}, {
    avg_rate: 40.58,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00600055&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00600055"
}, {
    avg_rate: 38.19,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00300036&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00300036"
}, {
    avg_rate: 38.61,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01200018&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01200018"
}, {
    avg_rate: 38.58,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00300062&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00300062"
}, {
    avg_rate: 37.46,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00300063&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00300063"
}, {
    avg_rate: 40.33,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01000002&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01000002"
}, {
    avg_rate: 40.86,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01300005&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01300005"
} ], indexCtrl = {
    init: function() {
        this.slider(), this.play(), this.pieChart(), this.setFunds(), this.kv(), this.changeBg(), 
        this.fromFunds(), playBtn(), $("#kv .slide_bar").fadeIn("slow"), $(window).on("load", function() {
            $.preload("images/theme1_01.jpg", "images/theme1_02.jpg", "images/theme2_01.jpg", "images/theme2_02.jpg", "images/theme3_01.jpg", "images/theme3_02.jpg", "images/theme4_01.jpg", "images/theme4_02.jpg", "images/theme5_01.jpg", "images/theme5_02.jpg", "images/theme1_01_pad.jpg", "images/theme1_02_pad.jpg", "images/theme2_01_pad.jpg", "images/theme2_02_pad.jpg", "images/theme3_01_pad.jpg", "images/theme3_02_pad.jpg", "images/theme4_01_pad.jpg", "images/theme4_02_pad.jpg", "images/theme5_01_pad.jpg", "images/theme5_02_pad.jpg", "images/theme1_01_m.jpg", "images/theme1_02_m.jpg", "images/theme2_01_m.jpg", "images/theme2_02_m.jpg", "images/theme3_01_m.jpg", "images/theme3_02_m.jpg", "images/theme4_01_m.jpg", "images/theme4_02_m.jpg", "images/theme5_01_m.jpg", "images/theme5_02_m.jpg");
        }).scroll(function() {
            playBtn();
        });
    },
    fromFunds: function() {
        var e = $.getUrlParam("from");
        1 == e && null != e && $(".go_formula").click();
    },
    kv: function() {
        var e = $(".slide_bar"), t = $(".kv"), a = $(".content"), s = $(".outer.left"), n = $(window).width(), o = $(window).height(), i = ($("#kv .circle_01").offset().left + $("#kv .circle_01").width()) / n, d = $("#kv .bar").width();
        s.width(n * i), e.css("left", n * i - e.width() / 2 + "px"), a.width(n);
        var r = function(e) {
            s.css("width", e.cw);
        }, _ = function(e) {
            var t = n, a = o;
            return {
                w: t + "px",
                h: a + "px",
                cw: e * t + "px",
                ch: e * a + "px"
            };
        }, l = function(t) {
            var a = _(t);
            e.css("left", t * n - e.width() / 2), c(), r(a);
        }, c = function() {
            var e = $("#kv .circle_01"), t = $("#kv .circle_02"), a = $("#kv .circle_03"), s = $("#kv .circle_04"), o = e.offset().left, d = t.offset().left, r = a.offset().left, _ = s.offset().left;
            n * i > o ? e.addClass("show") : e.removeClass("show"), n * i > d ? t.addClass("show") : t.removeClass("show"), 
            n * i > r ? a.addClass("show") : a.removeClass("show"), n * i > _ ? s.addClass("show") : s.removeClass("show"), 
            show_btn_fg = !!s.hasClass("show"), playBtn();
        }, p = function(e, t, a) {
            return Math.max(t, Math.min(a, e));
        }, f = function(e, t) {
            return p((e - m) / n, 0, 1);
        }, m = 0, u = 0, h = 0, g = 0, w = function(a) {
            a.distX > a.distY && a.distX < -a.distY || a.distX < a.distY && a.distX > -a.distY ? a.preventDefault() : a.distX < a.distY && a.distX < -a.distY || a.distX > a.distY && (a.distX, 
            a.distY), t.addClass("active"), m = t.offset().left, u = t.offset().top, h = n, 
            g = s.height(), e.hasClass("hideTip") || e.addClass("hideTip");
        }, C = function(e) {
            t.hasClass("active") && (i = f(e.pageX, e.pageY), l(i));
        }, b = function() {
            t.removeClass("active");
        };
        e.on("movestart", w), e.on("move", C), e.on("moveend", b), e.on("touchmove", function(e) {
            e.preventDefault();
        }), $(window).on("resize", function(e) {
            n = $(window).width(), o = $(window).height(), a.width(n), d = $("#kv .bar").width(), 
            l(i);
        });
    },
    changeBg: function() {
        var e = $(".content"), t = $(".content.left"), a = $(".content.right"), s = $("#kv .change_theme li"), n = $("#kv .active"), o = function(s) {
            e.stop().fadeOut("fast", function() {
                t.removeClass("money car work son retire").addClass(s), a.removeClass("money car work son retire").addClass(s);
            }).fadeIn("slow");
        };
        s.click(function(e) {
            e.preventDefault();
            var t = $(this).data("class");
            typeTop = $(this).data("top"), typeLeft = $(this).data("left"), $(this).hasClass("active") || (s.removeClass("active"), 
            menuCtrl.chkDevice() ? n.css("top", "0px").stop().animate({
                left: typeLeft
            }, 500) : n.css("left", "0").stop().animate({
                top: typeTop
            }, 500), $(this).addClass("active"), o(t));
        }).eq(0).click(), $(window).resize(function() {
            menuCtrl.chkDevice() ? n.css("top", "0px").css("left", typeLeft) : n.css("top", typeTop).css("left", "0");
        });
    },
    play: function() {
        var e = this, t = 0;
        $("#top .indexPage li:eq(1), .go_formula").click(function(a) {
            a.preventDefault();
            var s = menuCtrl.chkDevice() ? $("#analysis .mb").height() : 0;
            t = menuCtrl.chkDevice() ? e.caloffset("#analysis") + s : $("#kv").height() + $("#top").height(), 
            menuCtrl.scrollPage(t);
        });
    },
    setFunds: function() {
        var e = $("#analysis .btn_wrapper .btn_green"), t = $("#analysis .btn_wrapper .btn_white"), a = function(e) {
            var t = isMobile.phone || isMobile.tablet ? "https://ctbc.tw/TNAG09" : fund_data[fund_index].catch_url, a = isMobile.phone || isMobile.tablet ? "https://ctbc.tw/TMTX01" : fund_data[fund_index].deep_url, s = "catch" == e ? t : a;
            window.open(s, "_blank");
        };
        e.addClass("disable"), t.addClass("disable"), interest_fund.change(function() {
            var a = interest_fund.find(":selected").val();
            radio_fund.find(".fund_select").hide(), radio_fund.find("." + a).show(), 999 != a ? step2.removeClass("hide") : step2.addClass("hide"), 
            step3.addClass("hide"), fund_index = 0, $("input:radio[name=fund_interest]").prop("checked", !1), 
            sliderDiv.slider("value", 36e4), sliderDiv.slider("disable"), e.addClass("disable"), 
            t.addClass("disable");
        }), $("input:radio[name=fund_interest]").change(function() {
            step3.removeClass("hide"), sliderDiv.slider("value", 36e4), fund_index = this.value, 
            base_cost = base_money(36e4, fund_data[fund_index].avg_rate), costContent.text(base_cost), 
            sliderDiv.slider("enable"), e.removeClass("disable"), t.removeClass("disable");
        }), e.click(function(e) {
            e.preventDefault(), $(this).hasClass("disable") || a("deep");
        }), t.click(function(e) {
            e.preventDefault(), $(this).hasClass("disable") || a("catch");
        }), $(".break_even_point, .interest_allocation, .redemption_money, .earn_now").click(function(e) {
            e.preventDefault();
            var t = $(this).attr("href"), a = $(this).data("mb-href"), s = isMobile.phone || isMobile.tablet ? a : t;
            window.open(s, "_blank");
        });
    },
    slider: function() {
        tip.hide(), sliderDiv.slider({
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
            !sliderDiv.hasClass("ui-slider-disabled") && "" != t && t >= 36e4 && t <= 36e5 ? (target_refund = t, 
            sliderDiv.slider("value", t), tip.hide()) : tip.show();
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