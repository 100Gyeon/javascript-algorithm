// 효율성 테스트 실패 (시간 초과)
function solution(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i, 2);
      i = -1;
    }
  }
  let answer = arr.length == 0 ? 1 : 0;
  return answer;
}

// 솔루션
function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length == 0 || stack[stack.length - 1] !== s[i]) {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] == s[i]) {
      stack.pop();
    }
  }
  if (stack.length == 0) answer = 1;
  return answer;
}