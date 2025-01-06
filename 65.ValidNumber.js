function isNumber(s) {
    const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
    return regex.test(s.trim());
}

// Example
console.log(isNumber("0"));
console.log(isNumber(" 0.1 "));
console.log(isNumber("abc"));
