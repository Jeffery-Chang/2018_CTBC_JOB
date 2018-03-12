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
        
        var funds_list = $('#funds_area');
        // 依品牌
        var go_left = $('#wrapper .filter .go_left');
        go_left.change(function(){
            var newval = go_left.find(':selected').val();
            if(newval === '0'){
                funds_list.find('li').show();
                return;
            }
            poA.find('select').val(0);
            go_right.find('select').val(0);
            funds_list.find('li').hide();
            funds_list.find('.'+newval).show();
        });
        
        // 依市場
        var poA = $('#wrapper .filter .poA');
        poA.change(function(){
            var newval = poA.find(':selected').val();
            if(newval === '0'){
                funds_list.find('li').show();
                return;
            }
            go_left.find('select').val(0);
            go_right.find('select').val(0);
            funds_list.find('li').hide();
            funds_list.find('.'+newval).show();
        });
        
        // 依成立時間
        var go_right = $('#wrapper .filter .go_right');
        go_right.change(function(){
            var newval = go_right.find(':selected').val();
            if(newval === '0'){
                funds_list.find('li').show();
                return;
            }
            go_left.find('select').val(0);
            poA.find('select').val(0);
            funds_list.find('li').hide();
            funds_list.find('.'+newval).show();
        });
    }
}

$(function() {
    fundsCtrl.init();
});