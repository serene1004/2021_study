(function($){

  var angle = {
      init:function(){
        this.circleAnimationFn();
        this.rotateGalleryFn();
      },
      circleAnimationFn:function(){
        //삼각함수를 활용한 둥근 물체 원형 라인 따라 회전 애니메이션
        var $circle = $('.circle'); //회전 할 원형 물체 
        var r = $('.ring2').innerWidth()/2; //반지름 300
        var cnt = 0;  //각도 0 ~ 360 361 ......  1200000000000
        var topVal = 0;
        var leftVal = 0;

            //1 countFn 함수
            function countFn(){
              // cnt+=30; //30도씩 증가 ..... 무한대
              cnt++; //1도씩 증가 ..... 무한대
              animationFn();
            }

            //2 animation 함수
            function animationFn(){
              // 각도를 TOP LEFT에 적용 사용 할려면 
              // 좌표값으로 사용하도록 계산 해야한다.
              // 그 방식이 원주율과 각도를 계산한 라디안 값이다.
              // 라디안 =  각도*(원주율 파이/180);
              // radian = cnt*(Math.PI*2/360); 지름
              radian = cnt*(Math.PI/180); //반지름

              // 싸인(sin)은  top 의 Y 좌표(수직좌표)를
              // 라디안 결과 값을 가지고 변환한다.
              sin =  Math.sin(radian); //top

              // 코싸인(cos)은  left 의 X 좌표(수평좌표)를
              // 라디안 결과 값을 가지고 변환한다.
              cos =  Math.cos(radian); //left

              // top = 반지름 * sin + 반지름
              // left = 반지름 * cos + 반지름

               //원을 따라 회전하는 물체의
               //top값은  반지름 * sin 좌표 + 반지름 이다.
              topVal = r * sin + r;

              //원을 따라 회전하는 물체의
              //left값은  반지름 * cos 좌표 + 반지름 이다.
              leftVal = r * cos + r;
              
              $circle.stop().animate({top: topVal, left: leftVal },0);

            }

            setInterval(countFn,10 );


      },
      rotateGalleryFn:function(){ //회전 슬라이드(갤러리)
        //12개를 회전하는 갤러리 슬라이드
        var r = $('.ring').innerWidth()/2; //반지름
        var cnt = [0,30,60,90,120,150,180,210,240,270,300,330]; //각도 배열 
        var x = []; //left 배열 leftVal 수평좌표
        var y = []; //top 배열 topVal 수직좌표
        var rad = [] //Radian
        var sin = [] //sin
        var cos = [] //cos



            //2. 회전 갤러리 슬라이드 애니메이션 함수
            var mainSlideGalleryFn = function(){
                //회전 계산
                for(var i=0; i<cnt.length; i++){ //0~11
                    rad[i] = cnt[i]*(Math.PI/180);  //라디안 = 각도*(원주율/180)             
                    sin[i] = Math.sin(rad[i]);      //싸인 좌표
                    cos[i] = Math.cos(rad[i]);      //코싸인 좌표
                    y[i]   = r * sin[i] + r ;       //수직좌표 - top값
                    x[i]   = r * cos[i] + r ;       //수평좌표 - left값
                    $('.gallery').eq(i).stop().animate({ top: y[i], left: x[i] }, 600); 
                }
            }
            

            //1. 카운트 함수
            var counterFn = function(){
                for(var i=0; i<cnt.length; i++){
                  cnt[i]+=30; //모든 각도에 30씩 증가
                  console.log( cnt );
                }
                mainSlideGalleryFn();
            }


            //3. 타이머 : 3초에 한번씩 실행
            setInterval(counterFn, 3000);  




      }
  }

  angle.init();


})(jQuery);