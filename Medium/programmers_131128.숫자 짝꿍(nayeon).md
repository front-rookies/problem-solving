## 📌 문제 설명

<p>두 정수 <code>X</code>, <code>Y</code>의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). <code>X</code>, <code>Y</code>의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. <code>X</code>, <code>Y</code>의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.</p>

<p>예를 들어, <code>X</code> = 3403이고 <code>Y</code> = 13203이라면, <code>X</code>와 <code>Y</code>의 짝꿍은 <code>X</code>와 <code>Y</code>에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다. 다른 예시로 <code>X</code> = 5525이고 <code>Y</code> = 1255이면 <code>X</code>와 <code>Y</code>의 짝꿍은 <code>X</code>와 <code>Y</code>에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다(<code>X</code>에는 5가 3개, <code>Y</code>에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)<br>
두 정수 <code>X</code>, <code>Y</code>가 주어졌을 때, <code>X</code>, <code>Y</code>의 짝꿍을 return하는 solution 함수를 완성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>3 ≤ <code>X</code>, <code>Y</code>의 길이(자릿수) ≤ 3,000,000입니다.</li>
<li><code>X</code>, <code>Y</code>는 0으로 시작하지 않습니다.</li>
<li><code>X</code>, <code>Y</code>의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.</li>
</ul>

문제 -> https://school.programmers.co.kr/learn/courses/30/lessons/131128


## 💡 접근 방법

- 시도1: X를 돌며 for과 includes를 이용하여 map 객체로 생성 -> 시간초과
- 시도2: X를 Y로 한번 필터링, Y를 필터링 결과로 한 번 더 필터링 -> 시간초과
- 시도3: 0~9까지 X와 Y에 나타나는 숫자의 갯수를 구하여 배열로 생성 -> 통과


## 💻 코드

시도1
```js
// let result = "";
// let hasZero = false;

//     for (let char of X) {
//         if (char === '0' && hasZero) continue;

//         if (Y.includes(char)) {
//             result = result + char
//             console.log(result)
            
//             Y = Y.replace(char, "")
            
//            if (char === "0") hasZero = true;
//         }
//     }
    
//     if (result.length === 0) return "-1";
    
//     return [...result].sort((a, b) => parseInt(b) - parseInt(a)).join("");
```

시도2
```js
//     let xArr = [...X].filter(x => Y.includes(parseInt(x)))
//     let result = [...Y].filter(y => xArr.includes(y))
    
//     result = result.sort((a, b) => parseInt(b) - parseInt(a)).join("")

//     if (result[0] === "0") return "0";
       
//     return result.length > 0 ? result : "-1";
```

## ⏳ 성능
- 메모리: 245 MB, 시간: 4500.82 ms
- 정확성: 100.0<br/>합계: 100.0 / 100.0
