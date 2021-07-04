function solution(s) {
  let answer = '';
  const length = s.length;
  answer = s.substring(0, 1).toUpperCase();
  for (let i = 1; i < length; i++) {
    if (s.charAt(i) == ' ') {
      answer += ' ';
    } else {
      if (s.charAt(i - 1) == ' ') {
        answer += s.charAt(i).toUpperCase();
      } else {
        answer += s.charAt(i).toLowerCase();
      }
    }
  }
  return answer;
}

// 다른 솔루션
function solution(s) {
  let answer = '';
  const length = s.length;
  for (let i = 0; i < length; i++) {
    if (i == 0 || s[i - 1] == ' ') {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}