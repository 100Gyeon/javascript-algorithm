function solution(s) {
	let answer = '';
	const length = s.length;
	if (length % 2 != 0) {
		answer = s.charAt(length / 2);
		// 혹은 answer += s.slice(length / 2, length / 2 + 1);
	} else {
		answer = s.charAt(length / 2 - 1) + s.charAt(length / 2);
		// 혹은 answer += s.slice(length / 2 - 1, length / 2 + 1);
	}
	return answer;
}