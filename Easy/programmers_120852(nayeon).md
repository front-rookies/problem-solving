## 📌 문제 설명

<p>소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 <code>n</code>이 매개변수로 주어질 때 <code>n</code>의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.</p>
문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/120852


## 💡 접근 방법

- 각 숫자 i로 n을 나눌 수 있을 때까지 계속 나눔
- 이 과정에서 자연스럽게 소인수만 남게 됨
- 같은 소인수가 여러 번 등장할 수 있으니 `!result.includes(i)` 조건으로 중복을 방지함


## 💻 코드

```js
while (n % i === 0) {
    if (!result.includes(i)) {
        result.push(i)
    }
    n /= i;
}
```


## ⏳ 성능
- 메모리: 33.5 MB, 시간: 0.26 ms
