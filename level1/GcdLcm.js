function solution(n, m) {
  let answer = [];
  answer[0] = GCD(n, m);
  answer[1] = n * m / answer[0];
  return answer;
}
// 최대공약수 재귀 방식
function GCD(a, b) {
  if (b == 0) {
    return a;
  }
  // GCD(a, b) = GCD(b, r)이므로 (r = a % b)
  return GCD(b, a % b);
}

// (보충) 최대공약수 반복문 방식
function GCD(a, b) {
  while (b != 0) {
    let r = a % b; // 나머지를 구해준다.

    // GCD(a, b) = GCD(b, r)이므로 변환한다.
    a = b;
    b = r;
  }
  return a;
}

/*
최대공약수, 최소공배수 : 유클리드 호제법 이용

< 최대공약수 구하는 방법 >
A를 B로 나눈 나머지를 R이라고 할 때
GCD(A, B) == GCD(B, R)이라는 것 이용
R이 0이 되면 그때의 B가 A와 B의 최대공약수

< 최소공배수 구하는 방법>
n * m = 최대공약수(GCD) * 최소공배수(LCM)
최대공약수를 먼저 구한 뒤, 두 수의 곱을 최대공약수로 나눠주면 최소공배수 나옴
*/
