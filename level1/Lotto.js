function getRanking(count) {
  switch (count) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}

function solution(lottos, win_nums) {
  let answer = [];
  const zeroCount = lottos.filter((x) => x === 0).length;
  const sameCount = lottos.filter((x) => win_nums.includes(x)).length;
  answer = [getRanking(zeroCount + sameCount), getRanking(sameCount)];
  return answer;
}
