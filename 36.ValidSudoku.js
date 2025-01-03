function isValidSudoku(board) {
    let rows = Array(9).fill(0).map(() => new Set()), cols = Array(9).fill(0).map(() => new Set()), boxes = Array(9).fill(0).map(() => new Set());
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num === '.') continue;
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) return false;
            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);
        }
    }
    return true;
}
console.log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
])); // Output: true
