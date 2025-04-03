function solution(my_string) {
    let arr = my_string.split(" ")
    let sum = parseInt(arr[0]);
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === "+") sum += parseInt(arr[i + 1])
        else if (arr[i] === "-") sum -= parseInt(arr[i + 1])
    }
    return sum;
}
