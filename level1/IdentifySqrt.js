function solution(n) {
  let answer = -1;
  const sqrt = Math.sqrt(n);
  for (let i = 1; i <= sqrt; i++) {
    if (sqrt == i) {
      answer = Math.pow(i + 1, 2);
    }
  }
  return answer;
}

/*
Math.sqrt(x) : 숫자의 제곱근을 반환
Math.pow(x, y) : x의 y 제곱을 반환
*/