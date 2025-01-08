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
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

console.log(largestRectangleArea([2, 4]));
