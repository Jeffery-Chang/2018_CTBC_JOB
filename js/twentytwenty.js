function change(type){
    $('.content').fadeOut('fast', function(){
        $('.content.left').css('background', 'url(http://cell.webgene.com.tw/technic/Jeffery/images/bg'+type+'.jpg) no-repeat center top').css('backgroundSize', 'cover');
        $('.content.right').css('background', 'url(http://cell.webgene.com.tw/technic/Jeffery/images/bg'+(type+1)+'.jpg) no-repeat center top').css('backgroundSize', 'cover');
    }).delay(200).fadeIn('slow');
};

$(function(){
    var slider = $('.slide_bar');
    var container = $('.kv');
    var mainImg = $('.outer.left');
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var sliderPct = 0.5;
    var sliderOrientation = 'horizontal';

    // init
    mainImg.width(winWidth * sliderPct);
    slider.css('left', ((winWidth * sliderPct) - (slider.width() / 2)) + 'px');
    $('.content').width(winWidth);

    var adjustContainer = function(offset) {
        if (sliderOrientation === 'vertical') {
            mainImg.css("height", offset.ch);
        }
        else {
            mainImg.css("width", offset.cw);
        }
        container.css("height", offset.h);
    };
    var calcOffset = function(dimensionPct) {
        var w = winWidth;
        var h = winHeight;
        return {
            w: w+"px",
            h: h+"px",
            cw: (dimensionPct*w)+"px",
            ch: (dimensionPct*h)+"px"
        };
    };
    var adjustSlider = function(pct) {
        var offset = calcOffset(pct);
        slider.css((sliderOrientation==="vertical") ? "top" : "left", (sliderOrientation==="vertical") ? offset.ch : (pct * winWidth - (slider.width() / 2)));
        adjustContainer(offset);
    };
    // Return the number specified or the min/max number if it outside the range given.
    var minMaxNumber = function(num, min, max) {
        return Math.max(min, Math.min(max, num));
    };
    // Calculate the slider percentage based on the position.
    var getSliderPercentage = function(positionX, positionY) {
        var sliderPercentage = (sliderOrientation === 'vertical') ?
            (positionY-offsetY)/mainImg.height() :
        (positionX-offsetX)/ winWidth;

        console.log('positionX:', positionX, 'offsetX:', offsetX, 'mainImg.width:', winWidth, 'sliderPercentage:', sliderPercentage);

        return minMaxNumber(sliderPercentage, 0, 1);
    };

    var offsetX = 0;
    var offsetY = 0;
    var imgWidth = 0;
    var imgHeight = 0;
    var onMoveStart = function(e) {
        console.log('onMoveStart');
        if (((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) && sliderOrientation !== 'vertical') {
            e.preventDefault();
        }
        else if (((e.distX < e.distY && e.distX < -e.distY) || (e.distX > e.distY && e.distX > -e.distY)) && sliderOrientation === 'vertical') {
            e.preventDefault();
        }
        container.addClass("active");
        offsetX = container.offset().left;
        offsetY = container.offset().top;
        imgWidth = winWidth; 
        imgHeight = mainImg.height();
        //console.log('offsetX:', offsetX, 'offsetY:', offsetY, 'imgWidth:', imgWidth, 'imgHeight:', imgHeight);
    };
    var onMove = function(e) {
        if (container.hasClass("active")) {
            sliderPct = getSliderPercentage(e.pageX, e.pageY);
            adjustSlider(sliderPct);
        }
    };
    var onMoveEnd = function() {
        console.log('onMoveEnd');
        container.removeClass("active");
    };

    var moveTarget = (1 == 1) ? slider : container;
    moveTarget.on("movestart",onMoveStart);
    moveTarget.on("move",onMove);
    moveTarget.on("moveend",onMoveEnd);

    slider.on("touchmove", function(e) {
        e.preventDefault();
    });

    $(window).on("resize", function(e) {
        winWidth = $(window).width();
        winHeight = $(window).height();
        $('.content').width(winWidth);
        adjustSlider(sliderPct);
    });
});