function totalNQueens(n) {
    let ketQua = 0;
    function datQueen(hang, cot) {
        return !cot.some((c, i) => c === hang || c - hang === cot.length - i || hang - c === cot.length - i);
    }
    function timViTri(cot) {
        if (cot.length === n) {
            ketQua++;
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
console.log(totalNQueens(4));
