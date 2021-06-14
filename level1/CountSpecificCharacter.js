function solution(s) {
  let answer = false;
  let count_p = 0;
  let count_y = 0;

  for (let char of s) {
    if (char == 'p' || char == 'P') {
      count_p++;
    } else if (char == 'y' || char == 'Y') {
      count_y++;
    }
  }
  if (count_p == count_y) {
    answer = true;
  }
  return answer;
}