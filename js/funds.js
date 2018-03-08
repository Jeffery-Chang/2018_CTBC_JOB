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
        
        // filter用 (左)
        var go_left = $('#wrapper .filter .go_left');
        go_left.change(function(){
            var newval = go_left.find(':selected').val();
            console.log(newval);
            // 接show哪些基金的段落
        });
        // filter用 (中)
        var poA = $('#wrapper .filter .poA');
        poA.change(function(){
            var newval = poA.find(':selected').val();
            console.log(newval);
            // 接show哪些基金的段落
        });
        // filter用 (右)
        var go_right = $('#wrapper .filter .go_right');
        go_right.change(function(){
            var newval = go_right.find(':selected').val();
            console.log(newval);
            // 接show哪些基金的段落
        });
    }
}

$(function() {
    fundsCtrl.init();
});