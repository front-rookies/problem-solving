const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => Number(e));

const ans = () => {
  const stack = [];
  let ans = 0;
  for (let i = input.length - 1; i >= 0; i--) {
    let count = 0;
    while (stack.length) {
      if (stack[stack.length - 1][0] >= input[i]) break;
      const [_, val] = stack.pop();
      count += val + 1;
    }
    ans += count;
    stack.push([input[i], count]);
  }
  console.log(ans);
};
ans();
