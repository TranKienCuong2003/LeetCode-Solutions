var connect = function(root) {
    if (!root) return null;
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (i < size - 1) {
                node.next = queue[0];
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return root;
};

// Example
console.log(connect({
    val: 1,
    left: {
        val: 2,
        left: { val: 4 },
        right: { val: 5 }
    },
    right: {
        val: 3,
        left: { val: 6 },
        right: { val: 7 }
    }
}));

console.log(connect(null));
