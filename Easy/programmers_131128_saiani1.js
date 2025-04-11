function solution(X, Y) {
  let answer = "";
  const tmpArr = [];
  for (let i = 0; i < 10; i++) {
    let xCnt = 0;
    let yCnt = 0;
    for (const x of X) if (x == i) xCnt++;
    for (const y of Y) if (y == i) yCnt++;
    tmpArr.push(Math.min(xCnt, yCnt));
  }
  for (let i = 0; i < 10; i++) {
    answer += String(i).repeat(tmpArr[i]);
  }
  if (answer.length === 0) answer = "-1";
  else if (answer.replaceAll("0", "").length === 0) answer = "0";
  else {
    answer = answer
      .split("")
      .map(Number)
      .sort((a, b) => b - a)
      .join("");
  }
  return String(answer);
}
