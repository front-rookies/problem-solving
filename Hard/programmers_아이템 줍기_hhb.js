function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;
  const map1 = Array.from({ length: 101 }, () => Array(101).fill(false));
  const map2 = Array.from({ length: 101 }, () => Array(101).fill(false));
  for (let i = 0; i < rectangle.length; i++) {
    let [x1, y1, x2, y2] = rectangle[i];
    x1 *= 2;
    x2 *= 2;
    y1 *= 2;
    y2 *= 2;
    for (let j = x1; j <= x2; j++) {
      map1[j][y1] = true;
      map1[j][y2] = true;
    }
    for (let j = y1; j <= y2; j++) {
      map1[x1][j] = true;
      map1[x2][j] = true;
    }
    for (let j = x1 + 1; j < x2; j++) {
      for (let k = y1 + 1; k < y2; k++) {
        map1[j][k] = false;
      }
    }
  }
  for (let i = rectangle.length - 1; i >= 0; i--) {
    let [x1, y1, x2, y2] = rectangle[i];
    x1 *= 2;
    x2 *= 2;
    y1 *= 2;
    y2 *= 2;
    for (let j = x1; j <= x2; j++) {
      map2[j][y1] = true;
      map2[j][y2] = true;
    }
    for (let j = y1; j <= y2; j++) {
      map2[x1][j] = true;
      map2[x2][j] = true;
    }
    for (let j = x1 + 1; j < x2; j++) {
      for (let k = y1 + 1; k < y2; k++) {
        map2[j][k] = false;
      }
    }
  }
  const bfs = (x, y) => {
    const dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const visit = Array.from({ length: 101 }, () => Array(101).fill(false));
    const q = [[x, y, 0]];
    let isFound = false;
    while (q.length) {
      const cur = q.shift();
      visit[cur[0]][cur[1]] = true;
      dir.map((e) => {
        const nx = cur[0] + e[0];
        const ny = cur[1] + e[1];
        if (
          ny >= 0 &&
          ny < 101 &&
          nx >= 0 &&
          nx < 101 &&
          visit[nx][ny] === false &&
          map1[nx][ny] &&
          map2[nx][ny]
        ) {
          q.push([nx, ny, cur[2] + 1]);
          if (nx === itemX * 2 && ny === itemY * 2) {
            answer = cur[2] + 1;
            isFound = true;
          }
        }
        if (isFound) return;
      });
      if (isFound) break;
    }
  };
  bfs(characterX * 2, characterY * 2);
  return answer / 2;
}

/**
 *   45분 / 힌트 / 정답
 *   좌표가 대각선이나, 점프 할 수 가 있기때문에 좌표를 2배 해서 계산해야함.
 */
