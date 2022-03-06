;(function($,window,document,undefined){

    var komsco = {
        init:function(){
            this.cookieFn();
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.footerFn();
        },
        cookieFn:function(){
            var today = null;
            var $closeBtn = $('.close-btn');
            var $popup = $('#popup');
            var $header = $('#header');
            var txt = '';

            // 1. 쿠키설정(setCookie)
            // 언제? 오늘하루동안 열리지 않음을 체크(checked)하고 팝업창을 닫기 한 경우에 쿠키 설정
            // 1-1. 클릭이벤트와 체크박스 체크 유무            
            $closeBtn.on({
                click:function(event){
                    event.preventDefault();
                    if(cookieForm.check.checked){ //(도큐먼트.)form네임.체크박스이름.체크되엇다면
                        setCookieFn('popup2021052601', 'no', 1); //아규먼트:: 매개변수(파라미터) 로 쿠키이름, 쿠키값,만료일을 보냄
                        $popup.addClass('addPop');
                        $header.addClass('addPop');
                    }
                }
            });

            // 1-2. 함수 쿠키설정 함수
            function setCookieFn(cookieName, cookieValue, expires){ //매개변수(파라미터):: 아규먼트로부터 쿠키이름, 쿠키값,만료일을 받음
                today = new Date();
                today.setDate(today.getDate() + expires);

                txt += cookieName + '=' + cookieValue + ';'
                txt += 'expires=' + today.toUTCString() + ';';
                document.cookie = txt ;
            }

            // 2. 팝업창오픈 : 쿠키가져오기
            // 팝업창 오픈 유무 결정
            // 하루동안 열리지 않음이 설정된 쿠키값 가져와서 프로그래밍
            // 2-1. 쿠키 가져오는 함수
            function getCookieFn(cookieName){
                // 매개변수(name)를 받아서
                // 쿠키이름을 브라우저에서 쿠키가져오기
                // 그리고 가져온 쿠키와 배개변수 쿠키를 비교
                // 쿠키이름이 존재하면 value값을 리턴해줌
                // 없으면 공백만 리턴
                // return 'no';
                var start = 0;
                var end = cookieName.length;
                var end = cookieName.cookie.indexOf('=');

                // console.log(document.cookie);
                if(document.cookie.slice(start, end)===cookieName){
                    // value의 시작위치를 찾기 위해서 '=' 쿠키값 바로 1칸 뒤에 등호 위치를 검색한다.
                    start = document.cookie.indexOf('=')+1;
                    return document.cookie.slice(start);
                }
                return '';
            }

            // 2-2. 팝업창이 열리게 해주는 함수
            function openPopupFn(){
                // getCookeFn() 함수 호출=>쿠키가져옴
                // 그리고 해당하는 쿠키가 존재하면
                // 쿠키값을 가져와서 비교판단
                // 쿠키값이 있다면 팝업창 열지않음 ,, 없다면 팝업창 오픈
                var isCookie = getCookieFn('popup2021052601'); // 쿠키이름이 잇냐없냐 확인
                console.log(isCookie)
                if(isCookie =='no'){ // 팝업창 열지않음
                    $popup.addClass('addPop');
                    $header.addClass('addPop');
                }
                else{   // 팝업창 열림
                    $popup.removeClass('addPop');
                    $header.removeClass('addPop');
                }
            }
            openPopupFn();


        },
        headerFn:function(){
            var $a = $('#header a');

            $a.on({
                click:function(e){
                    e.preventDefault();
                    var url = $(this).attr('href');
                    window.location.href = 'http://localhost/05_26_KOMSCO' + url;
                }
            });


        },
        section1Fn:function(){
            var $slideView = $('#section1 .slide-view');
            var $slideWrap = $('#section1 .slide-wrap');
            var $slide     = $('#section1 .slide');
            var $playBtn   = $('#section1 .play-btn');
            var $stopBtn   = $('#section1 .stop-btn');
            var cnt = 0;
            var btn = null;
            var z = null;

            var touchS     = 0;
            var touchE     = 0;
            var touchD     = false;
            
            var setId    = null;
            var setId2   = null;
            var timercnt = 0;
            var $pageBtn = $('#section1 .page-btn');
            var $goNext  = $('#section1 .go-next');
            
            $pageBtn.eq(0).addClass('addCount');

            function mainSlideFn(){
                if(btn === false){
                    if(z === null){
                        z=cnt===3?0:cnt+1;
                    }
                    $slide.css({zIndex:1}).stop().animate({opacity:1}, 0);
                    $slide.eq(cnt).css({zIndex:2});
                    // $slide.eq(cnt===3?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0}, 400);
                    $slide.eq(z).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0}, 400);
                }
                else if(btn === true){
                    if(z === null){ // 페이지버튼을 클릭한적이 없는경우
                        z=cnt-1;
                    }
                    $slide.css({zIndex:1});
                    $slide.eq(z).css({zIndex:2});
                    // $slide.eq(cnt-1).css({zIndex:2});
                    $slide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1}, 400);
                }
                $pageBtn.removeClass('addCount');
                $pageBtn.eq(cnt).addClass('addCount');
                z=null;
            }
            function prevSlideCountFn(){
                btn = false;
                cnt--;
                if(cnt<0){
                    cnt=3;
                }
                mainSlideFn();
                slideTimerFn();
            }
            function nextSlideCountFn(){
                btn = true;
                cnt++;
                if(cnt>3){
                    cnt=0;
                }
                mainSlideFn();
                slideTimerFn();
            }

            $playBtn.on({
                click:function(){
                    $(this).removeClass('addBtn');
                    $stopBtn.removeClass('addBtn');
                    slideTimerFn();
                }
            });
            $stopBtn.on({
                click:function(){
                    $(this).addClass('addBtn');
                    $playBtn.addClass('addBtn');
                    clearInterval(setId);
                    clearInterval(setId2);
                }
            });

            $slideView.on({
                mousedown:function(e){
                    touchD = true;
                    e.preventDefault();
                    touchS = e.clientX;
                },
                mouseup:function(e){
                    touchD = false;
                    e.preventDefault();
                    touchE = e.clientX;
                    touchSwipeFn();
                },
                mouseleave:function(e){
                    if(touchD === true){
                        touchE = e.clientX;
                        touchSwipeFn();
                        touchD = false;
                    }
                }
            });
            function touchSwipeFn(){
                if(touchS-touchE > 30){
                    if(!$slide.is(':animated')){
                        $stopBtn.removeClass('addBtn');
                        $playBtn.removeClass('addBtn');
                        nextSlideCountFn();
                    }
                }
                if(touchS-touchE < -30){
                    if(!$slide.is(':animated')){
                        $stopBtn.removeClass('addBtn');
                        $playBtn.removeClass('addBtn');
                        prevSlideCountFn();
                    }
                }
            }

            function autoPlayFn(){
                setId = setInterval(nextSlideCountFn, 5000);
            }
            autoPlayFn();

            function slideTimerFn(){
                timercnt = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    timercnt++;
                    if (timercnt >= 5) {
                        clearInterval(setId2);
                        nextSlideCountFn();
                        autoPlayFn();
                    }
                }, 1000);
            }

            $goNext.on({
                click:function(event){
                    event.preventDefault();
                    var url = $(this).attr('href');
                    $('html,body').stop().animate({scrollTop:$(url).offset().top}, 800);
                }
            });

            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(event){
                        event.preventDefault();
                        $stopBtn.removeClass('addBtn');
                        $playBtn.removeClass('addBtn');
                        z=cnt;
                        if(cnt > idx){
                            btn = false;
                            cnt=idx;
                            mainSlideFn();
                            slideTimerFn();
                        }
                        if(cnt < idx){
                            btn = true;
                            cnt=idx;
                            mainSlideFn();
                            slideTimerFn();
                        }
                    }
                })
            })

            

        },
        section2Fn:function(){
            var $pageBtn = $('#section2 .page-btn');
            var $row2_2 = $('#section2 .row2-2');

            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(event){
                        event.preventDefault();
                        $pageBtn.removeClass('addBtn');
                        $(this).addClass('addBtn');
                        if(idx === 0){
                            $row2_2.removeClass('addBtn');
                        }
                        else if(idx === 1){
                            $row2_2.addClass('addBtn');
                        }
                    }
                })
            });




        },
        section3Fn:function(){

        },
        section4Fn:function(){

        },
        section5Fn:function(){

        },
        section6Fn:function(){

        },
        footerFn:function(){
            var $familyBtn = $('#footer .family-btn');
            var $familyWrap = $('#footer .family-wrap');

            $familyBtn.on({
                click:function(){
                    $(this).toggleClass('addClick');
                    $familyWrap.toggleClass('addClick');
                }
            });

        }
    }
    komsco.init();

})(jQuery,window,document);