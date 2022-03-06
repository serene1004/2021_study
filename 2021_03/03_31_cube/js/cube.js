;(function($){

    var cube = {
        init:function(){
            this.cubeFn();
        },
        cubeFn:function(){
            var $radioBtn = $('input[type="radio"]');
            var $face = $('.face');
            var faceName = '.'+$radioBtn.eq(0).val();   // 첫번째 라디오버튼 value값 가져오기

            
            function faceNameFn(){
                $(faceName).stop().animate({opacity:.1},0).animate({opacity:1},3000)
            };
            setTimeout(faceNameFn, 100);

            $radioBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        $radioBtn.removeClass('addCheck');
                        $(this).addClass('addCheck');

                        $face.stop().animate({opacity:.3},6000)
                        faceName = '.'+$(this).val();
                        faceNameFn();
                    }
                })
            })
        }
    }

    cube.init();

})(jQuery);