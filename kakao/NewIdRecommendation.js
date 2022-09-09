function solution(new_id) {
  // 1. 모든 대문자를 소문자로 치환
  // 2. 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
  // 3. 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/[.]{2,}/g, '.');
  // 4. 마침표(.)가 처음이나 끝에 위치한다면 제거
  if (new_id[0] === '.') new_id = new_id.substr(1);
  if (new_id[new_id.length - 1] === '.') {
    new_id = new_id.substr(0, new_id.length - 1);
  }
  // 5. new_id가 빈 문자열이라면, new_id에 "a"를 대입
  if (new_id.length === 0) {
    new_id = 'a';
  }
  // 6. new_id가 16자 이상이면, 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  if (new_id.length >= 16) {
    new_id = new_id.substr(0, 15);
    // 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자 제거
    if (new_id[new_id.length - 1] === '.') {
      new_id = new_id.substr(0, new_id.length - 1);
    }
  }
  // 7. new_id가 2자 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙이기
  while (new_id.length <= 2) {
    new_id = new_id + new_id[new_id.length - 1];
  }

  return new_id;
}

// 다른 사람의 풀이
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/\.+/g, '.') // 3
    .replace(/^\.|\.$/g, '') // 4
    .replace(/^$/, 'a') // 5
    .slice(0, 15) // 6
    .replace(/\.$/, '');
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); // 7
}
