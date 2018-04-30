<script>
function fibonacci(num) {  
  var a=0, b=1, temp;
  
  for(var i=1; i<num; i++){
   	temp = a+b;
    a = b; 
    b = temp;
     
     console.log(a + " " +b);
     console.log(" ");
  }
  return b;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3));
</script>
