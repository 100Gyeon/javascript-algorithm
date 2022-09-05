function solution(n, arr1, arr2) {
  const answer = [];
  arr1 = arr1.map((item) => item.toString(2).padStart(n, '0'));
  arr2 = arr2.map((item) => item.toString(2).padStart(n, '0'));

  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === '1' || arr2[i][j] === '1') str += '#';
      else str += ' ';
    }
    answer.push(str);
  }

  return answer;
}

/*
(1) toString(2) 사용해서 십진수 → 이진수 변환하기
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

(2) padStart(n, '0') : 시작점부터 주어진 문자열('0')로 채워 목표 길이(n)를 만족하는 string 반환
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
*/