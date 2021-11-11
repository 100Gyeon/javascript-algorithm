function solution(N, road, K) {
  let answer = 0;

  // 마을 이동할 때 걸리는 최단 시간을 저장할 배열
  const timeArr = Array(N + 1).fill(Infinity);

  // 인접한 마을 간의 정보가 들어있는 배열
  const adjacent = Array.from(Array(N + 1), () => []);
  // 배열에 정보 저장
  road.forEach(([a, b, c]) => {
    adjacent[a].push({ to: b, time: c });
    adjacent[b].push({ to: a, time: c });
  });

  // 1번 마을부터 우선순위 큐에 저장
  let priorityQueue = [{ to: 1, time: 0 }];
  timeArr[1] = 0;

  // 우선순위 큐에서 꺼낼 노드가 없을 때까지 반복
  while (priorityQueue.length) {
    // 우선순위 큐에서 노드를 꺼냄
    const { to, time } = priorityQueue.pop(); // { to: 1, time: 0 } 구조 분해 할당

    // 연결된 인접 노드를 통해 특정 노드로 가는 거리 < 배열에 기록된 거리
    // -> 배열을 업데이트하고 우선순위 큐에 넣는다.
    // to: 현재 마을, move.to: 이동할 마을, move.time: 이동할 마을까지 걸리는 시간
    adjacent[to].forEach(move => {
      if (timeArr[to] + move.time < timeArr[move.to]) {
        timeArr[move.to] = timeArr[to] + move.time;
        priorityQueue.push(move);
      }
    });
  }

  // 1번 마을에 있는 음식점이 K 이하의 시간에 배달이 가능한 마을의 개수를 return
  answer = timeArr.filter((time) => time <= K).length;
  return answer;
}