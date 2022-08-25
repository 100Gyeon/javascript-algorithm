function solution(number, k) {
  // 큰 숫자만 저장하는 스택
  const stack = [];
  const numberLength = number.length;

  for (let i = 0; i < numberLength; i++) {
    // 빈 스택이 아니고 && 스택의 마지막 값이 number[i]보다 작고 && k가 0보다 클 때
    while (stack.length && stack[stack.length - 1] < number[i] && k) {
      // 스택에서 마지막 값 제거하고, 제거할 개수(k) 줄이기
      stack.pop();
      k--;
    }
    // 현재 스택의 길이가 리턴해야 하는 길이보다 작을 때만 push
    if (stack.length < numberLength - k) {
      stack.push(number[i]);
    }
  }

  return stack.join('');
}
