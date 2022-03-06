;(function ($) {

    var intro = {     //// <<<<  =(이퀄) 가 들어간 함수는 무조건 맨 아래에서 실행 intro.init();
        init: function () {
            var that = this;
            that.navFn();
            that.mainSlideFn();
            that.noticeFn();
            that.galleryFn();
            that.bannerFn();
            that.familySiteFn();
        },
        navFn: function () {
            // 아코디언메뉴
            // 메인메뉴(선택자(selector): .main-btn)에 마우스오버시(mouseenter)
            // 클래스 추가 하기전에 모든 클래스(removeClass('on')) 삭제
            // 해당메뉴의 클래스를 추가(addClass('on'))하여 스타일을 설정하고

            // 클래스 추가 하기전에 모든 클래스(removeClass('on')) 삭제
            // 해당 서브메뉴(선택자: .sub)에 클래스를 추가(addClass:('on'))하여 스타일을 설정

            var $mainBtn = $('#nav .main-btn');
            var $sub = $('#nav .sub');
            var $navUl = $('#nav > ul'); // 이 영역을 벗어나면 모든 메뉴 초기화

            // 메인버튼 이벤트 리스너
            $mainBtn.on({
                mouseenter: function () {
                    $mainBtn.removeClass('on'); // 버튼 모두 추가된 클래스 ('on')
                    $(this).addClass('on');

                    $sub.removeClass('on')
                    $(this).next().addClass('on');
                }
            });

            // 메인메뉴와 서브메뉴 영역을 떠나면
            $navUl.on({
                mouseleave: function () {
                    $mainBtn.removeClass('on');
                    $sub.removeClass('on');
                }
            })

        },
        mainSlideFn: function () {
            // 슬라이드 이미지4개 좌우2개추가 = 총6개 (3 0 1 2 3 0)
            // 선택자 : 애니메이션 대상 .slide-wrap
            // 선택자 : 이전버튼 .prev-btn
            // 선택자 : 다음버튼 .next-btn
            // 변수 : 카운트 변수 cnt = 0;

            var $slideWrap = $('#section1 .slide-wrap');
            var $prevBtn = $('#section1 .prev-btn')
            var $nextBtn = $('#section1 .next-btn')
            var cnt = 0;

            // 1. 메인슬라이드 함수
            function mainSlideFn() {
                $slideWrap.stop().animate({left:-800*cnt},600, function(){
                    if(cnt>3) cnt=0;
                    if(cnt<0) cnt=3;
                    $slideWrap.stop().animate({left:-800*cnt},0);  // 슬라이드 롤링포인트
                });
            }

            // 2-1. 다음 슬라이드 카운트 함수
            function nextSlideCountFn() {
                cnt += 1;
                mainSlideFn(); // 메인함수 호출
            }

            // 2-2. 이전 슬라이드 카운트 함수
            function prevSlideCountFn() {
                cnt -= 1;
                mainSlideFn(); // 메인함수 호출
            }

            // 3-1. 다음 슬라이드 버튼 클릭이벤트
            $nextBtn.on({
                click: function () {
                    // 연속으로 버튼을 클릭하면 버블링이 발생하는데(디버깅)
                    // 애니메이션이 동작이 안될 때 클릭하도록
                    // 제어문 설정(조건문)
                    // not(부정) != ,!==
                    // 애니메이션이 안될 때를 !$slideWrap.is(':animated') <<< animated 과거형

                    if(!$slideWrap.is(':animated')){
                        nextSlideCountFn();
                    }
                }
            });
            
            // 3-2. 이전 슬라이드 버튼 클릭이벤트
            $prevBtn.on({
                click: function () {
                    if( !$slideWrap.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });

        },
        noticeFn: function () {
            // 공지사항 버튼(.notice-btn) 클릭시 모달창(#modal) 띄우고
            // 클릭한 버튼(.notice-btn) 텍스트(a태그 안의 텍스트)를
            // 모달창(.notice-text)에 해당 텍스트를 출력
            
            var $modal = $('#modal');
            var $noticeBtn = $('#section2 .notice-btn');
            var $noticeText = $('#modal .notice-text');
            var $content = $('#modal .content')

                // 모달창 보이기(열기) show() fadeIn() slideDown()
                $noticeBtn.on({
                    click:function (event) {
                        event.preventDefault(event);
                        var txt = $(this).text();  // 클릭한 버튼의 텍스트를 가져오기
                        var tit = $(this).attr('title');  // 클릭한 버튼의 타이틀속성(attr:attribute) 가져오기

                        $modal.show();  // 보여라(display:none => block)
                        $noticeText.text(txt);  //
                    }
                });

                // 모달창 숨기기(닫기) hide() fadeOut() slideUp()

                $modal.on({
                    // 모달(#modal) 클릭시 창닫기
                    // 단, $noticeText(h1) 텍스트 위치 박스 클릭시 닫기 이벤트 발생 안함
                    
                    click:function (event) {
                        
                        event.preventDefault();
                        $modal.hide();
                        // $(this).hide(); <<가능
                    }
                });

                // content영역 클릭시 창이 닫히지 않게 설정
                $content.on({
                    click:function (event) {
                        event.stopPropagation();  // 자손요소에서 클릭시 조상영역위치의 이벤트가 수행되는걸 차단함.
                        alert('여기를 클릭하면 창이 닫히지 않습니다.');
                    }
                });

        },
        galleryFn: function () {

        },
        bannerFn: function () {

        },
        familySiteFn: function () {

        }           // 메서드와 메서드사이는 ,로 구분하고 다음 메서드가 없을시에는 ,를 없애는 습관을 가지자. (냅둔다고 오류가 발생되진 않음.)
    };

    intro.init();

})(jQuery);