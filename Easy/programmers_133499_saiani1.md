# 📌 문제 설명

프로그래머스 133499 lv.1: 옹알이
문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/133499

## 💡 해결 방법

- babbling[i] 앞에서부터 한글자 한글자 잘라가며 옹알이 배열과 비교해야 한다.
- 잘라낸 babbling[i]는 옹알이 배열 0번째부터 다시 탐색해야 한다.
- 직전에 잘라낸 babbling[i]의 string과 이제 잘라낼 string이 같으면 루프를 빠져나온다.
- 다 자른 babbling[i].length가 0이면 answer를 증가시킨다.
