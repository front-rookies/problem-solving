## 📌 문제 설명

<p>두 문자열 <code>s</code>와 <code>skip</code>, 그리고 자연수 <code>index</code>가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.</p>

<ul>
<li>문자열 <code>s</code>의 각 알파벳을 <code>index</code>만큼 뒤의 알파벳으로 바꿔줍니다.</li>
<li><code>index</code>만큼의 뒤의 알파벳이 <code>z</code>를 넘어갈 경우 다시 <code>a</code>로 돌아갑니다.</li>
<li><code>skip</code>에 있는 알파벳은 제외하고 건너뜁니다.</li>
</ul>

<p>예를 들어 <code>s</code> = "aukks", <code>skip</code> = "wbqd", <code>index</code> = 5일 때, a에서 5만큼 뒤에 있는 알파벳은 f지만 [b, c, d, e, f]에서 'b'와 'd'는 <code>skip</code>에 포함되므로 세지 않습니다. 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 'h'가 됩니다. 나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.</p>

<p>두 문자열 <code>s</code>와 <code>skip</code>, 그리고 자연수 <code>index</code>가 매개변수로 주어질 때 위 규칙대로 <code>s</code>를 변환한 결과를 return하도록 solution 함수를 완성해주세요.</p>


문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/155652


## 💡 접근 방법

- 알파벳을 배열로 만들어서 주어진 문자열을 새로운 배열로 만들기
- 알파벳 배열에서 skip하는 알파벳을 필터링하기


## 💻 코드

시도1
```js
   for (let i = 0; i < alphabet.length; i++) {
        alphabet[i] = String.fromCharCode(i + 65).toLowerCase()
    }Add commentMore actions


    const sArr = s.split("")
    const skipArr = skip.split("").map(e => alphabet.indexOf(e))

    return sArr.map(al => {
        let alphabetIndex = alphabet.indexOf(al);
        
        for (let i = 0; i < index; i++) {
            alphabetIndex++;
            if (alphabetIndex >= 26) alphabetIndex = 0;
            
            while (skipArr.indexOf(alphabetIndex) > -1) {
                alphabetIndex++;
                if (alphabetIndex >= 26) alphabetIndex = 0;
            }
        }

        return alphabet[alphabetIndex]
    }).join("")
```

시도2
```js
let alphabet = new Array(26)
for (let i = 0; i < alphabet.length; i++) {
    alphabet[i] = String.fromCharCode(i + 65).toLowerCase()
}
alphabet = alphabet.filter(e => !skip.includes(e))

return sArr.map(al =>  {
      let newIdx = alphabet.indexOf(al) + index;
      while (newIdx >= alphabet.length) newIdx = newIdx - alphabet.length;Add commentMore actions
      return alphabet[newIdx]
}).join(")
```
- skip하는 알파벳을 제외한 알파벳의 배열을 만든다
- map을 이용하여 배열로 만든 s에서 인덱스를 더한 값을 리턴한다
- 여기서 인덱스를 더한 값이 알파벳 배열의 길이보다 큰 경우 새로운인덱스 - 알파벳길이를 해주어 인덱스가 알파벳 길이를 넘어가지 않을 때까지 빼준다(while문 사용)

## ⏳ 성능
- 시도1: 메모리: 33.5 MB, 시간: 0.47 ms
- 시도2: 메모리: 33.6 MB, 시간: 0.37 ms
- 정확성: 100.0<br/>합계: 100.0 / 100.0
