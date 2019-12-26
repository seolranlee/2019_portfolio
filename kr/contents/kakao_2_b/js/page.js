var Page = (function() {
    var winW, winH, scrollTop, scrollBottom, scrollLeft, secFullH, secFullLimitH;
    var topH;

    var seckvH;

    // 반응형 디바이스 타입
    var oldDeviceType;
    var currentDeviceType;

    /*=========================================================== [ removeClass ] =======================================================================*/

    function removeClass( target, className ){
        target.addClass('noTransition');
        target[0].offsetHeight;
        target.removeClass('noTransition');
        target.removeClass(className);
    }

    var reAnimate = function(){
        $(".pointer").animate({ left : "150px" },1000)
            .animate({ top : "150px" },1000)
            .animate({ left : "50px" },1000)
            .animate({ top : "0px" },1000, reAnimate);
    };



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
    };
    var onResize = function(){
        topH = $('#header').height();
        winW = $(window).width() <= 1280 ? 1280 : $(window).width();
        winH = $(window).height();
        topH = $('#header').height();
        secFullH = winH - topH;
        secFullLimitH = winH - topH <=1000 ? 1000 : winH - topH;
        checkResponsiveType();
        onScroll();
    };

    var onScroll = function(){
        scrollTop = ($(window).scrollTop()|| $('body').scrollTop());
        scrollLeft = ($(window).scrollLeft()|| $('body').scrollLeft());
        scrollBottom = scrollTop + winH;
    };

    /*=========================================================== [ init ] =======================================================================*/
    var _init = function(){
    };

    var _load_init = function(){
        addEvent();
        $('#content').addClass('onShow');
    };
    return{
        init:_init,
        load_init:_load_init
    }

})();

/*=========================================================== [ Grid/Box Debuging ] =======================================================================*/


/*=========================================================== [ ready / load ] =======================================================================*/


$(window).on('ready',function(){
    Motion.init();
    Page.init();
});
$(window).on('load',function(){
    Motion.load_init();
    Page.load_init();
});
