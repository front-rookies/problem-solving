function solution(n) {
    if (n === 2) return 1;
    
    const arr = new Array(n + 1).fill(true)
    arr[0] = arr[1] = false
    
    for (let i = 2; i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (arr[i]) count++; 
    }
    
    return count;
}
