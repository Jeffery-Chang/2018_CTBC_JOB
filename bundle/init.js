"use strict";

!function(e) {
    e.preload = function() {
        for (var t = [], a = arguments.length; a--; ) t.push(e("<img />").attr("src", arguments[a]));
    };
}(jQuery);

var typeTop = "20px", typeLeft = "0", interest_fund = $("#analysis .select_wrapper:eq(0)"), select_fund = $("#analysis .select_wrapper:eq(1)"), step2 = $("#analysis .step2"), step3 = $("#analysis .step3"), tip = $("#analysis .step3 .cost font"), radio_fund = $("#analysis .see_fund_interest"), sliderDiv = $("#slider"), base_cost = 0, target_refund = 0, moneyContent = $(".silder_wrapper .cost input"), costContent = $("#analysis .money"), fund_index = 0, fund_rate = 0, base_money = function(e, t) {
    return Math.round(e / (36 * (100 + t) / 100));
}, fund_data = [ {
    avg_rate: 23.36,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=03800004&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=03800004"
}, {
    avg_rate: 22.44,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=03900029&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=03900029"
}, {
    avg_rate: 24.93,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01800023&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01800023"
}, {
    avg_rate: 14.98,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=04100016&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=04100016"
}, {
    avg_rate: 22.97,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00600055&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00600055"
}, {
    avg_rate: 11.39,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00300036&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00300036"
}, {
    avg_rate: 13.49,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01200018&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01200018"
}, {
    avg_rate: 13.37,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00300062&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00300062"
}, {
    avg_rate: 7.72,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00300063&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00300063"
}, {
    avg_rate: 21.78,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01000002&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01000002"
}, {
    avg_rate: 24.25,
    catch_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01300005&fromPage=EDM",
    deep_url: "https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01300005"
} ], indexCtrl = {
    init: function() {
        this.slider(), this.play(), this.pieChart(), this.setFunds(), this.kv(), this.changeBg(), 
        this.fromFunds(), this.playBtn(), $("#kv .slide_bar").fadeIn("slow"), $(window).on("load", function() {
            $.preload("images/theme1_01.jpg", "images/theme1_02.jpg", "images/theme2_01.jpg", "images/theme2_02.jpg", "images/theme3_01.jpg", "images/theme3_02.jpg", "images/theme4_01.jpg", "images/theme4_02.jpg", "images/theme5_01.jpg", "images/theme5_02.jpg", "images/theme1_01_pad.jpg", "images/theme1_02_pad.jpg", "images/theme2_01_pad.jpg", "images/theme2_02_pad.jpg", "images/theme3_01_pad.jpg", "images/theme3_02_pad.jpg", "images/theme4_01_pad.jpg", "images/theme4_02_pad.jpg", "images/theme5_01_pad.jpg", "images/theme5_02_pad.jpg", "images/theme1_01_m.jpg", "images/theme1_02_m.jpg", "images/theme2_01_m.jpg", "images/theme2_02_m.jpg", "images/theme3_01_m.jpg", "images/theme3_02_m.jpg", "images/theme4_01_m.jpg", "images/theme4_02_m.jpg", "images/theme5_01_m.jpg", "images/theme5_02_m.jpg");
        });
    },
    fromFunds: function() {
        var e = $.getUrlParam("from");
        1 == e && null != e && $(".go_formula").click();
    },
    kv: function() {
        var e = $(".slide_bar"), t = $(".kv"), a = $(".content"), s = $(".outer.left"), o = $(window).width(), n = $(window).height(), i = ($("#kv .circle_01").offset().left + $("#kv .circle_01").width()) / o, d = $("#kv .bar").width();
        s.width(o * i), e.css("left", o * i - e.width() / 2 + "px"), a.width(o);
        var r = function(e) {
            s.css("width", e.cw);
        }, _ = function(e) {
            var t = o, a = n;
            return {
                w: t + "px",
                h: a + "px",
                cw: e * t + "px",
                ch: e * a + "px"
            };
        }, c = function(t) {
            var a = _(t);
            e.css("left", t * o - e.width() / 2), l(), r(a);
        }, l = function() {
            var e = $("#kv .circle_01"), t = $("#kv .circle_02"), a = $("#kv .circle_03"), s = $("#kv .circle_04"), n = e.offset().left, d = t.offset().left, r = a.offset().left, _ = s.offset().left;
            o * i > n ? e.addClass("show") : e.removeClass("show"), o * i > d ? t.addClass("show") : t.removeClass("show"), 
            o * i > r ? a.addClass("show") : a.removeClass("show"), o * i > _ ? s.addClass("show") : s.removeClass("show");
        }, p = function(e, t, a) {
            return Math.max(t, Math.min(a, e));
        }, f = function(e, t) {
            return p((e - m) / o, 0, 1);
        }, m = 0, u = 0, h = 0, g = 0, w = function(a) {
            a.distX > a.distY && a.distX < -a.distY || a.distX < a.distY && a.distX > -a.distY ? a.preventDefault() : a.distX < a.distY && a.distX < -a.distY || a.distX > a.distY && (a.distX, 
            a.distY), t.addClass("active"), m = t.offset().left, u = t.offset().top, h = o, 
            g = s.height(), e.hasClass("hideTip") || e.addClass("hideTip");
        }, C = function(e) {
            t.hasClass("active") && (i = f(e.pageX, e.pageY), c(i));
        }, v = function() {
            t.removeClass("active");
        };
        e.on("movestart", w), e.on("move", C), e.on("moveend", v), e.on("touchmove", function(e) {
            e.preventDefault();
        }), $(window).on("resize", function(e) {
            o = $(window).width(), n = $(window).height(), a.width(o), d = $("#kv .bar").width(), 
            c(i);
        });
    },
    changeBg: function() {
        var e = $(".content"), t = $(".content.left"), a = $(".content.right"), s = $("#kv .change_theme li"), o = $("#kv .active"), n = function(s) {
            e.stop().fadeOut("fast", function() {
                t.removeClass("money car work son retire").addClass(s), a.removeClass("money car work son retire").addClass(s);
            }).fadeIn("slow");
        };
        s.click(function(e) {
            e.preventDefault();
            var t = $(this).data("class");
            typeTop = $(this).data("top"), typeLeft = $(this).data("left"), $(this).hasClass("active") || (s.removeClass("active"), 
            menuCtrl.chkDevice() ? o.css("top", "0px").stop().animate({
                left: typeLeft
            }, 500) : o.css("left", "0").stop().animate({
                top: typeTop
            }, 500), $(this).addClass("active"), n(t));
        }).eq(0).click(), $(window).resize(function() {
            menuCtrl.chkDevice() ? o.css("top", "0px").css("left", typeLeft) : o.css("top", typeTop).css("left", "0");
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
            t = menuCtrl.chkDevice() ? e.caloffset("#analysis") + s : $("#kv").height() + $("#top").height(), 
            menuCtrl.scrollPage(t);
        });
    },
    setFunds: function() {
        var e = $("#analysis .btn_wrapper .btn_green"), t = $("#analysis .btn_wrapper .btn_white"), a = function(e) {
            var t = "catch" == e ? fund_data[fund_index].catch_url : fund_data[fund_index].deep_url;
            window.open(t, "_blank");
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