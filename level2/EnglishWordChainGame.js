function solution(n, words) {
  let number = 0;
  let sequence = 0;
  const length = words.length;

  for (let i = 0; i < length; i++) {
    // 한 글자인 단어는 인정 불가
    if (words[i].length === 1) {
      break;
    }

    if (i) {
      const curr = words[i];
      const prev = words[i - 1];

      // 중복된 단어를 말한 경우 체크
      // 마지막 문자와 다르게 시작하는 경우 체크
      if (words.indexOf(curr) < i || curr.slice(0, 1) !== prev.slice(-1)) {
        number = (i % n) + 1;
        sequence = Math.ceil((i + 1) / n);
        break;
      }
    }
  }
  // 탈락자가 발생하지 않은 경우
  return [number, sequence];
}
