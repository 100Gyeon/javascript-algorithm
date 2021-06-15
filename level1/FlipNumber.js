function solution(n) {
    let arr = (n + "").split("");
    let answer = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        answer.push(parseInt(arr[i]));
    }
    return answer;
}

// 더 짧은 솔루션
// map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
function solution(n) {
    return n.toString().split('').reverse().map(answer => parseInt(answer));
}