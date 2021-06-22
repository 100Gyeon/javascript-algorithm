function solution(a, b) {
  const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const day = new Date(2016, a - 1, b).getDay();
  return arr[day];
}

// new Date(y, m, d) : y, m, d는 각각 년, 월(0~11), 일(1~31)을 나타내며, 이 시간 정보를 가진 객체 생성
// getDay() : 요일을 정수로 리턴, 일요일 = 0, 월요일 = 1

// 다른 풀이
function getDayName(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}
/*
new Date(y, m, d).toString()을 출력하면 Tue May 24 2016 00:00:00 GMT+0900 (KST)
따라서 맨 앞의 요일 값을 slice 메서드로 잘라 출력한다.
문제에서 제시한 것처럼 대문자로 출력하기 위해 .toUpperCase()를 사용한다.
*/