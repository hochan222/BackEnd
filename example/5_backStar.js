
function printReversedTriangle(num) {
  var str = "";
  
  for(var i=num; i>0; i--){   
    for(var j=i; j>0; j--){
     	str += "*";
    }
      str += "\n";
  }
  return str;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " +'\n'+ printReversedTriangle(4));

