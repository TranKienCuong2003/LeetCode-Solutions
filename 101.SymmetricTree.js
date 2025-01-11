var isSymmetric = function(root) {
    if (!root) return true;
    let check = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right || left.val !== right.val) return false;
        return check(left.left, right.right) && check(left.right, right.left);
    };
    return check(root.left, root.right);
};

// Example
console.log(isSymmetric({
    val: 1,
    left: { val: 2, left: { val: 3 }, right: { val: 4 } },
    right: { val: 2, left: { val: 4 }, right: { val: 3 } }
}));
console.log(isSymmetric({
    val: 1,
    left: { val: 2, right: { val: 3 } },
    right: { val: 2, right: { val: 3 } }
}));
