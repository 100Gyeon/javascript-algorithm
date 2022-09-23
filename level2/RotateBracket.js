function isCorrect(bracketList) {
  const stack = [];
  const pair = { '}': '{', ']': '[', ')': '(' };

  for (let i = 0; i < bracketList.length; i++) {
    const bracket = bracketList[i];
    // }, ], ) 괄호가 아니면 스택에 push
    if (!pair[bracket]) stack.push(bracket);
    else {
      // 짝이 맞는 괄호가 나오면 해당 괄호를 pop
      if (stack[stack.length - 1] === pair[bracket]) stack.pop();
      // 짝이 맞지 않으면 false 리턴
      else return false;
    }
  }
  // 스택에 문자가 남아있는 경우 올바르지 않은 괄호 문자열
  return stack.length ? false : true;
}

function solution(s) {
  let answer = 0;
  const length = s.length;
  const bracketList = s.split('');

  for (let i = 0; i < length; i++) {
    // 올바른 괄호 문자열인지 확인
    if (isCorrect(bracketList)) answer++;
    // 문자열을 한 칸씩 왼쪽으로 회전
    bracketList.push(bracketList.shift());
  }

  return answer;
}
