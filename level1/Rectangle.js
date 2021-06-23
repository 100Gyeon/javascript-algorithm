function solution(v) {
  let answer = [[]];

  if (v[0][0] == v[1][0]) { answer[0] = v[2][0]; }
  else if (v[0][0] == v[2][0]) { answer[0] = v[1][0]; }
  else if (v[1][0] == v[2][0]) { answer[0] = v[0][0]; }

  if (v[0][1] == v[1][1]) { answer[1] = v[2][1]; }
  else if (v[0][1] == v[2][1]) { answer[1] = v[1][1]; }
  else if (v[1][1] == v[2][1]) { answer[1] = v[0][1]; }

  return answer;
}

// 더 짧은 솔루션
// A xor A xor B = B를 이용하면 다른 값 1개를 쉽게 구할 수 있다.
function solution(v) {
  let answer = [];
  answer[0] = v[0][0] ^ v[1][0] ^ v[2][0];
  answer[1] = v[0][1] ^ v[1][1] ^ v[2][1];
  return answer;
}