# 📌 문제 설명

[level 2] 연속 부분 수열 합의 개수 - 131701
[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/131701?language=javascript)

## 💡 접근 방법

1. Set을 사용해 중복 없는 부분 수열 합을 저장할 준비를 한다.
2. 수열의 각 인덱스를 시작점(i)으로 반복한다.
3. 끝점(end)을 한 칸씩 이동시키며 부분합을 누적한다.
4. 부분합을 Set에 저장한다.
5. end가 한 바퀴 돌아 시작점(i)으로 되돌아오면 반복을 종료한다.
6. 모든 부분합을 계산한 후, Set의 크기를 반환한다
