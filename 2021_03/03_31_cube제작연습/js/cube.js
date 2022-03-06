;(function($){

    var cube = {
        init:function(){
            this.cubeFn();
        },
        cubeFn:function(){
            var $radioBtn = $('#cube input');
            var $cube = $('#cube .cube');

            $radioBtn.on({
                click:function(){
                    $radioBtn.removeClass('addCheck');
                    $(this).addClass('addCheck');
                }
            })
        }
    }

    cube.init();

})(jQuery);