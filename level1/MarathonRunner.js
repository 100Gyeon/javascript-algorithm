function solution(participant, completion) {
    const length = participant.length;
    participant.sort();
    completion.sort();
    for(let i = 0; i < length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}

// sort() : 알파벳 순서대로 배열 정렬
// 비교연산자 !== 사용