const solution = (n, times) => {
  // 이분탐색은 정렬되어 있는 상태에서 진행해야 한다.
  times.sort((a, b) => a - b);
  let min = 1;
  let max = n * times[times.length - 1];

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let people = 0;

    // mid 시간 안에 심사할 수 있는 사람의 수를 구한다.
    times.forEach(time => {
      people += Math.floor(mid / time);
    });

    // 반복문을 돌며 심사할 수 있는 사람 수(people)와 기다리는 사람 수(n)를 비교
    // 심사할 수 있는 사람 수 > 기다리는 사람 수 → 더 적은 시간 안에 해결 가능 → 시간 줄이기
    // 심사할 수 있는 사람 수 < 기다리는 사람 수 → 더 많은 시간이 있어야 해결 가능 → 시간 늘리기
    people >= n ? max = mid - 1 : min = mid + 1;
  }

  // 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return
  return min;
}