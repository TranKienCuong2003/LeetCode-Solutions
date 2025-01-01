function letterCombinations(digits) {
    if (!digits) return [];
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const result = [];
    
    function backtrack(index, current) {
        if (index === digits.length) {
            result.push(current);
            return;
        }
        
        const letters = map[digits[index] - '0'];
        for (let letter of letters) {
            backtrack(index + 1, current + letter);
        }
    }
    
    backtrack(0, "");
    return result;
}

// Example
console.log(letterCombinations("23")); // Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
