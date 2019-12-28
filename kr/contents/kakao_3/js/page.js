var Page = (function() {
    var winW, winH, scrollTop, scrollBottom, scrollLeft, secFullH, secFullLimitH;
    var seckv = $('#section-kv');
    var topH;

    var seckvH;

    // 반응형 디바이스 타입
    var oldDeviceType;
    var currentDeviceType;

    var currentPage = "main";

    /*=========================================================== [ sec kv ] =======================================================================*/


    var seckv_init = function(){
    };
    var seckv_resize = function() {
    };

    var seckv_scroll = function() {
    };


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
        $('.menu-wrap svg').on('click', function() {
            if(currentPage === 'main') {
                // alert('main')
                $('.main-container').toggleClass('active');
                $('#app').attr('class', '');
            }else{
                currentPage = 'main';
                $('.product-inner-wrap.active').removeClass('active');
            }
            $('.menu').toggleClass('active');
            $('.waves').removeClass('active');
        });

        $('.menu .menu-list li').on('mouseenter', function () {
            var idx = $(this).index();
            switch (idx) {
                case 0:
                    $('#app').attr('class', '');
                    $('#app').addClass('strawberry');
                    break;
                case 1:
                    $('#app').attr('class', '');
                    $('#app').addClass('cola');
                    break;
                case 2:
                    $('#app').attr('class', '');
                    $('#app').addClass('apple');
                    break;
                case 3:
                    $('#app').attr('class', '');
                    $('#app').addClass('raspberry');
                    break;
                case 4:
                    $('#app').attr('class', '');
                    $('#app').addClass('raspberry-vanilla');
                    break;
                case 5:
                    $('#app').attr('class', '');
                    $('#app').addClass('caramel');
                    break;
                default:
                    // console.log('Sorry, we are out of ' + expr + '.');
            }
        });


        $('.menu .menu-list li').on('mouseleave', function () {
            // if(currentPage === "main") $('#app').attr('class', '');
        });


        $('.menu .menu-list li').on('click', function (e) {
            e.preventDefault();
            $('.menu-wrap svg').attr('class','ham hamRotate ham1');
            $('.menu').removeClass('active');
            var idx = $(this).index();
            switch (idx) {
                case 0:
                    $('.product-inner-wrap.strawberry').addClass('active');
                    $('.waves').attr('class','waves');
                    $('.waves').addClass('strawberry active');
                    currentPage = 'strawberry';
                    break;
                case 1:
                    $('.product-inner-wrap.cola').addClass('active');
                    $('.waves').attr('class','waves');
                    $('.waves').addClass('cola active');
                    currentPage = 'cola';
                    break;
                case 2:
                    $('.product-inner-wrap.apple').addClass('active');
                    $('.waves').attr('class','waves');
                    $('.waves').addClass('apple active');
                    currentPage = 'apple';
                    break;
                case 3:
                    $('.product-inner-wrap.raspberry').addClass('active');
                    $('.waves').attr('class','waves');
                    $('.waves').addClass('raspberry active');
                    currentPage = 'raspberry';
                    break;
                case 4:
                    $('.product-inner-wrap.raspberry-vanilla').addClass('active');
                    $('.waves').attr('class','waves');
                    $('.waves').addClass('raspberry-vanilla active');
                    currentPage = 'raspberry-vanilla';
                    break;
                case 5:
                    $('.product-inner-wrap.caramel').addClass('active');
                    $('.waves').attr('class','waves');
                    $('.waves').addClass('caramel active');
                    currentPage = 'caramel';
                    break;
                default:
                // console.log('Sorry, we are out of ' + expr + '.');
            }
        })

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
        onScroll();
    };

    var onScroll = function(){
        scrollTop = ($(window).scrollTop()|| $('body').scrollTop());
        scrollLeft = ($(window).scrollLeft()|| $('body').scrollLeft());
        scrollBottom = scrollTop + winH;
        seckv_scroll();
    };

    /*=========================================================== [ init ] =======================================================================*/
    var _init = function(){
    };

    var _load_init = function(){
        addEvent();
        seckv_init();
        $('#content').addClass('onShow');
        $('.main-container').addClass('active');
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
