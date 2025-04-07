## 📌 문제 설명

2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.
문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/120860#


## 💡 접근 방법

- 시도1: 모든 좌표를 sort로 정렬 후 flat하여 x축 길이, y축 길이 구하기
- 시도2: x좌표, y좌표를 나누어 배열로 만들고 x축 길이, y축 길이 구하기


## 💻 코드

```js
let x = [];
let y = [];

for (let dot of dots) {
    x.push(dot[0]);
    y.push(dot[1]);
}
```
좌표가 주어졌을 때, x좌표와 y좌표를 분해하여 배열로 만드는 코드


## ⏳ 성능
- 시도1: 메모리: 33.5 MB, 시간: 0.11 ms
- 시도2: 메모리: 33.4 MB, 시간: 0.05 ms
