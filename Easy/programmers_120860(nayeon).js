// function solution(dots) {
//     let arr = dots.sort().flat();
//     return Math.abs((arr[6] - arr[0]) * (arr[7] - arr[1]));
// }

function solution(dots) {
    // 좌표를 분해하는 풀이
    let x = [];
    let y = [];
    
    for (let s of dots) {
        x.push(s[0]);
        y.push(s[1]);
    }
    
    return Math.abs((Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y)))
}
