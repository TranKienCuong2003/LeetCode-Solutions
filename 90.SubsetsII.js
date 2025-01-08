var subsetsWithDup = function(nums) {
    let result = [];
    nums.sort();

    function backtrack(start, currentSubset) {
        result.push([...currentSubset]);

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;

            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }

    backtrack(0, []);
    return result;
};

// Example
console.log(subsetsWithDup([1, 2, 2]));

console.log(subsetsWithDup([0]));
