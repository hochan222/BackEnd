/*	함수를 완성해서 매개변수 array의 평균값을 return하도록 만들어 보세요.
	어떠한 크기의 array가 와도 평균값을 구할 수 있어야 합니다.*/


function average(array){
  let sum = 0;
  for(var i=0;i<array.length;i++){
  sum += parseInt(array[i]);  
  }
  return sum;
}

var testArray = [5,3,4] 
console.log("평균값 : " + average(testArray));