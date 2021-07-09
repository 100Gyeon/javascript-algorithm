function solution(s) {
  const answer = parseInt(s.replace(/zero/gi, '0').replace(/one/gi, '1')
    .replace(/two/gi, '2').replace(/three/gi, '3')
    .replace(/four/gi, '4').replace(/five/gi, '5')
    .replace(/six/gi, '6').replace(/seven/gi, '7')
    .replace(/eight/gi, '8').replace(/nine/gi, '9'));
  return answer;
}

/*
[ 정규 표현식 이용하는 문제 ]
replace()는 문자열 중 가장 앞에 있는 것 하나만 바꿔주기 때문에 s.replace('zero', '0');으로 작성하면 안 된다.
'/' 로 문자열을 감싸준 뒤 문자열 뒤에 'g'를 붙이면 해당하는 모든 문자열을 한 번에 바꿀 수 있다.
- g : 발생할 모든 pattern에 대한 전역 검색
- i : 대/소문자 구분 안 함
*/