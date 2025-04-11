## 📌 문제 설명

<p>한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 <code>polynomial</code>이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.</p>
문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/120863


## 💡 접근 방법

- 시도1: 주어진 식을 배열로 만들어 for문을 돌며 계수와 상수항 직접 카운트
- 시도2: 주어진 식을 계수항과 상수항으로 필터링하여 카운트


## 💻 코드

```js
function solution(polynomial) {
    let co = 0;
    let cons = 0;
    for (let p of polynomial.split(" + ")) {
        p.includes("x") ? co += (parseInt(p.replace("x", "")) || 1) : cons += parseInt(p)
    }
    if (co > 0) {
        if (cons > 0) {
            return co === 1 ? "x" + " + " + cons : co + "x" + " + " + cons;
        } else {
            return co === 1 ? "x" : co + "x";
        }
    }
    return cons.toString();
}
```
시도1 코드

```js
let xNum = polyarr.filter(e => e.includes("x")).map(x => x.replace("x", "") || 1).reduce((cur, acc) => cur + parseInt(acc), 0);
let consNum = polyarr.filter(e => !e.includes("x")).reduce((cur, acc) => cur + parseInt(acc), 0);
```
시도2 코드

시도1에서 계수와 상수의 상태에 따라 조건문을 중첩하여 사용한 것이 지저분해 보여서
시도2로 계수항, 상수항을 필터링하여 배열로 만든 후 join을 사용했는데
막상 성능은 시도1이 더 좋았다

## ⏳ 성능
- 시도1) 메모리: 33.5 MB, 시간: 0.09 ms
- 시도2) 메모리: 33.4 MB, 시간: 0.23 ms
