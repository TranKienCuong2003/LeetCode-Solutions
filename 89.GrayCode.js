var grayCode = function(n) {
    let result = [0];

    for (let i = 0; i < n; i++) {
        let len = result.length;
        let add = 1 << i;

        for (let j = len - 1; j >= 0; j--) {
            result.push(result[j] + add);
        }
    }

    return result;
};

// Example
console.log(grayCode(2));

console.log(grayCode(1));
