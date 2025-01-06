function solveNQueens(n) {
    let ketQua = [];
    function datQueen(hang, cot) {
        return !cot.some((c, i) => c === hang || c - hang === cot.length - i || hang - c === cot.length - i);
    }
    function timViTri(cot) {
        if (cot.length === n) {
            ketQua.push(cot.map(i => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1)));
            return;
        }
        for (let hang = 0; hang < n; hang++) {
            if (datQueen(hang, cot)) timViTri([...cot, hang]);
        }
    }
    timViTri([]);
    return ketQua;
}

// Example
console.log(solveNQueens(4));
