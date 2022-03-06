// 그룹(블록)을 설정(함수)하고 사용하는 방법
// ++ 1씩증가 / +=1 :1씩증가 / +=2 : 2씩증가 ...
// -- 1씩감소 / -=1 :1씩감소 / -=2 : 2씩감소 ...

var cnt = 0;
var cnt1 = 0;
var cnt2 = 0;
var cnt3 = 0;
var cnt4 = 0;


var $mainBtn1 = document.querySelector('.main-btn1'); //버튼의 클래스를 변수 지정함
var $mainBtn2 = document.querySelector('.main-btn2'); //버튼의 클래스를 변수 지정함
var $mainBtn3 = document.querySelector('.main-btn3'); //버튼의 클래스를 변수 지정함
var $mainBtn4 = document.querySelector('.main-btn4'); //버튼의 클래스를 변수 지정함

var $main = document.querySelector('main');
var $logo = document.querySelector('logo');

function logoFn(){
    cnt+=100;
    $main.style = 'margin-top:'+cnt+'px';
}


function init1Fn() {

}

function init2Fn() {

}

function init3Fn() {

}

function init4Fn() {

}