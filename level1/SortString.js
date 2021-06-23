function solution(strings, n) {
  let temp = [];
  let answer = [];
  for (let item of strings) {
    temp.push(item.charAt(n) + item);
  }
  temp.sort();
  for (let word of temp) {
    answer.push(word.slice(1));
  }
  return answer;
}

/*
1. n번째 문자를 맨 앞에 두고, strings 문자열과 결합
2. 정렬
3. slice를 이용하여 원래 문자열을 배열에 저장
   slice(1) => 인덱스 1부터 끝까지 리턴
   slice(1, 5) => 인덱스 1부터 4까지 리턴
*/