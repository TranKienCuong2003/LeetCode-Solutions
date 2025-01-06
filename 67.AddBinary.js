function addBinary(a, b) {
    let i = a.length - 1, j = b.length - 1;
    let carry = 0, result = [];

    while (i >= 0 || j >= 0 || carry) {
        const sum = (a[i] === '1' ? 1 : 0) + (b[j] === '1' ? 1 : 0) + carry;
        result.push(sum % 2);
        carry = Math.floor(sum / 2);
        i--;
        j--;
    }

    return result.reverse().join('');
}

// Example
console.log(addBinary("1010", "1011"));
console.log(addBinary("11", "1"));
