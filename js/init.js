(function(a) { a.preload = function() { var c = [], b = arguments.length; for (; b--;) { c.push(a("<img />").attr("src", arguments[b])); } }; })(jQuery);
var typeTop = '20px';
var typeLeft = '0';
var interest_fund = $('#analysis .select_wrapper:eq(0)');
var select_fund = $('#analysis .select_wrapper:eq(1)');
var step2 = $('#analysis .step2');
var step3 = $('#analysis .step3');
var tip = $('#analysis .step3 .cost font');
var radio_fund = $('#analysis .see_fund_interest');
var show_btn_fg = false; // 立即試算 flag
var play_btn = $('.go_formula'); // 立即試算按鈕
var playBtn = function() { // 立即試算 SHOW / HIDE
    ($(window).scrollTop() > 90 || show_btn_fg) ? play_btn.addClass('show'): play_btn.removeClass('show');
};
var sliderDiv = $('#slider'); // slider bar
var base_cost = 0; // 每月投資的錢
var target_refund = 0; // 目標
var moneyContent = $('.silder_wrapper .cost input'); // 輸入金額
var costContent = $('#analysis .money'); // 投資金額
var fund_index = 0; // 哪個基金
var fund_rate = 0; // 基金%
var base_money = function(target, rate) {
    // return Math.round(target / (36 * (100 + rate) / 100));
    return Math.round(target / rate);
};
var fund_data = [
    {
        //"avg_rate": 23.36,
        "avg_rate": 40.67,
        "catch_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=03800004&fromPage=EDM',
        "deep_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=03800004'
    },
    {
        //"avg_rate": 22.44,
        "avg_rate": 40.47,
        "catch_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=03900029&fromPage=EDM',
        "deep_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=03900029'
    },
    {
        //"avg_rate": 24.93,
        "avg_rate": 41.01,
        "catch_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01800023&fromPage=EDM',
        "deep_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01800023'
    },
    {
        //"avg_rate": 14.98,
        "avg_rate": 38.91,
        "catch_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=04100016&fromPage=EDM',
        "deep_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=04100016'
    },
    {
        //"avg_rate": 22.97,
        "avg_rate": 40.58,
        "catch_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00600055&fromPage=EDM',
        "deep_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00600055'
    },
    {
        //"avg_rate": 11.39,
        "avg_rate": 38.19,
        "catch_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00300036&fromPage=EDM',
        "deep_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00300036'
    },
    {
        //"avg_rate": 13.49,
        "avg_rate": 38.61,
        "catch_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01200018&fromPage=EDM',
        "deep_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01200018'
    },
    {
        //"avg_rate": 13.37,
        "avg_rate": 38.58,
        "catch_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00300062&fromPage=EDM',
        "deep_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00300062'
    },
    {
        //"avg_rate": 7.72,
        "avg_rate": 37.46,
        "catch_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=00300063&fromPage=EDM',
        "deep_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=00300063'
    },
    {
        //"avg_rate": 21.78,
        "avg_rate": 40.33,
        "catch_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01000002&fromPage=EDM',
        "deep_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01000002'
    },
    {
        //"avg_rate": 24.25,
        "avg_rate": 40.86,
        "catch_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_CM_mfund_034001&prodType=1&prodNo=01300005&fromPage=EDM',
        "deep_url": 'https://www.ctbcbank.com/CTCBPortalWeb/toPage?id=TW_RB_TX_mfund_300013&fundCode=01300005'
    }
];
var indexCtrl = {
    init() {
        this.slider();
        this.play();
        this.pieChart();
        //this.showAnswer();
        this.setFunds();
        this.kv();
        this.changeBg();
        this.fromFunds();
        playBtn();

        // 跟背景一起出現
        $('#kv .slide_bar').fadeIn('slow');

        // 高勝率基金大公開
        /*$('#analysis .btn_wrapper .btn_white').click(function(e) {
            e.preventDefault();
            trackWaitJump('', 'fund_list.html');
        });*/

        $(window).on('load', function() {
            $.preload(
                'images/theme1_01.jpg',
                'images/theme1_02.jpg',
                'images/theme2_01.jpg',
                'images/theme2_02.jpg',
                'images/theme3_01.jpg',
                'images/theme3_02.jpg',
                'images/theme4_01.jpg',
                'images/theme4_02.jpg',
                'images/theme5_01.jpg',
                'images/theme5_02.jpg',
                'images/theme1_01_pad.jpg',
                'images/theme1_02_pad.jpg',
                'images/theme2_01_pad.jpg',
                'images/theme2_02_pad.jpg',
                'images/theme3_01_pad.jpg',
                'images/theme3_02_pad.jpg',
                'images/theme4_01_pad.jpg',
                'images/theme4_02_pad.jpg',
                'images/theme5_01_pad.jpg',
                'images/theme5_02_pad.jpg',
                'images/theme1_01_m.jpg',
                'images/theme1_02_m.jpg',
                'images/theme2_01_m.jpg',
                'images/theme2_02_m.jpg',
                'images/theme3_01_m.jpg',
                'images/theme3_02_m.jpg',
                'images/theme4_01_m.jpg',
                'images/theme4_02_m.jpg',
                'images/theme5_01_m.jpg',
                'images/theme5_02_m.jpg'
            );
        }).scroll(function() {
            playBtn();
        });
    },
    fromFunds() {
        var from = $.getUrlParam('from');
        if (from == 1 && from != null) $('.go_formula').click();
    },
    kv() {
        var slider = $('.slide_bar'); //拉bar
        var container = $('.kv'); // 最外層
        var imgContainer = $('.content'); //放圖片的div外層
        var mainImg = $('.outer.left'); //放圖片的div
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var sliderPct = ($('#kv .circle_01').offset().left + $('#kv .circle_01').width()) / winWidth;
        var sliderOrientation = 'horizontal';
        var barWidth = $('#kv .bar').width();

        // init
        mainImg.width(winWidth * sliderPct);
        slider.css('left', ((winWidth * sliderPct) - (slider.width() / 2)) + 'px');
        imgContainer.width(winWidth);

        var adjustContainer = function(offset) {
            mainImg.css("width", offset.cw);
            //container.css("height", offset.h);
        };
        var calcOffset = function(dimensionPct) {
            var w = winWidth;
            var h = winHeight;
            return {
                w: w + "px",
                h: h + "px",
                cw: (dimensionPct * w) + "px",
                ch: (dimensionPct * h) + "px"
            };
        };
        var adjustSlider = function(pct) {
            var offset = calcOffset(pct);
            slider.css('left', (pct * winWidth - (slider.width() / 2)));
            adjustDots();
            adjustContainer(offset);
        };
        var adjustDots = function() {
            var obj1 = $('#kv .circle_01');
            var obj2 = $('#kv .circle_02');
            var obj3 = $('#kv .circle_03');
            var obj4 = $('#kv .circle_04');
            var dots1 = obj1.offset().left;
            var dots2 = obj2.offset().left;
            var dots3 = obj3.offset().left;
            var dots4 = obj4.offset().left;

            (winWidth * sliderPct > dots1) ? obj1.addClass('show'): obj1.removeClass('show');
            (winWidth * sliderPct > dots2) ? obj2.addClass('show'): obj2.removeClass('show');
            (winWidth * sliderPct > dots3) ? obj3.addClass('show'): obj3.removeClass('show');
            (winWidth * sliderPct > dots4) ? obj4.addClass('show'): obj4.removeClass('show');
            (obj4.hasClass('show')) ? show_btn_fg = true : show_btn_fg = false;
            playBtn();
        };

        var minMaxNumber = function(num, min, max) {
            return Math.max(min, Math.min(max, num));
        };

        var getSliderPercentage = function(positionX, positionY) {
            var sliderPercentage = (positionX - offsetX) / winWidth;
            //console.log('positionX:', positionX, 'offsetX:', offsetX, 'mainImg.width:', winWidth, 'sliderPercentage:', sliderPercentage);
            return minMaxNumber(sliderPercentage, 0, 1);
        };

        var offsetX = 0;
        var offsetY = 0;
        var imgWidth = 0;
        var imgHeight = 0;

        var onMoveStart = function(e) {
            if (((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) && sliderOrientation !== 'vertical') {
                e.preventDefault();
            } else if (((e.distX < e.distY && e.distX < -e.distY) || (e.distX > e.distY && e.distX > -e.distY)) && sliderOrientation === 'vertical') {
                e.preventDefault();
            }

            container.addClass("active");
            offsetX = container.offset().left;
            offsetY = container.offset().top;
            imgWidth = winWidth;
            imgHeight = mainImg.height();
            if (!slider.hasClass('hideTip')) slider.addClass('hideTip');
        };
        var onMove = function(e) {
            if (container.hasClass("active")) {
                sliderPct = getSliderPercentage(e.pageX, e.pageY);
                adjustSlider(sliderPct);
            }
        };
        var onMoveEnd = function() {
            container.removeClass("active");
        };

        slider.on("movestart", onMoveStart);
        slider.on("move", onMove);
        slider.on("moveend", onMoveEnd);

        slider.on("touchmove", function(e) {
            e.preventDefault();
        });

        $(window).on("resize", function(e) {
            winWidth = $(window).width();
            winHeight = $(window).height();
            imgContainer.width(winWidth);
            barWidth = $('#kv .bar').width();
            adjustSlider(sliderPct);
        });
    },
    changeBg() {
        var outer = $('.content');
        var left = $('.content.left');
        var right = $('.content.right');
        var btn = $('#kv .change_theme li');
        var active = $('#kv .active');

        var change = function(bgClass) {
            outer.stop().fadeOut('fast', function() {
                left.removeClass('money car work son retire').addClass(bgClass);
                right.removeClass('money car work son retire').addClass(bgClass);
                /*left.css('background', 'url(images/theme'+index+'_01.jpg) no-repeat center top').css('backgroundSize', 'cover');
                right.css('background', 'url(images/theme'+index+'_02.jpg) no-repeat center top').css('backgroundSize', 'cover');*/
            }).fadeIn('slow');
        };

        btn.click(function(e) {
            e.preventDefault();
            var bgClass = $(this).data('class');
            typeTop = $(this).data('top');
            typeLeft = $(this).data('left');

            if ($(this).hasClass('active')) return;

            btn.removeClass('active');

            if (menuCtrl.chkDevice()) {
                active.css('top', '0px').stop().animate({ left: typeLeft }, 500);
            } else {
                active.css('left', '0').stop().animate({ top: typeTop }, 500);
            }

            $(this).addClass('active');

            change(bgClass);
        }).eq(0).click();

        $(window).resize(function() {
            if (menuCtrl.chkDevice()) {
                active.css('top', '0px').css('left', typeLeft);
            } else {
                active.css('top', typeTop).css('left', '0');
            }
        });

        //要預留手機圖路徑圖參數
    },
    play() {
        var $this = this;
        var btn = $('#top .indexPage li:eq(1), .go_formula');
        var dis = 0;
        btn.click(function(e) {
            e.preventDefault();
            var adjustDis = (menuCtrl.chkDevice()) ? $('#analysis .mb').height() : 0;
            dis = (menuCtrl.chkDevice()) ? $this.caloffset('#analysis') + adjustDis : $('#kv').height() + $('#top').height();
            menuCtrl.scrollPage(dis);
        });
    },
    setFunds() {
        var catch_btn = $('#analysis .btn_wrapper .btn_green');
        var deep_btn = $('#analysis .btn_wrapper .btn_white');
        var set_url = function(type){
            var catch_url = (isMobile.phone || isMobile.tablet) ? 'https://ctbc.tw/TNAG09' : fund_data[fund_index].catch_url;
            var deep_url = (isMobile.phone || isMobile.tablet) ? 'https://ctbc.tw/TMTX01' : fund_data[fund_index].deep_url;
            var open_url = (type == 'catch') ? catch_url : deep_url;
            window.open(open_url, '_blank');
        };

        catch_btn.addClass('disable');
        deep_btn.addClass('disable');

        // 基金選類別下拉
        interest_fund.change(function() {
            var newval = interest_fund.find(':selected').val();

            radio_fund.find('.fund_select').hide();
            radio_fund.find('.' + newval).show();

            (newval != 999) ? step2.removeClass('hide'): step2.addClass('hide');
            step3.addClass('hide');

            fund_index = 0;
            $('input:radio[name=fund_interest]').prop('checked', false);

            sliderDiv.slider('value', 360000);
            sliderDiv.slider("disable");
            catch_btn.addClass('disable');
            deep_btn.addClass('disable');
        });

        // 選基金radio
        $('input:radio[name=fund_interest]').change(function() {
            step3.removeClass('hide');
            sliderDiv.slider('value', 360000);
            fund_index = this.value;
            base_cost = base_money(360000, fund_data[fund_index].avg_rate);
            costContent.text(base_cost);
            sliderDiv.slider("enable");
            catch_btn.removeClass('disable');
            deep_btn.removeClass('disable');
        });

        // 立即掌握 >> deep_url
        // 連結埋反了
        catch_btn.click(function(e){
            e.preventDefault();
            if(!$(this).hasClass('disable')) set_url('deep');
        });

        // 深入觀察 >> catch_url
        deep_btn.click(function(e){
            e.preventDefault();
            if(!$(this).hasClass('disable')) set_url('catch');
        });
        
        // 損益點通知 配息款入帳通知 贖回款入帳通知 立即投資
        $('.break_even_point, .interest_allocation, .redemption_money, .earn_now').click(function(e){
            e.preventDefault();
            var pc_url = $(this).attr('href');
            var m_url = $(this).data('mb-href');
            var open_url = (isMobile.phone || isMobile.tablet) ? m_url : pc_url;
            //console.log(open_url);
            window.open(open_url, '_blank');
        });
    },
    /* 用不到了
    showAnswer() {

        var $this = this;
        var btn = $('#analysis .btn_wrapper .btn_green');
        var btn2 = $('#analysis .btn_wrapper .btn_white');
        var ans = $('#analysis .analysis_result');

        // 立即解析/重新解析
        btn.click((e) => {
            e.preventDefault();
            if (interest_fund.find(':selected').val() == 999) {
                alert('請選擇興趣');
                return;
            }
            if (select_fund.find(':selected').val() == 999) {
                alert('請選擇基金');
                return;
            }
            if (sliderDiv.slider('value') == 0) {
                alert('請選擇希望達成目標');
                return;
            }

            var adjustDis = 0;
            var part1Dis = 0;

            if (btn.hasClass('show')) {
                adjustDis = (menuCtrl.chkDevice()) ? $('#analysis .mb').height() : 0;
                part1Dis = $this.caloffset('#analysis') + adjustDis;
                ans.slideUp({
                    duration: 750,
                    complete: function() {
                        btn.removeClass('show');
                        interest_fund.find('select').val(999);
                        select_fund.find('select').val(999);
                        select_fund.parents('li').hide();
                        sliderDiv.slider('value', 0);
                        menuCtrl.scrollPage(part1Dis);
                    }
                });
                return;
            }

            ans.slideDown({
                duration: 750,
                complete: () => {
                    btn.addClass('show');
                }
            });
        });

        // 高勝率基金大公開
        btn2.click(function(e) {
            e.preventDefault();
            trackWaitJump('', 'fund_list.html');
        });
    }, */
    slider() {
        tip.hide();
        sliderDiv.slider({
            range: "min",
            value: target_refund,
            min: 360000,
            max: 3600000,
            step: 1,
            create: function() {
                moneyContent.val($(this).slider('value'));
                target_refund = $(this).slider('value');
                base_cost = base_money(target_refund, fund_data[fund_index].avg_rate);
                costContent.text(base_cost);
            },
            /*slide: function(event, ui) {
                moneyContent.text(ui.value);
                target_refund = $(this).slider('value');
                base_cost = base_money(target_refund, fund_data[fund_index].avg_rate);
                costContent.text(base_cost);
            },*/
            change: function(event, ui) {
                moneyContent.val(ui.value);
                target_refund = $(this).slider('value');
                base_cost = base_money(target_refund, fund_data[fund_index].avg_rate);
                costContent.text(base_cost);
            }
        });
        moneyContent.keyup(function(e){
            var newVal = $(this).val();
            if(!sliderDiv.hasClass('ui-slider-disabled') && newVal != '' && newVal >= 360000 && newVal <= 3600000){
                target_refund = newVal;
                sliderDiv.slider('value', newVal);
                tip.hide();
            }else{
                tip.show();
            }
        });
        sliderDiv.slider("disable");
    },
    pieChart() {
        var target = $('#control .go_right');
        var allPie = $('#control .pie1, #control .pie2, #control .pie3');
        window.sr = ScrollReveal({
            duration: 0,
            origin: 'left',
            afterReveal: function(domEl) {
                $.each(allPie, function(index, obj) {
                    $(obj).addClass('instage');
                })
            }
        });
        sr.reveal(target);
    },
    caloffset(selector) {
        var dis = 0;
        var obj = $(selector);
        var objPadding = parseInt(obj.css('padding-top').replace('px', '')) || 0;
        dis = obj.offset().top - objPadding;
        return dis;
    }
}

$(function() {
    indexCtrl.init();
});