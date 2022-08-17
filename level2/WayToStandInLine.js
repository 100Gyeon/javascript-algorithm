function solution(n, k) {
  let answer = [];
  let peopleList = [];
  // 1부터 n까지 배열에 넣기
  for (let i = 1; i <= n; i++) {
    peopleList.push(i);
  }
  if (k === 1) return peopleList;

  // k번째 방법은 배열[k-1]에 해당
  let index = k - 1;
  // 팩토리얼도 reduce로 구할 수 있음
  let factorial = peopleList.reduce((acc, cur) => acc * cur, 1);

  while (answer.length < n) {
    factorial /= peopleList.length;
    const person = peopleList[Math.floor(index / factorial)];
    answer.push(person);
    index %= factorial;
    peopleList = peopleList.filter((item) => item !== person);
  }

  return answer;
}

/*
Array.from()을 사용하면 반복문 없이도
특정 길이의 배열을 만들어 연속된 수를 넣을 수 있다.
let peopleList = Array.from({ length: n }, (_, i) => i + 1);
*/
