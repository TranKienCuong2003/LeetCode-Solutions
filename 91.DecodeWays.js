var numDecodings = function(s) {
    if (s[0] === '0') return 0;

    let n = s.length;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;

    for (let i = 2; i <= n; i++) {
        let oneDigit = parseInt(s.slice(i - 1, i), 10);
        let twoDigits = parseInt(s.slice(i - 2, i), 10);

        if (oneDigit >= 1) {
            dp[i] += dp[i - 1];
        }
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
};

// Example
console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("06"));
