// 원형 수열의 연속 부분 수열의 합으로 만들 수 있는 개수 구해라

function solution(elements) {
  var answer = 0;
  const set = new Set();
  const N = elements.length;

  for (let i = 0; i < N; i++) {
    let end = i;
    let sum = 0;

    while (1) {
      sum += elements[end];
      if (!set.has(sum)) set.add(sum);

      //   0일때 문제다.
      //   if (end === i - 1) break;
      if (end === (i + N - 1) % N) break;

      end = (end + 1) % N;
    }
  }

  answer = set.size;

  return answer;
}
