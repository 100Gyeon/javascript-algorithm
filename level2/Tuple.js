function solution(s) {
  s = s.split('},{');
  const totalNumberList = [];
  for (let i = 0; i < s.length; i++) {
    const numberList = s[i]
      .replace(/[^0-9,]/g, '')
      .split(',')
      .map((v) => Number(v));
    numberList.forEach((item) => totalNumberList.push(item));
  }

  const count = {};
  totalNumberList.forEach((item) => {
    count[item] = (count[item] || 0) + 1;
  });

  // 객체의 value를 기준으로 내림차순 정렬
  const entries = Object.entries(count);
  const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

  const answer = [];
  for (const key in sortedEntries) {
    answer.push(+sortedEntries[key][0]);
  }
  return answer;
}
