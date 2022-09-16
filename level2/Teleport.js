function solution(n) {
  let answer = 0;
  // 도착 장소(n)에서부터 거꾸로 돌아오면서 건전지 사용량 체크
  while (n > 0) {
    if (n % 2 === 0) {
      // 이동한 지점이 짝수인 경우, 순간 이동을 사용했다는 뜻
      n = n / 2;
    } else {
      // 이동한 지점이 홀수인 경우, 점프를 사용했다는 뜻
      n -= 1;
      answer++;
    }
  }
  return answer;
}
