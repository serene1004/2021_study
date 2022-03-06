// 객체(object) 기반
// var obj = new Object();  // 객체 생성자 방식
// var obj = {};            // 객체 리터럴 방식 (권장방식)


// 속성 값이 문자 또는 문자열은 반드시 '',"",`` 감싸준다
var obj = { // 객체 이름
    irum: '김유신', // 속성(Property) : 속성값(Value)
    age: 45, // 객체안에 속성구분은 ,(콤마)로 함
    mill: true,
    result: function () {
        // this 객체이름 obj 객체
        // 메소드 안에서는 객체 속성값 뒤에 = 을 사용한다.

        var cnt = 0;
        cnt = 100;
        console.log(this.irum = '이순신', this.age = 30, this.mill = false);
        console.log('result 메소드', cnt);
    },

    // 메소드(Method) 또는 리터럴 함수 또는 익명 함수(이름이 없는 함수)
    // 프로퍼티에 functuon(){} 이 존재하면 메소드가 된다.

    answer: function () {
        var cnt = 0;
        cnt = 50;
        console.log('answer 메소드', cnt);
    },

    init: function () {
        this.result();
        this.answer();
    }


};

obj.init(); // result 메소드 호출 실행
// console.log(obj.result());
// console.log(obj.answer());



// 객체를 호출 실행하는 방법
// console.log( obj );      //객체
// console.log( obj.irum);  // 객체.이름 문자열
// console.log( obj.age);   // 객체.나이 정수
// console.log( obj.mill);  // 객체. 군복무 참/거짓



//성적처리 객체
var sungjuk = {
    init: function () {
        this.tot();
        this.avg();
    },
    irum: '커피커피',
    kor: 90,
    eng: 50,
    mat: 70,
    tot: function () {
        console.log('이름', this.irum );
        console.log('총점', this.kor+this.eng+this.mat );
    },
    avg: function () {
        console.log('평균', (this.kor+this.eng+this.mat)/3 );
    }

}

sungjuk.init();

//  연습  //
var amsa = {
    init:function(){
        this.total();
        this.avg();
    },
    irum1:'용준',
    irum2:'재승',
    irum3:'성호',
    irum4:'동우',

    kor:50,
    eng:70,
    mat:60,
    total:function(){
        console.log('이름', this.irum1+this.irum2+this.irum3+this.irum4);
    },
    avg:function(){
        console.log('평균', (this.kor+this.eng+this.mat)/3);
    }
}

amsa.init();

////슬라이드1////

var cnt = 0;

// 이동할 대상에게 포지션을 주어야함.
var $slide = document.querySelector('#section1 .slide-wrap')
var $page = document.querySelector('.page')


// 다음슬라이드 클릭시 -1200만큼 이동
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


////// cnt > 3 ? cnt=3 : cnt; // 마지막 슬라이드 증가숫자가 3을 초과하면 3으로고정, 그렇지않으면 증가값 그대로
////// cnt < 0 ? cnt=0 : cnt; // 처음 슬라이드숫자가 0 이전이면 0으로 슬라이드 설정, 그렇지않으면 감소값 그대로
////// cnt > 2 ? cnt=2 : cnt; // 


setInterval(nextSlideFn, 3000); // 3초에 한번씩 자동으로 다음 슬라이드 호출 (1초가 1000)
//setTimeout(nextSlideFn, 5000);  // 5초후에 실행하고 끝 (타임아웃)




//// 슬라이드2////
////셀렉터 이름 구분하기

var cnt2 = 0;
var $slide2 = document.querySelector('#section2 .left-box .slide-wrap')

function nextSlideFn2() {
    cnt2 += 1;
    cnt2 > 3 ? cnt2 = 0 : cnt2;
    $slide2.style = 'left:' + (-400 * cnt2) + 'px';
}

function prevSlideFn2() {
    cnt2 -= 1;
    cnt2 < 0 ? cnt2 = 3 : cnt2;
    $slide2.style = 'left:' + (-400 * cnt2) + 'px';
}


////슬라이드3////
var cnt3 = 0;
var $slide3 = document.querySelector('#section2 .center-box .slide-wrap')

function downSlideFn() {
    cnt3 += 1;
    cnt3 > 3 ? cnt3 = 0 : cnt3;
    $slide3.style = 'top:' + (-200 * cnt3) + 'px';
}

function upSlideFn() {
    cnt3 -= 1;
    cnt3 < 0 ? cnt3 = 3 : cnt3;
    $slide3.style = 'top:' + (-200 * cnt3) + 'px';
}


////슬라이드4////
var cnt4 = 0;
var $slide4 = document.querySelector('#section2 .right-box .slide-wrap')

function nextSlideFn4() {
    cnt4 += 1;
    cnt4 > 3 ? cnt4 = 0 : cnt4;
    $slide4.style = 'left:' + (-400 * cnt4) + 'px';
}

function prevSlideFn4() {
    cnt4 -= 1;
    cnt4 < 0 ? cnt4 = 3 : cnt4;
    $slide4.style = 'left:' + (-400 * cnt4) + 'px';
}