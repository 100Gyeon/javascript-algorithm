function solution(arr) {
  if (arr.length == 1) return [-1];
  const min = Math.min(...arr); // spread operator 사용하면 배열의 숫자들 중 가장 큰 숫자를 쉽게 얻을 수 있다.
  const index = arr.indexOf(min); // min이 처음 나타나는 위치의 인덱스 리턴 (없으면 -1 리턴)
  arr.splice(index, 1); // index에서 한 개 요소 제거
  return arr;
}