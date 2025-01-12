var upsideDownBinaryTree = function(root) {
    if (!root || !root.left) return root;

    let newRoot = upsideDownBinaryTree(root.left);
    
    root.left.left = root.right;
    root.left.right = root;
    root.left = null;
    root.right = null;
    
    return newRoot;
};

// Example
console.log(upsideDownBinaryTree({val: 1, left: {val: 2, left: {val: 4}, right: {val: 5}}, right: {val: 3}}));
