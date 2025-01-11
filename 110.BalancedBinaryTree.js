var isBalanced = function(root) {
    let checkHeight = (node) => {
        if (!node) return 0;
        let leftHeight = checkHeight(node.left);
        let rightHeight = checkHeight(node.right);
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    };
    return checkHeight(root) !== -1;
};

// Example
console.log(isBalanced({
    val: 3,
    left: { val: 9 },
    right: { val: 20, left: { val: 15 }, right: { val: 7 } }
}));
console.log(isBalanced({
    val: 1,
    left: { val: 2, left: { val: 3, left: { val: 4 }, right: { val: 4 } }, right: { val: 3 } },
    right: { val: 2 }
}));
console.log(isBalanced(null));
