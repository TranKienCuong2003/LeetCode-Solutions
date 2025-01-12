var read4 = function(buf4) {
    let data = "HelloWorld";
    let i = 0;
    while (i < 4 && i < data.length) {
        buf4[i] = data[i];
        i++;
    }
    return i;
};

var BufferedReader = function() {
    this.buf4 = new Array(4);
    this.buffer = [];
    this.buf4Ptr = 0;
    this.buf4Count = 0;
};

BufferedReader.prototype.read = function(buf, n) {
    let total = 0;
    
    while (total < n) {
        if (this.buf4Ptr === this.buf4Count) {
            this.buf4Count = read4(this.buf4);
            this.buf4Ptr = 0;
            
            if (this.buf4Count === 0) break;
        }
        
        let bytesToCopy = Math.min(this.buf4Count - this.buf4Ptr, n - total);
        for (let i = 0; i < bytesToCopy; i++) {
            buf[total + i] = this.buf4[this.buf4Ptr + i];
        }
        
        this.buf4Ptr += bytesToCopy;
        total += bytesToCopy;
    }
    
    return total;
};

// Example
let buf = new Array(10);
let n = 7;
let reader = new BufferedReader();
console.log(reader.read(buf, n));
console.log(buf);
