function solution(brown, yellow) {
  const total = brown + yellow;
  // 노란색 공간을 만드는 width * height 조합을 찾는다.
  for (let i = 1; i * i <= yellow; i++) {
    /*
    '카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.'라는 조건이 있기 때문에
    둘 중 큰 수를 width로, 작은 수를 height로 생각하면 된다.
    */
    const yellowWidth = yellow / i;
    const yellowHeight = i;
    // 갈색 공간의 width, height는 노란색 공간의 width, height보다 2만큼 크다.
    const brownWidth = yellowWidth + 2;
    const brownHeight = yellowHeight + 2;
    // 이렇게 구한 갈색 공간의 width, height를 곱해 total과 일치하면 정답
    if (brownWidth * brownHeight === total) {
      return [brownWidth, brownHeight];
    }
  }
}
