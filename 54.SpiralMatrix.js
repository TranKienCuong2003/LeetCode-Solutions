function spiralOrder(matrix) {
    let ketQua = [];
    while (matrix.length) {
        ketQua.push(...matrix.shift());
        matrix.forEach(row => ketQua.push(row.pop()));
        matrix.reverse().forEach(row => row.reverse());
    }
    return ketQua;
}

// Example
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
