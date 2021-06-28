function solution(answers) {
  let answer = [];
  const num1 = [1, 2, 3, 4, 5];
  const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const length = answers.length;
  let cnt1 = 0, cnt2 = 0, cnt3 = 0;

  for (let i = 0; i < length; i++) {
    if (answers[i] === num1[i % 5]) cnt1++;
    if (answers[i] === num2[i % 8]) cnt2++;
    if (answers[i] === num3[i % 10]) cnt3++;
  }

  const max = Math.max(cnt1, cnt2, cnt3);
  if (cnt1 === max) answer.push(1);
  if (cnt2 === max) answer.push(2);
  if (cnt3 === max) answer.push(3);
  return answer;
}