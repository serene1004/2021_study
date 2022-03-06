var cnt = 0;

var $slideWrap = document.querySelector('.slide-wrap');

function prevSlideFn(){
    cnt-=1;
    cnt < 0 ? cnt=3 : cnt;
    $slideWrap.style = 'left:'+(-1200*cnt)+'px';
}

function nextSlideFn(){
    cnt+=1;
    cnt > 3 ? cnt=0 : cnt;
    $slideWrap.style = 'left:'+(-1200*cnt)+'px';
}

function doneFn(){
    cnt+=1;
    cnt > 0 ? cnt=0 : cnt;
    $slideWrap.style = 'left:'+(-1200*cnt)+'px';
}

setInterval(nextSlideFn, 3000);