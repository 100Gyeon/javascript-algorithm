function solution(x) {
  const arr = x.toString().split("").map(number => parseInt(number));
  const sum = arr.reduce((result, curr) => result + curr);
  return x % sum == 0 ? true : false;
}

/*
map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
map(number => parseInt(number)) : 요소를 모두 정수로 변환한 배열을 반환

reduce() : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결괏값을 반환
reduce((result, curr) => result + curr) : 요소를 모두 합한 값을 반환
*/