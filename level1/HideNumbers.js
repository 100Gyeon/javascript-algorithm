function solution(phone_number) {
  let answer = '';
  let star = '';
  const length = phone_number.length;
  for (let i = 0; i < length - 4; i++) {
    star += "*";
  } // 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *로
  answer = star + phone_number.slice(-4); // slice(-4) : 뒤에서부터 4번째 idx부터 끝까지
  return answer;
}

// 더 짧은 솔루션
function solution(phone_number) {
  // repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
  // "*".repeat(4); => "****"
  const answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}