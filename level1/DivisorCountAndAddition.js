function getDivisorCount(num) {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  return count;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (getDivisorCount(i) % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

// 다른 사람의 풀이
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    // 제곱근이 정수면 약수의 개수가 홀수
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
