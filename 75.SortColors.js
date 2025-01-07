var sortColors = function(nums) {
    let low = 0, high = nums.length - 1, i = 0;

    while (i <= high) {
        if (nums[i] === 0) {
            [nums[i], nums[low]] = [nums[low], nums[i]];
            low++;
            i++;
        } else if (nums[i] === 2) {
            [nums[i], nums[high]] = [nums[high], nums[i]];
            high--;
        } else {
            i++;
        }
    }
};

// Example:
let nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1);

let nums2 = [1, 0, 1, 2, 0, 2];
sortColors(nums2);
console.log(nums2);

let nums3 = [2, 2, 2];
sortColors(nums3);
console.log(nums3);

let nums4 = [0, 0, 0];
sortColors(nums4);
console.log(nums4);

let nums5 = [1, 1, 1];
sortColors(nums5);
console.log(nums5);
