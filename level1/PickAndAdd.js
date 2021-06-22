function solution(numbers) {
  let answer = [];
  const length = numbers.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  const uniqueArr = [...new Set(answer)].sort((a, b) => (a - b));
  return uniqueArr;
}

/*
< Set으로 배열 중복 제거하기 >
Set은 중복을 허용하지 않는 값을 모아놓은 Collection 객체

const uniqueArr = [...new Set(array)];
const uniqueArr = Array.from(new Set(array));

Spread Operator(...)를 사용하여 Set 객체를 다시 배열로 변환
Set 객체를 배열로 변환할 때, Spread Operator 대신
Array.from() 또는 forEach()문을 사용할 수도 있다.
*/