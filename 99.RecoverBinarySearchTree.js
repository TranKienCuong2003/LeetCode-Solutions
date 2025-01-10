function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var recoverTree = function(root) {
    let first = null, second = null, prev = new TreeNode(-Infinity);

    const inorderTraversal = (node) => {
        if (node === null) return;

        inorderTraversal(node.left);

        if (first === null && prev.val > node.val) {
            first = prev;
        }
        if (first !== null && prev.val > node.val) {
            second = node;
        }
        prev = node;

        inorderTraversal(node.right);
    };

    inorderTraversal(root);

    [first.val, second.val] = [second.val, first.val];
};

// Example
let root1 = new TreeNode(1, new TreeNode(3, null, new TreeNode(2)));
recoverTree(root1);
console.log(JSON.stringify(root1));

let root2 = new TreeNode(3, new TreeNode(1), new TreeNode(4, new TreeNode(2)));
recoverTree(root2);
console.log(JSON.stringify(root2));
