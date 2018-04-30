
function fibonacci(num) {  
  if(num === 0){
  	return 0; 
  }else if(num === 1){
   	return 1; 
  }else{
   	return fibonacci(num-1) + fibonacci(num-2);
  }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(10));
