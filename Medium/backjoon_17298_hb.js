const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .slice(1)[0]
  .split(" ")
  .map((e) => Number(e));
const ans = () => {
  const stack = [];
  const ans = [];
  for (let i = input.length - 1; i >= 0; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] > input[i]) break;
      stack.pop();
    }
    ans.push(stack.length ? stack[stack.length - 1] : -1);
    stack.push(input[i]);
  }
  console.log(ans.reverse().join(" "));
};
ans();
