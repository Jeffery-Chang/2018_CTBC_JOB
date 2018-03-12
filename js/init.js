var typeTop = '20px';
var typeLeft = '0';
var indexCtrl = {
    init(){
        this.slider();
        this.play();
        this.pieChart();
        this.showAnswer();
        this.setFunds();
        this.kv();
        this.changeBg();
        this.fromFunds();
        this.playBtn();
        
        // 跟背景一起出現
        $('#kv .slide_bar').delay(200).fadeIn('fast');
        
        // 立即投資
        $('#weapon .btn_green').click(function(e){
            e.preventDefault();
            window.open('https://www.ctbcbank.com/CTCBPortalWeb/appmanager/ebank/rb?_nfpb=true&_pageLabel=TW_RB_TX_mfund_300014&_windowLabel=T16806467151337672757923&_nffvid=%2FCTCBPortalWeb%2Fpages%2Fmf%2FmfIrRegularApply%2FmfIrRegularApplyStart.faces&firstView=true', '_blank');
        });
        // 立即開戶
        $('#weapon .btn_orange').click(function(e){
            e.preventDefault();
            window.open('http://www.ctbcbank.com/html/fileUpload/homebank/openacc.html', '_blank');
        });
    },
    fromFunds(){
        var from = $.getUrlParam('from');
        if(from == 1 && from != null) $('.go_formula').click();
    },
    kv(){
        var slider = $('.slide_bar'); //拉bar
        var container = $('.kv'); // 最外層
        var imgContainer = $('.content'); //放圖片的div外層
        var mainImg = $('.outer.left'); //放圖片的div
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var sliderPct = 0.5;
        var sliderOrientation = 'horizontal';
        var barWidth = $('#kv .bar').width();

        // init
        mainImg.width(winWidth * sliderPct);
        slider.css('left', ((winWidth * sliderPct) - (slider.width() / 2)) + 'px');
        imgContainer.width(winWidth);

        var adjustContainer = function(offset){
            mainImg.css("width", offset.cw);
            container.css("height", offset.h);
        };
        var calcOffset = function(dimensionPct){
            var w = winWidth;
            var h = winHeight;
            return {
                w: w+"px",
                h: h+"px",
                cw: (dimensionPct*w)+"px",
                ch: (dimensionPct*h)+"px"
            };
        };
        var adjustSlider = function(pct){
            var offset = calcOffset(pct);
            slider.css('left', (pct * winWidth - (slider.width() / 2)));
            adjustDots();
            adjustContainer(offset);
        };
        var adjustDots = function(){
            var obj1 = $('#kv .circle_01');
            var obj2 = $('#kv .circle_02');
            var obj3 = $('#kv .circle_03');
            var obj4 = $('#kv .circle_04');
            var dots1 = obj1.offset().left;
            var dots2 = obj2.offset().left;
            var dots3 = obj3.offset().left;
            var dots4 = obj4.offset().left;
            
            (winWidth * sliderPct > dots1) ? obj1.addClass('show') : obj1.removeClass('show') ;
            (winWidth * sliderPct > dots2) ? obj2.addClass('show') : obj2.removeClass('show') ;
            (winWidth * sliderPct > dots3) ? obj3.addClass('show') : obj3.removeClass('show') ;
            (winWidth * sliderPct > dots4) ? obj4.addClass('show') : obj4.removeClass('show') ;
        }

        var minMaxNumber = function(num, min, max){
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

        var onMoveStart = function(e){
            if (((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) && sliderOrientation !== 'vertical'){
                e.preventDefault();
            }else if(((e.distX < e.distY && e.distX < -e.distY) || (e.distX > e.distY && e.distX > -e.distY)) && sliderOrientation === 'vertical'){
                e.preventDefault();
            }

            container.addClass("active");
            offsetX = container.offset().left;
            offsetY = container.offset().top;
            imgWidth = winWidth; 
            imgHeight = mainImg.height();
        };
        var onMove = function(e){
            if (container.hasClass("active")) {
                sliderPct = getSliderPercentage(e.pageX, e.pageY);
                adjustSlider(sliderPct);
            }
        };
        var onMoveEnd = function(){
            container.removeClass("active");
        };

        slider.on("movestart",onMoveStart);
        slider.on("move",onMove);
        slider.on("moveend",onMoveEnd);

        slider.on("touchmove", function(e){
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
    changeBg(){
        var outer = $('.content');
        var left = $('.content.left');
        var right = $('.content.right');
        var btn = $('#kv .change_theme li');
        var active = $('#kv .active');

        var change = function(index){
            outer.fadeOut('normal', function(){
                left.css('background', 'url(images/theme'+index+'_01.jpg) no-repeat center top').css('backgroundSize', 'cover');
                right.css('background', 'url(images/theme'+index+'_02.jpg) no-repeat center top').css('backgroundSize', 'cover');
            }).delay(200).fadeIn('fast');
        };
        
        btn.click(function(e){
            e.preventDefault();
            var index = $(this).index();
            typeTop = $(this).data('top');
            typeLeft = $(this).data('left');
            
            if($(this).hasClass('active')) return;
            
            btn.removeClass('active');
            
            if(menuCtrl.chkDevice()){
                active.css('top', '0px');
                active.stop().animate({ left: typeLeft }, 500);
            }else{
                active.css('left', '0');
                active.stop().animate({ top: typeTop }, 500);
            }
            
            $(this).addClass('active');
            
            change(index);
        }).eq(0).click();
        
        $(window).resize(function(){
            if(menuCtrl.chkDevice()){
                active.css('top', '0px');
                active.css('left', typeLeft);
            }else{
                active.css('top', typeTop);
                active.css('left', '0');
            }
        });
        
        //要預留手機圖路徑圖參數
    },
    playBtn(){
        var btn = $('.go_formula');
        ($(window).scrollTop() > 90) ? btn.addClass('show') : btn.removeClass('show');
        $(window).scroll(function(){
            ($(window).scrollTop() > 90) ? btn.addClass('show') : btn.removeClass('show');
        });
    },
    play(){
        var $this = this;
        var btn = $('#top .indexPage li:eq(1), .go_formula');
        var dis = 0;
        btn.click(function(e){
            e.preventDefault();
            var adjustDis = (menuCtrl.chkDevice()) ? $('#analysis .mb').height() : 0;
            dis = $this.caloffset('#analysis') + adjustDis;
            menuCtrl.scrollPage(dis);
        });
    },
    setFunds(){
        var selector = $('#analysis .select_wrapper');
        selector.change(function(){
            var newval = selector.find(':selected').val();
            $('#result .inline li.find_item').hide();
            $('.'+newval).show();
        }).change();
    },
    showAnswer(){
        var $this = this;
        var btn = $('#analysis .btn_wrapper .btn_green');
        var btn2 = $('#analysis .btn_wrapper .btn_white');
        var part1Dis = 0;
        
        // 立即解析/重新解析
        btn.click(function(e){
            e.preventDefault();
            var adjustDis = (menuCtrl.chkDevice()) ? $('#analysis .mb').height() : 0;
            if(btn.hasClass('show')){
                part1Dis = $this.caloffset('#analysis') + adjustDis;
                menuCtrl.scrollPage(part1Dis);
                $('#result').delay(300).slideUp({
                    duration: 500,
                    complete: function(){
                        btn.removeClass('show');
                    }
                });
                return;
            }

            $('#result').slideDown({
                duration: 750,
                complete: function(){
                    btn.addClass('show');
                    var part2Dis = $this.caloffset('#result') + adjustDis;
                    menuCtrl.scrollPage(part2Dis);
                }
            });
        });
        
        // 高勝率基金大公開
        btn2.click(function(e){
            e.preventDefault();
            trackWaitJump('', 'fund_list.html');
        });
    },
    slider(){
        var sliderDiv = $('#slider');
        var moneyContent = $('.silder_wrapper font');
        sliderDiv.slider({
            range: "min",     
            value: 15000,
            min: 0,
            max: 30000,
            step: 1,
            create: function() {
                moneyContent.text($(this).slider('value'));
            },
            slide: function( event, ui ) {
                moneyContent.text(ui.value);
            },
            change: function(event, ui) {
                moneyContent.text(ui.value);
            }
        });
    },
    pieChart(){
        var target = $('#control .go_right');
        var allPie = $('#control .pie1, #control .pie2, #control .pie3');
        window.sr = ScrollReveal({
            duration: 0,
            origin: 'left',
            afterReveal: function(domEl){
                $.each(allPie, function(index, obj){
                    $(obj).addClass('instage');
                })
            }
        });
        sr.reveal(target);
    },
    caloffset(selector){
        var dis = 0;
        dis = $(selector).offset().top - parseInt($(selector).css('padding-top').replace('px', ''));
        return dis; 
    }
}

$(function() {
    indexCtrl.init();
});