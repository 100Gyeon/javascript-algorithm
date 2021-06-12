function solution(d, budget) {
    let answer = 0;
    const length = d.length;
    d.sort((a, b) => a - b); // sort 주의
    for (let i = 0; i < length; i++) {
        if (budget >= d[i]) {
            budget -= d[i];
            answer++;
        } else break;
    }
    return answer;
}