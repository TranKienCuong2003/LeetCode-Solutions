function searchRange(nums, target) {
    function findBound(isFirst) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > target || (isFirst && nums[mid] === target)) right = mid - 1;
            else left = mid + 1;
        }
        return isFirst ? left : right;
    }
    let start = findBound(true), end = findBound(false);
    return start <= end && nums[start] === target ? [start, end] : [-1, -1];
}

// Example
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
