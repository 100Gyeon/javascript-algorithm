function solution(record) {
  const userMap = new Map();
  const temp = [];
  const answer = [];

  record.forEach((item) => {
    const [verb, userId, nickname] = item.split(' ');
    if (verb === 'Enter') {
      userMap.set(userId, nickname);
      temp.push(['님이 들어왔습니다.', userId]);
    } else if (verb === 'Leave') {
      temp.push(['님이 나갔습니다.', userId]);
    } else {
      userMap.set(userId, nickname);
    }
  });

  temp.forEach(([verb, userId]) => {
    answer.push(`${userMap.get(userId)}${verb}`);
  });

  return answer;
}
