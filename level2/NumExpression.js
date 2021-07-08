function solution(n) {
  let answer = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum == n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
    sum = 0;
  }
  return answer;
}

/*
다른 솔루션
: 자연수 n을 연속한 자연수의 합으로 표현하는 가짓수 = 홀수인 약수의 개수
*/
function solution(n) {
  return Array(n).fill().map((v, i) => i + 1).filter(v => (!(n % v) && v % 2)).length;
}

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 == 1) {
      answer++;
    }
  }
  return answer;
}