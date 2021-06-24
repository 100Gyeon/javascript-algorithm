function solution(progresses, speeds) {
  let answer = [0]; // let answer = [];은 안 된다.
  let time = []; // 며칠 뒤 배포 가능한지 담아놓는 배열
  for (let i = 0; i < progresses.length; i++) {
    time[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }
  let max = time[0]; // 일단 max값을 time[0]으로 지정

  for (let i = 0, j = 0; i < time.length; i++) {
    if (time[i] <= max) { // time 배열이 [7, 3, 9]이고 max가 7일 때, time[0] <= max, time[1] <= max이므로 answer[0] = 2
      answer[j] += 1;
    } else {
      max = time[i];
      answer[++j] = 1;
    }
  }
  return answer;
}

// Array.prototype.map()을 사용한 솔루션
function solution(progresses, speeds) {
  let answer = [0];
  let time = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let max = time[0];

  for (let i = 0, j = 0; i < time.length; i++) {
    if (time[i] <= max) {
      answer[j] += 1;
    } else {
      max = time[i];
      answer[++j] = 1;
    }
  }
  return answer;
}