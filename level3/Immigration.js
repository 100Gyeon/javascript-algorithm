/* 문제의 핵심 : 최솟값, 최댓값을 구한 뒤 이분탐색으로 범위를 좁혀가며 답을 구하는 것 */
const solution = (n, times) => {
  // 이분탐색은 정렬되어 있는 상태에서 진행해야 한다.
  times.sort((a, b) => a - b);
  let min = 1;
  let max = n * times[times.length - 1];
  // let max = n * Math.max(...times);도 가능

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let people = 0;

    // mid 시간 안에 심사할 수 있는 사람의 수를 구한다.
    times.forEach(time => {
      people += Math.floor(mid / time);
    });

    // 반복문을 돌며 심사할 수 있는 사람 수(people)와 기다리는 사람 수(n)를 비교
    // 심사할 수 있는 사람 수 >= 기다리는 사람 수 → 주어진 시간 안에 해결 가능 → 시간 줄이고 그 값으로도 가능한지 다시 검사
    // 심사할 수 있는 사람 수 < 기다리는 사람 수 → 더 많은 시간이 있어야 해결 가능 → 시간 늘리기
    people >= n ? max = mid - 1 : min = mid + 1;
  }

  // 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return
  return min;
}