function solution(a, b) {
  let answer = 0;
  if (a == b) return a;
  if (a > b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else if (b > a) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  }
  return answer;
}

// 가장 짧은 솔루션
// Math.abs(x) : x의 절대값 리턴
function solution(a, b) {
  return (a + b) * (Math.abs(b - a) + 1) / 2;
}

// 다른 솔루션
function solution(a, b) {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}