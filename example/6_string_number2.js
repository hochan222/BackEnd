function alpha_string46(s){
  var result = true
  // 함수를 완성하세요
  var len = s.length;
  if(len != 4 && len != 6) return false;
  result = !isNaN(s);
 
  return result;
}

