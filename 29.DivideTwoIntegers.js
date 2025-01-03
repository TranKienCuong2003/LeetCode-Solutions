function divide(dividend, divisor) {
    if (divisor === 0) return null;
    let negative = (dividend < 0) !== (divisor < 0);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let result = 0;
    while (dividend >= divisor) {
        let temp = divisor, count = 1;
        while (dividend >= (temp << 1)) {
            temp <<= 1;
            count <<= 1;
        }
        dividend -= temp;
        result += count;
    }
    return negative ? -result : Math.min(result, 2 ** 31 - 1);
}

// Example
console.log(divide(10, 3));
