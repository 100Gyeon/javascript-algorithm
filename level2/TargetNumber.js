const solution = (numbers, target) => {
  let answer = 0;

  const dfs = (depth, sum) => {
    // leaf node까지 탐색한 후 target과 일치하는지 검사
    if (depth === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return; // 가장 깊은 depth까지 도달했으므로 재귀에서 빠져나온다.
    }

    // +,- 2가지로 가지쳐서 탐색
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }

  dfs(0, 0);
  return answer;
}