(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

var menuCtrl = {
    init(){
        this.menuBar();
        
        // M版注意事項
        $('#attention .f19').click(function(e){
            e.preventDefault();
            $(this).toggleClass('show');
            $('#attention .f13').slideToggle();
        });
    },
    menuBar(){
        var menu = $('#top .indexPage');
        var burger = $('#menuToggle');
        
        burger.click(function(e){
            e.preventDefault();
            $(this).toggleClass('show');
            menu.toggleClass('show');
        });
        
        menu.find('li').click(function(e){
            e.preventDefault();
            var index = $(this).index();
            var active = $(this).hasClass('active');

            if(active) return;

            switch(index){
                case 0:
                    trackWaitJump('', 'index.html');
                    break;
                case 1:
                    burger.removeClass('show');
                    menu.removeClass('show');
                    break;
                case 2:
                    trackWaitJump('', 'fund_list.html');
                    break;
                case 3:
                    window.open('http://www.ctbcbank.com/html/fileUpload/homebank/', '_blank');
                    break;
            }
        });
    },
    scrollPage(pos){
        var final = pos || 0;
        $('html, body').stop().animate({ scrollTop: final }, 500);
    },
    chkDevice: function(){
        var chk_fg = false;
        if(isMobile.phone || $(window).width() < 769){
            chk_fg = true;
        }
        return chk_fg;
    }
}

$(function() {
    menuCtrl.init();
});