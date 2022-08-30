function solution(n) {
  let arr = Array(n + 1).fill(0);
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }

  return arr[n];
}

/*
핵심 
(1) 점화식 dp[n] = dp[n - 1] + dp[n - 2] 구하는 것
(2) 마지막만 1234567로 나눠서 리턴하면 안 되고, 단계마다 1234567로 나눠야 함
*/
