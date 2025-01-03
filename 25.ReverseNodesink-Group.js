function reverseKGroup(head, k) {
    let count = 0, temp = head;
    while (temp && count < k) {
        temp = temp.next;
        count++;
    }
    if (count < k) return head;
    let prev = null, curr = head;
    while (count--) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head.next = reverseKGroup(curr, k);
    return prev;
}

// Example
let ds = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
console.log(reverseKGroup(ds, 2));
