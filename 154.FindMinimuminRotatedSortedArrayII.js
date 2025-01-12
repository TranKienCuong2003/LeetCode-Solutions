var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[right]) {
            right = mid;
        }
        else if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        else {
            right--;
        }
    }

    return nums[left];
};

// Example
console.log(findMin([1, 3, 5]))

console.log(findMin([2, 2, 2, 0, 1]));
