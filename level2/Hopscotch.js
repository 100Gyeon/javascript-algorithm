// Dynamic Programming (동적 계획법)
function solution(land) {
  return Math.max(
    ...land.reduce(
      (a, c) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}

/*
정확성, 효율성 통과 x
무조건 지금 상황에서의 최선을 선택하는 "탐욕법"으로 문제를 푼다면
다음 줄에서 더 큰 숫자를 선택할 기회를 잃을 수 있기 때문에 다른 접근이 필요함.
*/
function solution(land) {
  let answer = 0;
  let maxIndex = land[0].indexOf(Math.max(...land[0]));
  answer += land[0][maxIndex];
  for (let i = 1; i < land.length; i++) {
    land[i].splice(maxIndex, 1);
    maxIndex = land[i].indexOf(Math.max(...land[i]));
    answer += land[i][maxIndex];
  }
  return answer;
}
