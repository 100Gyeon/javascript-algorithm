function solution(n, k) {
  let answer = [];
  let peopleList = [];
  // 1부터 n까지 배열에 넣기
  for (let i = 1; i <= n; i++) {
    peopleList.push(i);
  }
  if (k === 1) return peopleList;

  // k번째 방법은 배열의 index로 k-1에 해당
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
