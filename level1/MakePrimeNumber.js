function isPrimeNumber(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  let answer = 0;
  const length = numbers.length;

  /*
  배열 안의 서로 다른 숫자 3개 더하기 → 삼중 for문 사용
  배열 안의 서로 다른 숫자 더하기 === 서로 다른 인덱스 선택해 더하기
  */
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        // 서로 다른 숫자 3개를 더하고 소수인지 판별
        const sum = numbers[i] + numbers[j] + numbers[k];
        if (isPrimeNumber(sum)) answer++;
      }
    }
  }

  return answer;
}
