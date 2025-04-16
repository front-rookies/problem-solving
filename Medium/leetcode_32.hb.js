/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let max = 0;
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];

    if (cur === "(") {
      stack.push(i);
      console.log(stack);
    } else {
      let top = stack.pop();
      if (stack.length) {
        max = Math.max(max, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }
  return max;
  console.log(max);
};
