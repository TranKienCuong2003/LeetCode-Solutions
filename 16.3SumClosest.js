function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closest = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }
    return closest;
}

// Example
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
