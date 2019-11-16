window.GlobalPreset = {
    'mobile-portrait': 320,
    'mobile-landscape': 480, //가로모드

    'tablet-portrait': 768,
    'tablet-landscape': 1024,

    //pc-x-smaller-std:     1025px,
    'pc-smaller-std': 1281,
    'pc-standard': 1600, // 기준구간
    'pc-larger-std': 1920, //최적화 구간
    'pc-x-larger-std': 2561 //대형 화면 대응 구간
}
window.GlobalVars = (function(){

    var breakPoint = {
        // 모바일 구간
        screen_mobile_portrait : window.GlobalPreset["mobile-portrait"],
        screen_mobile_landscape : window.GlobalPreset["mobile-landscape"],

        // 태블릿 구간
        screen_tablet_portrait : window.GlobalPreset["tablet-portrait"],
        screen_tablet_landscape : window.GlobalPreset["tablet-landscape"],

        // Desktop PC 구간
        screen_pc_small : window.GlobalPreset["pc-smaller-std"],
        screen_pc_standard : window.GlobalPreset["pc-standard"],
        screen_pc_large : window.GlobalPreset["pc-larger-std"],
        screen_pc_x_large : window.GlobalPreset["pc-x-larger-std"],

        // 구간별 최대 값 정의
        screen_mobile_max:         window.GlobalPreset["tablet-portrait"] - 1,
        screen_tablet_max:         window.GlobalPreset["pc-smaller-std"] - 1,
        screen_pc_max:             window.GlobalPreset["pc-x-larger-std"] - 1
    }

    var _AREA = {
        MOBILE : false,
        TABLET : false,
        PC : false,
        TABLET_PC : false,
        PC_NORMAL : false,
        PC_4K : false
    }
    var scrollBarWidth = 0;
    var _getScrollBarWidth = function() {
        var inner = document.createElement('p');
        inner.style.width = "100%";
        inner.style.height = "200px";

        var outer = document.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild (inner);

        document.body.appendChild (outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetWidth;
        if (w1 == w2) w2 = outer.clientWidth;

        document.body.removeChild (outer);

        scrollBarWidth = w1 - w2;
        return (w1 - w2);
    };


    var resize = function() {

        var w = $(window).width() + scrollBarWidth;
        var type;
        if(w > breakPoint.screen_mobile_max)
        {
            _AREA.TABLET_PC = true;
            _AREA.MOBILE = false;

            if( w > breakPoint.screen_pc_small)
            {
                _AREA.PC = true;
                _AREA.TABLET = false;

                if( w > breakPoint.screen_pc_max)
                {
                    _AREA.PC_4K = true;
                    _AREA.PC_NORMAL = false;
                }
                else
                {
                    _AREA.PC_NORMAL = true;
                    _AREA.PC_4K = false;
                }
            }
            else
            {
                _AREA.TABLET = true;
                _AREA.PC = false;
            }
        }
        else
        {
            _AREA.MOBILE = true;
            _AREA.TABLET = _AREA.PC = _AREA.TABLET_PC = _AREA.PC_NORMAL = _AREA.PC_4K = false;
        }
    };
    $(window).on('resize',resize);
    _getScrollBarWidth();
    resize();
    return {
        AREA : _AREA,
        getScrollBarWidth : _getScrollBarWidth
    }
})();

$(window).on('ready',function(){
    window.GlobalVars.getScrollBarWidth();
})





