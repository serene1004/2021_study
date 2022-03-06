;(function($){

    var litho = {
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
            
        },
        section1Fn:function(){
            // 슬라이드의 너비와 높이를 창높이 창너비로 설정한다.(반응형)
            var $slide = $('#section1 .slide')
            var $winW = $(window).width();  // 창너비
            var $winH = $(window).height(); // 창높이

                //슬라이드의 너비 높이 설정 완료
                $slide.css({width:$winW,height:$winH});


                

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
    }   //객체 끝

    litho.init();   // litho 실행

})(jQuery);