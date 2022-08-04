function solution(id_list, report, k) {
  const withoutSpaceList = [...new Set(report)].map((item) => item.split(' '));

  // 신고당한 id 배열
  const reportIdList = withoutSpaceList.map((item) => item[1]);
  // 신고당한 id별 신고 횟수
  const count = {};
  reportIdList.forEach((x) => {
    count[x] = (count[x] || 0) + 1;
  });

  // k회 이상 신고당한 id 배열 구하기
  const objectToList = Object.entries(count);
  const filteredList = objectToList.filter(([_, value]) => value >= k);
  const listToObject = Object.fromEntries(filteredList);
  const keysFromObject = Object.keys(listToObject);

  if (keysFromObject.length === 0) {
    return id_list.fill(0);
  } else {
    const map = new Map();
    withoutSpaceList.forEach(([user, reportId]) => {
      if (keysFromObject.includes(reportId)) {
        if (map.has(user)) {
          map.get(user).push(reportId);
        } else {
          map.set(user, [reportId]);
        }
      }
    });
    const result = [];
    id_list.forEach((item) => {
      const temp = map.get(item);
      result.push(temp ? temp.length : 0);
    });
    return result;
  }
}
