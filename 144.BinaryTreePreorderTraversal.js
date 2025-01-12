var preorderTraversal = function(root) {
    let result = [];
    
    function traverse(node) {
        if (!node) return;
        
        result.push(node.val);
        
        traverse(node.left);
        
        traverse(node.right);
    }
    
    traverse(root);
    
    return result;
};

// Example
let root1 = { val: 1, left: null, right: { val: 2, left: { val: 3, left: null, right: null }, right: null } };
console.log(preorderTraversal(root1));

let root2 = {
    val: 1,
    left: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } },
    right: { val: 3, left: { val: 6, left: null, right: null }, right: { val: 7, left: null, right: null } }
};
console.log(preorderTraversal(root2));

let root3 = null;
console.log(preorderTraversal(root3));

let root4 = { val: 1, left: null, right: null };
console.log(preorderTraversal(root4));
