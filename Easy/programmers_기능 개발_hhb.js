function solution(p, speeds) {
  var answer = [];
  const stack = [];
  for (let i = 0; i < p.length; i++) {
    const required = 100 - p[i];
    if (required < 100) {
      stack.push(Math.ceil(required / speeds[i]));
    } else {
      stack.push(0);
    }
  }
  let count = 0;
  let val = stack[0];
  while (stack.length) {
    if (stack[0] <= val) {
      count++;
      stack.shift();
    } else {
      answer.push(count);
      count = 0;
      val = stack[0];
    }
  }
  answer.push(count);
  return answer;
}
// 17분/ 성공
