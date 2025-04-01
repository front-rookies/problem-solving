const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
const dp = Array.from({ length: n }, () => Array(m).fill(0));
const visited = Array.from({ length: n }, () => Array(m).fill(false));

for (let i = 1; i < n + 1; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const path = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function DFS(x, y) {
  if (x === n - 1 && y === m - 1) {
    return 1;
  }

  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + path[i][0];
    const ny = y + path[i][1];
    if (0 <= nx && nx < n && 0 <= ny && ny < m && graph[nx][ny] < graph[x][y]) {
      if (visited[nx][ny]) {
        dp[x][y] += dp[nx][ny];
      } else {
        dp[x][y] += DFS(nx, ny);
      }
    }
  }

  return dp[x][y];
}

console.log(DFS(0, 0));
