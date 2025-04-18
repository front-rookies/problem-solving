function solution(begin, target, words) {
  var answer = Infinity;
  const visit = Array(words.length).fill(false);
  const isDiff = (word1, word2) => {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        count++;
      }
      if (count > 2) {
        return 2;
      }
    }
    return count;
  };
  const bk = (k, word) => {
    if (word === target) {
      answer = Math.min(answer, k);
    } else {
      for (let i = 0; i < words.length; i++) {
        if (!visit[i] && isDiff(words[i], word) === 1) {
          visit[i] = true;
          bk(k + 1, words[i]);
          visit[i] = false;
        }
      }
    }
  };

  for (let i = 0; i < words.length; i++) {
    if (!visit[i] && isDiff(words[i], begin) === 1) {
      visit[i] = true;
      bk(1, words[i]);
      visit[i] = false;
    }
  }
  return answer === Infinity ? 0 : answer;
}

/**
 * 5분 정답
 */
