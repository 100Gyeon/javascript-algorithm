function solution(arr) {
    let answer = 0;
    const length = arr.length;
    for (let num of arr) {
        answer += num;
    }
    return answer / length;
}

// 더 짧은 솔루션
// reduce() : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환
function solution(arr) {
    return arr.reduce((sum, curr) => sum + curr) / arr.length;
}