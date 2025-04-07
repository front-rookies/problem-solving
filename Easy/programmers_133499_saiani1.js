function solution(babbling) {
  let answer = 0;
  const arr = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    let babblingItem = babbling[i];
    let prevItem = "";
    let tmpStr = "";
    for (let j = 0; j < babbling[i].length; j++) {
      tmpStr += babbling[i][j];
      for (let k = 0; k < arr.length; k++) {
        if (tmpStr === prevItem) break;
        if (tmpStr === arr[k]) {
          prevItem = tmpStr;
          babblingItem = babblingItem.replace(tmpStr, "");
          tmpStr = "";
          break;
        }
      }
    }
    if (babblingItem.length === 0) answer++;
  }
  return answer;
}
