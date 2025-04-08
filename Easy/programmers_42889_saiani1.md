# 📌 문제 설명

프로그래머스 42889 lv.1: 실패율
문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/42889

## 💡 해결 방법

- stages배열을 내림차순으로 정렬한다.
- 1~N을 순회하는 for문 내부에 stages배열을 순회하는 for문을 선언하며 스테이지별 실패율을 객체에 push한다.
- Object.entries를 사용하여 내림차순 정렬된 이중배열을 순회하며 key값만 answer에 push한다.
- 2중 for문으로 순회를 하니 시간이 좀 오래 걸리는 경향이 있었음..
