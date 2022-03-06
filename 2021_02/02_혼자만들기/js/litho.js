;(function($){

    var $litho = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
        },
        headerFn:function(){
            var $mainBtn = $('.main-btn');
            var $sub = $('#header .sub');
            var $navUlLi = $('#nav > ul > li');

            $mainBtn.on({
                mouseenter:function(){
                    $(this).stop().next().slideDown(300);
                }
            });

            $navUlLi.on({
                mouseleave:function(){
                    $sub.stop().hide(0);
                }
            });
        },
        section1Fn:function(){
            var $slide = $('#section1 .slide')
            var $window = $(window);
            var $winW = $(window).width();
            var $winH = $(window).height();
            

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();   
                $slide.css({width:$winW,height:$winH});
            }
            resizeFn();
            // $window.resize(function(){});
            
            $window.resize(function(){
                resizeFn();
            });
            
        },
        section2Fn:function(){

        },
        section3Fn:function(){

        },
        section4Fn:function(){

        },
        section5Fn:function(){

        },
        section6Fn:function(){

        },
        section7Fn:function(){

        },
        section8Fn:function(){

        },
        section9Fn:function(){

        },
        section10Fn:function(){

        },
        footerFn:function(){

        }

    }
    $litho.init();

})(jQuery);