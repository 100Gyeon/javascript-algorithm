function solution(survey, choices) {
    let answer = '';
    const table = new Map();
    Array('R', 'T', 'C', 'F', 'J', 'M', 'A', 'N').forEach((type) => table.set(type, 0));
    survey.forEach((surveyType, i) => {
        const score = choices[i] - 4;
        if (score > 0) {
            table.set(surveyType[1], table.get(surveyType[1]) + score);
        } else if (score < 0) {
            table.set(surveyType[0], table.get(surveyType[0]) + Math.abs(score));
        }
    });
    
    // 점수 높은 타입을 answer에 추가
    // 점수가 같으면 사전 순으로 빠른 알파벳 answer에 추가
    const resultTypeList = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    resultTypeList.forEach((type) => {
        const firstType = table.get(type[0]);
        const secondType = table.get(type[1]);
        if (firstType > secondType) {
            answer += type[0];
        } else if (firstType < secondType) {
            answer += type[1];
        } else if (firstType === secondType) {
            const sortedType = type.sort();
            answer += sortedType[0];
        }
    });
    
    return answer;
}
