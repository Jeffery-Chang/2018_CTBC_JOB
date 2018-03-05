(function(a){"function"==typeof define&&define.amd?define([],a):"undefined"!=typeof module&&null!==module&&module.exports?module.exports=a:a()})(function(){function a(X){return new CustomEvent(X,U)}function b(X){return X[V]||(X[V]={})}function c(X,Y,Z,$){function aa(fa){Z(fa,$)}Y=Y.split(T);for(var da,ea,ba=b(X),ca=Y.length;ca--;)ea=Y[ca],da=ba[ea]||(ba[ea]=[]),da.push([Z,aa]),X.addEventListener(ea,aa)}function d(X,Y,Z){Y=Y.split(T);var ba,ca,da,_=b(X),aa=Y.length;if(_)for(;aa--;)if(ba=Y[aa],ca=_[ba],!!ca)for(da=ca.length;da--;)ca[da][0]===Z&&(X.removeEventListener(ba,ca[da][1]),ca.splice(da,1))}function f(X,Y,Z){var $=a(Y);Z&&N($,Z),X.dispatchEvent($)}function g(X){function Y(){$?(Z(),P(Y),_=!0,$=!1):_=!1}var Z=X,$=!1,_=!1;this.kick=function(){$=!0,_||Y()},this.end=function(aa){var ba=Z;aa&&(_?(Z=$?function(){ba(),aa()}:aa,$=!0):aa())}}function h(){}function j(X){X.preventDefault()}function m(X){return!!Q[X.target.tagName.toLowerCase()]}function n(X){return 1===X.which&&!X.ctrlKey&&!X.altKey}function o(X,Y){var Z,$;if(X.identifiedTouch)return X.identifiedTouch(Y);for(Z=-1,$=X.length;++Z<$;)if(X[Z].identifier===Y)return X[Z]}function p(X,Y){var Z=o(X.changedTouches,Y.identifier);return Z?Z.pageX===Y.pageX&&Z.pageY===Y.pageY?void 0:Z:void 0}function r(X,Y){y(X,Y,X,t)}function s(){t()}function t(){d(document,R.move,r),d(document,R.cancel,s)}function v(X,Y){var Z=p(X,Y);Z&&y(X,Y,Z,x)}function w(X,Y){var Z=o(X.changedTouches,Y.identifier);Z&&x(Y)}function x(X){d(document,S.move,X.touchmove),d(document,S.cancel,X.touchend)}function y(X,Y,Z,$){var _=Z.pageX-Y.pageX,aa=Z.pageY-Y.pageY;_*_+aa*aa<O*O||z(X,Y,Z,_,aa,$)}function z(X,Y,Z,$,_,aa){var ba=X.targetTouches,ca=X.timeStamp-Y.timeStamp,da={altKey:X.altKey,ctrlKey:X.ctrlKey,shiftKey:X.shiftKey,startX:Y.pageX,startY:Y.pageY,distX:$,distY:_,deltaX:$,deltaY:_,pageX:Z.pageX,pageY:Z.pageY,velocityX:$/ca,velocityY:_/ca,identifier:Y.identifier,targetTouches:ba,finger:ba?ba.length:1,enableMove:function(){this.moveEnabled=!0,this.enableMove=h,X.preventDefault()}};f(Y.target,"movestart",da),aa(Y)}function A(X,Y){var Z=Y.timer;Y.touch=X,Y.timeStamp=X.timeStamp,Z.kick()}function B(X,Y){var Z=Y.target,$=Y.event,_=Y.timer;C(),H(Z,$,_,function(){setTimeout(function(){d(Z,"click",j)},0)})}function C(){d(document,R.move,A),d(document,R.end,B)}function D(X,Y){var Z=Y.event,$=Y.timer,_=p(X,Z);_&&(X.preventDefault(),Z.targetTouches=X.targetTouches,Y.touch=_,Y.timeStamp=X.timeStamp,$.kick())}function E(X,Y){var Z=Y.target,$=Y.event,_=Y.timer,aa=o(X.changedTouches,$.identifier);aa&&(F(Y),H(Z,$,_))}function F(X){d(document,S.move,X.activeTouchmove),d(document,S.end,X.activeTouchend)}function G(X,Y,Z){var $=Z-X.timeStamp;X.distX=Y.pageX-X.startX,X.distY=Y.pageY-X.startY,X.deltaX=Y.pageX-X.pageX,X.deltaY=Y.pageY-X.pageY,X.velocityX=0.3*X.velocityX+0.7*X.deltaX/$,X.velocityY=0.3*X.velocityY+0.7*X.deltaY/$,X.pageX=Y.pageX,X.pageY=Y.pageY}function H(X,Y,Z,$){Z.end(function(){return f(X,"moveend",Y),$&&$()})}function J(X){X.enableMove()}function K(X){X.enableMove()}function L(X){X.enableMove()}function M(X){var Y=X.handler;X.handler=function(Z){for(var _,$=W.length;$--;)_=W[$],Z[_]=Z.originalEvent[_];Y.apply(this,arguments)}}var N=Object.assign||window.jQuery&&jQuery.extend,O=8,P=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(X){return window.setTimeout(function(){X()},25)}}();(function(){function X(Y,Z){Z=Z||{bubbles:!1,cancelable:!1,detail:void 0};var $=document.createEvent("CustomEvent");return $.initCustomEvent(Y,Z.bubbles,Z.cancelable,Z.detail),$}return"function"!=typeof window.CustomEvent&&void(X.prototype=window.Event.prototype,window.CustomEvent=X)})();var Q={textarea:!0,input:!0,select:!0,button:!0},R={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},S={move:"touchmove",cancel:"touchend",end:"touchend"},T=/\s+/,U={bubbles:!0,cancelable:!0},V="function"==typeof Symbol?Symbol("events"):{};if(c(document,"mousedown",function(X){!n(X)||m(X)||(c(document,R.move,r,X),c(document,R.cancel,s,X))}),c(document,"touchstart",function(X){if(!Q[X.target.tagName.toLowerCase()]){var Y=X.changedTouches[0],Z={target:Y.target,pageX:Y.pageX,pageY:Y.pageY,identifier:Y.identifier,touchmove:function($,_){v($,_)},touchend:function($,_){w($,_)}};c(document,S.move,Z.touchmove,Z),c(document,S.cancel,Z.touchend,Z)}}),c(document,"movestart",function(X){function Y(){G(Z,$.touch,$.timeStamp),f($.target,"move",Z)}if(!X.defaultPrevented&&X.moveEnabled){var Z={startX:X.startX,startY:X.startY,pageX:X.pageX,pageY:X.pageY,distX:X.distX,distY:X.distY,deltaX:X.deltaX,deltaY:X.deltaY,velocityX:X.velocityX,velocityY:X.velocityY,identifier:X.identifier,targetTouches:X.targetTouches,finger:X.finger},$={target:X.target,event:Z,timer:new g(Y),touch:void 0,timeStamp:X.timeStamp};void 0===X.identifier?(c(X.target,"click",j),c(document,R.move,A,$),c(document,R.end,B,$)):($.activeTouchmove=function(_,aa){D(_,aa)},$.activeTouchend=function(_,aa){E(_,aa)},c(document,S.move,$.activeTouchmove,$),c(document,S.end,$.activeTouchend,$))}}),!!window.jQuery){var W="startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" ");jQuery.event.special.movestart={setup:function(){return c(this,"movestart",J),!1},teardown:function(){return d(this,"movestart",J),!1},add:M},jQuery.event.special.move={setup:function(){return c(this,"movestart",K),!1},teardown:function(){return d(this,"movestart",K),!1},add:M},jQuery.event.special.moveend={setup:function(){return c(this,"movestart",L),!1},teardown:function(){return d(this,"movestart",L),!1},add:M}}});

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