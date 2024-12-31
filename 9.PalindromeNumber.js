function isPalindrome(x) {
    if (x < 0) return false;
    const str = x.toString();
    return str === str.split('').reverse().join('');
}

// Example
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
