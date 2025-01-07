var combine = function(n, k) {
    const result = [];
    const backtrack = (start, path) => {
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path);
            path.pop();
        }
    };
    backtrack(1, []);
    return result;
};

// Example:
console.log(combine(4, 2));
console.log(combine(1, 1));
console.log(combine(5, 3));
console.log(combine(3, 3));
console.log(combine(6, 4));
