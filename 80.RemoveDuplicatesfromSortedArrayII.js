var removeDuplicates = function(nums) {
    let index = 1, count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count <= 2) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};

// Example:
let nums1 = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums1), nums1.slice(0, removeDuplicates(nums1)));

let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums2), nums2.slice(0, removeDuplicates(nums2)));

let nums3 = [1, 1, 2, 2];
console.log(removeDuplicates(nums3), nums3.slice(0, removeDuplicates(nums3)));

let nums4 = [1, 1, 1];
console.log(removeDuplicates(nums4), nums4.slice(0, removeDuplicates(nums4)));

let nums5 = [];
console.log(removeDuplicates(nums5), nums5.slice(0, removeDuplicates(nums5)));
