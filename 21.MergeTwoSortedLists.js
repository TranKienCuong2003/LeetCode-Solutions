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
let list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
let list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
console.log(mergeTwoLists(list1, list2));
