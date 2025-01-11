var minDepth = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// Example
console.log(minDepth({
    val: 3,
    left: { val: 9 },
    right: { val: 20, left: { val: 15 }, right: { val: 7 } }
}));
console.log(minDepth({
    val: 2,
    right: { val: 3, right: { val: 4, right: { val: 5, right: { val: 6 } } } }
}));
console.log(minDepth(null));
