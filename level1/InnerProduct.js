function solution(a, b) {
  let answer = 0;
  const length = a.length;
  for (let i = 0; i < length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// (1) 다른 사람의 풀이
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

// (2) 다른 사람의 풀이
function solution(a, b) {
  return a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
}

/*
리듀서 함수는 4개의 인자를 가진다.
- 누산기 (acc)
- 현재 값 (cur)
- 현재 인덱스 (idx)
- 원본 배열 (src)

구문
arr.reduce(callback[, initialValue])

매개변수
- callback : 배열의 각 요소에 대해 실행할 함수. 4가지 인수를 받는다.
- initialValue : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 없으면 배열의 첫 번째 요소를 사용. 
                (주의) 빈 배열에서 initialValue 없이 reduce()를 호출하면 오류 발생.
*/
