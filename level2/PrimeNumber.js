// 소수 찾기 : 에라토스테네스의 체 이용
function getPrimeNumberBooleanList(n) {
  let primeNumberBooleanList = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i <= n; i++) {
    if (primeNumberBooleanList[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeNumberBooleanList[j] = false;
      }
    }
  }

  return primeNumberBooleanList;
}

function solution(numbers) {
  let answer = 0;
  // 주어진 numbers 문자열을 문자열 배열로 변환
  const numberList = numbers.split('').sort((a, b) => b - a);
  const maxNumber = Number(numberList.join(''));
  const primeNumberBooleanList = getPrimeNumberBooleanList(maxNumber);

  for (let i = 2; i <= maxNumber; i++) {
    // 소수가 아니면 다음 숫자로 넘어감
    if (primeNumberBooleanList[i] === false) continue;

    // 소수면 문자열 배열로 변환
    // i가 17이라면 primeNumberStringList는 ['1','7']
    const primeNumberStringList = i.toString().split('');

    // numberList의 값을 포함하면 primeNumberStringList(현재 숫자의 문자열 배열)에서 제거
    for (const value of numberList) {
      const index = primeNumberStringList.indexOf(value);
      if (index > -1) {
        primeNumberStringList.splice(index, 1);
      }
    }

    if (primeNumberStringList.length === 0) answer++;
  }
  return answer;
}
