(function ($) {

  var angle = {
    init: function () {
      this.circleAnimationFn();
    },
    circleAnimationFn: function () {
      // 삼각함수를 활용한 둥근 물체 원형 라인 따라 회전 애니메이션
      var $circle = $('.circle'); //회전 할 원형 물체 
      var r = $('.ring2').innerWidth() / 2; //반지름
      var cnt = 0; //각도 0 ~ 360
      var topVal = 0;
      var leftVal = 0;

      // countFn 함수
      function countFn() {
        cnt+=10;
        animationFn();
      }

      //2 animation 함수
      function animationFn() {
        // console.log('Math.PI', Math.PI);
        // cos
        // 라디안 = 각도*(PI()/180);
        // 사인 =  SIN(라디안);
        // 코사인 =  COS(라디안);
        // 탑값 = 반지름*사인+반지름
        // 레프트값 = 반지름*코사인+반지름
        var radian = (cnt*0.1) * (Math.PI / 180); // 라디안
        var sin = Math.sin(radian); //사인
        var cos = Math.cos(radian); //코사인
        topVal = r * sin + r;  // sin    //Y 좌표(TOP, BOTTOM)
        leftVal = r * cos + r; // cos    //X 좌표(LEFT, RIGHT)

        // 라디안 = 각도*(PI()/180);
        // topVal  = r * Math.sin(라디안) + r ;
        // topVal  = r * Math.cos(라디안) + r ;
        // topVal  = r * Math.sin(cnt*(Math.PI/180)) + r ; // Y 좌표
        // leftVal = r * Math.cos(cnt*(Math.PI/180)) + r ; // X 좌표

        $circle.css({transform:'translateY('+ topVal +'px) translateX('+ leftVal +'px)', marginLeft:-625, marginTop:-325});
      }

      setInterval(countFn, 10);

    }
  }

  angle.init();


})(jQuery);