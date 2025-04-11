
function solution(polynomial) {
    let polyarr = polynomial.split(" + ");
    
    let xNum = polyarr.filter(e => e.includes("x")).map(x => x.replace("x", "") || 1).reduce((cur, acc) => cur + parseInt(acc), 0);
    let consNum = polyarr.filter(e => !e.includes("x")).reduce((cur, acc) => cur + parseInt(acc), 0);
    
    let answer = [];
    
    xNum > 0 && answer.push(xNum > 1 ? xNum + "x" : "x")
    consNum > 0 && answer.push(consNum)
    
    return answer.join(" + ");
}
