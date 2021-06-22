function solution(a, b) {
  const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const day = new Date(2016, a - 1, b).getDay();
  return arr[day];
}

// new Date(y, m, d) : y, m, d는 각각 년, 월(0~11), 일(1~31)을 나타내며, 이 시간 정보를 가진 객체 생성
// getDay() : 요일을 정수로 리턴, 일요일 = 0, 월요일 = 1