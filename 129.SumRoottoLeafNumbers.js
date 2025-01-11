var sumNumbers = function(root) {
    let totalSum = 0;

    function dfs(node, currentSum) {
        if (!node) return;
        
        currentSum = currentSum * 10 + node.val;

        if (!node.left && !node.right) {
            totalSum += currentSum;
        } else {
            dfs(node.left, currentSum);
            dfs(node.right, currentSum);
        }
    }

    dfs(root, 0);

    return totalSum;
};

// Example
console.log(sumNumbers({val: 1, left: {val: 2}, right: {val: 3}}));
console.log(sumNumbers({val: 4, left: {val: 9, left: {val: 5}, right: {val: 1}}, right: {val: 0}}));
