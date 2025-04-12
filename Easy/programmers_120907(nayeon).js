function solution(quiz) {
    return quiz.map(el => {
        const [equation, result] = el.split(" = ");
        const [n1, operator, n2] = equation.split(" ");
        let calcResult = true;
        if (operator === "+") {
            calcResult = Number(n1) + Number(n2) === Number(result)
        } else {
            calcResult = Number(n1) - Number(n2) === Number(result)
        }
        return calcResult ? "O" : "X"
    })
}
