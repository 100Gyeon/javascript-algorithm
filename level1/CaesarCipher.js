function solution(str, n) {
    let answer = '';
    const upper = 'A'.charCodeAt(0);
    const lower = 'a'.charCodeAt(0);
    for (let char of str) {
        let start = char.charCodeAt(0);
        if (char === ' ')
            answer += ' ';
        else
            answer += String.fromCharCode((start > 90) ? (start + n - lower) % 26 + lower : (start + n - upper) % 26 + upper);
    }
    return answer;
}

/*
fromCharCode(): 아스키 코드 -> 문자열
charCodeAt(): 문자열 -> 아스키 코드

아스키 코드로 변환했을 때 90보다 크면 소문자
65 ~ 90 : A ~ Z
97 ~ 121 : a ~ z
*/
