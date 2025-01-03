function swapPairs(head) {
    if (!head || !head.next) return head;
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
}

// Example
let ds = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
console.log(swapPairs(ds));
