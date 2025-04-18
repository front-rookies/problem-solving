# 📌 문제 설명

**백준 2143번: 두 배열의 합**  
[문제 링크](https://www.acmicpc.net/problem/2143)

## 💡 접근 방법

- 우선 A, B 배열의 조합을 모두 탐색해서 T값을 만족하는지 알아봐야 한다.
- 이 과정에서 시간이 오래걸리기 때문에 최적화하는 방법을 생각해내야 한다.

## ✨ 해결 방법

1. **누적합**

   - 먼저 A, B배열 모두 나올 수 있는 모든 부 배열을 구해야 한다. 이 과정에서 누적합을 사용해서 시간을 단축할 수 있다.

2. **이분탐색**

   - 이 부분이 가장 생각하기 힘들었는데 T - A = B 이기 때문에 T - A값을 구하고 그 값이 B 부분배열에 존재하는지 탐색하면 된다.
   - 탐색역시 시간이 오래 걸리기 때문에 이분탐색을 이용한다.

3. **중복된 숫자들 처리**
   - 그냥 이분탐색으로 처리해서 있으면 + 1 하는 방식을 사용하면 안된다.
   - 왜냐하면 같은 숫자가 배열내에 존재할 수 있기 때문인데, 이 중복되는 숫자는 엄밀히 보면 다른 방법의 조합이기 때문에 이 경우도 추가로 더해야 한다.
   - 따라서 bisect left, bisect right해서 나온 인덱스의 차를 구하면 모든 경우의 수를 다 더할 수 있다.

### 📌 정리

- 시간 단축을 위한 누적합, 이분탐색 처리
- 탐색하는 대상을 하나로 고정시키고 이분탐색으로 처리하는 사고 과정이 중요하다
