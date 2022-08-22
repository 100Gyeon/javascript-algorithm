function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  while (people.length) {
    if (people[0] + people[people.length - 1] <= limit) {
      people.shift();
    }
    people.pop();
    answer++;
  }

  return answer;
}
