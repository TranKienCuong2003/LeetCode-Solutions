function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) return digits;
        digits[i] = 0;
    }
    return [1, ...digits];
}

// Example
console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9, 9]));
