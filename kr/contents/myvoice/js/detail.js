var Detail = (function() {
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
        // seckv.css('height',secFullH);
    };
    var seckv_resize = function() {
        if(seckvH > secFullH){
            isHigherSecKv = true;
        }else{
            isHigherSecKv = false;
        }
        // alert(seckvH);
        // alert(secFullH);
    };

    var seckv_scroll = function() {

    };



    /*=========================================================== [ sec1 ] =======================================================================*/

    var sec1_resize = function() {

    };

    var sec1_scroll = function() {
        // console.log(scrollBottom)
        if(scrollBottom > sec1.offset().top){
            if(isHigherSecKv){
                // alert('test')
                seckv.css('position','fixed').css('bottom',0).css('top','auto').css('left',-scrollLeft);
                sec1.css('top', seckvH);
                if(scrollTop <= 0){
                    seckv.css('position','relative').css('top',0).css('left',0);
                    sec1.css('top', 'auto');
                }
            }else{
                // alert('test')
                seckv.css('position','fixed').css('bottom','auto').css('top',topH).css('left',-scrollLeft);
                sec1.css('top', seckvH);
                if(scrollTop <= 0){
                    seckv.css('position','relative').css('top',0).css('left',0);
                    sec1.css('top', 'auto');
                }
            }
        }else{
            seckv.css('position','relative').css('top',0).css('left',0);
            sec1.css('top', 'auto');
        }


        var per = ( (scrollBottom-sec1.find('.bottom-container').offset().top) / secFullH  );
        if( per >= 1){
            per = 1;
        }else if(per <= 0){
            per = 0;
        }

        var scalePer = per/5 + 1;
        console.log(per);


        if(scrollBottom >= sec1.find('.bottom-container').offset().top){
            $('.dim-holder').css('visibility','visible');
            $('.dim-holder').css('opacity',per);
            // sec1.find('.bottom-container .img-box').css({'transform': 'scale(' + scalePer + ',' + scalePer + ')'});
            // sec1.find('.bottom-container .img-box figure').css('background-size', 100+ per*20 + '%' );
        }else{
            $('.dim-holder').css('visibility','hidden');
            $('.dim-holder').css('opacity',0);
        }


        // reset
        // if(scrollBottom < sec1.offset().top){
        //     // code
        // }


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
        // sec8.find('.inner-cont-wrap .pen-1').css({'transform':'scale('+ per +'' +')'});
        // $('#loader').bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(e){
        //     if(e.target === this){
        //         $(this).addClass('onEnd');
        //         $('#loader').bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(e){
        //             if(e.target === this){
        //                 $('#content').addClass('onShow');
        //                 seckv.children('.cols-container').addClass('onTrans');
        //             }
        //         });
        //
        //     }
        // });
        // $('#content').bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',function(e){
        //     if(e.target === this){
        //         seckv.find('.section-title .cols-container').addClass('onTrans');
        //
        //     }
        // });

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
        // $('#loader').addClass('onTrans');
        $('#content').addClass('onShow');
        seckv.children('.cols-container').addClass('onTrans');
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
    Detail.init();


    if(_Browser.msie){
        if( _Browser.ie10 || _Browser.ie11_over || _Browser.edge ){
            Shader.init();
        }else{
        }
    }else{
        Shader.init();
    }

    // gridTest
    if((/^(127|192|localhost)/g).test(location.hostname)) gridTest();
});
$(window).on('load',function(){
    Motion.load_init();
    Detail.load_init();
});