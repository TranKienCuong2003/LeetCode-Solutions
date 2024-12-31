function myAtoi(s) {
    const match = s.trim().match(/^[-+]?\d+/);
    if (!match) return 0;
    const num = parseInt(match[0]);
    return Math.max(-(2**31), Math.min(2**31 - 1, num));
}

// Example
console.log(myAtoi("42")); // Output: 42
console.log(myAtoi("   -42")); // Output: -42
