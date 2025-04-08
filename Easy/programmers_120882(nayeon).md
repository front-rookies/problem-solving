## 📌 문제 설명

영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.


문제 -> [https://school.programmers.co.kr/learn/courses/30/lessons/120860#](https://school.programmers.co.kr/learn/courses/30/lessons/120882)


## 💡 접근 방법

- 시도1: 원래 배열과 정렬된 배열을 만들어 정렬된 배열 내에서 원래 배열의 요소의 인덱스 구하기
- 시도2: map을 이용하여 각 배열의 요소보다 평균 값이 큰 값을 누적하면 등수 계산됨


## 💻 코드
시도 1
```js
function solution(score) {
 let score_arr = score.map(e => (e[0] + e[1]) / 2);
 let sorted = score.map(e => (e[0] + e[1]) / 2).sort((a, b) => b - a);
 return score_arr.map(e => sorted.indexOf(e) + 1);
}
```
시도 2
```js
function solution(score) {
    return score.map(e => {
        return score.filter(s => (s[0] + s[1]) / 2 > (e[0] + e[1]) / 2).length + 1
    })
}
```


## ⏳ 성능
- 시도1: 메모리: 33.4 MB, 시간: 0.25 ms
- 시도2: 메모리: 33.4 MB, 시간: 0.22 ms
