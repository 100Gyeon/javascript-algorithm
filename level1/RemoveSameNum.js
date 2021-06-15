function solution(arr) {
    let answer = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] != arr[i + 1]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

// 더 짧은 솔루션
// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
function solution(arr) {
    return arr.filter((item, i) => item != arr[i + 1]);
}