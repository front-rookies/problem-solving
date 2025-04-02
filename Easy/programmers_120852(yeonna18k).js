function solution(n) {
    let result = [];

    for (let i = 2; i <= n; i++) { 
        while (n % i === 0) {
            if (!result.includes(i)) {
                result.push(i)
            }
            n /= i;
        }
    }
    return result;
}
