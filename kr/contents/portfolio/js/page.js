var Page = (function() {
    var winW, winH, scrollTop, scrollBottom, scrollLeft, secFullH, secFullLimitH;
    var seckv = $('#section-kv'),
        sec1 = $('#section-1');
    var topH;

    var seckvH;

    // 반응형 디바이스 타입
    var oldDeviceType;
    var currentDeviceType;

    // bxSlider

    // video
    var vid = $('video');
    var isVidPlay = [];
    var checkReadyState_Timer = [];
    var checkReadyState_Timer_Count = [];
    var TIMERMAX_CALL = 10;


    var kvVideoEnd = false;

    // custom_slider
    var cumstomSlider = function() {
        this.index = 0;
        this.isStart = false;
        this.interval = function(){};
        this.isOnce = false;
        this.time = 0
    };
    var cumstomSliderStart = function (target, slider, length, t1, t2, trigger, loop) {
        var length = length - 1;
        if(!slider.isStart){
            slider.isStart = true;
            target.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(){
                target.removeClass('on').removeClass('active');
                removeClass( target, 'on' );
                removeClass( target, 'active' );
                target.eq(slider.index).addClass('on');
                // slider.index = slider.index == length ? 0 : slider.index+1;
                if(loop === true && slider.index == length){
                    slider.index = 0
                }else{
                    slider.index+=1;
                }
                slider.time = slider.index == 0 ? t1 : t2;
                slider.interval = setTimeout(function(){
                    target.eq(slider.index).addClass('active');
                },slider.time);

            });
            if(trigger) target.eq(slider.index).addClass('active');

        }
    };
    var cumstomSliderReset = function(target, slider){
        slider.index = 0;
        slider.isStart = false;
        slider.isOnce = false;
        clearTimeout(slider.interval);
        target.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
        removeClass( target, 'on' );
        removeClass( target, 'active' );
    };

    // boolean
    var isHigherSecKv = true;

    /*=========================================================== [ sec kv ] =======================================================================*/


    var seckv_init = function(){
        seckv.find('.vertical-mid-con').addClass('onTrans');
        seckv.find('.scroll-holder').addClass('onTrans');
    };
    var seckv_resize = function() {
    };

    var seckv_scroll = function() {
        if(scrollBottom > sec1.offset().top){
            seckv.find('.scroll-holder').addClass('onHide');
        }else{
            seckv.find('.scroll-holder').removeClass('onHide');
        }

    };



    /*=========================================================== [ sec1 ] =======================================================================*/

    var sec1_resize = function() {

    };

    var sec1_scroll = function() {
    };

    /*=========================================================== [ slider ] =======================================================================*/

    var slider_init  = function(){

    };

    /*=========================================================== [ video ] =======================================================================*/

    function changeVideoSource(video,url,play) {
        var videoSource = $(video).find('source');
        videoSource.eq(0).attr('src', './video/' + url + '.webm');
        videoSource.eq(1).attr('src', './video/' + url + '.mp4');
        video.load();
        if(play === true) video.play();
    }

    /*=========================================================== [ video ] =======================================================================*/

    function video_init(){
        for(var i=0; i<vid.length; i++){
            isVidPlay.push(false);
            checkReadyState_Timer.push(0);
            checkReadyState_Timer_Count.push(0);
        }
    }

    function checkPlay($idx){
        if( vid[$idx].readyState !== 0 || vid[$idx].readyState !== 4){
            isVidPlay[$idx] = true;
            checkReadyState_Timer_Count[$idx] = 0;
            clearInterval(checkReadyState_Timer[$idx]);
            //play
            vid[$idx].play();
            vid[$idx].loop = false;

        }else{
            if( checkReadyState_Timer_Count[$idx] < TIMERMAX_CALL ){
                checkReadyState_Timer[$idx] = setInterval(function(){
                    checkReadyState_Timer_Count[$idx] += 1;
                    //재귀
                    checkPlay($idx);
                    // 플레이가 안될 때의 처리
                    // alert($idx + '가 안된다')

                }, 100);
            }
        }
    }

    function playVid($idx){

        if(vid[$idx] && !isVidPlay[$idx] ){
            checkPlay($idx);
            isVidPlay[$idx] = true;
        }
    }

    function stopVid($idx){
        if(vid[$idx] && isVidPlay[$idx] ){
            isVidPlay[$idx] = false;
            vid[$idx].pause();
            vid[$idx].currentTime = 0;
        }
    }

    /*=========================================================== [ removeClass ] =======================================================================*/

    function removeClass( target, className ){
        target.addClass('noTransition');
        target[0].offsetHeight;
        target.removeClass('noTransition');
        target.removeClass(className);
    }



    /*=========================================================== [ addevent ] =======================================================================*/
    var checkResponsiveType = function(){
        winW = (window.innerWidth || document.documentElement.clientWidth);
        oldDeviceType = currentDeviceType;

        if(winW < 767.3){
            currentDeviceType = 'mobile';
        }else {
            currentDeviceType = 'pc';
        }
    };

    var addEvent = function(){
        $(window).on('resize',onResize);
        $(window).on('scroll',onScroll);
        onResize();
        seckv.find('.cols-4 a').on('mouseenter', function () {
            $(this).find('.flip-wrap .flip').css({'transform': 'translateY(' + (-50) + '%)'});
        });

        seckv.find('.cols-4 a').on('mouseleave', function () {
            $(this).find('.flip-wrap .flip').css({'transform': 'translateY(' + 0 + '%)'});
        });

        sec1.find('.cols-container .img-wrap-cols a').on('mouseenter', function () {
            // alert('test')
            $(this).parents('.img-wrap-cols').next('.txt-wrap-cols').find('.flip').stop().animate({
                top: '-110%',
            }, 500, function() {
            });
        });

        sec1.find('.txt-wrap-cols .txt-container a').on('mouseenter', function () {
            $(this).parents('.txt-wrap-cols').find('.flip').stop().animate({
                top: '-110%',
            }, 500, function() {
            });
        });

        sec1.find('.txt-wrap-cols .txt-container a').on('mouseleave', function () {
            $(this).parents('.txt-wrap-cols').find('.flip').stop().animate({
                top: 0,
            }, 500, function() {
            });
        });

        sec1.find('.cols-container .img-wrap-cols a').on('mouseleave', function () {
            // alert('test')
            $(this).parents('.img-wrap-cols').next('.txt-wrap-cols').find('.flip').stop().animate({
                top: 0,
            }, 500, function() {
            });
        });

        sec1.find('.cols-container .txt-wrap-cols a').on('mouseenter',function f() {
            $(this).parents('.txt-wrap-cols').prev().find('a').addClass('on');
        });

        sec1.find('.cols-container .txt-wrap-cols a').on('mouseleave',function f() {
            $(this).parents('.txt-wrap-cols').prev().find('a').removeClass('on');
        });

    };
    var onResize = function(){
        topH = $('#header').height();
        winW = $(window).width() <= 1280 ? 1280 : $(window).width();
        winH = $(window).height();
        topH = $('#header').height();
        secFullH = winH - topH;
        secFullLimitH = winH - topH <=1000 ? 1000 : winH - topH;
        seckvH = seckv.height();
        checkResponsiveType();
        seckv_resize();
        sec1_resize();
        onScroll();
    };

    var onScroll = function(){
        scrollTop = ($(window).scrollTop()|| $('body').scrollTop());
        scrollLeft = ($(window).scrollLeft()|| $('body').scrollLeft());
        scrollBottom = scrollTop + winH;
        seckv_scroll();
        sec1_scroll();
    };

    /*=========================================================== [ init ] =======================================================================*/
    var _init = function(){
    };

    var _load_init = function(){
        video_init();
        slider_init();
        addEvent();
        seckv_init();
        $('#content').addClass('onShow');
    };
    return{
        init:_init,
        load_init:_load_init
    }

})();

/*=========================================================== [ Grid/Box Debuging ] =======================================================================*/

function gridTest(){
    debugHtml ='<div class="debug-btn-wrap">\n' +
        '        <button class="btn-grid">그리드</button>\n' +
        '        </div>\n' +
        '        <div class="grid-wrap">\n' +
        '        <div class="grid">\n' +
        '        <div class="cell"></div>    <div class="cell"></div>    <div class="cell"></div>    <div class="cell"></div>    <div class="cell"></div>    <div class="cell"></div>    <div class="cell"></div>    <div class="cell"></div>    <div class="cell"></div>    <div class="cell"></div>\n' +
        '    </div>\n' +
        '    </div>';

    $('body').append(debugHtml);


    setTimeout(function(){
        var btnDebug = $('.btn-debug');
        btnDebug.click(function(){
            $('body').toggleClass('box-debug');
        })

        var grid= $('.grid-wrap');
        var btnGrid = $('.btn-grid');
        var warpperHeight = $('#wrap').height();
        grid.find('.grid').css('height', warpperHeight);
        btnGrid.on('click', function(){
            grid.toggle();
        })
    },300)
}

/*=========================================================== [ ready / load ] =======================================================================*/


$(window).on('ready',function(){
    Motion.init();
    Page.init();

    // gridTest
    if((/^(127|192|localhost)/g).test(location.hostname)) gridTest();
});
$(window).on('load',function(){
    Motion.load_init();
    Page.load_init();
});