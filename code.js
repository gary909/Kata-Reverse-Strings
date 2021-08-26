function solution(str){
  var ans = str.split('').reverse().join("");
  return ans;
}

console.log(solution('world')); // returns 'dlrow'