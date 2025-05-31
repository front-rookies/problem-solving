function solution(babbling) {
    const patterns = ["aya", "ye", "woo", "ma"]
    let count = 0;
    
    for (let i = 0; i < babbling.length; i++) {
        let babble = babbling[i]
        
        for (let j = 0; j < patterns.length; j++) {
            if (babble.includes(patterns[j].repeat(2))) break;
        
            babble = babble.toString().split(patterns[j]).join(" ")
            console.log(babble)
        }
        if (babble.split(" ").join("").length === 0) count++;
    }

    // const newArr = babbling.map(e => {
    //     if (regex.test(e)) return "impossible";
    //     for (let pattern of patterns) {
    //         e = e.replaceAll(pattern, "");
    //     }
    //     return e;   
    // })
    return count;
}
