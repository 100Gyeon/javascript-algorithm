function getBonus(char) {
  switch (char) {
    case 'S':
      return 1;
    case 'D':
      return 2;
    case 'T':
      return 3;
  }
}

function getOption(char) {
  switch (char) {
    case '*':
      return 2;
    case '#':
      return -1;
  }
}

function solution(dartResult) {
  let answer = 0;

  // 정규 표현식을 이용해 dartResult 문자열에서 숫자를 찾고, 숫자의 인덱스를 구함
  const numberRegExp = /^[0-9]/g;
  const numberIndexList = [];
  dartResult.split('').forEach((result, index) => {
    +result.match(numberRegExp);
    +result >= 0 && numberIndexList.push(index);
  });

  // 숫자를 기준으로 dartResult 문자열을 쪼갬
  const slicedResultList = [];
  for (let i = 0; i < numberIndexList.length; i++) {
    const slicedResult = dartResult.slice(numberIndexList[i], numberIndexList[i + 1]);
    slicedResultList.push(slicedResult);
  }

  const calcList = [];
  slicedResultList.forEach((result, idx) => {
    let char, number, bonus, option;

    // 점수가 한 자릿수인 경우와 두 자릿수인 경우로 나눠서 계산
    if (result.length !== 1) {
      char = result.split('');
      number = +char[0];
      bonus = getBonus(char[1]);
      option = char[2] ? getOption(char[2]) : 1;
    } else {
      result += slicedResultList[idx + 1];
      number = +result.slice(0, 2);
      bonus = getBonus(result[2]);
      option = result[3] ? getOption(result[3]) : 1;
    }

    // 옵션이 있는 경우와 없는 경우로 나눠서 계산
    if (option !== 1) {
      if (calcList.length === 0) {
        // 첫 번째 기회에서 스타상(*)이 나오는 경우 첫 번째 점수(해당 점수)만 2배가 된다.
        calcList.push(number ** bonus * option);
      } else {
        // 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 2배로 만든다.
        calcList.push(number ** bonus * option);
        if (option === 2) calcList[idx - 1] *= option;
      }
    } else {
      calcList.push(number ** bonus);
    }
  });

  answer = calcList.reduce((acc, cur) => (acc += cur), 0);
  return answer;
}
