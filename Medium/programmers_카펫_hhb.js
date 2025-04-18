function solution(brown, yellow) {
  var answer = [];

  const pairs = [];
  for (let i = 0; i <= yellow; i++) {
    if (yellow % i === 0) {
      if (i > yellow / i) break;
      pairs.push([i, yellow / i]);
    }
  }
  let isFound = false;
  for (let i = 0; i < pairs.length; i++) {
    let [h, w] = pairs[i];
    let val = 0;
    while (true) {
      val += h * 2 + w * 2 + 4;
      if (val === brown) {
        isFound = true;
        break;
      } else if (val < brown) {
        h += 2;
        w += 2;
      } else {
        break;
      }
    }

    if (isFound) {
      answer = [w + 2, h + 2];
      break; // <- 여기 브레이크문 하나때문에 계속 틀림.
    }
  }
  return answer;
}

//32분 정답
