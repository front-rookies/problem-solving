function solution(phone_book) {
  var answer = true;
  const set = new Map();
  phone_book = phone_book.map((e) => e.split(""));
  for (let i = 0; i < phone_book.length; i++) {
    set.set(phone_book[i].join(""), i);
  }
  for (let i = 0; i < phone_book.length; i++) {
    let val = "";
    for (let j = 0; j < phone_book[i].length; j++) {
      val += phone_book[i][j];
      if (set.has(val)) {
        if (set.get(val) !== i) {
          return false;
        }
      }
    }
  }
  return true;
}
//10분/정답
