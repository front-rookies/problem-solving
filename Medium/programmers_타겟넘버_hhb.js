function solution(numbers, target) {
  var answer = 0;
  const arr = [];
  const set = new Set();
  const bk = (k, start, val) => {
    if (k >= numbers.length) {
      if (val === target) {
        answer++;
      }
    } else {
      arr[k] = "+" + numbers[start + 1];
      bk(k + 1, start + 1, val + +numbers[start + 1]);
      arr[k] = "-" + numbers[start + 1];
      bk(k + 1, start + 1, val - +numbers[start + 1]);
    }
  };
  arr[0] = "+" + numbers[0];
  bk(1, 0, +numbers[0]);
  arr[0] = "-" + numbers[0];
  bk(1, 0, -Number(numbers[0]));

  return answer;
}
/**
 * 19분/ 정답
 *  -> 일반적인 백트래킹 for문으로 모든 경우의수를 생각했지만 그럴 필요가 없던 문제.
 *
 */
