// alert('Hello World');

// 섹션2의 >박스 클릭시, 섹션1의 슬라이드 박스 너비 크기를
// 오른쪽에서 왼쪽으로 -1200씩 부드럽게(트랜지션) 이동

// 다음슬라이드 버튼을 클릭하면, 다음으로 이동하는 함수(nextSlideFn())를 호출한다.
alert();
var cnt = 0;

// 이동할 대상에게 포지션을 주어야함.
var $slide = document.querySelector('.slide-wrap')
var $page = document.querySelector('.page')


// 이전으로 이동하는 함수
// function prevSlideFn(){
//     cnt-=1;
//     alert('이전슬라이드 함수'+cnt);
// }

// 다음으로 이동하는 함수
// function nextSlideFn(){
//     cnt+=1;
//     alert('다음슬라이드 함수'+cnt);
// }


// 다음슬라이드 클릭시 -1200만큼 이동
function nextSlideFn(){
    cnt+=1;
    cnt > 3 ? cnt=0 : cnt;
    $slide.style = 'left:'+(-1200*cnt)+'px';
    $page.innerHTML = cnt+1 +'/4';
}



function prevSlideFn(){
    cnt-=1;
    cnt < 0 ? cnt=3 : cnt;
    $slide.style = 'left:'+(-1200*cnt)+'px';
}


////// cnt > 3 ? cnt=3 : cnt; // 마지막 슬라이드 증가숫자가 3을 초과하면 3으로고정, 그렇지않으면 증가값 그대로
////// cnt < 0 ? cnt=0 : cnt; // 처음 슬라이드숫자가 0 이전이면 0으로 슬라이드 설정, 그렇지않으면 감소값 그대로
////// cnt > 2 ? cnt=2 : cnt; // 


setInterval(nextSlideFn, 3000);  // 3초에 한번씩 자동으로 다음 슬라이드 호출 (1초가 1000)
//setTimeout(nextSlideFn, 5000);  // 5초후에 실행하고 끝 (타임아웃)