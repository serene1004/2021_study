////jQuery 사용법////
// $(function(){
//     alert('제이쿼리실행');
// });

// jQuery(function(){
//     alert('제이쿼리실행!');
// });

;(function($){     ////             <<<<<<<<이걸로 사용함 위에 2개는 사용ㄴㄴㄴㄴ
    
    $('.main-btn').on({
        click:function(){
            alert();
        }
    })

})(jQuery);   //IIFE(즉시실행표현식)

/////////////////////////////////////////////////////