// 솔루션
function solution(numbers) {
  let answer = [];
  numbers.forEach((number) => {
    // 현재 수를 비트로 변환
    let bit = number.toString(2);
    const lastChar = bit.slice(-1);
    // 마지막 숫자가 0이면 기존 숫자 + 1, 0이 아니면 '01'을 '10'으로 바꾸기
    if (lastChar === '0') {
      answer.push(number + 1);
    } else {
      const index = bit.lastIndexOf('01');
      bit = bit.substring(0, index) + '10' + bit.substring(index + 2, bit.length);
      answer.push(parseInt(bit, 2));
    }
  });
  return answer;
}

// 테스트 10, 11 시간 초과
function solution(numbers) {
  let answer = [];
  numbers.forEach((number) => {
    // 현재 수를 비트로 변환
    let bit = number.toString(2);
    let bitList = bit.split('');

    while (true) {
      let cnt = 0;
      number++;
      // 현재보다 큰 수를 비트로 변환
      let nextBit = number.toString(2);
      let nextBitList = nextBit.split('');
      // 길이 비교해서 긴 것에 맞춤
      let bitListLength = bitList.length;
      let nextBitListLength = nextBitList.length;
      if (bitListLength !== nextBitListLength) {
        const length = Math.max(bitListLength, nextBitListLength);
        bit = bit.padStart(length, '0');
        nextBit = nextBit.padStart(length, '0');
        bitList = bit.split('');
        nextBitList = nextBit.split('');
      }
      // 다른 비트의 개수 세기
      for (let i = 0; i < bitList.length; i++) {
        if (bitList[i] !== nextBitList[i]) cnt++;
      }
      if (cnt <= 2) {
        answer.push(number);
        break;
      }
    }
  });

  return answer;
}
