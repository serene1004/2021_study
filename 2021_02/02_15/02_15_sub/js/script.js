// $(function);

jQuery(function () { //// 제이쿼리 선언문
    var obj = {
        init: function () {
            this.section1('아규먼트/전달변수');
            this.section2();
            this.section3('전달인자1', this.section1('ㅇㅇ?'));
        },
        section1: function (z) { // 매개변수
            console.log('섹션1', z)
        },
        section2: function () {
            console.log('섹션2')
        },
        section3: function (x, y) {
            y = '33전달인자 콜백함수'
            console.log('섹션3')
            console.log(x)
            this.section1(y);
        },
    }; //obj 객체
    // obj.init();  
});

//////////////////////////////////////////
;
(function ($) {
    console.log($);
})(jQuery);

/// 함수 표현식 : 즉시실행 함수표현식(IIFE)
/// 제이쿼리를 아규먼트로 전달해서 매개변수 $로 대입하여 사용함.
/// 다른 라이브러리와 $사용 충돌을 피할수 있다.

;
(function ($, _ABC, pa1) { //매개변수(파라미터)
    var a = '100';
    var b;
    console.log($, _ABC, pa1);
    console.log(a, b);
})(jQuery); //아규먼트


/// 선언적 함수(이름이있는 함수)
/// 최상단으로 변수 및 함수 내용이 올라가서 어디서든지 위치에 상관없이 실행가능하다.(호이스팅)
functionEs5(); // 함수호출
function functionEs5() { /// ECMA Script5
    var a=900;
    console.log('선언적 함수 실행은 위 아래 어디든지 가능함.');
};

/// 화살표함수
functionEs6 = () => { /// ECMA Script6 화살표함수
    console.log('화살표 함수는 반드시 함수 아래에서만 실행이 가능함.');
};
functionEs6();


/// 함수표현식 : 리터럴함수(익명함수)
/// 함수 이름이 없는 함수. 대신에 변수를 사용함. // 호이스팅 발생
var function2 = function () {
    console.log('리터럴함수(익명함수)는 반드시 함수 아래에서만 실행이 가능함.');
}
function2(); // 함수호출


//// 제이쿼리 실행 실습
;
(function ($) {
    $('#header')
        .html('<h1>헤더영역입니다</h1>')
    $('#header h1')
        .css({
            color: '#00f',
            fontSize: 150,
            textAlign: 'center'
        });

    $('#main')
        .html('<h1>메인영역입니다</h1>');
    // .text('');

    $('#footer')
        .html('<h1>푸터영역입니다</h1>')
    $('#footer h1')
        .css({
            fontSize: 150,
            color: '#f00',
            textAlign: 'center'
        });
    // 체인방식 .(점)을 사용하며 끝낼때 ;(세미콜론)사용
    // px 단위 자동인식

})(jQuery);