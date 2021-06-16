function solution(n) {
  let answer = 0;
  const arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    answer += parseInt(arr[i]);
  }
  return answer;
}

// 더 짧은 솔루션
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}