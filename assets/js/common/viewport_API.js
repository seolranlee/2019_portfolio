var _TabletRatio;
$( function(){
    $(window).resize(function(){
        var winW = $(this).outerWidth();
        var winH = $(this).outerHeight();
        if(winW>winH){//landscape
            $("meta[name=viewport]").attr('content', 'width=1740, user-scalable=no');
        }else{//portrait
            $("meta[name=viewport]").attr('content', 'width=1280, user-scalable=no');
        }
    }).resize();
   /* $(window).on('orientationchange', viewportChange, false);
    $(window).on('resize', viewportChange, false);
	function viewportChange(){
        var ratio,mode;

        if (_Device.type != 1) return;

        var deviceWidth = $(window).width();
        var deviceHeight = $(window).height();

        if (deviceWidth > deviceHeight) {
            mode = 'landscape';
        } else {
            mode = 'portrait';
        }

        switch (mode) {
            case 'landscape' :
                ratio = 1024 / 1280;
                break;
            case 'portrait' :
                ratio = 768 / 1280;
                break;
        }
        $("meta[name=viewport]").attr('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio);
	}
    viewportChange();*/
});
