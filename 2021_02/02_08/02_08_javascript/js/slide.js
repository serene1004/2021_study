var slide = {
    init: function () {
        this.slide1Fn();
        this.slide2Fn();
        this.slide3Fn();
        this.slide4Fn();
    },
    slide1Fn: function () {
        var cnt = 0;
        var $slide = document.querySelector('#section1 .slide-wrap')
        var $page = document.querySelector('.page')
        var $nextBtn = document.querySelector('#section1 .next-btn')
        var $prevBtn = document.querySelector('#section1 .prev-btn')

        function nextSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide.style = 'left:' + (-1200 * cnt) + 'px';
            $page.innerHTML = cnt + 1 + '/4';
        }

        function prevSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide.style = 'left:' + (-1200 * cnt) + 'px';
        }
        /// 버튼등록하기 onclick Event
        $nextBtn.onclick = function () {
            nextSlideFn();
        };
        $prevBtn.onclick = function () {
            prevSlideFn();
        };

    },
    slide2Fn: function () {
        var cnt = 0;
        var $slide = document.querySelector('#section2 .left-box .slide-wrap')
        var $nextBtn = document.querySelector('#section2 .left-box .next-btn')
        var $prevBtn = document.querySelector('#section2 .left-box .prev-btn')

        function nextSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide.style = 'left:' + (-400 * cnt) + 'px';
        }

        function prevSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide.style = 'left:' + (-400 * cnt) + 'px';
        }
        $nextBtn.onclick = function (event) {
            event.preventDefault();
            nextSlideFn();
        };
        $prevBtn.onclick = function (event) {
            event.preventDefault();
            prevSlideFn();
        };

    },
    slide3Fn: function () {
        var cnt = 0;
        var $slide = document.querySelector('#section2 .center-box .slide-wrap')
        var $nextBtn = document.querySelector('#section2 .center-box .next-btn')
        var $prevBtn = document.querySelector('#section2 .center-box .prev-btn')

        function downSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide.style = 'top:' + (-200 * cnt) + 'px';
        }
        
        function upSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide.style = 'top:' + (-200 * cnt) + 'px';
        }
        $nextBtn.onclick = function (event) {
            event.preventDefault();
            downSlideFn();
        };
        $prevBtn.onclick = function (event) {
            event.preventDefault();
            upSlideFn();
        };
    },
    slide4Fn: function () {
        var cnt = 0;
        var $slide = document.querySelector('#section2 .right-box .slide-wrap')
        var $nextBtn = document.querySelector('#section2 .right-box .next-btn')
        var $prevBtn = document.querySelector('#section2 .right-box .prev-btn')
        function nextSlideFn() {
            cnt += 1;
            cnt > 3 ? cnt = 0 : cnt;
            $slide.style = 'left:' + (-400 * cnt) + 'px';
        }
        
        function prevSlideFn() {
            cnt -= 1;
            cnt < 0 ? cnt = 3 : cnt;
            $slide.style = 'left:' + (-400 * cnt) + 'px';
        }
        $nextBtn.onclick = function (event) {
            event.preventDefault();
            nextSlideFn();
        };
        $prevBtn.onclick = function (event) {
            event.preventDefault();
            prevSlideFn();
        };
    },
};

slide.init();