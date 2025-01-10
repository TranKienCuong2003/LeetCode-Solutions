var restoreIpAddresses = function(s) {
    let result = [];

    const isValid = (segment) => {
        if (segment.length > 1 && segment[0] === '0') return false;
        let num = parseInt(segment, 10);
        return num >= 0 && num <= 255;
    };

    const backtrack = (start, path) => {
        if (path.length === 4) {
            if (start === s.length) {
                result.push(path.join('.'));
            }
            return;
        }

        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;

            let segment = s.slice(start, start + len);
            if (isValid(segment)) {
                path.push(segment);
                backtrack(start + len, path);
                path.pop();
            }
        }
    };

    backtrack(0, []);
    return result;
};

// Example
console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("101023"));
