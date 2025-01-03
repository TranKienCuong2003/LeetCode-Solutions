function mergeKLists(lists) {
    if (!lists.length) return null;
    while (lists.length > 1) {
        let l1 = lists.shift();
        let l2 = lists.shift();
        lists.push(mergeTwoLists(l1, l2));
    }
    return lists[0];
}

function mergeTwoLists(l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// Example
let ds1 = { val: 1, next: { val: 4, next: { val: 5, next: null } } };
let ds2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
let ds3 = { val: 2, next: { val: 6, next: null } };
console.log(mergeKLists([ds1, ds2, ds3]));
