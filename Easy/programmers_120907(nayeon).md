## 📌 문제 설명

<p>덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 <code>quiz</code>가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.</p>
문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/120907


## 💡 접근 방법

- 시도1: 주어진 배열에서 map을 이용하여 =을 기준으로 수식과 결과를 분리
- 오류: 수식을 분기처리 하는 과정에서 include를 사용하였더니 `1 + -8` 이렇게 숫자에 마이너스가 있는 상황이 제대로 처리가 되지 않음
- 시도2: 수식을 [n1, operator, n2] 로 명확히 분리하여 계산


## 💻 코드

```js
function solution(quiz) {
    return quiz.map(el => { 
        return el.split(" = ").map(n => {
            let num = n.split(" ");
             if (num.length > 1) {
                 if (n.includes("-")) return parseInt(num[0]) - parseInt(num[2]);
                 if (n.includes("+")) return parseInt(num[0]) + parseInt(num[2])
             }
            
        return Number(n)
        })
        
    }).map(an => an[0] === an[1] ? "O" : "X");
}
```
시도 1<br />
quiz을 map을 이용하고, 또 그 안에서 map을 사용하여 수식과 결과를 배열로 만들어 계산<br />
수식에서 include를 사용하여 -와 + 판별(숫자 자체가 마이너스인 경우 에러 발생)<br />
또한 수식과 결과를 단순히 split한 길이로 판단하여 모호함


```js
function solution(quiz) {
    return quiz.map(el => {
        const [equation, result] = el.split(" = ");
        const [n1, operator, n2] = equation.split(" ");
        let calcResult = true;
        if (operator === "+") {
            calcResult = Number(n1) + Number(n2) === Number(result)
        } else {
            calcResult = Number(n1) - Number(n2) === Number(result)
        }
        return calcResult ? "O" : "X"
    })
}
```
시도 2</ br>
map을 한 번 돌린 상태에서 수식과 결과를 명시적으로 할당<br />
수식에서 숫자와 연산자를 명시적으로 할당<br />


## ⏳ 성능
- 메모리: 33.3 MB, 시간: 0.26 ms
