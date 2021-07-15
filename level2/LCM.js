// 유클리드 호제법 사용
// a % b가 0이 되면 그때 b가 최대공약수
// gcd(a, b) == gcd(b, a % b)
// b가 0이 되면 그때 a가 최대공약수
function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

// 최소공배수 = 두 수의 곱 / 최대공약수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let answer = 1;
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

// 더 짧은 솔루션
function solution(num) {
  return num.reduce((a, b) => a * b / gcd(a, b));
}
function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}