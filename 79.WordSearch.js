var exist = function(board, word) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const rows = board.length, cols = board[0].length;

    const backtrack = (row, col, index) => {
        if (index === word.length) return true;
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]) return false;

        const temp = board[row][col];
        board[row][col] = '#';
        for (let [dr, dc] of directions) {
            if (backtrack(row + dr, col + dc, index + 1)) return true;
        }
        board[row][col] = temp;

        return false;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (backtrack(r, c, 0)) return true;
        }
    }

    return false;
};

// Example:
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"));
console.log(exist([["a"]], "a"));
console.log(exist([["a","b"],["c","d"]], "abcd"));
