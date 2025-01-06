function maxSubArray(nums) {
    let maxTong = nums[0], tongHienTai = nums[0];
    for (let i = 1; i < nums.length; i++) {
        tongHienTai = Math.max(nums[i], tongHienTai + nums[i]);
        maxTong = Math.max(maxTong, tongHienTai);
    }
    return maxTong;
}

// Example
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));
