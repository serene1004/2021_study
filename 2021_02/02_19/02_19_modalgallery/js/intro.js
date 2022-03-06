;(function ($) { // 맨 아래의 전달인자(jQuery)를 매개변수$ 가 받아서 실행한다.

    var intro = { //// <<<<  =(이퀄) 가 들어간 함수는 무조건 맨 아래에서 실행 intro.init();
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
                $slideWrap.stop().animate({
                    left: -800 * cnt
                }, 600, function () {
                    if (cnt > 3) cnt = 0;
                    if (cnt < 0) cnt = 3;
                    $slideWrap.stop().animate({
                        left: -800 * cnt
                    }, 0); // 슬라이드 롤링포인트
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

                    if (!$slideWrap.is(':animated')) {
                        nextSlideCountFn();
                    }
                }
            });

            // 3-2. 이전 슬라이드 버튼 클릭이벤트
            $prevBtn.on({
                click: function () {
                    if (!$slideWrap.is(':animated')) {
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
                click: function (event) {
                    event.preventDefault(event);
                    var txt = $(this).text(); // 클릭한 버튼의 텍스트를 가져오기
                    var tit = $(this).attr('title'); // 클릭한 버튼의 타이틀속성(attr:attribute) 가져오기

                    $modal.show(); // 보여라(display:none => block)
                    $noticeText.text(txt); //
                }
            });

            // 모달창 숨기기(닫기) hide() fadeOut() slideUp()

            $modal.on({
                // 모달(#modal) 클릭시 창닫기
                // 단, $noticeText(h1) 텍스트 위치 박스 클릭시 닫기 이벤트 발생 안함

                click: function (event) {

                    event.preventDefault();
                    $modal.hide();
                    // $(this).hide(); <<가능
                }
            });

            // content영역 클릭시 창이 닫히지 않게 설정
            $content.on({
                click: function (event) {
                    event.stopPropagation(); // 자손요소에서 클릭시 조상영역위치의 이벤트가 수행되는걸 차단함.
                    alert('여기를 클릭하면 창이 닫히지 않습니다.');
                }
            });

        },
        galleryFn: function () {
            // 갤러리 버튼(이미지)클릭시해당 이미지가 모달창에 나타나도록 모달창 열기
            // 모달창 이미지를 클릭하면 다음 이지미가 나타나게끔 설정
            // 모달창 닫기는 이미지를 제외한 영역 클릭시 닫기

            var $modalGallery = $('#modalGallery');
            var $content = $('#modalGallery .content');
            var $galleryBtn = $('#section2 .gallery-btn');
            var n = 0; // 버튼 누르기전 초기값
            var arr = ['url(./img/img0.jpg)','url(./img/img1.jpg)','url(./img/img2.jpg)','url(./img/img3.jpg)'];
            
            var len = arr.length-1; //배열의 총 갯수(길이) 4개[0,1,2,3] len-1=3
            console.log('이미지배열갯수:'+len);
            

            // 이미지 번호가 순서대로 나열되어있지 않을경우는 배열을 이용
            // 배열(Array)의 순서를 이용한 알고리즘
            // var arr = new Array();
            // var obj = new Object();  new가 들어간 생성자 방식. 별로 권장하진 않는다.

            // var arr = [];    // 1차원 배열선언 리터럴방식. 값도 지정가능함
            // var 배열이름 = [배열인자값,배열인자값,배열인자값,...];
            // var arr = [3,0,6,1,10];
            // console.log(arr);
            // console.log(arr[3]);    // 1이 나옴
            // console.log(arr[1]);    // 0이 나옴
            // console.log(arr[4]);    // 10이 나옴


            // 클릭할 버튼 배열처리 후 클릭한 이미지로 모달창 띄우기
            $galleryBtn.each(function(idx){     // 로딩 시 실행
                $(this).on({
                    click:function(){
                        n=idx;
                        $modalGallery.stop().fadeIn(500);
                        countFn();
                    }
                });
            });
            // 공통함수 모달창에서 이미지 클릭시 같이사용하는 함수(재사용함수)
            function countFn(){
                $content.stop().fadeOut(0).css({backgroundImage:arr[n]}).fadeIn(500);
            }


            // 모달창 닫기
            $modalGallery.on({
                click:function(){
                    $modalGallery.stop().fadeOut();
                }
            });
            // 모달창 이미지 클릭하면 다음이미지로 변환. 이미지 클릭시 조상영역으로 버튼이벤트 전파 차단
            $content.on({
                click:function(e){
                    e.stopPropagation(e);   // 조상영역까지 전파되는 버튼이벤트 차단
                    n+=1;   // 다음 이미지 인덱스번호
                    if (n>len){n=0};
                    countFn();  //모달창 이미지 함수 재사용(재사용함수)
                }
            });

        },
        bannerFn: function () {

        },
        familySiteFn: function () {
            

        } // 메서드와 메서드사이는 ,로 구분하고 다음 메서드가 없을시에는 ,를 없애는 습관을 가지자. (냅둔다고 오류가 발생되진 않음.)
    };

    intro.init();

})(jQuery);



// goUrl() 링크
// BOM[Browser Object Model]

function goUrl(z) {
    // alert(z); // 버튼 클릭시(전달인자(Argument)) 호출된 함수(매개변수(Parameter)) 값을 확인

    // switch(매개변수 비교할대상){
    //     case '비교할조건':
    //          '수행할 명령 내용'
    //     break;
    //     default:'수행할 명령 내용'
    // } 

    switch (z) {
        case 'noticeMore':
            // console.log('조건이 z가 noticeMore인 경우');
            window.open('https://www.bok.or.kr/museum/pgm/master/list.do?progrmSeCd=03&menuNo=700124');
            break; // 해당 조건 나가기

        // 메인1
        case 'main1':
            location.href = './main1.html';
            break;
        case 'main1-1':
            location.href = './main1-1.html';
            break;
        case 'main1-2':
            location.href = './main1-2.html';
            break;
        case 'main1-3':
            location.href = './main1-3.html';
            break;
        case 'main1-4':
            location.href = './main1-4.html';
            break;

        // 메인2
        case 'main2':
            location.href = './main2.html';
            break;
        case 'main2-1':
            location.href = './main2-1.html';
            break;
        case 'main2-2':
            location.href = './main2-2.html';
            break;
        case 'main2-3':
            location.href = './main2-3.html';
            break;
        case 'main2-4':
            location.href = './main2-4.html';
            break;            

        // 메인3
        case 'main3':
            location.href = './main3.html';
            break;
        case 'main3-1':
            location.href = './main3-1.html';
            break;
        case 'main3-2':
            location.href = './main3-2.html';
            break;
        case 'main3-3':
            location.href = './main3-3.html';
            break;
        case 'main3-4':
            location.href = './main3-4.html';
            break;

        // 메인4
        case 'main4':
            location.href = './main4.html';
            break;
        case 'main4-1':
            location.href = './main4-1.html';
            break;
        case 'main4-2':
            location.href = './main4-2.html';
            break;
        case 'main4-3':
            location.href = './main4-3.html';
            break;
        case 'main4-4':
            location.href = './main4-4.html';
            break;            

        default:alert('url 전달값 오류. 확인바람.')  // switch 조건문에서 더이상 조건이 필요없을때 사용하여 조건문을 마침.
    } // switch() 끝


    // 공지사항 더보기
//     if (z == 'noticeMore') {
//         // location.href='https://www.bok.or.kr/museum/pgm/master/list.do?progrmSeCd=03&menuNo=700124'; // 현재창으로 열기
//         window.open('https://www.bok.or.kr/museum/pgm/master/list.do?progrmSeCd=03&menuNo=700124'); // 새창으로 열기
//     }
//     // 메인1
//     else if (z == 'main1') {
//         location.href = './main1.html';
//     } else if (z == 'main1-1') {
//         location.href = './main1-1.html';
//     } else if (z == 'main1-2') {
//         location.href = './main1-2.html';
//     } else if (z == 'main1-3') {
//         location.href = './main1-3.html';
//     } else if (z == 'main1-4') {
//         location.href = './main1-4.html';
//     }
//     // 메인2
//     else if (z == 'main2') {
//         location.href = './main2.html';
//     } else if (z == 'main2-1') {
//         location.href = './main2-1.html';
//     } else if (z == 'main2-2') {
//         location.href = './main2-2.html';
//     } else if (z == 'main2-3') {
//         location.href = './main2-3.html';
//     } else if (z == 'main2-4') {
//         location.href = './main2-4.html';
//     }
//     // 메인3
//     else if (z == 'main3') {
//         location.href = './main3.html';
//     } else if (z == 'main3-1') {
//         location.href = './main3-1.html';
//     } else if (z == 'main3-2') {
//         location.href = './main3-2.html';
//     } else if (z == 'main3-3') {
//         location.href = './main3-3.html';
//     } else if (z == 'main3-4') {
//         location.href = './main3-4.html';
//     }
//     //메인4
//     else if (z == 'main4') {
//         location.href = './main4.html';
//     } else if (z == 'main4-1') {
//         location.href = './main4-1.html';
//     } else if (z == 'main4-2') {
//         location.href = './main4-2.html';
//     } else if (z == 'main4-3') {
//         location.href = './main4-3.html';
//     } else if (z == 'main4-4') {
//         location.href = './main4-4.html';
//     }
//     // 그 외
//     else {
//         alert('url 전달값 오류. 확인바람.');
//         return false; // 버튼 클릭을 취소
//     }
} // goUrl()함수 끝


// 패밀리사이트 점프메뉴
function goFamily(z){
    location.href=z;
}