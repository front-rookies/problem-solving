const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const arr = input[0];
  const ans = [];
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length) {
      if (stack[stack.length - 1][0] > arr[i]) break;
      stack.pop();
    }
    ans.push(stack.length > 0 ? stack[stack.length - 1][1] : 0);
    stack.push([arr[i], i + 1]);
  }
  console.log(ans.join(" "));
};
ans();
