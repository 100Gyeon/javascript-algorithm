function solution(rows, columns, queries) {
  let answer = [];
  // 1부터 n까지 배열 초기화
  const matrix = Array.from({ length: rows * columns }, (v, i) => i + 1);
  // 2차원 배열로 변환
  let board = [];
  for (i = 0; i < matrix.length; i += columns) {
    board.push(matrix.slice(i, i + columns));
  }
  // 회전
  queries.forEach((query) => {
    const [x1, y1, x2, y2] = query.map((position) => position - 1);
    const stack = [];

    for (let i = y1; i < y2; i++) stack.push(board[x1][i]);
    for (let i = x1; i < x2; i++) stack.push(board[i][y2]);
    for (let i = y2; i > y1; i--) stack.push(board[x2][i]);
    for (let i = x2; i > x1; i--) stack.push(board[i][y1]);

    answer.push(Math.min(...stack));
    const tmp = stack.pop();
    stack.unshift(tmp);

    for (let i = y1; i < y2; i++) board[x1][i] = stack.shift();
    for (let i = x1; i < x2; i++) board[i][y2] = stack.shift();
    for (let i = y2; i > y1; i--) board[x2][i] = stack.shift();
    for (let i = x2; i > x1; i--) board[i][y1] = stack.shift();
  });
  return answer;
}
