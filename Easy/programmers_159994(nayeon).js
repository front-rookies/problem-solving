## 📌 문제 설명

<p>코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.</p>

<ul>
<li>원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.</li>
<li>한 번 사용한 카드는 다시 사용할 수 없습니다.</li>
<li>카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.</li>
<li>기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.</li>
</ul>

<p>예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 ["i", "want", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면 첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고 첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.</p>

<p>문자열로 이루어진 배열 <code>cards1</code>, <code>cards2</code>와 원하는 단어 배열&nbsp;<code>goal</code>이 매개변수로 주어질 때, <code>cards1</code>과 <code>cards2</code>에 적힌 단어들로 <code>goal</code>를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.</p>

문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/159994 


## 💡 접근 방법
- goal을 순회하며 cards1, cards2의 인덱스를 순차적으로 증가



## 💻 코드

```
let idx1 = 0;
let idx2 = 0;
```
cards1과 cards2의 각각의 인덱스를 0으로 정의해놓고, goal을 돌며 일치하는 단어가 나오면 1씩 증가시킨다


## ⏳ 성능
- 메모리: 33.4 MB, 시간: 0.17 ms
