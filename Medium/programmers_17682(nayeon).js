function solution(dartResult) {
    let scores = [];
    let i = 0;
    
    while (i < dartResult.length) {
        let score = 0;
        let bonus = '';
        let option = '';
        
        if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
            score = 10;
            i += 2;
        } else {
            score = dartResult[i]
            i++;
        }
        
        bonus = dartResult[i];
        i++;
        
        if (i < dartResult.length && (dartResult[i] === "*" || dartResult[i] === "#")) {
            option = dartResult[i]
            i++;
        }
        
        if (bonus === "S") score = score**1;
        if (bonus === "D") score = score**2;
        if (bonus === "T") score = score**3;
        
        if (option === "*") {
            score *= 2;
            if (scores.length > 0) {
                scores[scores.length - 1] *= 2;
            }
        } else if (option === "#") {
            score *= -1;
        }
        
        scores.push(score)
    }
    console.log(scores)
    return scores.reduce((sum, score) => sum + score, 0)
}
