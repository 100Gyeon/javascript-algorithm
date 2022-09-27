// 1 <-> 2번, 3 <-> 4번 참가자끼리 만난다 = 2로 나누어 떨어지는 값의 n-1번째 값과 만난다
// a와 b가 만나게 되는 순간, 즉 같은 번호가 되는 순간까지 라운드를 진행

function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}
