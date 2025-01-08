var isScramble = function(s1, s2) {
    if (s1.length !== s2.length) return false;

    let memo = {};

    function dfs(s1, s2) {
        if (memo[s1 + '-' + s2] !== undefined) return memo[s1 + '-' + s2];

        if (s1 === s2) return true;

        if (s1.length !== s2.length || sortString(s1) !== sortString(s2)) {
            memo[s1 + '-' + s2] = false;
            return false;
        }

        let len = s1.length;
        for (let i = 1; i < len; i++) {
            if (dfs(s1.substring(0, i), s2.substring(0, i)) && dfs(s1.substring(i), s2.substring(i))) {
                memo[s1 + '-' + s2] = true;
                return true;
            }

            if (dfs(s1.substring(0, i), s2.substring(len - i)) && dfs(s1.substring(i), s2.substring(0, len - i))) {
                memo[s1 + '-' + s2] = true;
                return true;
            }
        }

        memo[s1 + '-' + s2] = false;
        return false;
    }

    function sortString(str) {
        return str.split('').sort().join('');
    }

    return dfs(s1, s2);
};

// Example
console.log(isScramble("great", "rgeat"));

console.log(isScramble("abcde", "caebd"));

console.log(isScramble("a", "a"));
