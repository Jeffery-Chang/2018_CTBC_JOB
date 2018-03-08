var fundsCtrl = {
    init(){
        // funds 重製導頁到該DIV
        $('#top .indexPage li:eq(1)').click(function(e){
            e.preventDefault();
            trackWaitJump('', 'index.html?from=1');
        });

        // 基金項目展開
        $('#funds_area .f_black').click(function(e){
            e.preventDefault();
            if(!menuCtrl.chkDevice() || $(window).width() >= 400) return;
            $(this).parent('li').toggleClass('show');
            $(this).parent('li').find('.fund_detail').slideToggle();
            $(this).parent('li').find('.t_center').slideToggle();
        });
    }
}

$(function() {
    fundsCtrl.init();
});