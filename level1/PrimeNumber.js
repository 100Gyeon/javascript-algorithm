function solution(n) {
  // 0과 1은 소수가 아니므로 false로 초기화, 나머지는 true로 초기화
  let arr = Array(n + 1).fill(true).fill(false, 0, 2);

  /*
  소수 찾기 : 에라토스테네스의 체 이용
  주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화한다.
  arr[i] 가 소수(true)일 경우, 반복문을 진행한다.
  1. 2 ~ n까지의 수가 있다.
  2. 2부터 n의 제곱근(루트n)까지 숫자 중 소수의 배수들을 제외(false)시키면 소수만 남는다.
  */
  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  // 배열에서 true인 값만 걸러내고, true인 값의 개수를 출력
  // filter 메서드 : 조건을 주고 해당 조건이 true인 요소를 모아 새로운 배열로 반환
  return arr.filter(item => item).length;
}

// 길이 n 배열 생성 및 초기화
// let arr = new Array(n).fill(value);

// arr.fill(value, start, end) : start 인덱스부터 end-1 인덱스까지 value로 채우기
