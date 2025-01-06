function generateMatrix(n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let num = 1, hangDau = 0, hangCuoi = n - 1, cotDau = 0, cotCuoi = n - 1;
    while (num <= n * n) {
        for (let i = cotDau; i <= cotCuoi; i++) matrix[hangDau][i] = num++;
        hangDau++;
        for (let i = hangDau; i <= hangCuoi; i++) matrix[i][cotCuoi] = num++;
        cotCuoi--;
        for (let i = cotCuoi; i >= cotDau; i--) matrix[hangCuoi][i] = num++;
        hangCuoi--;
        for (let i = hangCuoi; i >= hangDau; i--) matrix[i][cotDau] = num++;
        cotDau++;
    }
    return matrix;
}

// Example
console.log(generateMatrix(3));
console.log(generateMatrix(1));
