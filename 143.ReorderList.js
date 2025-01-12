var reorderList = function(head) {
    if (!head || !head.next) return;

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr = slow;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    let first = head;
    let second = prev;
    while (second.next) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }
};

// Example
let head1 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
reorderList(head1);
console.log(JSON.stringify(head1));

let head2 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
reorderList(head2);
console.log(JSON.stringify(head2));
