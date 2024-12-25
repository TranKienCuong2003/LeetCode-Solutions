var longestPalindrome = function(s) {
    let start = 0, maxLength = 1;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substring = s.slice(i, j + 1);
            if (substring === substring.split('').reverse().join('') && substring.length > maxLength) {
                maxLength = substring.length;
                start = i;
            }
        }
    }
    return s.slice(start, start + maxLength);
};

// Example
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Output: "bb"
console.log(longestPalindrome("a")); // Output: "a"
