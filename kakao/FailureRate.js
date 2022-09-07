function solution(N, stages) {
  let answer = [];
  let length = stages.length;

  stages.sort((a, b) => a - b);
  const countMap = stages.reduce((acc, cur) => {
    acc.set(cur, (acc.get(cur) || 0) + 1);
    return acc;
  }, new Map());

  for (let [key, value] of countMap.entries()) {
    if (key <= N) {
      if (value === length) {
        const temp = Array.from({ length: key - 1 }, (_, i) => i + 1);
        answer = [key, ...temp];
      }
      length -= value;
    }
  }
  return answer;
}
