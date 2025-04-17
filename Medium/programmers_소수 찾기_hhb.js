const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

function solution(numbers) {
  const digits = numbers.split("");
  const visited = Array(digits.length).fill(false);
  const numberSet = new Set();

  const backtrack = (path) => {
    if (path.length > 0) {
      numberSet.add(Number(path.join("")));
    }

    for (let i = 0; i < digits.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        path.push(digits[i]);
        backtrack(path);
        path.pop();
        visited[i] = false;
      }
    }
  };

  backtrack([]);

  let count = 0;
  for (const num of numberSet) {
    if (isPrime(num)) count++;
  }
  return count;
}

/**
 * 25분/ 정답/ 이상하게 백트래킹 로직이 엄청 꼬임. 내일 다시 해봐야겠음.
 */
