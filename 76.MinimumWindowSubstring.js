var minWindow = function(s, t) {
    let map = {}, count = 0, left = 0, minLen = Infinity, start = 0;
    for (let c of t) map[c] = (map[c] || 0) + 1;

    for (let right = 0; right < s.length; right++) {
        if (map[s[right]] !== undefined) {
            map[s[right]]--;
            if (map[s[right]] >= 0) count++;
        }

        while (count === t.length) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            if (map[s[left]] !== undefined) {
                map[s[left]]++;
                if (map[s[left]] > 0) count--;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.slice(start, start + minLen);
};

// Example:
console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
console.log(minWindow("abc", "b"));
console.log(minWindow("abacbdab", "abd"));
