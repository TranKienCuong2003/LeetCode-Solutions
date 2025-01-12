var detectCycle = function(head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            let start = head;
            while (start !== slow) {
                start = start.next;
                slow = slow.next;
            }
            return start;
        }
    }

    return null;
};

// Example
let head1 = { val: 3, next: { val: 2, next: { val: 0, next: { val: -4, next: null } } } };
head1.next.next.next.next = head1.next;
console.log(detectCycle(head1));

let head2 = { val: 1, next: { val: 2, next: null } };
head2.next.next = head2;
console.log(detectCycle(head2));

let head3 = { val: 1, next: null };
console.log(detectCycle(head3));
