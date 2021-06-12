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

// sort() : 문자열 배열의 경우 문자열을 사전 순으로 정렬
// 비교연산자 !== 사용