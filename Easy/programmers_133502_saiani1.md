# 📌 문제 설명

프로그래머스 133502 lv.1: 햄버거 만들기
문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/133502

## 💡 해결 방법

- 처음엔 단순히 슬라이딩 윈도우를 사용해서 문제를 해결하려고 했지만 시간초과가 발생함
  - while문 내부에 left, right변수를 사용해 slice로 배열을 만들어 [1, 2, 3, 1]이 맞는지 비교
  - 배열이 일치한다면 splice로 해당 요소를 제거한 후에 다시 left와 right값 초기화
- stack을 사용해서 비교하는 방식으로 코드를 수정하니 시간초과 해결됨
