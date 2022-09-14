function GCD(a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}

function solution(w, h) {
  const totalArea = w * h;
  const diagonalArea = w + h - GCD(w, h);
  return totalArea - diagonalArea;
}

/*
핵심
격자점이 존재하지 않는 경우 : 가로 + 세로 -1
격자점이 존재하는 경우 : 가로 + 세로 - 가로와 세로의 최대공약수
규칙으로 잘린(사용할 수 없는) 사각형의 개수를 구할 수 있다.
*/
