## 📌 문제 설명

<ol>
<li>다트 게임은 총 3번의 기회로 구성된다.</li>
<li>각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.</li>
<li>점수와 함께 Single(<code>S</code>), Double(<code>D</code>), Triple(<code>T</code>) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수<sup>1</sup> , 점수<sup>2</sup> , 점수<sup>3</sup> )으로 계산된다.</li>
<li>옵션으로 스타상(<code>*</code>) , 아차상(<code>#</code>)이 존재하며 스타상(<code>*</code>) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(<code>#</code>) 당첨 시 해당 점수는 마이너스된다.</li>
<li>스타상(<code>*</code>)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(<code>*</code>)의 점수만 2배가 된다. (예제 4번 참고)</li>
<li>스타상(<code>*</code>)의 효과는 다른 스타상(<code>*</code>)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(<code>*</code>) 점수는 4배가 된다. (예제 4번 참고)</li>
<li>스타상(<code>*</code>)의 효과는 아차상(<code>#</code>)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(<code>#</code>)의 점수는 -2배가 된다. (예제 5번 참고)</li>
<li>Single(<code>S</code>), Double(<code>D</code>), Triple(<code>T</code>)은 점수마다 하나씩 존재한다.</li>
<li>스타상(<code>*</code>), 아차상(<code>#</code>)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다. </li>
</ol>

<p>0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.</p>

<h3>입력 형식</h3>

<p>"점수|보너스|[옵션]"으로 이루어진 문자열 3세트.<br>
예)  <code>1S2D*3T</code></p>

<ul>
<li>점수는 0에서 10 사이의 정수이다.</li>
<li>보너스는 S, D, T 중 하나이다.</li>
<li>옵선은 *이나 # 중 하나이며, 없을 수도 있다.</li>
</ul>


문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/17682


## 💡 접근 방법

- 각 라운드 점수를 scores에 배열로 저장하여 풀기


## 💻 코드

```js
if (option === "*") {
    score *= 2;
    if (scores.length > 0) {
        scores[scores.length - 1] *= 2;
    }
} else if (option === "#") {
    score *= -1;
}
```
- 옵션 점수를 정확히 계산하기 위해 현재까지 입력된 scores의 길이를 이용하여 분기처리해주기
- 분기 처리를 정확하게 해주는 것이 핵심

## ⏳ 성능
- 메모리: 33.6 MB, 시간: 5.29 ms
- 정확성: 100.0<br/>합계: 100.0 / 100.0
