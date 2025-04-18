# 📌 문제 설명

**백준 20057번: 마법사 상어와 토네이도**  
[문제 링크](https://www.acmicpc.net/problem/20057)

## 💡 접근 방법

- 우선 회전의 규칙이 존재하는 것을 알아챘다.
- 비율만큼 모래들이 흩어지는데 이 흩어지는 모래들을 관리하는 방법이 필요했다.

## ✨ 해결 방법

1. **구현**

- 회전의 규칙은 동일한 양만큼 2번 반복하고, 총 n번 주기로 반복된다. 여기서 마지막은 n만큼 이동하지 못해 그래프의 크기를 초과한다.

- 따라서 그래프의 위치에서 토네이도가 벗어나면 answer출력하고 프로그램을 종료하게 만들었다.

- 모래들이 흩어지는 위치를 배열에 넣고, 토네이도가 바라보는 방향에 따라 모래들이 흩어지는 위치를 회전시켜 수정했다.

### 📌 정리

- 구현 자체는 어렵지 않은데 처음에 규칙 찾는 방법, 모래를 어떻게 관리할지가 관건이었던 문제이다.
