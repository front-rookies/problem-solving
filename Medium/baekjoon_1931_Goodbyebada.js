const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 🚨 많은 회의실을 넣으려면 많은 회의시간을 확보해야한다 -> 빨리 끝나는 회의를 잡아야한다.

/**
 * 끝나는 시간을 기준으로 정렬한다.
 * 다음 회의를 고를 때 이전의 끝나는 시간보다 크고, 제일 빨리 끝나는 회의를 고른다.
 */

const data = input.slice(1).map((elem) => elem.split(" ").map(Number));

// 끝나는 회의시간 기준으로 정렬

// 배열 정렬 (끝나는 시간 기점)
const sorted = data.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

const END_TIME = Math.pow(2, 31) - 1;
let index = 0;
let count = 0;
let endTime = sorted[index][1];
count++;
index++;

for (let i = 1; i < sorted.length; i++) {
  let [currStart, currEnd] = sorted[i];
  if (endTime <= currStart) {
    endTime = currEnd;
    count++;
  }
}

console.log(count);
