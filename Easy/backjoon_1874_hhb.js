//+3

const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => Number(e));

const ans = () => {
  const arr = input;
  const stack1 = [];
  const ans = [];
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    while (1) {
      if (num > arr[i]) break;
      stack1.push(num++);
      ans.push("+");
    }
    if (stack1[stack1.length - 1] === arr[i]) {
      stack1.pop();
      ans.push("-");
    }
  }
  console.log(stack1.length === 0 ? ans.join("\n") : "NO");
};
ans();
