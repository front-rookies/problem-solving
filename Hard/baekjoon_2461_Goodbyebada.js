class MinHeap {
  constructor() {
    this.heap = [];
  }

  front() {
    return this.heap[0];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    if (this.heap.length === 1) return;
    let idx = this.heap.length - 1;
    const curr = this.heap[idx];

    while (idx > 0) {
      // 0번부터 시작
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];

      // 비교는 parent와 curr이랑 해야한다.
      if (parent[0] <= curr[0]) break;

      this.heap[idx] = parent;
      idx = parentIdx;
    }

    // 마지막 한번만 바꾼다. => 계속 복사하지 않아도 된다.
    this.heap[idx] = curr;
  }

  pop() {
    // 📌 0일때와 1 예외처리 해줘야한다.
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const val = this.heap[0];

    const last = this.heap.pop();
    this.heap[0] = last;
    this.bubbleDown();

    return val;
  }

  bubbleDown() {
    let index = 0;
    const curr = this.heap[index];

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      // 🚨 left, right index가 있는지 확인하면 undefined 접근을 방지할 수 있다.
      if (
        left < this.heap.length &&
        this.heap[left][0] < this.heap[smallest][0]
      ) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right][0] < this.heap[smallest][0]
      ) {
        smallest = right;
      }

      // 변동 없다 === [index][0]이 제일 작다.
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];

      index = smallest;
    }
  }
}
function sol(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const classRoom = [];

  for (let i = 1; i <= N; i++) {
    classRoom.push(
      input[i]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b)
    );
  }

  const minArr = new MinHeap();
  let min = Infinity;
  let max = 0;

  let answer = Infinity;

  for (let i = 0; i < N; i++) {
    const curr = classRoom[i][0];
    minArr.push([curr, [i, 0]]);

    min = Math.min(min, curr);
    max = Math.max(max, curr);
  }

  answer = max - min;

  while (1) {
    const [row, col] = minArr.pop()[1];

    // minVal pop

    if (col === M - 1) break;

    const newVal = classRoom[row][col + 1];

    minArr.push([newVal, [row, col + 1]]);

    // // 갱신
    if (newVal > max) {
      max = newVal;
    }

    min = minArr.front()[0];

    answer = Math.min(answer, max - min);
  }

  console.log(answer);
}

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

sol(input);
