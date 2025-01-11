var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Example
console.log(maxDepth({
    val: 3,
    left: { val: 9 },
    right: { val: 20, left: { val: 15 }, right: { val: 7 } }
}));
console.log(maxDepth(null));
