var $table = document.querySelector('#gugudan')
var txt = ''; // 변수내용삭제

for (var i = 0; i < 5; i += 1) { //줄만들기
    txt+='<tr>';
    for (var j = 1; j <= 5; j += 1) { // 칸만들기
        txt+='<td>'+(j+j)+'</td>'
        // var x = (i*j) < 10 ? ('0'+(i*j)) : (i*j);

        // txt += '<td>'+j+ '*' +i+ '=' +(i*j)+ '</td>'
    }
    txt+='</tr>';
}
$table.innerHTML = txt;