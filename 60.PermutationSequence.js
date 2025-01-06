function getPermutation(n, k) {
    let nums = Array.from({ length: n }, (_, i) => i + 1);
    let ketQua = '';
    k--;
    let giaiThua = [1];
    for (let i = 1; i < n; i++) giaiThua[i] = giaiThua[i - 1] * i;
    for (let i = n - 1; i >= 0; i--) {
        let chiSo = Math.floor(k / giaiThua[i]);
        ketQua += nums[chiSo];
        nums.splice(chiSo, 1);
        k %= giaiThua[i];
    }
    return ketQua;
}

// Example
console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));
