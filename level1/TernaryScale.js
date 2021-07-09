function solution(n) {
  let arr = [];
  if (n == 1) {
    return 1;
  }
  while (n > 1) {
    if (n == 3) {
      return 1;
    }
    arr.push(Math.floor(n % 3));
    n /= 3;
  }
  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * Math.pow(3, i);
  }
  const answer = arr.reduce((sum, curr) => sum + curr);
  return answer;
}

// 더 짧은 솔루션
function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
/*
n.toString(3) : 3진법으로 n을 표현한 문자열 반환
.split('').reverse().join('') : 3진법 상에서 앞뒤로 뒤집은 문자열을 만들기 위함
parseInt(string, n) : string을 n진법으로 읽어서, 10진법으로 변환한 값을 리턴
*/