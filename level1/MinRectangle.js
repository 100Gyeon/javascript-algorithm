function solution(sizes) {
  let widthList = [];
  let heightList = [];
  // width가 height보다 작으면 회전시킴 (항상 width가 더 크도록)
  const rotatedSizeList = sizes.map(([width, height]) => (width < height ? [height, width] : [width, height]));
  rotatedSizeList.forEach((item) => {
    widthList.push(item[0]);
    heightList.push(item[1]);
  });
  const maxWidth = widthList.sort((a, b) => b - a)[0];
  const maxHeight = heightList.sort((a, b) => b - a)[0];
  return maxWidth * maxHeight;
}

// 다른 사람의 풀이
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
