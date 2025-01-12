var read4 = function(buf4) {
    let data = "HelloWorld";
    let i = 0;
    while (i < 4 && i < data.length) {
        buf4[i] = data[i];
        i++;
    }
    return i;
};

var read = function(buf, n) {
    let total = 0;
    let buf4 = new Array(4);

    while (total < n) {
        let bytes = read4(buf4);
        
        if (bytes === 0) break;
        
        let bytesToCopy = Math.min(bytes, n - total);
        for (let i = 0; i < bytesToCopy; i++) {
            buf[total + i] = buf4[i];
        }

        total += bytesToCopy;
    }

    return total;
};

// Example
let buf = new Array(10);
let n = 7;
console.log(read(buf, n));
console.log(buf);
