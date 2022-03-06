// 구구단 세로로 (행과열 바꾸기)
// table, tr, td을 ul li span 등으로 마음대로 변경하여 응용가능함.
var $gugudan = document.querySelector('#gugudan')
var txt = ''; // 변수내용삭제

for (var i = 1; i <= 9; i += 1) {
    txt+='<tr>';  // 줄시작(줄바꾸기)
    for (var j = 2; j <= 9; j += 1) {
        var x = (i*j) < 10 ? ('0'+(i*j)) : (i*j);

        txt += '<td>'+j+ '*' +i+ '=' +(x)+ '</td>'
    }
    txt+='</tr>';  // 줄끝
}
$gugudan.innerHTML = txt;