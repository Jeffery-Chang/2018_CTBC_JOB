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
            if(!menuCtrl.chkDevice() || $(window).width() > 414) return;
            $(this).parent('li').toggleClass('show');
            $(this).parent('li').find('.fund_detail').slideToggle();
            $(this).parent('li').find('.t_center').slideToggle();
        });

        // 基金ga test
        /*$('#funds_area .t_center .btn').click(function(e){
            e.preventDefault();
        });*/

        var funds_list = $('#funds_area');
        // 依品牌
        var go_left = $('#wrapper .filter .go_left');
        go_left.change(function(){
            var newval = go_left.find(':selected').val();
            if(newval === '0'){
                funds_list.find('.find_item').show();
                return;
            }
            poA.find('select').val(0);
            go_right.find('select').val(0);
            funds_list.find('.find_item').hide();
            funds_list.find('.'+newval).show();
        });

        // 依市場
        var poA = $('#wrapper .filter .poA');
        poA.change(function(){
            var newval = poA.find(':selected').val();
            if(newval === '0'){
                funds_list.find('.find_item').show();
                return;
            }
            go_left.find('select').val(0);
            go_right.find('select').val(0);
            funds_list.find('.find_item').hide();
            funds_list.find('.'+newval).show();
        });

        // 依成立時間
        var go_right = $('#wrapper .filter .go_right');
        go_right.change(function(){
            var newval = go_right.find(':selected').val();
            if(newval === '0'){
                funds_list.find('.find_item').show();
                return;
            }
            go_left.find('select').val(0);
            poA.find('select').val(0);
            funds_list.find('.find_item').hide();
            funds_list.find('.'+newval).show();
        });

        // 觀察
        var observed_m_url = 'https://ctbc.tw/TNAG09';
        $('#funds_area .t_center .observed').click(function(e){
            e.preventDefault();
            var pc_url = $(this).attr('href');
            var m_url = observed_m_url;
            var open_url = (isMobile.phone || isMobile.tablet) ? m_url : pc_url;
            // console.log(open_url);
            window.open(open_url, '_blank');
        });
        // 申購
        var purchase_m_url = 'https://ctbc.tw/TMTX01';
        $('#funds_area .t_center .purchase').click(function(e){
            e.preventDefault();
            var pc_url = $(this).attr('href');
            var m_url = purchase_m_url;
            var open_url = (isMobile.phone || isMobile.tablet) ? m_url : pc_url;
            // console.log(open_url);
            window.open(open_url, '_blank');
        });
    }
}

$(function() {
    fundsCtrl.init();
});