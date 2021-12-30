const solution = (n, wires) => {
  // 순회한 송전탑 개수 저장
  let cnt = 0;
  // 송신탑 방문 여부 저장
  let visit = Array(n + 1).fill(0);

  // 데이터 추상화
  // 2차원 배열을 만들고 0으로 초기화
  let tree = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  // 연결된 전선만 1로 표시
  wires.forEach(([v1, v2]) => {
    tree[v1][v2] = 1;
    tree[v2][v1] = 1;
  });

  const dfs = (tower) => {
    // 순회한 송전탑 개수 증가시키고, 방문 여부 체크
    cnt++;
    visit[tower] = 1;

    for (let i = 1; i <= n; i++) {
      tree[tower][i] && !visit[i] && dfs(i);
    }
  }

  let answer = wires.reduce((acc, [v1, v2]) => {
    // 초기화
    cnt = 0;
    visit.fill(0);
    // 전선 끊기
    tree[v1][v2] = 0;
    tree[v2][v1] = 0;
    // 1번 송전탑부터 순회
    dfs(1);
    // 전선 다시 연결
    tree[v1][v2] = 1;
    tree[v2][v1] = 1;

    return Math.min(acc, Math.abs(n - cnt * 2));
  }, n);

  return answer;
}