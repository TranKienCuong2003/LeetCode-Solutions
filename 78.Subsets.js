var subsets = function(nums) {
    const result = [];
    const backtrack = (start, path) => {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    };
    backtrack(0, []);
    return result;
};

// Example:
console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
console.log(subsets([1, 2]));
console.log(subsets([1]));
console.log(subsets([1, 2, 3, 4]));
