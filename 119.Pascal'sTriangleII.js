var getRow = function(rowIndex) {
    let row = [1];
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
        row.push(1);
    }
    return row;
};

// Example
console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
