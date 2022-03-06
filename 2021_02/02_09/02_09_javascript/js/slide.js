
// 전역변수 (전체지역에서 사용하는 변수)
var $slide = document.getElementsByClassName('slide-wrap')
var $nextBtn = document.getElementsByClassName('next-btn')
var $prevBtn = document.getElementsByClassName('prev-btn')

    // console.log('$slide 객체 배열 값 :'+$slide.length);
    // console.log($slide);

    //반복문 - 반복적인 작업을 손쉽게 한번에 처리한다.
    // for(var i=0; i<$slide.length; i++){
    //     console.log($slide[i]);
    // }



var slide = {
    init: function () {
        this.slide1Fn();
        this.slide2Fn();
        this.slide3Fn();
        this.slide4Fn();
    },

    slide1Fn: function () {
        // DOM
        // 1. 요소선택 쿼리셀렉터
        // document.querySelector('#아이디');
        // document.querySelector('.아이디');
        // document.querySelector('태그');

        // 2. 아이디 #section1 요소 선택방법
        // var $section1 = document.getElementById('section1');
        // console.log($section1);
        // $section1.onclick = function () {
        //     alert('섹션1클릭');
        // }

        // 3. 클래스 .slide-wrap 요소 선택방법
        // var $slideWrap = document.getElementsByClassName('slide-wrap');
        // console.log($slideWrap);
        // console.log($slideWrap[0]);
        // $slideWrap[0].onclick = function () {
        //     alert('$slideWrap[0]');
        // }
        // $slideWrap[1].onclick = function () {
        //     alert('$slideWrap[1]');
        // }
        // $slideWrap[2].onclick = function () {
        //     alert('$slideWrap[2]');
        // }
        // $slideWrap[3].onclick = function () {
        //     alert('$slideWrap[3]');
        // }

        // 4. 태그 div 요소 선택방법
        // var $div = document.getElementsByTagName('div');
        // console.log($div);
        // console.log($div[0]);
        // console.log($div[10]);



        var cnt = 0;  //cnt는 독립적으로 사용하여야함.
        var $page = document.querySelector('.page')


        function nextSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide[0].style = 'left:' + (-1200 * cnt) + 'px';
            $page.innerHTML = cnt + 1 + '/4';
        }

        function prevSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide[0].style = 'left:' + (-1200 * cnt) + 'px';
        }
        /// 버튼등록하기 onclick Event
        // $nextBtn[0].onclick = function () {
        //     nextSlideFn();
        // };
        // $prevBtn[0].onclick = function () {
        //     prevSlideFn();
        // };


        //버튼 등록 방법 : 버튼 추가(add) 이벤트(event) 리스너(listener)
        
        // $nextBtn[0].addEventListener('click',nextSlideFn, false);
        $nextBtn[0].addEventListener('click',function (event) {
            event.preventDefault();
            nextSlideFn();
        },false);

        // $prevBtn[0].addEventListener('click',prevSlideFn, false);
        $prevBtn[0].addEventListener('click',function (event) {
            event.preventDefault();
            prevSlideFn();
        },false);


        //버튼 전파 차단 

    },

    slide2Fn: function () {
        var cnt = 0;

        function nextSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide[1].style = 'left:' + (-400 * cnt) + 'px';
        }

        function prevSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide[1].style = 'left:' + (-400 * cnt) + 'px';
        }

        // $nextBtn[1].onclick = function (event) {
        //     event.preventDefault();
        //     nextSlideFn();
        // };
        // $prevBtn[1].onclick = function (event) {
        //     event.preventDefault();
        //     prevSlideFn();
        // };

        // $nextBtn[1].addEventListener('click', nextSlideFn, false);
        // $prevBtn[1].addEventListener('click', prevSlideFn, false);

        $nextBtn[1].addEventListener('click',function (event) {
            event.preventDefault();
            nextSlideFn();
        }, false);

        $prevBtn[1].addEventListener('click',function (event) {
            event.preventDefault();
            prevSlideFn();
        }, false);
    },

    slide3Fn: function () {
        var cnt = 0;

        function downSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide[2].style = 'top:' + (-200 * cnt) + 'px';
        }

        function upSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide[2].style = 'top:' + (-200 * cnt) + 'px';
        }
        // $nextBtn[2].onclick = function (event) {
        //     event.preventDefault();
        //     downSlideFn();
        // };
        // $prevBtn[2].onclick = function (event) {
        //     event.preventDefault();
        //     upSlideFn();
        // };

        $nextBtn[2].addEventListener('click',function (event) {
            event.preventDefault();
            downSlideFn();
        }, false);

        $prevBtn[2].addEventListener('click',function (event) {
            event.preventDefault();
            upSlideFn();
        }, false);
    },

    slide4Fn: function () {
        var cnt = 0;

        function nextSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide[3].style = 'left:' + (-400 * cnt) + 'px';
        }

        function prevSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide[3].style = 'left:' + (-400 * cnt) + 'px';
        }
        // $nextBtn[3].onclick = function (event) {
        //     event.preventDefault();
        //     nextSlideFn();
        // };
        // $prevBtn[3].onclick = function (event) {
        //     event.preventDefault();
        //     prevSlideFn();
        // };

        $nextBtn[3].addEventListener('click',function (event) {
            event.preventDefault();
            nextSlideFn();
        }, false);

        $prevBtn[3].addEventListener('click',function (event) {
            event.preventDefault();
            prevSlideFn();
        }, false);
    },
};

slide.init();