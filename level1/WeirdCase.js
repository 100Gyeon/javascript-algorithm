function solution(s) {
  let answer = '';
  const arr = s.split("");
  let cnt = 0;
  for (let item of arr) {
    cnt = item.includes(" ") ? 0 : cnt + 1;
    answer += (cnt % 2 != 0) ? item.toUpperCase() : item.toLowerCase();
  }
  return answer;
}