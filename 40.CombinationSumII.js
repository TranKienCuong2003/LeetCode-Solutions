function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = [];
    let combination = [];

    function backtrack(start, target) {
        if (target === 0) {
            result.push([...combination]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            if (candidates[i] > target) break;
            combination.push(candidates[i]);
            backtrack(i + 1, target - candidates[i]);
            combination.pop();
        }
    }

    backtrack(0, target);
    return result;
}

// Example 1
let candidates1 = [10, 1, 2, 7, 6, 1, 5];
let target1 = 8;
console.log(combinationSum2(candidates1, target1));

// Example 2
let candidates2 = [2, 5, 2, 1, 2];
let target2 = 5;
console.log(combinationSum2(candidates2, target2));
