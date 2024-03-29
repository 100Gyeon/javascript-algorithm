function solution(numbers, hand) {
  let answer = '';
  hand = hand === 'left' ? 'L' : 'R';
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };
  let prevLeft = keypad['*'];
  let prevRight = keypad['#'];
  const getDistance = (prev, curr) => Math.abs(prev[0] - curr[0]) + Math.abs(prev[1] - curr[1]);

  numbers.forEach((number) => {
    const current = keypad[number];
    if (number % 3 === 1) {
      prevLeft = current;
      answer += 'L';
    } else if (number % 3 === 0 && number) {
      prevRight = current;
      answer += 'R';
    } else {
      const leftDistance = getDistance(prevLeft, current);
      const rightDistance = getDistance(prevRight, current);
      if (leftDistance < rightDistance) {
        prevLeft = current;
        answer += 'L';
      } else if (leftDistance > rightDistance) {
        prevRight = current;
        answer += 'R';
      } else {
        hand === 'L' ? (prevLeft = current) : (prevRight = current);
        answer += hand;
      }
    }
  });
  return answer;
}
