// 네비게이션(Navigation) GNB(메인메뉴) &LNB(서브메뉴)

//마우스를 메인메뉴에 클릭하면 해당 서브메뉴가 아래로 나타난다.


// 1. 메인메뉴를 클릭하면 해당 메인메뉴에 on 클래스가 추가(addClass)된다.
// 2. 해당 아래 서브메뉴에도 on 클래스가 추가(addClass)된다.
//    그리고 해당 서브메뉴를 제외한 모든 서브메뉴는 클래스가 삭제(removeClass)된다.
// 3. 해당 메인메뉴와 서브메뉴의 영역을 떠나면(mouseleave == mouseout)
//    메인메뉴와 서브메뉴 모두 초기화. 모든클래스 삭제(removeClass)

// window.onload = function () {}



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

var nav = {
    init: function () {
        this.navFn();
        // this.forFn();
    },
    navFn: function () {
        var $mainBtn = document.getElementsByClassName('main-btn');
        var $sub = document.getElementsByClassName('sub');
        var $navArea = document.getElementsByClassName('nav-area');

        // console.log($mainBtn);
        // console.log($sub);

        //1. $mainBtn 요소 배열처리 : [].slice.call($mainBtn);
        //2. 변수에 대입
        $mainBtn = [].slice.call($mainBtn);
        //3. forEach()
        $mainBtn.forEach(function(el, idx, arr){
            $mainBtn[idx].addEventListener('mouseenter', function (event) {
                event.preventDefault();
    
                for (i = 0; i <= 3; i += 1) {
                    $mainBtn[i].classList.remove('on');
                    $sub[i].classList.remove('on');
                }
    
                $mainBtn[idx].classList.add('on');
                $sub[idx].classList.add('on');
    
            }, false);
        });






        //메인 버튼 클릭이벤트리스너 등록
        // $mainBtn[0].addEventListener('mouseenter', function (event) {
        //     event.preventDefault();
        //     // this.classList.add('on'); //addClass('on')  << 제이쿼리

        //     for (i = 0; i <= 3; i += 1) {
        //         $mainBtn[i].classList.remove('on');
        //         $sub[i].classList.remove('on');
        //     }

        //     $mainBtn[0].classList.add('on');
        //     $sub[0].classList.add('on');

        // }, false);

        // $mainBtn[1].addEventListener('mouseenter', function (event) {
        //     event.preventDefault();
        //     // this.classList.add('on'); //addClass('on')  << 제이쿼리

        //     for (i = 0; i <= 3; i += 1) {
        //         $mainBtn[i].classList.remove('on');
        //         $sub[i].classList.remove('on');
        //     }

        //     $mainBtn[1].classList.add('on');
        //     $sub[1].classList.add('on');

        // }, false);

        // $mainBtn[2].addEventListener('mouseenter', function (event) {
        //     event.preventDefault();
        //     // this.classList.add('on'); //addClass('on')  << 제이쿼리

        //     for (i = 0; i <= 3; i += 1) {
        //         $mainBtn[i].classList.remove('on');
        //         $sub[i].classList.remove('on');
        //     }

        //     $mainBtn[2].classList.add('on');
        //     $sub[2].classList.add('on');

        // }, false);

        // $mainBtn[3].addEventListener('mouseenter', function (event) {
        //     event.preventDefault();
        //     // this.classList.add('on'); //addClass('on')  << 제이쿼리

        //     for (i = 0; i <= 3; i += 1) {
        //         $mainBtn[i].classList.remove('on');
        //         $sub[i].classList.remove('on');
        //     }

        //     $mainBtn[3].classList.add('on');
        //     $sub[3].classList.add('on');
        // }, false);

        //마우스이벤트로 반복문처리는 안됨
        //그래서 li.$navArea영역 객체를 객체배열처리한다.
        //객체를 배열로 처리하는건 Array.prototype.slice.call(객체)
        //객체를 배열로 처리하는건              [].slice.call(객체)
        //그리고 객체 배열 반복문(forEach())을 활용한다.

        // var obj = {irum:'ㅇㅇ'};  //객체선언 리터럴방식
        // var arr = ['ㅇㅇ','ㅂㅂ','ㄴㄴ','ㅎㅎ'];  //배열선언 리터럴방식
        // console.log(arr[0]);



        // li.$navArea 영역을 떠나면 메인메뉴, 서브메뉴 모든 클래스삭제

        //1. 배열처리 [].slice.call(클래스요소);
        $navArea = [].slice.call($navArea);
        // console.log($navArea);  // 배열 결과확인

        //2. 반복문을 처리 배열처리된변수.forEach(function(클래스요소, 인덱스, 배열){});
        $navArea.forEach(function(elemant, index, array){
            // console.log(idx, element);
            $navArea[index].addEventListener('mouseleave', function () {
                $mainBtn[index].classList.remove('on');
                $sub[index].classList.remove('on');
            }, false)
        });


        // $navArea[0].addEventListener('mouseleave', function () {
        //     $mainBtn[0].classList.remove('on');
        //     $sub[0].classList.remove('on');
        // }, false)

        // $navArea[1].addEventListener('mouseleave', function () {
        //     $mainBtn[1].classList.remove('on');
        //     $sub[1].classList.remove('on');
        // }, false)

        // $navArea[2].addEventListener('mouseleave', function () {
        //     $mainBtn[2].classList.remove('on');
        //     $sub[2].classList.remove('on');
        // }, false)

        // $navArea[3].addEventListener('mouseleave', function () {
        //     $mainBtn[3].classList.remove('on');
        //     $sub[3].classList.remove('on');
        // }, false)

    },
    // forFn: function () { //반복문 알고리즘
    //     // 1~10까지 출력하는 반복문(1씩증가)
    //     for (var i = 1; i <= 10; i += 1) {
    //         console.log(i);
    //     };

    //     // 짝수(even)
    //     for (var i = 2; i <= 100; i += 2) {
    //         console.log('짝수:' + i);
    //     };

    //     // 홀수(odd)
    //     for (var i = 1; i <= 100; i += 2) {
    //         console.log('홀수:' + i);
    //     };

    //     // 5의배수
    //     for (var i = 5; i <= 100; i += 5) {
    //         console.log(`5의배수: ${i}`)
    //     };

    //     // 구구단 2단
    //     for (var i = 1; i <= 9; i += 1) {
    //         // console.log('2 * ' + i + ' = ' +(2*i))
    //         console.log(`2 * ${i} = ${2*i}`)
    //     };
    //     // 구구단 3단
    //     for (var i = 1; i <= 9; i += 1) {
    //         console.log(`3 * ${i} = ${3*i}`)
    //     };

    //     // 구구단 2~9단
    //     // var cnt = 0;
    //     var txt = '';
    //     var $outTable = document.querySelector('#out-table')

    //     for (var i = 2; i <= 9; i += 1) { // 2~9단까지 나오는 행
    //         // txt += `<tr><th>${i}단</th><tr>`;
    //         txt += '<tr><th>' + i + '단</th><tr>';
    //         for (var j = 1; j <= 9; j += 1) { // 1~9까지 나오는 열
    //             // console.log(`${i} * ${j} = ${i*j}`);
    //             // cnt += 1; // 반복횟수 누적 합
    //             var x = (i * j) < 10 ? ('0' + (i * j)) : (i * j);
    //             txt += `<tr><td>${i} * ${j} = ${x}</td></tr>`
    //         }
    //     };
    //     // console.log(`총 반복 횟수는 = ${cnt}`)
    //     $outTable.innerHTML = '';
    //     // $outTable.innerHTML = txt;
    // }
};

nav.init(); //웹브라우저가 로딩시