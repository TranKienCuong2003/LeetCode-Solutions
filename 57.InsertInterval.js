function insert(intervals, newInterval) {
    let ketQua = [], i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) ketQua.push(intervals[i++]);
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    ketQua.push(newInterval);
    while (i < intervals.length) ketQua.push(intervals[i++]);
    return ketQua;
}

// Example
console.log(insert([[1,3],[6,9]], [2,5]));
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
