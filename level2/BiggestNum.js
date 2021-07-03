function solution(numbers) {
  let str = numbers.map(num => num + '');
  let answer = str.sort((a, b) => (b + a) - (a + b)).join('');

  // 예외 : [0, 0, 0, 0]이 주어진 경우, answer로 0000이 아닌 0 리턴
  if (str[0] == 0) {
    answer = "0";
  }
  return answer;
}

// 다른 솔루션
function solution(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}