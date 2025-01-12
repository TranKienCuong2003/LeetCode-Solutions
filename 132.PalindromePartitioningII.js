var minCut = function(s) {
    const n = s.length;

    const isPalindrome = Array.from({ length: n }, () => Array(n).fill(false));

    for (let end = 0; end < n; end++) {
        for (let start = 0; start <= end; start++) {
            if (s[start] === s[end] && (end - start <= 2 || isPalindrome[start + 1][end - 1])) {
                isPalindrome[start][end] = true;
            }
        }
    }

    const dp = Array(n).fill(Infinity);

    for (let i = 0; i < n; i++) {
        if (isPalindrome[0][i]) {
            dp[i] = 0;
        } else {
            for (let j = 1; j <= i; j++) {
                if (isPalindrome[j][i]) {
                    dp[i] = Math.min(dp[i], dp[j - 1] + 1);
                }
            }
        }
    }

    return dp[n - 1];
};

// Example
console.log(minCut("aab"));
console.log(minCut("a"));
console.log(minCut("ab"));
