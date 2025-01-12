var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = new Map();

    const dfs = (start) => {
        if (memo.has(start)) return memo.get(start);

        const result = [];
        if (start === s.length) {
            result.push("");
            return result;
        }

        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordSet.has(word)) {
                const subSentences = dfs(end);
                for (const sub of subSentences) {
                    result.push(word + (sub === "" ? "" : " ") + sub);
                }
            }
        }

        memo.set(start, result);
        return result;
    };

    return dfs(0);
};

// Example
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));

console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]));

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
