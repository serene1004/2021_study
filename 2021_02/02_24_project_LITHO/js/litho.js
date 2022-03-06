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
            // 네비게이션
            // 메인버튼(메뉴)
            // 서브메뉴
            var $mainBtn = $('.main-btn');
            var $sub = $('.sub');
            var $navUlLi = $('#nav > ul > li')  // 마우스가 떠나면 sub를 숨겨지게끔 하기위한 영역설정(메인버튼과 서브메뉴들을 감싸주는 li)
           
            // 서브-서브
            // 서브메뉴버튼에 마우스오버시 서브-서브메뉴가 보이도록
            var $subBtn = $('.sub-btn')
            var $subSub = $('.sub-sub')
            

            // 메뉴 보이기
            $mainBtn.on({
                mouseenter:function(){
                    $(this).stop().next().slideDown(300);
                }   
            });
           
            // 메뉴 숨기기
            $navUlLi.on({
                mouseleave:function(){
                    $sub.stop().hide(0);
                }
            });

            // 서브메뉴 보이기
            $subBtn.on({
                mouseenter:function(){
                    $subSub.stop().hide(0);
                    $(this).stop().next().slideDown(0);
                }
            });

            // 서브메뉴 숨기기
            $navUlLi.on({
                mouseleave:function(){
                    $subSub.stop().hide(0);
                }
            });

        },
        section1Fn:function(){
            // 슬라이드의 너비와 높이를 창높이 창너비로 설정한다.(반응형)
            var $slide = $('#section1 .slide')  // 로딩시 변수설정
            var $window = $(window);            // 창
            var $winW = $(window).width();      // 창너비 즉시반환
            var $winH = $(window).height();     // 창높이 즉시반환


                // 슬라이드의 너비 높이 설정 완료  // 로딩시 설정
                function resizeFn(){
                    $winW = $(window).width();
                    $winH = $(window).height();
                    $slide.css({width:$winW,height:$winH}); // 즉시 변환 너비 높이 적용 실행
                }
                resizeFn(); // 로딩시 실행

                // 화면의 크기가(너비와높이) 1픽셀만 변경되어도 동작되는 반응형메서드
                // $window.resize();
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
    }   //객체 끝

    litho.init();   // litho 실행

})(jQuery);