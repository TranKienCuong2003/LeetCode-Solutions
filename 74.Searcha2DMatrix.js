var searchMatrix = function(matrix, target) {
    const rows = matrix.length, cols = matrix[0].length;
    let left = 0, right = rows * cols - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const value = matrix[Math.floor(mid / cols)][mid % cols];
        if (value === target) return true;
        if (value < target) left = mid + 1;
        else right = mid - 1;
    }

    return false;
};

// Example:
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3));
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));
