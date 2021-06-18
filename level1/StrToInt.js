// str이 1234면 1234를 반환하고, -1234면 -1234를 반환
function solution(s) {
  return parseInt(s);
}

// 솔루션 1
function solution(s) {
  return +s;
}
// int to string => "" + int
// string to int => +string

// 솔루션 2
function solution(s) {
  return s / 1;
}
// 사칙연산 되면서 문자가 자동으로 파싱