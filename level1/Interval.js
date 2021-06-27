function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// 더 짧은 솔루션
// map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
function solution(x, n) {
  return Array(n).fill(x).map((value, index) => (index + 1) * value)
}
