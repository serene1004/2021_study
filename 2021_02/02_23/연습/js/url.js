function goUrl(z){
    // location.href='url'; 현재창으로 url 열기
    // window.open('url'); 새창으로 url 열기

    /////// 이런식으로 스위치문으로도 가능하다.
    // switch(z){
    //     case 'Home':
    //         location.href = './index.html';
    //     break;

    //     case 'noticeMore':
    //         window.open('http://www.naver.com');
    //         break;

    //     case 'Menu1':
    //         location.href='./Menu1';
    //         break;        

    //     default:
    // }


    // 로고 클릭시 홈으로
    if (z=='Home'){
        location.href='index.html';
    }

    // 공지사항 +버튼 클릭시 공지사항 새창이 열리게끔(일단은 네이버로)
    else if (z=='noticeMore'){
        window.open('http://www.naver.com');
    }

    // 메인메뉴1
    else if (z=='Menu1'){
        location.href='Menu1';
    }

    else if (z=='Menu1-1'){
        location.href='Menu1-1';
    }
    else if (z=='Menu1-2'){
        location.href='Menu1-2';
    }
    else if (z=='Menu1-3'){
        location.href='Menu1-3';
    }
    else if (z=='Menu1-4'){
        location.href='Menu1-4';
    }
    
    // 메인메뉴2
    else if (z=='Menu2'){
        location.href='Menu2';
    }
    
    else if (z=='Menu2-1'){
        location.href='Menu2-1';
    }
    else if (z=='Menu2-2'){
        location.href='Menu2-2';
    }
    else if (z=='Menu2-3'){
        location.href='Menu2-3';
    }
    else if (z=='Menu2-4'){
        location.href='Menu2-4';
    }

    // 메인메뉴3
    else if (z=='Menu3'){
        location.href='Menu3';
    }
    
    else if (z=='Menu3-1'){
        location.href='Menu3-1';
    }
    else if (z=='Menu3-2'){
        location.href='Menu3-2';
    }
    else if (z=='Menu3-3'){
        location.href='Menu3-3';
    }
    else if (z=='Menu3-4'){
        location.href='Menu3-4';
    }

    // 메인메뉴4
    else if (z=='Menu4'){
        location.href='Menu4';
    }    

    else if (z=='Menu4-1'){
        location.href='Menu4-1';
    }
    else if (z=='Menu4-2'){
        location.href='Menu4-2';
    }
    else if (z=='Menu4-3'){
        location.href='Menu4-3';
    }
    else if (z=='Menu4-4'){
        location.href='Menu4-4';
    }

    // 그 외
    else{
        alert('url값이 잘못된거같아. 확인해봐');
        return false;
    }
};

// 패밀리사이트 점프메뉴(자바스크립트 스타일. form태그내 select태그에서 onchange="goFamily(familyForm.family.value);")
// function goFamily(z){
//     location.href=z;
// };