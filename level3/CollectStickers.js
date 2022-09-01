function solution(sticker) {
  const length = sticker.length;

  // 스티커가 1개인 경우 예외 처리
  if (length === 1) return sticker[0];

  // 0번째 스티커를 뜯은 경우
  const dp1 = [...sticker];
  dp1[0] = sticker[0];
  dp1[1] = dp1[0];
  for (let i = 2; i < length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + dp1[i]);
  }

  // 0번째 스티커를 뜯지 않은 경우
  const dp2 = [...sticker];
  dp2[0] = 0;
  dp2[1] = sticker[1];
  for (let i = 2; i < length; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + dp2[i]);
  }

  return Math.max(dp1[length - 2], dp2[length - 1]);
}
