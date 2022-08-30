function solution(skill, skill_trees) {
  let answer = 0;
  skill_trees.forEach((skill_tree) => {
    const charList = skill_tree.split('');
    let str = '';
    // 배열 요소 각각을 skill에 포함된 문자인지 검사하고 str에 추가
    charList.forEach((char) => {
      if (skill.includes(char)) str += char;
    });
    // skill이 str로 시작하는지 검사 (순서대로 나열되었는지 확인)
    if (skill.startsWith(str)) answer++;
  });
  return answer;
}
