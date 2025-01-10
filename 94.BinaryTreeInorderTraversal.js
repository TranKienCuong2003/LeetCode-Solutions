var inorderTraversal = function(root) {
    let result = [];

    const traverse = (node) => {
        if (node === null) return;

        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    };

    traverse(root);
    return result;
};

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Example
let root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root1));

let root2 = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(4), 
        new TreeNode(5, new TreeNode(6), new TreeNode(7))
    ), 
    new TreeNode(3, null, new TreeNode(8, new TreeNode(9)))
);
console.log(inorderTraversal(root2));

let root3 = null;
console.log(inorderTraversal(root3));

let root4 = new TreeNode(1);
console.log(inorderTraversal(root4));
