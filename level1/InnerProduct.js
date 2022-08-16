function solution(a, b) {
  let answer = 0;
  const length = a.length;
  for (let i = 0; i < length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// 다른 사람의 풀이
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
