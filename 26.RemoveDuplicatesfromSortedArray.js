function removeDuplicates(nums) {
    if (!nums.length) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

// Example
console.log(removeDuplicates([1, 1, 2]));
