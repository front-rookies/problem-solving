/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const left = [];
  let right = [];
  let stack = [];
  for (let i = 0; i < height.length; i++) {
    while (stack.length) {
      if (stack[stack.length - 1] <= height[i]) {
        stack.pop();
      } else {
        break;
      }
    }
    if (stack.length) {
      left.push(stack[stack.length - 1]);
    } else {
      left.push(false);
      stack.push(height[i]);
    }
  }
  stack = [];
  for (let i = height.length - 1; i >= 0; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] <= height[i]) {
        stack.pop();
      } else {
        break;
      }
    }
    if (stack.length) {
      right.push(stack[stack.length - 1]);
    } else {
      right.push(false);
      stack.push(height[i]);
    }
  }
  right = right.reverse();
  let ans = 0;

  for (let i = 0; i < height.length; i++) {
    if (left[i] !== false && right[i] !== false) {
      ans += Math.min(left[i], right[i]) - height[i];
    }
  }
  return ans;
};
