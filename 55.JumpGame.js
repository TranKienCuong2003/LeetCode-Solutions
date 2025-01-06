function canJump(nums) {
    let tamVoi = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > tamVoi) return false;
        tamVoi = Math.max(tamVoi, i + nums[i]);
    }
    return true;
}

// Example
console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
