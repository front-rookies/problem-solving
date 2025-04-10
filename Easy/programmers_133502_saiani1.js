// 슬라이딩 윈도우를 사용한 코드
function solution(ingredient) {
  let answer = 0;
  let left = 0;
  let right = 3;
  const compareArr = [1, 2, 3, 1];
  while (right < ingredient.length) {
    let sliceArr = ingredient.slice(left, right + 1);
    if (compareArr.toString() == sliceArr.toString()) {
      ingredient.splice(0, 4);
      answer++;
      left = 0;
      right = 3;
    } else {
      left++;
      right++;
    }
  }
  return answer;
}

// stack을 사용한 코드
function solution(ingredient) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (
      stack.length >= 4 &&
      stack[stack.length - 1] === 1 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 4] === 1
    ) {
      stack.splice(-4, 4);
      answer++;
    }
  }
  return answer;
}
