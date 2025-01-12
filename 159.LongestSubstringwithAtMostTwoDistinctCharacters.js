var lengthOfLongestSubstringTwoDistinct = function(s) {
    let left = 0, right = 0;
    let charMap = new Map();
    let maxLength = 0;

    while (right < s.length) {
        let rightChar = s[right];
        charMap.set(rightChar, (charMap.get(rightChar) || 0) + 1);

        while (charMap.size > 2) {
            let leftChar = s[left];
            charMap.set(leftChar, charMap.get(leftChar) - 1);
            if (charMap.get(leftChar) === 0) {
                charMap.delete(leftChar);
            }
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
};

// Example
console.log(lengthOfLongestSubstringTwoDistinct("eceba"));
console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb"));
