# 📌 문제 설명

**백준 17143번: 낚시왕**  
[문제 링크](https://www.acmicpc.net/problem/17143)

## 💡 접근 방법

- 이런 복잡한 구현문제는 문제를 차근차근 천천히 읽어보는게 중요하다고 생각합니다.
- 주어진 조건대로 낚시왕 이동 => 상어 잡기 => 상어 이동 처리하면 되겠다는 당연한 생각을 하였습니다.

## ‼️ 막혔던 방법

1. **시간초과**

- 구현을 성공적으로 마치고, 제출을 했는데 시간초과를 떠서 왜 시간초과가 나는지 한참 고민을 했었습니다.
- 그 이유는 속력이 최대 1000까지 커지기 때문에 100(가로) \* 100(세로) \* 100(낚시왕이 이동하는 경우) \* 1000(속력)이런식으로 경우의수가 커지기 때문이었습니다.
- 따라서 이 문제는 이 속력을 줄이는 처리가 핵심입니다.

## ✨ 해결 방법

1. **구현**

- 낚시왕이 끝까지 이동할동안 상어의 움직임을 처리하면 됩니다.

- 이동하고 가장 가까운 상어를 잡고 answer에 무게를 추가합니다.

- 상어의 움직임 처리 과정

- **핵심** : 속도를 최적화하기 위해 cycle이 생기는 것을 알아채야 합니다. 0 -> 1 -> 2 -> 3 -> 2 -> 1 -> 0 이런식으로 사이클이 발생하기 때문에 위, 아래의 경우 (r - 1) \* 2만큼의 사이클이 발생합니다. 그래서 속도가 1000이어도 1000 % 6 즉 4만큼 이동한 것과 동일합니다.

- 상어가 이동한다음 동일한 칸에 상어들이 2마리이상 존재하면 기존 상어와 비교해서 더 크면 덮어씌웁니다.

### 📌 정리

- 시간 초과가 되는 부분을 찾아내고 해당 부분이 반복되는 과정이 존재하는지 파악해보기
- d ^= 1(XOR 연산자)
  > d가 0이면 1로, 1이면 0으로 바뀜 → 상↔하 방향 반전
  > (마찬가지로 2 ↔ 3로 바꿀 때도 가능, 다만 d ^= 1은 0 ↔ 1, 2 ↔ 3처럼 짝수-홀수 구조일 때만 유효)
