function permuteUnique(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let used = Array(nums.length).fill(false);
    function backtrack(path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;
            path.push(nums[i]);
            used[i] = true;
            backtrack(path);
            path.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return result;
}

// Example
console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));
