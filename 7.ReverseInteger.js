function reverse(x) {
    const sign = Math.sign(x);
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
    return reversed >= -(2**31) && reversed <= 2**31 - 1 ? reversed : 0;
}

// Example
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
