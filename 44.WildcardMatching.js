function isMatch(s, p) {
    let dp = Array(s.length + 1).fill(null).map(() => Array(p.length + 1).fill(false));
    dp[0][0] = true;
    for (let j = 1; j <= p.length; j++) {
        dp[0][j] = dp[0][j - 1] && p[j - 1] === '*';
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            }
        }
    }
    return dp[s.length][p.length];
}

// Example
console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "*"));
console.log(isMatch("cb", "?a"));
