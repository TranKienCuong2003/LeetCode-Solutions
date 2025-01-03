function solveSudoku(board) {
    function isValid(board, row, col, num) {
        let char = num.toString();
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === char || board[i][col] === char || board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === char) {
                return false;
            }
        }
        return true;
    }

    function backtrack(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === ".") {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num.toString();
                            if (backtrack(board)) return true;
                            board[row][col] = ".";
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    backtrack(board);
}

// Example
let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

solveSudoku(board);

console.log(board);
