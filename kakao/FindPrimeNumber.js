function isPrimeNumber(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  const number = n.toString(k);
  const splittedNumberList = number.split('0');
  splittedNumberList.forEach((item) => {
    if (item && isPrimeNumber(+item)) answer++;
  });
  return answer;
}
