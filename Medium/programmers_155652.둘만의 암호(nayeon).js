function solution(s, skip, index) {
    let alphabet = new Array(26)
    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i] = String.fromCharCode(i + 65).toLowerCase()
    }
    alphabet = alphabet.filter(e => !skip.includes(e))

    const sArr = s.split("")
    
    return sArr.map(al =>  {
        let newIdx = alphabet.indexOf(al) + index;
        while (newIdx >= alphabet.length) newIdx = newIdx - alphabet.length;
        return alphabet[newIdx]
    }).join("")
}
