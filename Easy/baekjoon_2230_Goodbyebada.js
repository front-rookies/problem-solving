// 수고르기

/**
 * 수열에서 두 수를 고른다
 * 두 수의 차는 M 이상이어야한다
 * 가장 작은 차이를 출력한다.
 */

const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

sol(input);

function sol(input) {
  const [N, M] = input[0].split(" ").map(Number);

  let numbers = [];
  for (let i = 1; i <= N; i++) {
    numbers.push(Number(input[i]));
  }
  numbers = numbers.sort((a, b) => a - b);

  let min = 2_000_000_000;
  let start = 0;
  let end = 0;

  while (start <= end && end < numbers.length) {
    const diff = numbers[end] - numbers[start];

    if (diff < M) {
      end++;
    }

    if (diff >= M) {
      min = Math.min(diff, min);
      //   최솟값 갱신
      start++;
    }

    if (min === M) {
      break;
    }
  }

  console.log(min);
}
