function solution(s) {
  let conversionCount = 0;
  let removalCount = 0;

  while (s.length > 1) {
    const originalLength = s.length;
    // 모든 0 제거
    s = s.replaceAll('0', '');
    const newLength = s.length;
    removalCount += originalLength - newLength;
    // 제거 후 길이를 2진법 문자열로 바꾸기
    s = newLength.toString(2);
    conversionCount++;
  }

  // [이진 변환의 횟수, 제거된 모든 0의 개수]
  let answer = [conversionCount, removalCount];
  return answer;
}
