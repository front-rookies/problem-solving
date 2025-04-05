## 📌 문제 설명

<p>머쓱이는 RPG게임을 하고 있습니다. 게임에는 <code>up</code>, <code>down</code>, <code>left</code>, <code>right</code> 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 <code>up</code>을 누른다면 캐릭터의 좌표는 [0, 1], <code>down</code>을 누른다면 [0, -1], <code>left</code>를 누른다면 [-1, 0], <code>right</code>를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 <code>keyinput</code>와 맵의 크기 <code>board</code>이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.</p>
문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/120861 


## 💡 접근 방법

- 보드 경계를 게산함
- 각 키 입력에 따라 처리
- 이동 방향에 따른 좌표 업데이트


## 💻 코드

```js
for (let i = 0; i < keyinput.length; i++) {
    const key = keyinput[i];
    
    if (key === "left" && x > -maxX) {
        x -= 1;
    } else if (key === "right" && x < maxX) {
        x += 1;
    } else if (key === "up" && y < maxY) {
        y += 1;
    } else if (key === "down" && y > -maxY) {
        y -= 1;
    }
}
```


## ⏳ 성능
- 메모리: 33.4 MB, 시간: 0.23 ms
