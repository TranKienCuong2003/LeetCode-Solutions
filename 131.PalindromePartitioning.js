var partition = function(s) {
    const result = [];
    const currentPartition = [];

    function isPalindrome(sub) {
        let left = 0;
        let right = sub.length - 1;
        while (left < right) {
            if (sub[left] !== sub[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start) {
        if (start === s.length) {
            result.push([...currentPartition]);
            return;
        }

        for (let end = start + 1; end <= s.length; end++) {
            const substring = s.substring(start, end);
            if (isPalindrome(substring)) {
                currentPartition.push(substring);
                backtrack(end);
                currentPartition.pop();
            }
        }
    }

    backtrack(0);
    return result;
};

// Example
console.log(partition("aab"));
console.log(partition("a"));
