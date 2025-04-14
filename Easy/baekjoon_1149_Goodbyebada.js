const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
const rgb = input.map((ele) => ele.split(" ").map(Number));
const dp = Array(N)
  .fill()
  .map(() => Array(3).fill(0));

dp[0] = rgb[0];

for (let i = 1; i < N; i++) {
  // 집이 red일때
  //   이전의 최적값 + 현재
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgb[i][0];
  // 집이 green일때
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgb[i][1];
  //  집이 blue일때
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + rgb[i][2];
}

console.log(Math.min(...dp[N - 1]));
