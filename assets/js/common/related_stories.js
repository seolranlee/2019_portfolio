/**
 * Created by vanvan on 2017-06-12.
 */


var Related_Stories = (function () {
    var el =
        '<div class="inner-wrap">'+
            '<div class="dline"></div>'+
            '<div class="title"><h3>Related Stories</h3></div>'+
            '<ul class="component-list">'+
            '</ul>'+
        '</div>'

    var rootURL;
    var localURL ="http://localhost:63342/designsamsung_reneawal_2019";
    var serverURL = "http://ssd.designfever.com"; //삼성에 전달할때는 주석처리
    var serverURL2 = "http://www.design.samsung.com";
    var locate = location.href;
    var version;
    var fileName;

    var VERSION_KR = "/kr/";
    var VERSION_GLOBAL = "/global/";
    var SPLIT_VALUE = "/contents/";


    var init = function(){
        if(locate.indexOf('localhost')==-1){
            if(locate.indexOf('www.')==-1){
                rootURL = serverURL;
            }else{
                rootURL = serverURL2;
            }
            fileName = 'xml/related_stories_list.jsp';
        }else{
            rootURL = localURL;
            fileName = 'xml/related_stories_list.xml'
        }
        var xmlURL = rootURL + getVersion() +  fileName;
        getXml(xmlURL,xmlComplete,getContentsID());
    };

    var getVersion = function(){
        if( typeof ROOT_PATH == 'undefined' || ROOT_PATH == ""){

            if(locate.indexOf(VERSION_KR)==-1){
                version = VERSION_GLOBAL;
            }else {
                version = VERSION_KR;
            }
        }else{
            if(ROOT_PATH.indexOf(VERSION_KR)==-1){
                version = VERSION_GLOBAL;
            }else {
                version = VERSION_KR;
            }
        }
        return version;
    };
    var getContentsID = function(){
        var id;
        var contentsURL = locate.split(SPLIT_VALUE)[1];
        id = contentsURL.split("/")[0];
        return id;
    };


    var getXml = function($url, $callbackFunc,$id){

        var dateObj = new Date();
        var callBackFunc = $callbackFunc;
        var url = $url+"?time="+dateObj.getTime();

        url = url+"&content_id="+$id;
        $.ajax({
            type:"get",
            dataType:"xml",
            url: url,
            success: function(xml){
                $('.related-stories-wrap').append(el);
                callBackFunc(xml);
            },
            error: function(xhr, status, error) {
                console.log("================ xml load error ===================");
                $('.related-stories-wrap').css('display','none');
            }
        });
    };
    var xmlComplete = function($xml){
        var xmlData = $xml;
        var list = _Device.type == 2 ? $(xmlData).find("mobile") : $(xmlData).find("web") ;

        if(list.length == 0)  {
            $('.related-stories-wrap').css('display','none');
            console.log("=============== xml list none ====================")
        }
        var count = 0;
        $.each(list,function(key,value){
            count++;
            if(count > 3) return;
            var img_url =  rootURL+$(value).find('img').text();
            var title = $(value).find('title').text();
            var sub_title = $(value).find('subtitle').text();
            var sub_date = $(value).find('date').text();
            var link = rootURL+$(value).find('link').text();
            var el =
                '<li>'+
                    '<dl>'+
                        '<dt class="title">'+
                            title+
                        '</dt>'+
                        '<dd class="desc">'+
                            sub_title+
                        '</dd>'+
                        '<dd class="date">'+
                            sub_date+
                        '</dd>'+
                        '<dd class="img">'+
                            '<a href='+link+'>'+
                                '<div class="item">'+
                                    '<figure class="mod-covered-bg" style="background-image:url('+img_url+') "></figure>'+
                                '</div>'+
                            '</a>'+
                        '</dd>'+
                    '</dl>'+
                '</li>';
            $('ul.component-list').append(el);
        });

        modifyStyle();
    };
    var  modifyStyle = function(){

        if(version ==VERSION_KR)$('.related-stories-wrap ul.component-list').addClass('version-kr');
    };

    init();
})();
