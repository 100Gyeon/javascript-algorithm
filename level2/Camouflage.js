const solution = (clothes) => {
  let answer = 1;
  const hash = {}; // 해시 테이블을 만들기 위해 빈 객체 생성

  /*
  const clothes = [
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ];
  clothes 배열 안에는 cloth 배열이 있음
  cloth[0]은 의상의 이름, cloth[1]은 의상의 종류

  의상의 종류를 기준으로 개수를 세야 하기 때문에 cloth[1]이 객체의 key가 된다.

  객체 안에 같은 key(종류)가 존재하면 기존 value에 1을 더해준다.
  객체에 없던 key라면 새로 생성하고 value를 1로 설정한다.
  */
  clothes.forEach(cloth => {
    hash[cloth[1]] = hash[cloth[1]] ? hash[cloth[1]] + 1 : 1;
  });

  // 선택하지 않은 경우를 각각 +1 해서 곱해준다.
  for (const key in hash) {
    answer *= hash[key] + 1;
  }

  // 아무것도 안 입는 경우만 하나 제외한다.
  return answer - 1;
}