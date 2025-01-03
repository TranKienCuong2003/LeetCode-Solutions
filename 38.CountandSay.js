function countAndSay(n) {
    if (n === 1) return "1";
    let prev = countAndSay(n - 1), result = "", count = 1;
    for (let i = 0; i < prev.length; i++) {
        if (prev[i] === prev[i + 1]) count++;
        else {
            result += count + prev[i];
            count = 1;
        }
    }
    return result;
}

// Example
console.log(countAndSay(4)); // Output: "1211"
