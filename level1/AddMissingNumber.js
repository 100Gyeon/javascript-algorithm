function solution(numbers) {
  const all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filteredList = all.filter((x) => !numbers.includes(x));
  const sum = filteredList.reduce((a, b) => a + b);
  return sum;
}

/*
(1) 교집합 구하기
const intersection = arr1.filter((x) => arr2.includes(x));

(2) 차집합 구하기
const difference = arr1.filter((x) => !arr2.includes(x));
*/
