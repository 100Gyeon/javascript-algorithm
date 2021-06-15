function solution(s) {
    const length = s.length;
    if (length == 4 || length == 6) {
        return s.split("").every((num) => !isNaN(num));
    }
    return false;
}

// isNaN() : NaN인지 확인
// every() : 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트, Boolean 값을 반환