var maximalRectangle = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    let rows = matrix.length;
    let cols = matrix[0].length;
    let heights = Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }

        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        let height = heights[stack.pop()];
        let width = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
};

// Example
let matrix1 = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
console.log(maximalRectangle(matrix1));  // Output: 6

let matrix2 = [["0"]];
console.log(maximalRectangle(matrix2));  // Output: 0

let matrix3 = [["1"]];
console.log(maximalRectangle(matrix3));  // Output: 1
