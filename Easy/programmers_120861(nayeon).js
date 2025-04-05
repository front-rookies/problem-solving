function solution(keyinput, board) {

    let x = 0;
    let y = 0;
    

    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    

    for (let i = 0; i < keyinput.length; i++) {
        const key = keyinput[i];
        
        if (key === "left" && x > -maxX) {
            x -= 1;
        } else if (key === "right" && x < maxX) {
            x += 1;
        } else if (key === "up" && y < maxY) {
            y += 1;
        } else if (key === "down" && y > -maxY) {
            y -= 1;
        }
    }
    
    return [x, y];
}
