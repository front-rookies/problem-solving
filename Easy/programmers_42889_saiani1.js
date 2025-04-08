function solution(N, stages) {
  let answer = [];
  stages.sort((a, b) => a - b);
  let len = stages.length;
  let cnt = 0;
  let tmpObj = {};
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) cnt++;
    }
    if (len === 0) tmpObj[i] = 0;
    else {
      tmpObj[i] = cnt / len;
      len -= cnt;
      cnt = 0;
    }
  }
  const sorted = Object.entries(tmpObj).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < sorted.length; i++) {
    answer.push(Number(sorted[i][0]));
  }
  return answer;
}
