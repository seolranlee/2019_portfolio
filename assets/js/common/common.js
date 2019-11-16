

var $wrap = $('#wrap');
var $container = $('#container');
var $lang = $('.lang_wrap');
var $categoty = $('.category');
var $searchbox = $('.searchbox');
var $categoryArea = $('.category_area');
var csstransitions = $('.csstransitions');
var mainPage = $('.main_page');
var subMainPage = $('.sub_main');

var footerSNS = $('.lo_sns');
var newBtnTop = $('.footer_wrap .btn_main_top');
var st = $(window).scrollTop();
var winW = $(window).outerWidth();

$(function() {
    $lang.on('click', 'a', function() {
        if (!$lang.hasClass('on')) {
            $lang.addClass('on');
        } else {
            $lang.removeClass('on');
        }
    });

    $categoty.on('mouseenter focusin', 'a', function() {
        var $li = $(this).parent('li');
        if (!$li.hasClass('current')) {
            $li.find('.line').children('span').stop().animate({
                'width': '50%'
            }, 300);
        }
    }).on('mouseleave focusout', 'a', function() {
        var $li = $(this).parent('li');
        if (!$li.hasClass('current')) {
            $li.find('.line').children('span').stop().animate({
                'width': '0'
            }, 300);
        }
    });

    $searchbox.on('click', 'a', function() {
        if (!$searchbox.hasClass('on')) {
            $searchbox.addClass('on');
            $searchbox.find('input').focus();
        } else {
            $searchbox.removeClass('on');
            $searchbox.find('a').focus();
        }
    });

    $('#footer').on('click', '.btn_main_top', function(event) {
		event.stopPropagation();
		event.preventDefault();
        $('html,body').stop().animate({
            'scrollTop': '0'
        }, 400);
    });

    footerSNS.on('click', 'a', function() {
        var idx = $(this).parent('li').index();
        $('.sns-bns li').eq(idx).children('a').click();
    });


    $(window).resize(function() {
        winW = $(this).outerWidth();  
		winH = $(this).outerHeight();

        btnTopPos();

		var $container = $('#container');
		if($container.hasClass('sub_main')){
			var mh = winH - (100 + 61);
		}else{
			var mh = winH - (70 + 61);
		}
		$container.css('min-height', mh+'px');


    }).resize();

    // 스크롤에 따라 헤더 사이즈 변경 (메인/서브메인 only)
    $(window).scroll(function() {
        st = $(this).scrollTop();
        var winH = $(this).outerHeight();
        if (mainPage.size() > 0) {
            if (st > 0) {
                headerShrink();
            } else {
                headerGrow();
            }
        } else if (subMainPage.size() > 0) {
            if (st > 0) {
                headerShrink();
            } else {
                headerGrow();
                //categoryShow();
            }
        }

        // 탑버튼
        if (st > 2000) {
			if(!newBtnTop.is(':visible')){
				newBtnTop.show();
				newBtnTop.children('img').stop().animate({'opacity':'1','top':'0'}, 200);
			}            
        } else {
			if(newBtnTop.is(':visible')){
				newBtnTop.children('img').stop().animate({'opacity':'0','top':'100px'}, 200,function(){
					newBtnTop.hide()
				});
			}            
        }

        var docH = $(document).outerHeight();
        if (st + winH > docH - 61) { // 61:footerHeight
            $('.footer_wrap').addClass('on');
        } else {
            $('.footer_wrap').removeClass('on');
        }
        //1280미만일때 좌우 스크롤 이동에 맞게 header 이동
        var scrollLeft = ($(window).scrollLeft()|| $('body').scrollLeft());
        if(winW < 1280) {
            $('.header_wrap').css('left', -scrollLeft);
        }else{
            $('.header_wrap').css('left', 0);
        }
    });



    btnTopPos();
});


function headerShrink() {
    $('.left-logo strong').removeClass('inMotion');
    $('.left-logo strong').addClass('outMotion');

    $('.left-logo .tit_site').removeClass('outMotion');
    $('.left-logo .tit_site').addClass('inMotion');
    if (csstransitions.size() > 0) {
        $wrap.addClass('minify');
    } else {
        if (!$wrap.hasClass('minify')) {
            $wrap.addClass('minify');
        }
    }
	//MAKE Default
	$lang.removeClass('on');
	$searchbox.removeClass('on');

}

function headerGrow() {
    $('.left-logo strong').removeClass('outMotion');
    $('.left-logo strong').addClass('inMotion');

    $('.left-logo .tit_site').removeClass('inMotion');
    $('.left-logo .tit_site').addClass('outMotion');
    if (csstransitions.size() > 0) {
        $wrap.removeClass('minify');
    } else {
        if (!$wrap.is(':animated') && $wrap.hasClass('minify')) {
            $wrap.removeClass('minify');

        }
    }
    //MAKE Default
    $lang.removeClass('on');
    $searchbox.removeClass('on');
}


function btnTopPos() {
    var winW = $(window).outerWidth();
    var newBtnTop = $('.footer_wrap .btn_main_top');
	//position change
    if (winW < 1560){
		newBtnTop.css('right', '15px');
	}else{
		newBtnTop.css('right', '45px');
	}
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

function go_qna() { //qna팝업
    window.open('/kr/mail/qna_gate.html', '', 'width=970,height=500, scrolling=no');
}
