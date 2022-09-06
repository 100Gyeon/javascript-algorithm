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
  const getLength = (key1, key2) => Math.abs(key1[0] - key2[0]) + Math.abs(key1[1] - key2[1]);

  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      prevLeft = keypad[number];
      answer += 'L';
    } else if (number === 3 || number === 6 || number === 9) {
      prevRight = keypad[number];
      answer += 'R';
    } else {
      let leftLength = getLength(prevLeft, keypad[number]);
      let rightLength = getLength(prevRight, keypad[number]);
      if (leftLength < rightLength) {
        prevLeft = keypad[number];
        answer += 'L';
      } else if (leftLength > rightLength) {
        prevRight = keypad[number];
        answer += 'R';
      } else {
        if (hand === 'L') {
          answer += 'L';
          prevLeft = keypad[number];
        } else {
          answer += 'R';
          prevRight = keypad[number];
        }
      }
    }
  });
  return answer;
}
