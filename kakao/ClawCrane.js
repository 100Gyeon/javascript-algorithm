function pick(board, column) {
  const length = board.length;
  for (let i = 0; i < length; i++) {
    if (board[i][column] !== 0) {
      const doll = board[i][column];
      board[i][column] = 0;
      return doll;
    }
  }
}

function solution(board, moves) {
  let answer = 0;
  const basket = [];
  const columnList = moves.map((item) => item - 1);

  columnList.forEach((column) => {
    const doll = pick(board, column);
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(doll);
      }
    }
  });

  return answer;
}
