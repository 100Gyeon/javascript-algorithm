function solution(n) {
  let n_count = 0;
  let next_count = 0;
  let answer = 0;

  const small = n.toString(2);
  for (let words of small) {
    if (words == '1') {
      n_count++;
    }
  }

  while (true) {
    n++;
    let big = n.toString(2);
    for (let words of big) {
      if (words == '1') {
        next_count++;
      }
    }

    if (n_count == next_count) {
      answer = n;
      break;
    } else {
      next_count = 0;
    }
  }
  return answer;
}

// 더 짧은 솔루션
function solution(n) {
  const regexp = /1/g;
  const count = n.toString(2).match(regexp).length;
  while (n++) {
    if (count === n.toString(2).match(regexp).length) 
      return n;
  }
}
// str.match(regexp) : 정규식과 일치하는 문자열을 찾아서 배열 객체로 반환