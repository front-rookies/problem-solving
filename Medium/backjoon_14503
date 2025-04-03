const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

const directions = [
  [-1, 0], 
  [0, 1], 
  [1, 0],  
  [0, -1],
];

const [N, M] = input.shift();
const [startX, startY, startDir] = input.shift();
const graph = input;
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const rotateLeft = (dir) => (dir - 1 + 4) % 4;
const getBackwardDir = (dir) => (dir + 2) % 4;

const bfs = () => {
  let count = 0;
  const queue = [[startX, startY, startDir]];

  while (queue.length) {
    let [x, y, dir] = queue.shift();

    if (!graph[x][y] && !visited[x][y]) {
      visited[x][y] = true;
      count++;
    }

    let moved = false;
    for (let i = 0; i < 4; i++) {
      dir = rotateLeft(dir);
      const [dx, dy] = directions[dir];
      const nx = x + dx, ny = y + dy;

      if (!graph[nx][ny] && !visited[nx][ny]) {
        queue.push([nx, ny, dir]);
        moved = true;
        break;
      }
    }

    if (!moved) {
      const backDir = getBackwardDir(dir);
      const [bx, by] = [x + directions[backDir][0], y + directions[backDir][1]];
      if (!graph[bx][by]) queue.push([bx, by, dir]);
    }
  }
  console.log(count);
};

bfs();
