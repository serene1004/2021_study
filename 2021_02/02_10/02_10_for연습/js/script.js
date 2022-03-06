///함수설정///
var slide = {
    init: function () {
        this.slide1Fn();
        this.slide2Fn();
        this.slide3Fn();
        this.slide4Fn();
    },

    //슬라이드1//
    slide1Fn: function () {
        var cnt = 0;
        var $slide = document.querySelector('#section1 .slide-wrap')
        var $nextBtn = document.querySelector('#section1 .next-btn')
        var $prevBtn = document.querySelector('#section1 .prev-btn')
        var $homeBtn = document.querySelector('#section1 .home-btn')

        function prevSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide.style = 'left:' + (-1200 * cnt) + 'px';
        }

        function nextSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide.style = 'left:' + (-1200 * cnt) + 'px';
        }

        function homeFn() {
            cnt += 1;
            cnt > 0 ? cnt = 0 : cnt;
            $slide.style = 'left:' + (-1200 * cnt) + 'px';
        }
        $nextBtn.onclick = function (event) {
            // console.log(event);
            event.preventDefault();
            nextSlideFn();
        };
        $prevBtn.onclick = function (event) {
            event.preventDefault();
            prevSlideFn();
        };
        $homeBtn.onclick = function () {
            homeFn();
        };
    },

    //슬라이드2//
    slide2Fn: function () {
        var cnt = 0;
        var $slide = document.querySelector('#section2 .left-box .slide-wrap')
        var $nextBtn = document.querySelector('#section2 .left-box .next-btn')
        var $prevBtn = document.querySelector('#section2 .left-box .prev-btn')

        function prevSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide.style = 'left:' + (-400 * cnt) + 'px';
        }

        function nextSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide.style = 'left:' + (-400 * cnt) + 'px';
        }
        $nextBtn.onclick = function () {
            nextSlideFn();
        };
        $prevBtn.onclick = function () {
            prevSlideFn();
        };
    },
    //슬라이드3//
    slide3Fn: function () {
        var cnt = 0;
        var $slide = document.querySelector('#section2 .center-box .slide-wrap')
        var $nextBtn = document.querySelector('#section2 .center-box .next-btn')
        var $prevBtn = document.querySelector('#section2 .center-box .prev-btn')

        function prevSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide.style = 'top:' + (-200 * cnt) + 'px';
        }

        function nextSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide.style = 'top:' + (-200 * cnt) + 'px';
        }
        $nextBtn.onclick = function () {
            nextSlideFn();
        };
        $prevBtn.onclick = function () {
            prevSlideFn();
        };
    },

    //슬라이드4//
    slide4Fn: function () {
        var cnt = 0;
        var $slide = document.querySelector('#section2 .right-box .slide-wrap')
        var $nextBtn = document.querySelector('#section2 .right-box .next-btn')
        var $prevBtn = document.querySelector('#section2 .right-box .prev-btn')

        function prevSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide.style = 'left:' + (-400 * cnt) + 'px';
        }

        function nextSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide.style = 'left:' + (-400 * cnt) + 'px';
        }
        $nextBtn.onclick = function () {
            nextSlideFn();
        };
        $prevBtn.onclick = function () {
            prevSlideFn();
        };
    }
    //끝//    
}

slide.init();


//HTML에서 설정해서 하는방법//
///설정///
// var $slide1 = document.querySelector('.slide-wrap');
// var $slide2 = document.querySelector('.slide-wrap2');

///슬라이드1///
// var cnt = 0;

// function prevSlideFn() {
//     cnt -= 1;
//     cnt < 0 ? cnt = 3 : cnt;
//     $slide1.style = 'left:' + (-1200 * cnt) + 'px';
// }

// function nextSlideFn() {
//     cnt += 1;
//     cnt > 3 ? cnt = 0 : cnt;
//     $slide1.style = 'left:' + (-1200 * cnt) + 'px';
// }

// function doneFn() {
//     cnt += 1;
//     cnt > 0 ? cnt = 0 : cnt;
//     $slide1.style = 'left:' + (-1200 * cnt) + 'px';
// }

// setInterval(nextSlideFn, 4000);



///슬라이드2///
// var cnt2 = 0;

// function prevSlideFn2() {
//     cnt -= 1;
//     cnt < 0 ? cnt = 2 : cnt;
//     $slide2.style = 'left:' + (-400 * cnt) + 'px';
// }

// function nextSlideFn2() {
//     cnt += 1;
//     cnt > 2 ? cnt = 0 : cnt;
//     $slide2.style = 'left:' + (-400 * cnt) + 'px';
// }