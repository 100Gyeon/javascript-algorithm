function solution(n, lost, reserve) {
  let answer = 0;
  let students = Array(n).fill(0); // 기본적으로 모든 학생은 0인 상태로 표시
  for (let idx of lost) {
    students[idx - 1] += -1; // 도난당했으면 -1
  }
  for (let idx of reserve) {
    students[idx - 1] += 1; // 여분을 가지고 있으면 +1
  }
  for (let i = 0; i < n; i++) {
    if (students[i] == -1) { // i번째 학생이 체육복을 분실했으면
      if ((students[i - 1] != null) && (students[i - 1] == 1)) {
        // 앞에 학생이 있는지 확인, 앞에 있는 학생이 여분을 가지고 있는지 확인
        students[i] = 0;
        students[i - 1] = 0;
      } else if ((students[i + 1] != null) && (students[i + 1] == 1)) {
        // 뒤에 학생이 있는지 확인, 뒤에 있는 학생이 여분을 가지고 있는지 확인
        students[i] = 0;
        students[i + 1] = 0;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (students[i] != -1) {
      answer++;
    }
  }
  return answer;
}