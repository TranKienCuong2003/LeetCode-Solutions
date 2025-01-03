function findSubstring(s, words) {
    if (!words.length) return [];
    let wordLen = words[0].length, totalLen = wordLen * words.length;
    let map = {};
    words.forEach(w => map[w] = (map[w] || 0) + 1);
    let result = [];
    for (let i = 0; i <= s.length - totalLen; i++) {
        let sub = s.substring(i, i + totalLen);
        let temp = { ...map };
        for (let j = 0; j < sub.length; j += wordLen) {
            let w = sub.substring(j, j + wordLen);
            if (!temp[w]) break;
            temp[w]--;
        }
        if (Object.values(temp).every(v => v === 0)) result.push(i);
    }
    return result;
}

// Example
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
