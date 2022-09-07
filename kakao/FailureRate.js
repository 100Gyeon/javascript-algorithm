function solution(N, stages) {
  const answer = [];
  for (let i = 1; i <= N; i++) {
    const failedPlayers = stages.filter((stage) => stage === i).length;
    const totalPlayers = stages.filter((stage) => stage >= i).length;
    const failureRate = failedPlayers / totalPlayers;
    answer.push([i, failureRate]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((x) => x[0]);
}
