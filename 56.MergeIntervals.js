function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let ketQua = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let [batDau, ketThuc] = intervals[i];
        let [cuoiBatDau, cuoiKetThuc] = ketQua[ketQua.length - 1];
        if (batDau <= cuoiKetThuc) {
            ketQua[ketQua.length - 1][1] = Math.max(ketThuc, cuoiKetThuc);
        } else {
            ketQua.push([batDau, ketThuc]);
        }
    }
    return ketQua;
}

// Example
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
