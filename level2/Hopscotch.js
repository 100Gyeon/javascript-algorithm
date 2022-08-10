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

// 정확성, 효율성 통과 x
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
