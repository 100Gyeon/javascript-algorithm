function solution(board) {
  let answer = 0;
  const row = board.length;
  const column = board[0].length;

  if (row < 2 && column < 2 && board[0][0] !== 0) return 1;

  // 현재 좌표를 오른쪽 아래 꼭짓점으로 가지는 정사각형 중 가장 큰 정사각형의 크기 구하기
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (board[i][j]) {
        // 현재 좌표의 위, 왼쪽, 대각선 세 점을 비교해 가장 가까운 경계선 선택
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const cross = board[i - 1][j - 1];
        board[i][j] = Math.min(up, left, cross) + 1;
        // 가장 큰 정사각형을 만들 수 있는 길이 저장
        answer = Math.max(answer, board[i][j]);
      }
    }
  }
  return answer * answer;
}
