/**
 * Created by vanvan on 2017-06-19.
 */


var Footer = (function(){
    /*========================================= [ footer markup ] ============================================================*/
    var el =
        '<div id="footer">'+
            '<a href="http://www.samsung.com/" target="_blank" title="새창으로 삼성닷컴 사이트로 이동합니다" class="logo"><em class="blind">samsung</em></a>'+
            '<span class="copyright">© 2014-2019 SAMSUNG All Rights Reserved.</span>'

    var el_kr =
            '<span class = "more">'+
                '&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;' +
            '</span>'+
            '<span class = "info">'+
                '<strong class="kr"><a href="javascript:go_qna();">이메일 문의</a></strong>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;' +
                '<strong class="kr">' +
                    '<a href="javascript:go_individualInfo();">개인정보처리방침</a>' +
                '</strong>'+
            '</span>'+
            /*'<a href="#header" class="btn_main_top"></a>'+*/
        '</div>'

    var el_global =
            '<span class = "more">'+
                '&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;' +
            '</span>'+
            '<span class = "info">'+
                'For questions, <strong><a href="javascript:go_qna();">click here</a></strong>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;' +
                '<strong>' +
                    '<a href="javascript:go_individualInfo();">Privacy and Cookies</a>' +
                '</strong>'+
            '</span>'+
                /*'<a href="#header" class="btn_main_top"></a>'+*/
        '</div>'
    /*========================================= [ footer setting ] ============================================================*/
    var locate = location.href;

    var VERSION_KR = "/kr/";
    var VERSION_GLOBAL = "/global/";

    var init = function(){
        var el_version

        el_version = getVersion() == VERSION_KR ? el_kr : el_global;
        var element = el + el_version;

        $('.footer_wrap').append(element);

    }
    var getVersion = function(){
        var version;

        if( typeof ROOT_PATH == 'undefined' || ROOT_PATH == ""){
            if(locate.indexOf(VERSION_KR)==-1){
                version = VERSION_GLOBAL;
            }else {
                version = VERSION_KR;
            }
        }else{
            if(ROOT_PATH.indexOf("/kr/")==-1){
                version = VERSION_GLOBAL;
            }else {
                version = VERSION_KR;
            }
        }
        return version;
    }
    var _go_qna = function(){
        switch(getVersion()){
            case VERSION_KR :
                window.open('/kr/mail/qna_gate.html', '', 'width=970,height=1020, scrolling=no');
                break;
            case VERSION_GLOBAL :
                window.open('/global/mail/qna_gate.html', '', 'width=970,height=1094, scrolling=no');
                break;
            default :
                window.open('/kr/mail/qna_gate.html', '', 'width=970,height=1020, scrolling=no');
                break;
        }
    }
    var _go_newletter = function(){
        switch(getVersion()){
            case VERSION_KR :
                location.href ='/kr/newsletter';
                break;
            case VERSION_GLOBAL :
                location.href ='/global/newsletter';
                break;
            default :
                location.href ='/kr/newsletter';
                break;
        }
    }
    var _go_individualInfo = function(){
        switch(getVersion()){
            case VERSION_KR :
                location.href ='/kr/policy/individualInfo';
                break;
            case VERSION_GLOBAL :
                location.href ='/global/policy/individualInfo';
                break;
            default :
                location.href ='/kr/policy/individualInfo';
                break;
        }
    }
    var _policyOpen = function(){
        event.preventDefault();
        window.open('https://account.samsung.com/membership/pp');/*170720 링크이동 수정*/
    }
    init();

    return{
        go_qna : _go_qna,
        go_newletter : _go_newletter,
        go_individualInfo : _go_individualInfo,
        policyOpen : _policyOpen
    }


})();


//qna팝업
function go_qna() {
    Footer.go_qna();
}
//newletter link
function go_newletter(){
    Footer.go_newletter();
}
function go_individualInfo(){
    Footer.go_individualInfo();
}
function policyOpen(){
    Footer.policyOpen();
}
