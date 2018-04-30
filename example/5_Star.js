<script>
function printTriangle(num) {
  var str = "";
  
  for(var i=1; i<num+1; i++){   
    for(var j=1; j<=i; j++){
     	str += "*";
    }
      str += "\n";
  }
  return str;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( printTriangle(3) );
</script>
