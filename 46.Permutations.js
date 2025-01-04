function permute(nums) {
    let result = [];
    function backtrack(start) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    backtrack(0);
    return result;
}

// Example
console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
