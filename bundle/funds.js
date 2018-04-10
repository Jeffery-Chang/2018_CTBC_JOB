"use strict";

var fundsCtrl = {
    init: function() {
        $("#top .indexPage li:eq(1)").click(function(i) {
            i.preventDefault(), trackWaitJump("", "index.html?from=1");
        }), $("#funds_area .f_black").click(function(i) {
            i.preventDefault(), !menuCtrl.chkDevice() || $(window).width() > 414 || ($(this).parent("li").toggleClass("show"), 
            $(this).parent("li").find(".fund_detail").slideToggle(), $(this).parent("li").find(".t_center").slideToggle());
        });
        var i = $("#funds_area"), e = $("#wrapper .filter .go_left");
        e.change(function() {
            var f = e.find(":selected").val();
            "0" !== f ? (n.find("select").val(0), t.find("select").val(0), i.find(".find_item").hide(), 
            i.find("." + f).show()) : i.find(".find_item").show();
        });
        var n = $("#wrapper .filter .poA");
        n.change(function() {
            var f = n.find(":selected").val();
            "0" !== f ? (e.find("select").val(0), t.find("select").val(0), i.find(".find_item").hide(), 
            i.find("." + f).show()) : i.find(".find_item").show();
        });
        var t = $("#wrapper .filter .go_right");
        t.change(function() {
            var f = t.find(":selected").val();
            "0" !== f ? (e.find("select").val(0), n.find("select").val(0), i.find(".find_item").hide(), 
            i.find("." + f).show()) : i.find(".find_item").show();
        });
    }
};

$(function() {
    fundsCtrl.init();
});