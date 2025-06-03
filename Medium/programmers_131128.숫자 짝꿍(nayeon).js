function solution(X, Y) {
    let result = ""
    X = X.split("")
    Y = Y.split("")
    
    for (let i = 0; i < 10; i++) {
        const countX = X.filter(x => parseInt(x) === i).length
        const countY = Y.filter(y => parseInt(y) === i).length
        result += i.toString().repeat(Math.min(countX, countY))
    }
    
    if (result === "") return "-1";
    if (parseInt(result) === 0) return "0";
    
    return [...result].sort((a, b) => parseInt(b) - parseInt(a)).join("");
//     let xArr = [...X].filter(x => Y.includes(parseInt(x)))
//     let result = [...Y].filter(y => xArr.includes(y))
    
//     result = result.sort((a, b) => parseInt(b) - parseInt(a)).join("")

//     if (result[0] === "0") return "0";
       
//     return result.length > 0 ? result : "-1";
    
//     let result = "";
//     let hasZero = false;

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
}
