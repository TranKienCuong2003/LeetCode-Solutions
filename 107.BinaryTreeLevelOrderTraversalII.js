var levelOrderBottom = function(root) {
    if (!root) return [];
    let res = [], queue = [root];
    while (queue.length) {
        let level = [], size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.unshift(level);
    }
    return res;
};

// Example
console.log(levelOrderBottom({
    val: 3,
    left: { val: 9 },
    right: { val: 20, left: { val: 15 }, right: { val: 7 } }
}));
console.log(levelOrderBottom({ val: 1 }));
console.log(levelOrderBottom(null));
