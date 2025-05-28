## 📌 문제 설명

<p>1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요. </p>

<p>소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.<br>
(1은 소수가 아닙니다.)</p>

문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/12921


## 💡 접근 방법

- 소수를 시간 효율성을 고려하여 구하는 공식 이용 -> 에라토스테네스의 체


## 💻 코드

```js
    const arr = new Array(n + 1).fill(true)
    arr[0] = arr[1] = false
    
    for (let i = 2; i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
```
1. 입력받은 n을 1부터 n까지의 배열로 만들기
2. 이 때 배열의 인덱스가 해당 숫자가 되므로 n + 1을 하여 n을 인덱스로 가지는 숫자까지 포함한다
3. 배열을 true로 채우고 시작
4.  2부터 시작하여 약수(본인)를 제외한 배수를 false로 변환(에라토스테네스의 체 공식 참고)
5.  남은 true의 개수를 구하면 1부터 n까지의 소수 개수를 구할 수 있다

공식을 모른다면 풀기 힘든 문제라고 생각된다

- 참고 : https://velog.io/@loocia1910/javascript%EC%97%90%EC%84%9C-%EC%86%8C%EC%88%98Prime-number-%EA%B5%AC%ED%95%98%EA%B8%B0


## ⏳ 성능
- 메모리: 43.3 MB, 시간: 51.25 ms
- 정확성: 75.0<br/>효율성: 25.0<br/>합계: 100.0 / 100.0
