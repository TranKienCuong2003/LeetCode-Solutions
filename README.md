# LeetCode-Solutions

A collection of JavaScript solutions to LeetCode algorithm and data structure problems. These solutions cover a variety of topics and difficulty levels, aimed at improving problem-solving skills and coding efficiency.

## Problems Covered

This repository contains solutions to the following types of problems:

- Arrays
- Strings
- Linked Lists
- Stacks & Queues
- Hash Tables
- Trees
- Graphs
- Dynamic Programming
- Backtracking
- Sorting & Searching
- Bit Manipulation
- and more...

## Solution Format

Each problem is solved using JavaScript, and the solutions are organized as follows:

- **Problem**: A short description of the problem.
- **Solution**: The JavaScript code that solves the problem.
- **Test Cases**: Example input/output to verify the solution.

## Example Usage

Here's an example of a typical solution format:

### Problem: Two Sum

#### Solution (JavaScript)

```javascript
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
