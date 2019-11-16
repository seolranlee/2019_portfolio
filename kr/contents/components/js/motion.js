/**
 * -----------------------------------------------------
 * Created by uforgot on 2018. 3. 19.
 * designsamsung_2018
 * -----------------------------------------------------
 */

var Motion = (function() {
    var topH = 70;

    var motionElObjectArray = [];
    var scrollTop, scrollLeft, scrollBottom;
    var winW, winH;

    function evil(fn) {
        return new Function('return ' + fn)();
    }

    var initMotionEl = function() {
        var motionEl = $('.motion');
        var tmpEl, tmpObj;
        // motionElObjectArray

        for (var i=0;i<motionEl.length;i++) {
            tmpEl = $(motionEl[i]);

            tmpObj = {
                el:tmpEl,
                pos:tmpEl.attr('motion-pos'),
                toggle:tmpEl.attr('motion-class'),
                debug:tmpEl.attr('debug'),
                self : tmpEl.attr('motion-hide-self')
            };

            motionElObjectArray.push(tmpObj);
        }

        //console.log(motionElObjectArray);
    };

    var getTop = function($el) {
        console.log($el)
        var attr = $el.attr('motion-top').trim();
        attr = attr.replace('height', $el.height());
        return parseInt(evil(attr));
    };

    var setMotionEl = function() {
        var i;
        var tmpObject;

        for (i=0;i<motionElObjectArray.length;i++) {
            tmpObject = motionElObjectArray[i];
            setAddMotionClass(tmpObject.el, tmpObject.pos, tmpObject.toggle, tmpObject.debug, tmpObject.self);
        }
    };

    var setAddMotionClass = function ($el, $pos, $className, $debug, $self) {
        if ($debug === '1') {
            //console.log($el + ' : ' + scrollBottom + ' : ' + $el.offset().top + ' : '  + $height + ' = ' +  (scrollBottom > $el.offset().top + $height));
        }
        var pos = $pos ? $pos.trim() : 0;
        var className = $className ? $className : 'onTrans'
        if(scrollBottom >= $el.offset().top + $el.height()*pos) {

            $el.addClass(className);
        }else{
            /*if (scrollBottom < $el.offset().top) {
                $el.removeClass(className);
            }*/
            if (scrollBottom < $el.parents('section').offset().top) {
                $el.removeClass(className);
            }
        }
    };

    var setRemoveMotionClass = function ($el, $className) {
        $el.removeClass($className);
    };

    // temp - related storied
    var related_stories_scroll = function(){
        if(scrollBottom >= $('.related-stories-wrap .component-list').offset().top +  $('.related-stories-wrap .component-list').height()*0.75) {
            $('.related-stories-wrap .component-list').addClass('onTrans');
        }
        if (scrollBottom < $('.related-stories-wrap .component-list').offset().top) {
            $('.related-stories-wrap .component-list').removeClass('onTrans');
        }
    };

    /*=========================================================== [ event ] =====================================================================*/
    var resize = function() {
        winW = $(window).width() <= 1280 ? 1280 : $(window).width();
        winH = $(window).height();
    };

    var onScroll = function(){
        scrollTop = ($(window).scrollTop()|| $('body').scrollTop());
        scrollLeft = ($(window).scrollLeft()|| $('body').scrollLeft());
        scrollBottom = scrollTop + winH;
        setMotionEl();

        // temp - related storied
        //related_stories_scroll();
    };

    var onResize = function(){
        resize();
        onScroll();
    };

    var addEvent = function() {
        $(window).on('resize',onResize);
        $(window).on('scroll',onScroll);
    };

    /*=========================================================== [ init ] =====================================================================*/

    var _init = function(){
        addEvent();
        onResize();
        initMotionEl();
    };

    var _load_init = function(){

    };
    return{
        init:_init,
        load_init:_load_init
    }

})();

