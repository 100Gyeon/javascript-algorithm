function solution(absolutes, signs) {
  let answer = 0;
  const length = signs.length;
  for (let i = 0; i < length; i++) {
    if (signs[i] == false) {
      absolutes[i] *= -1;
    }
  }
  answer = absolutes.reduce((sum, curr) => sum + curr);
  return answer;
}