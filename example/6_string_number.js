
function alpha_string46(s){
  var length = s.length;
  var str = parseInt(s);
  
  var str2 = Number.isInteger(str);
  console.log(str2);
  
  if(isNaN(str)){
    return false;
  }else if (length == 4){
    return true;
  }else if (length == 6){
    return true;
  }else 
    return false;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("a234") );
console.log( alpha_string46("1234") );

