const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = require("fs").readFileSync(path).toString().trim().split("\n");

const N = +inputs[0];

const map = [];

for (let i = 1; i <= N; i++) {
  map.push(inputs[i].split(" ").map(Number));
}

const dp = Array(N)
  .fill(0)
  .map(() => Array(N).fill(0n));

dp[0][0] = 1n;

function update() {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      // 0일 때 제외
      if (map[x][y] === 0) continue;

      const moveCount = map[x][y];

      // 오른쪽 -> 열이 바뀜
      const newY = y + moveCount;

      // 아래 -> 행 바뀜
      const newX = x + moveCount;

      if (0 <= newY && newY < N) dp[x][newY] += dp[x][y];
      if (0 <= newX && newX < N) dp[newX][y] += dp[x][y];
    }
  }
}

function sol() {
  update();

  console.log(dp[N - 1][N - 1].toString());
}

sol();
