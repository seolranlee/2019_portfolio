
var Sample = (function($){

    var _init = function(){

        _addEvent();
        _setSliders();

    };

    var _onResize = function(){

    };

    var _onScroll = function(){

    };

    var _setSliders = function () {
        $('.slider-1').find('.slider').bxSlider({
            mode: 'fade',
            speed: 500,
            pause: 0,
            easing: 'ease-in-out',
            control: true,
            pager: true,
            auto: false,
            infiniteLoop: true,
            slideWidth: 'auto',
            responsive: true,
            onSliderLoad: function (currentIndex) {
            },
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                $('.slider-1').find('.bx-controls-direction>a').addClass('none-click');
            },
            onSlideAfter: function ($slideElement, oldIndex, newIndex) {
                $('.slider-1').find('.bx-controls-direction>a').removeClass('none-click');
            }
        });
    };

    /*================================================= [ video popup ] =====================================================================*/
    var videoPopupShow = function(){
        $('.video-popup').css('display','block');
        $('.video-popup').animate({'opacity':1},500,'easeInOutQuad',videoPopupShowEnd);

    };
    var videoPopupShowEnd = function(){
        $('.video-popup').prepend('<iframe src="https://players.brightcove.net/2744552145001/HygdHCalag_default/index.html?videoId=5756840736001" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>');
    };
    var videoPopupHide = function(){
        // $( window ).scrollTop( videoFocusTop );
        $('.video-popup').animate({'opacity':0},200,'easeInOutQuad',videoPopupHideEnd);
    };
    var videoPopupHideEnd = function(){
        $('.video-popup').css('display','none').find('iframe').remove();
    };

    var _addEvent = function(){
        $(window).on('resize',_onResize);
        $(window).on('scroll', _onScroll);

        $('.btn-play').on('click',function($e){
            console.log('play');
            $e.preventDefault();
            videoPopupShow();
        });

        $('.video-popup').on('click','.btn-close',function($e){
            $e.preventDefault();
            videoPopupHide();
        });
    };



    return {
        init : _init
    }

})(jQuery);

$(document).ready(function () {
    //console.log('ready');
    var len = $('.comp-con').length;
    var html_str;
    var replaced;

    $('.code').prepend('<span class="code-tit">코드 예제</span>');

    for(var i = 0; i < len; i++){
        html_str = $('.comp-con').eq(i).html();
        replaced = html_str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        $('code.language-html').eq(i).append(replaced);
    }
});

$(window).on('load' , function(){
    Sample.init();
});






