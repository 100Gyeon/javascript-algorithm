function solution(array, commands) {
    let answer = [];
    const length = commands.length;
    for(let c = 0; c < length; c++) {
        const i = commands[c][0] - 1;
        const j = commands[c][1];
        const k = commands[c][2] - 1;
        
        let newArr = array.slice(i, j);
        newArr.sort((a,b) => a-b);
        // newArr.sort();를 사용하면 ASCII 문자 순서대로 정렬되어 오름차순 정렬 불가
        // newArr.sort((a,b) => a-b);는 오름차순 정렬
        // newArr.sort((a,b) => b-a);는 내림차순 정렬
        answer.push(newArr[k]);
    }
    return answer;
}