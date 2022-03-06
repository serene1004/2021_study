var nav = {
    init: function () {
        this.navFn();
    },
    navFn: function () {
        var $mainBtn = document.getElementsByClassName('main-btn');
        var $sub = document.getElementsByClassName('sub');
        var $navArea = document.getElementsByClassName('nav-area');

        //메인 버튼 클릭이벤트리스너 등록


        //마우스이벤트로 반복문처리는 안됨(함수(function)가 들어감)
        //그래서 마우스이벤트의 영역 객체를 객체배열처리한다.
        //객체를 배열로 처리하는건 Array.prototype.slice.call(객체)
        //객체를 배열로 처리하는건              [].slice.call(객체)
        //그리고 객체 배열 반복문(forEach(function(element, index, array){}))을 활용한다.


        //// [].slice.call + forEach를 사용하여 변경
        
        $mainBtn = [].slice.call($mainBtn);
        $mainBtn.forEach(function(element, index, array){
            $mainBtn[index].addEventListener('mouseenter', function (event) {
                event.preventDefault();
    
                for (i = 0; i <= 3; i += 1) {
                    $mainBtn[i].classList.remove('on');
                    $sub[i].classList.remove('on');
                }
    
                $mainBtn[index].classList.add('on');
                $sub[index].classList.add('on');
            }, false);
        });


        ////for 사용하여 변경
        
        // $mainBtn[0].addEventListener('mouseenter', function (event) {
        //     event.preventDefault();

        //     for (i = 0; i <= 3; i += 1) {
        //         $mainBtn[i].classList.remove('on');
        //         $sub[i].classList.remove('on');
        //     }

        //     $mainBtn[0].classList.add('on');
        //     $sub[0].classList.add('on');
        // }, false);


        // $mainBtn[1].addEventListener('mouseenter',function (event) {
        //     event.preventDefault();

        //     $mainBtn[0].classList.remove('on');
        //     $mainBtn[1].classList.add('on');
        //     $mainBtn[2].classList.remove('on');
        //     $mainBtn[3].classList.remove('on');

        //     $sub[0].classList.remove('on');
        //     $sub[1].classList.add('on');
        //     $sub[2].classList.remove('on');
        //     $sub[3].classList.remove('on');
        // } ,false);

        // $mainBtn[2].addEventListener('mouseenter',function (event) {
        //     event.preventDefault();
        //     $mainBtn[0].classList.remove('on');
        //     $mainBtn[1].classList.remove('on');
        //     $mainBtn[2].classList.add('on');
        //     $mainBtn[3].classList.remove('on');

        //     $sub[0].classList.remove('on');
        //     $sub[1].classList.remove('on');
        //     $sub[2].classList.add('on');
        //     $sub[3].classList.remove('on');
        // } ,false);

        // $mainBtn[3].addEventListener('mouseenter',function (event) {
        //     event.preventDefault();
        //     $mainBtn[0].classList.remove('on');
        //     $mainBtn[1].classList.remove('on');
        //     $mainBtn[2].classList.remove('on');
        //     $mainBtn[3].classList.add('on');

        //     $sub[0].classList.remove('on');
        //     $sub[1].classList.remove('on');
        //     $sub[2].classList.remove('on');
        //     $sub[3].classList.add('on');
        // } ,false);



        // li.$navArea 영역을 떠나면 메인메뉴, 서브메뉴 모든 클래스삭제

        //// forEach를 사용하여 변경
        $navArea = [].slice.call($navArea);
        $navArea.forEach(function (element, index, array) {
            $navArea[index].addEventListener('mouseleave', function () {
                $mainBtn[index].classList.remove('on');
                $sub[index].classList.remove('on');
            }, false)
        });




        // $navArea[0].addEventListener('mouseleave',function () {
        //     $mainBtn[0].classList.remove('on');
        //     $sub[0].classList.remove('on');
        // },false)

        // $navArea[1].addEventListener('mouseleave',function () {
        //     $mainBtn[1].classList.remove('on');
        //     $sub[1].classList.remove('on');
        // },false)

        // $navArea[2].addEventListener('mouseleave',function () {
        //     $mainBtn[2].classList.remove('on');
        //     $sub[2].classList.remove('on');
        // },false)

        // $navArea[3].addEventListener('mouseleave',function () {
        //     $mainBtn[3].classList.remove('on');
        //     $sub[3].classList.remove('on');
        // },false)

    }
};

nav.init();