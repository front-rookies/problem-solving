const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const findAns = (arr) => {
  arr.shift();
  let stack1 = [];
  const dp = Array.from({ length: arr.length }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    let count = 1;
    while (stack1.length) {
      if (stack1[stack1.length - 1][0] >= cur) {
        const [_, val] = stack1.pop();
        count += val;
      } else if (stack1[stack1.length - 1][0] < cur) {
        break;
      }
    }
    stack1.push([cur, count]);
    dp[i] += cur * count;
  }
  stack1 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const cur = arr[i];
    let count = 1;
    while (stack1.length) {
      if (stack1[stack1.length - 1][0] >= cur) {
        const [_, val] = stack1.pop();
        count += val;
      } else if (stack1[stack1.length - 1][0] < cur) {
        break;
      }
    }
    stack1.push([cur, count]);
    dp[i] += cur * count;
  }
  dp.map((e, i) => {
    dp[i] -= arr[i];
  });
  return Math.max(...dp);
};
const ans = () => {
  const ans = [];
  for (let i = 0; i < input.length - 1; i++) {
    ans.push(findAns(input[i]));
  }
  console.log(ans.join(" "));
};
ans();
