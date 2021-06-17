function solution(n) {
  let answer = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      answer += '수';
    } else {
      answer += '박';
    }
  }
  return answer;
}

// 더 짧은 솔루션
// repeat() : 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
// slice(begin, end) : begin 인덱스부터 end-1 인덱스까지 텍스트를 추출하고 새 문자열을 반환 
function solution(n) {
  return "수박".repeat(n).slice(0, n);
}