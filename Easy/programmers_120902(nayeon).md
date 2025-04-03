## 📌 문제 설명

<p><code>my_string</code>은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 <code>my_string</code>이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.</p>
문제 → https://school.programmers.co.kr/learn/courses/30/lessons/120902


## 💡 접근 방법

- 문자열을 배열로 변환하여 순회하며 계산


## 💻 코드

```js
for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === "+") sum += parseInt(arr[i + 1])
    else if (arr[i] === "-") sum -= parseInt(arr[i + 1])
}
```


## ⏳ 성능
- 메모리: 33.4 MB, 시간: 0.17 ms
