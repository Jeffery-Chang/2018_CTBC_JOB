"use strict";

var fundsCtrl = {
    init: function() {
        $("#top .indexPage li:eq(1)").click(function(e) {
            e.preventDefault(), trackWaitJump("", "index.html?from=1");
        }), $("#funds_area .f_black").click(function(e) {
            e.preventDefault(), !menuCtrl.chkDevice() || $(window).width() > 414 || ($(this).parent("li").toggleClass("show"), 
            $(this).parent("li").find(".fund_detail").slideToggle(), $(this).parent("li").find(".t_center").slideToggle());
        });
        var e = $("#funds_area"), i = $("#wrapper .filter .go_left");
        i.change(function() {
            var f = i.find(":selected").val();
            "0" !== f ? (t.find("select").val(0), n.find("select").val(0), e.find(".find_item").hide(), 
            e.find("." + f).show()) : e.find(".find_item").show();
        });
        var t = $("#wrapper .filter .poA");
        t.change(function() {
            var f = t.find(":selected").val();
            "0" !== f ? (i.find("select").val(0), n.find("select").val(0), e.find(".find_item").hide(), 
            e.find("." + f).show()) : e.find(".find_item").show();
        });
        var n = $("#wrapper .filter .go_right");
        n.change(function() {
            var f = n.find(":selected").val();
            "0" !== f ? (i.find("select").val(0), t.find("select").val(0), e.find(".find_item").hide(), 
            e.find("." + f).show()) : e.find(".find_item").show();
        });
        $("#funds_area .t_center .observed").click(function(e) {
            e.preventDefault();
            var i = $(this).attr("href"), t = isMobile.phone || isMobile.tablet ? "https://ctbc.tw/TNAG09" : i;
            window.open(t, "_blank");
        });
        $("#funds_area .t_center .purchase").click(function(e) {
            e.preventDefault();
            var i = $(this).attr("href"), t = isMobile.phone || isMobile.tablet ? "https://ctbc.tw/TMTX01" : i;
            window.open(t, "_blank");
        });
    }
};

$(function() {
    fundsCtrl.init();
});