function solution(s, skip, index) {
    let alphabet = new Array(26)
    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i] = String.fromCharCode(i + 65).toLowerCase()
    }

    const sArr = s.split("")
    const skipArr = skip.split("").map(e => alphabet.indexOf(e))
    
    return sArr.map(al => {
        let alphabetIndex = alphabet.indexOf(al);
        
        for (let i = 0; i < index; i++) {
            alphabetIndex++;
            if (alphabetIndex >= 26) alphabetIndex = 0;
            
            while (skipArr.indexOf(alphabetIndex) > -1) {
                alphabetIndex++;
                if (alphabetIndex >= 26) alphabetIndex = 0;
            }
        }

        return alphabet[alphabetIndex]
    }).join("")
}
