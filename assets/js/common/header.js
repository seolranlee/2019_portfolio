

var Header = (function(){
    /*========================================= [ header markup ] ============================================================*/
    var el_1 =
        '<div class="open-search">'+
            '<div class="box">'+
                '<form id="formHeaderSearch" name="formHeaderSearch" method="get" action="/kr/search-result.html">'+
                    '<input type="text" id="searchTxt" name="q" onpaste="javascript:return false;" onkeyup="specialCharRemove(this);" onkeydown="onKeyDown()" maxlength="40" autocomplete="off"/>'+
                    '<a href="javascript:;" class="btn-search"><p>SEARCH</p></a>'+
                    '<div class="line"><span></span></div>'+
                '</form>'+
            '</div>'+
        '</div>'+
        '<div id="header">'+
            '<div class="slogan-holder">' +
                '<h1 class="slogan">Be bold. Resonate with Soul</h1>'+
            '</div>'+
            '<div class="category-area-holder">'+
                '<ul class="category-box">'+
                    '<li>'+
                        '<div class="clip">'+
                            '<a href="javascript:goToPage(1);"><span>WE DESIGN</span></a>'+
                            '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                        '</div>'+
                    '</li>'+
                    '<li>'+
                        '<div class="clip">'+
                            '<a href="javascript:goToPage(2);"><span>WE DISCOVER</span></a>'+
                            '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                        '</div>'+
                    '</li>'+
                    '<li>'+
                        '<div class="clip">'+
                            '<a href="javascript:goToPage(3);"><span>ABOUT US</span></a>'+
                            '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                        '</div>'+
                    '</li>'+
                    '<li>'+
                        '<div class="clip">'+
                            '<a href="javascript:goToPage(4);"><span>NEWS</span></a>'+
                            '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                        '</div>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
            '<div class="left-logo-holder">'+
                '<strong class="logo-box"><a href="javascript:goToPage(0);"><span class="wa">SAMSUNG</span></a></strong>'+
            '</div>'+

            '<div class="util-holder">'+
                '<a href="javascript:;" class="lang"></a>'+
                '<div class="searchbox">'+
                    '<a href="javascript:;"><span class="wa">검색</span></a>'+
                '</div>'+
                '<a href="javascript:;" class="menu"></a>'+
            '</div>'+
            '<a href="javascript:;" class="close-btn"><span></span></a>'+
        '</div>'+
        '<a href="#header" class="btn_main_top"><span><em class="blind"></em></span></a>'
    var el_global=
        '<div class="open-bg"></div>'+
        '<div class="open-lang">'+
            '<div class="list">'+
                '<a href="javascript:;" class="en on"><span>EN</span></a>'+
                '<a href="javascript:goToChangeVersion();" class="kr"><span>KR</span></a>'+
            '</div>'+
        '</div>'+
        '<div class="open-menu">'+
            '<div class="slogan"></div>'+
            '<div class="menu">'+
                '<div class="category-area-holder">'+
                    '<ul class="category-box">'+

                        '<li>'+
                            '<div class="clip">'+
                                '<a href="javascript:goToPage(1);"><span>WE DESIGN</span></a>'+
                                '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                            '</div>'+
                        '</li>'+

                        '<li>'+
                            '<div class="clip">'+
                                '<a href="javascript:goToPage(2);"><span>WE DISCOVER</span></a>'+
                                '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                            '</div>'+
                        '</li>'+
                        '<li>'+
                            '<div class="clip">'+
                                '<a href="javascript:goToPage(3);"><span>ABOUT US</span></a>'+
                                '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                            '</div>'+
                        '</li>'+
                        '<li>'+
                            '<div class="clip">'+
                                '<a href="javascript:goToPage(4);"><span>NEWS</span></a>'+
                                '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                            '</div>'+
                        '</li>'+
                    '</ul>'+
                '</div>'+
                '<div class="lang-holder">'+
                    '<span href="javascript:;" class="lang-icon"></span>'+
                    '<div class="list">'+
                        '<a href="javascript:;" class="en on"><span>EN</span></a>'+
                        '<a href="javascript:goToChangeVersion();" class="kr"><span>KR</span></a>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
    var el_kr=
        '<div class="open-bg"></div>'+
        '<div class="open-lang">'+
            '<div class="list">'+
                '<a href="javascript:;" class="kr on"><span>KR</span></a>'+
                '<a href="javascript:goToChangeVersion();" class="en"><span>EN</span></a>'+
            '</div>'+
        '</div>'+
        '<div class="open-menu">'+
        '<div class="slogan"></div>'+
        '<div class="menu">'+
            '<div class="category-area-holder">'+
                '<ul class="category-box">'+
                    '<li>'+
                        '<div class="clip">'+
                            '<a href="javascript:goToPage(1);"><span>WE DESIGN</span></a>'+
                            '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                        '</div>'+
                    '</li>'+
                    '<li>'+
                        '<div class="clip">'+
                            '<a href="javascript:goToPage(2);"><span>WE DISCOVER</span></a>'+
                            '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                        '</div>'+
                    '</li>'+
                    '<li>'+
                        '<div class="clip">'+
                            '<a href="javascript:goToPage(3);"><span>ABOUT US</span></a>'+
                            '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                        '</div>'+
                    '</li>'+
                    '<li>'+
                        '<div class="clip">'+
                            '<a href="javascript:goToPage(4);"><span>NEWS</span></a>'+
                            '<div class="line"><span class="line-left"></span><span class="line-right"></span></div>'+
                        '</div>'+
                    '</li>'+
                '</ul>'+
            '</div>'+
            '<div class="lang-holder">'+
                '<span href="javascript:;" class="lang-icon"></span>'+
                '<div class="list">'+
                    '<a href="javascript:;" class="kr on"><span>KR</span></a>'+
                    '<a href="javascript:goToChangeVersion();" class="en"><span>EN</span></a>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'

    /*========================================= [ header setting ] ============================================================*/

    var version;
    var changeVersion;
    var rootURL;
    var subURL;
    var changeVersionToGoURL;
    var VERSION_KR = "/kr/";
    var VERSION_GLOBAL = "/global/";
    var urlList = [
        'index.html','we-design.html','we-discover.html','about-us.html','news.html'
    ];

    var versionCheck = function(){

        var locate = location.href;

        if( typeof ROOT_PATH == 'undefined' || ROOT_PATH == ""){

            if(locate.indexOf(VERSION_KR)==-1){
                version = VERSION_GLOBAL;
                changeVersion = VERSION_KR;
            }else {
                version = VERSION_KR;
                changeVersion = VERSION_GLOBAL;
            }
        }else{
            if(ROOT_PATH.indexOf("/kr/")==-1){
                version = VERSION_GLOBAL;
                changeVersion = VERSION_KR;
            }else {
                version = VERSION_KR;
                changeVersion = VERSION_GLOBAL;
            }
        }

        var url = locate.split("?")[0];
        var urlList = url.split(version)
        rootURL = urlList.shift();
        subURL = urlList.join()

        changeVersionToGoURL = rootURL + changeVersion + subURL;
        appendHeader();
    }

    var appendHeader = function(){
        var el_version = version == VERSION_KR ? el_kr : el_global;
        var el = el_version + el_1;

        $('.header_wrap').append(el);

        var url = version + 'search-result.html';
        $('form[name=formHeaderSearch]').attr('action',url);
    }
    var _getChangeVersionToGoURL = function(){
        return changeVersionToGoURL;
    }
    var _getVersion = function(){
        return version;
    }
    var _getURLPage = function($idx){
        console.log(version);
        var url = version + urlList[$idx];
        return url;
    }
    versionCheck();

    return{
        getChangeVersionToGoURL : _getChangeVersionToGoURL,
        getVersion : _getVersion,
        getURLPage : _getURLPage
    }


})();
/*========================================= [ header function ] ============================================================*/
var Header_Function = (function(){
    var $wrap = $('#wrap');
    var $container = $('#container');
    var $body = $('body');
    var $lang = $('.lang');
    var $langHolder = $('.lang-holder');
    var $categoty = $('.category-box');
    var $searchbox = $('.searchbox');
    var $openSearch = $('.open-search');
    var $btnSearch = $('.btn-search');
    var $closeBtn = $('.close-btn');
    var $menueBtn = $('.util-holder>a.menu');
    var $stID=0;

    var st = $(window).scrollTop();
    var fixSt = 0;
    var winW = $(window).outerWidth();
    var winH;

    if(_Device.type == 0) {
        $categoty.on('mouseover', 'a', function() {
            var $li = $(this).parent().parent('li');

            if (!$li.hasClass('current')) {
                $li.find('.line').children('span').stop().animate({
                    'width': '50%'
                }, 300);
            }
        }).on('mouseout', 'a', function() {
            var $li = $(this).parent().parent('li');
            if (!$li.hasClass('current')) {
                $li.find('.line').children('span').stop().animate({
                    'width': '0'
                }, 300);
            }
        });
    }
    $openSearch.on('click', 'a', function() {
        $body.removeClass('onOpenSearch');
    })
    $searchbox.on('click', 'a', function() {
        window.clearTimeout($stID);
        if (!$body.hasClass('onOpenSearch')) {
            if(winW <= 750){
                $container.css('margin-top',-st);
            }
            fixSt = st;

            if($body.hasClass('onOpenLang')){
                $body.removeClass('onOpenLang');
                $stID = window.setTimeout(function(){
                    $body.addClass('onOpenSearch');
                    $openSearch.find('input').val('');

                    $stID = window.setTimeout(function(){
                        $openSearch.find('input').focus();
                    },300);
                },500);


            }else{
                $body.addClass('onOpenSearch');
                $openSearch.find('input').val('');

                $stID = window.setTimeout(function(){
                    $openSearch.find('input').focus();
                },500);

            }

        } else {
            $body.removeClass('onOpenSearch');
            $searchbox.find('a').focus();
        }
    });

    $btnSearch.on('click', function(){
        var url = Header.getVersion() + 'search-result.html';
        $('form[name=formHeaderSearch]').attr('action',url);
        $('form[name=formHeaderSearch]').submit();
    });

    $lang.on('click', function() {
        window.clearTimeout($stID);
        if (!$body.hasClass('onOpenLang')) {

            if($body.hasClass('onOpenSearch')){
                $body.removeClass('onOpenSearch');
                $searchbox.find('a').focus();
                $body.addClass('onOpenLang');
            }else{
                $body.addClass('onOpenLang');
            }
        } else {
            $body.removeClass('onOpenLang');
        }
    });
    //mobile
    $menueBtn.on('click',function() {
        window.clearTimeout($stID);
        if (!$body.hasClass('onOpenMenu')) {
            $body.addClass('onOpenMenu');
            $langHolder.removeClass('onOpen');

            $container.css('margin-top',-st);
            fixSt = st;
        }
    });
    $closeBtn.on('click', function() {
        _close();
    });

    $(window).on('resize',_onResize);
    function _onResize(){
        winW =  $(window).outerWidth();
        winH =  $(window).outerHeight();

        var mh = winH - (70 + 61);
        $container.css('min-height', mh+'px');

    }

    // 스크롤에 따라 헤더 사이즈 변경 (메인/서브메인 only)
    $(window).scroll(function() {
        st = $(this).scrollTop();
        var winH = $(this).outerHeight();
        if (st > 0) {
            headerShrink();
        } else {
            if ($body.hasClass('onMain')) headerGrow();
        }

        //1280미만일때 좌우 스크롤 이동에 맞게 header 이동
        var scrollLeft = ($(window).scrollLeft()|| $('body').scrollLeft());
        if(winW < 1280) {
            $('.header_wrap').css('left', -scrollLeft);
        }else{
            $('.header_wrap').css('left', 0);
        }
    });




    function headerShrink() {
        if (!$wrap.hasClass('minify')) {
            $wrap.addClass('minify');
        }
    }

    function headerGrow() {

        if (!$wrap.is(':animated') && $wrap.hasClass('minify')) {
            $wrap.removeClass('minify');

        }
    }

    function _focusMenu($idx){
        $('.open-menu .category-area-holder').find('li').eq($idx).addClass('current');
        $('#header .category-area-holder').find('li').eq($idx).addClass('current');
    }

    function _close(){
        window.clearTimeout($stID);
        $body.removeClass('onOpenSearch');
        $body.removeClass('onOpenMenu');
        $searchbox.find('a').focus();
        $container.css('margin-top',0);
        $('html, body').scrollTop(fixSt);
    }

    _onResize();

    return{
        focusMenu:_focusMenu,
        onResize : _onResize,
        close : _close
    }

})();


function focusMenu($idx){
    Header_Function.focusMenu($idx);
}
function goToChangeVersion (){

    window.location.href = Header.getChangeVersionToGoURL();
}
function goToPage($idx){
    Header_Function.close();
    window.location.href = Header.getURLPage($idx);
}


//기존 스크립트
//정규식 특수문자 제거하기(한글 영문 숫자만 입력가능)
function specialCharRemove(obj) {
    var val = obj.value;
    var pattern = /[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9\s)]/gi;
    if (pattern.test(val)) {
        obj.value = val.replace(pattern, "");
    }
}

function onKeyDown() {
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "v")) {
        event.returnValue = false;
    }
}



/*========================================= [ btn top function ] ============================================================*/
var BtnTop_Fouction = (function(){
    var newBtnTop = $('.header_wrap .btn_main_top');
    function addEvent(){
        newBtnTop.on('click', function(event) {
            event.stopPropagation();
            event.preventDefault();
            $('html,body').stop().animate({
                'scrollTop': '0'
            }, 400);
            return false;
        });

        $(window).on('scroll',onScroll);

        onScroll();
    }

    function onScroll(){
        var st = $(window).scrollTop();
        var winH = $(this).outerHeight();
        // 탑버튼
        if (st > 1000) {
            if(!newBtnTop.is(':visible')){
                newBtnTop.show();
                newBtnTop.stop().animate({'opacity':'1'}, 200);
            }
        } else {
            if(newBtnTop.is(':visible')){
                newBtnTop.stop().animate({'opacity':'0'}, 200,function(){
                    newBtnTop.hide();
                });
            }
        }

    }
    addEvent();
})();
