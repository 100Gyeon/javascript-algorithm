const solution = (numbers, target) => {
  let answer = 0;

  const dfs = (depth, sum) => {
    // leaf node까지 탐색한 후 target에 만족하는지 검사
    if (depth === numbers.length) { // numbers 안을 모두 탐색했을 때
      if (sum === target) { // sum과 target이 같으면 answer 증가
        answer++;
      }
      return; // 가장 깊은 depth까지 도달했으므로 재귀에서 빠져나온다.
    }

    // 숫자가 +로 시작하는 자식 노드를 탐색
    dfs(depth + 1, sum + numbers[depth]);
    // 숫자가 -로 시작하는 자식 노드를 탐색
    dfs(depth + 1, sum - numbers[depth]);
  }

  dfs(0, 0);
  return answer;
}