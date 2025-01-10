function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var generateTrees = function(n) {
    if (n === 0) return [];

    const buildTrees = (start, end) => {
        let trees = [];

        if (start > end) {
            trees.push(null);
            return trees;
        }

        for (let i = start; i <= end; i++) {
            let leftTrees = buildTrees(start, i - 1);
            let rightTrees = buildTrees(i + 1, end);

            for (let left of leftTrees) {
                for (let right of rightTrees) {
                    let currentTree = new TreeNode(i);
                    currentTree.left = left;
                    currentTree.right = right;
                    trees.push(currentTree);
                }
            }
        }

        return trees;
    };

    return buildTrees(1, n);
};

// Example
let result1 = generateTrees(3);
console.log(JSON.stringify(result1));

let result2 = generateTrees(1);
console.log(JSON.stringify(result2));
