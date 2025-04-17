function solution(clothes) {
  var answer = 0;

  const map = new Map();
  for (let i = 0; i < clothes.length; i++) {
    const [cur, type] = clothes[i];
    if (map.has(type)) {
      map.set(type, map.get(type) + 1);
    } else {
      map.set(type, 1);
    }
  }
  let count = 1;
  for (let vals of map) {
    count *= vals[1] + 1;
  }
  return count - 1;
}
//28분/ 정답/ 힌트 확인
