var indexCtrl = {
    init(){
        this.slider();
        this.play();
        this.pieChart();
    },
    play(){
        var btn = $('#top .indexPage li, .go_formula');
        var dis = $('#analysis').offset().top - parseInt($('#analysis').css('padding-top').replace('px', ''));
        btn.click(function(e){
            e.preventDefault();
            menuCtrl.scrollPage(dis);
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
        var leftTop = $('#control .pie1');
        var rightTop = $('#control .pie2');
        var bottom = $('#control .pie3');
        var allPie = $('#control .pie1, #control .pie2, #control .pie3');
        
        /*leftTop.css('transform', 'translate(-50px, -50px)');
        rightTop.css('transform', 'translate(50px, -50px)');
        bottom.css('transform', 'translate(0, 50px)');*/
        
        window.sr = ScrollReveal({
            duration: 0,
            origin: 'left',
            afterReveal: function (domEl) {
                console.log(1);
                leftTop.addClass('show');
                rightTop.addClass('show');
                bottom.addClass('show');
            }
        });
        sr.reveal(target);
    }
}

$(function() {
    indexCtrl.init();
});