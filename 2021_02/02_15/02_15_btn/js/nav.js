;
(function ($) {

    var obj = {
        init: function () {
            this.headerFn();
        },
        headerFn: function () {
            var $mainBtn = $('.right-box .main-btn'); //// 반드시 필요.
            var $sub = $('.right-box .sub')           //// .right-box 안에서의 .main-btn

            //네비게이션 이벤트
            //GNB(메인메뉴) - 항상 전체 홈페이지에 노출되어있는 메뉴
            //LNB(서브메뉴) - 감춰진 메뉴. 마우스 이벤트에 의해서 노출되는 메뉴
            //메인메뉴의 마우스 오버시(mouseenter)
            //해당 서브메뉴는 바로 아래(next())로 부드럽게 펼쳐진다.(slideDown(속도값))
           
            // 객체 배열처리 : 자바스크립트 forEach();
            // 객체 배열처리 : 제이쿼리 each();
            
            // $mainBtn.each();                //순서1
            // $mainBtn.each(function(){});    //순서2
            // $mainBtn.each(function(index){  //순서3
            //          console.log(index);
            // });

            $mainBtn.each(function(index){
                $mainBtn.eq(index).on({  //// $(this).on 으로도 사용가능.
                    mouseenter:function(event){
                        event.preventDefault();
                        $sub.stop().slideUp(100);
                        $(this).next().stop().slideDown(300);
                    }
                });
            });


            // $mainBtn.eq(0).on({
            //     mouseenter: function (event) {
            //         event.preventDefault();
            //         $('.sub').stop().slideUp(100);
            //         // $('.sub').eq(0).slideDown(300); ///this next로 쓰는것과 결과는 같음.
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

    obj.init(); // 객체전체실행

})(jQuery);