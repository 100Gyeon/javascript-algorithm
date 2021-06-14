function solution(n) {
  const strN = n.toString().split('').sort().reverse(); // 문자열 배열 내림차순 정렬
  const answer = Number(strN.join('')); // 배열을 하나의 문자열로 만든 뒤 숫자로 변환
  return answer;
}

// 더 짧은 솔루션
function solution(n) {
  return parseInt((n + '').split('').sort().reverse().join(''));
}

/*
< 참고 >
(52 + "273")처럼 계산식 내에 문자열 존재하면, 다 문자열로 변환된다.
*/