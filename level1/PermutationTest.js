function solution(arr) {
  const length = arr.length;
  const sortArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    if (sortArr[i] !== i + 1) return false;
  }

  return true;
}

// 다른 사람의 풀이
function solution(arr) {
  return arr.sort((a, b) => a - b).every((value, i) => value === i + 1);
}

/*
every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트한다. (Boolean 값을 반환)
빈 배열에서 호출하면 무조건 true를 반환한다.
every는 호출한 배열을 변형하지 않는다.

[Syntax]
every((element) => { ... } )
every((element, index) => { ... } )
every((element, index, array) => { ... } )

[Example]
[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true
*/
