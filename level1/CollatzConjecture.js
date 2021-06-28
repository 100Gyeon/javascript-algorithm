function calculate(num) {
  if (num % 2 == 0) {
    return num / 2;
  } else {
    return num * 3 + 1;
  }
}

function solution(num) {
  let answer = 0;
  while (num != 1) {
    num = calculate(num);
    answer++;
    if (answer >= 500) {
      return -1;
    }
  }
  return answer;
}