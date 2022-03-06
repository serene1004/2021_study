;
(function ($) {

    var obj = {
        init: function () {
            this.headerFn();
        },
        headerFn: function () {
            var $mainBtn = $('.right-box .main-btn');
            var $sub = $('.sub')
            var $nav = $('.main-btn-wrap .sub')

            $mainBtn.each(function (index) {
                $mainBtn.eq(index).on({
                    mouseenter: function (event) {
                        event.preventDefault();
                        $sub.stop().slideUp(100);
                        $(this).next().stop().slideDown(300);
                        $mainBtn.removeClass('on');  //클래스 삭제
                        $(this).addClass('on');    //클래스 추가
                    },
                    focusin:function(event){
                        event.preventDefault();
                        $sub.stop().slideUp(100);
                        $(this).next().stop().slideDown(300);
                        $mainBtn.removeClass('on');  //클래스 삭제
                        $(this).addClass('on');    //클래스 추가
                    }
                });
            });

            //// 마우스가 nav영역을 떠나면(mouseleave)
            //// 모든 서브메뉴는 접힌다. (slideUp()) 선택자
            $nav.on({
                mouseleave:function(event){
                    event.preventDefault();
                    $nav.stop().slideUp(100);  //모든 서브메뉴 접기
                    $mainBtn.removeClass('on');
                }
            });


            // $mainBtn.eq(0).on({
            //     mouseenter:function(){
            //         $('.sub').stop().slideUp();
            //         $(this).stop().slideDown();
            //     }
            // })

            // $mainBtn.eq(0).on({
            //     mouseenter: function (event) {
            //         event.preventDefault();
            //         $('.sub').stop().slideUp(100);
            //         $(this).next().stop().slideDown(300);
            //     }
            // });

            // $mainBtn.eq(1).on({
            //     mouseenter: function (event) {
            //         event.preventDefault();
            //         $('.sub').stop().slideUp(100);
            //         $(this).next().stop().slideDown(300);
            //     }
            // });

            // $mainBtn.eq(2).on({
            //     mouseenter: function (event) {
            //         event.preventDefault();
            //         $('.sub').stop().slideUp(100);
            //         $(this).next().stop().slideDown(300);
            //     }
            // });

            // $mainBtn.eq(3).on({
            //     mouseenter: function (event) {
            //         event.preventDefault();
            //         $('.sub').stop().slideUp(100);
            //         $(this).next().stop().slideDown(300);
            //     }
            // });

        },

    };

    obj.init();

})(jQuery);