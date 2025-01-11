var pathSum = function(root, targetSum) {
    let res = [];
    let dfs = (node, sum, path) => {
        if (!node) return;
        path.push(node.val);
        sum += node.val;
        if (!node.left && !node.right && sum === targetSum) {
            res.push([...path]);
        }
        dfs(node.left, sum, path);
        dfs(node.right, sum, path);
        path.pop();
    };
    dfs(root, 0, []);
    return res;
};

// Example
console.log(pathSum({
    val: 5,
    left: {
        val: 4,
        left: { val: 11, left: { val: 7 }, right: { val: 2 } }
    },
    right: {
        val: 8,
        left: { val: 13 },
        right: { val: 4, left: { val: 5 }, right: { val: 1 } }
    }
}, 22));

console.log(pathSum({
    val: 1,
    left: { val: 2 },
    right: { val: 3 }
}, 5));

console.log(pathSum({
    val: 1,
    left: { val: 2 }
}, 0));
