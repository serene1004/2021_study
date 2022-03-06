;(function ($) {

    var smile = {
        init: function () {
            var that = this;

            that.navFn();
            that.noticeFn();
            that.galleryFn();
        },

        // 네비게이션(메뉴) 함수
        navFn: function () {
            // 메인버튼에 마우스가 있을때 해당 메뉴의 서브메뉴가 내려오도록
            var $mainBtn = $('.main-btn')
            var $sub = $('.sub')
            var $navUl = $('#nav > ul')

            $mainBtn.on({
                mouseenter:function () {
                    
                    $mainBtn.removeClass('on');
                    $(this).addClass('on');
                    $sub.removeClass('on');
                    $(this).next().addClass('on');
                }
            });

            $navUl.on({
                mouseleave: function () {
                    $mainBtn.removeClass('on');
                    $sub.removeClass('on');
                }
            })

        }, // 네비게이션 함수 끝

        // 모달창 함수
        noticeFn: function () {
            var $modal = $('#modal');
            var $noticeText = $('#modal .notice-text');
            var $content = $('#modal .content');
            var $noticeBtn = $('#section2 .notice-btn');

            $noticeBtn.on({
                click: function (event) {
                    var text = $(this).text();

                    event.preventDefault();
                    $modal.show();
                    $noticeText.text(text);
                }
            });

            $modal.on({
                click: function (event) {
                    event.preventDefault();
                    $modal.hide();
                }
            });

            $content.on({
                click: function (event) {
                    event.stopPropagation();
                    alert('이 영역은 클릭해도 창이 닫히지 않습니다.');
                }
            });

        }, //모달창 함수 끝

        // 갤러리 함수
        galleryFn:function(){
            var $modalGallery = $('#modalGallery');
            var $content = $('#modalGallery .content');
            var $galleryBtn = $('#section2 .gallery-btn');
            var n=0;
            var arr = ['url(./img/fruit0.jpg)',
            'url(./img/fruit1.jpg)',
            'url(./img/fruit2.jpg)',
            'url(./img/fruit3.jpg)'];
            var len = arr.length-1;

            // 갤러리 이미지 클릭시 해당 이미지로 모달창 열기
            $galleryBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        n=idx;
                        $modalGallery.stop().fadeIn(500);
                        countFn();
                    }
                });
            });
            // 공통사용함수
            function countFn(){
                $content.stop().fadeOut(0).css({backgroundImage:arr[n]}).fadeIn(500);
            }

            // 모달창 닫기
            $modalGallery.on({
                click:function(){
                    $modalGallery.stop().fadeOut(0);
                }
            });

            // 모달창 이미지 클릭시 다음 사진으로. 이미지닫히는 전파 차단
            $content.on({
                click:function(e){
                    e.stopPropagation(e);
                    n+=1;
                    if (n>len)n=0;
                    countFn();
                }
            });

        },  // 갤러리함수 끝

    };

    smile.init();

})(jQuery);