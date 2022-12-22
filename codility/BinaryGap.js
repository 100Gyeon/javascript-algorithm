function solution(N) {
  const binaryList = N.toString(2).split('').map(Number);
  let max = 0;
  let gap = 0;
  binaryList.forEach((n) => {
    if (n === 1) {
      max = Math.max(max, gap);
      gap = 0;
    } else {
      gap++;
    }
  });
  return max;
}
