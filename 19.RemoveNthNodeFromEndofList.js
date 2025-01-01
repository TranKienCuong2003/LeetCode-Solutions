function ListNode(val) {
    this.val = val;
    this.next = null;
}

function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy, slow = dummy;

    for (let i = 1; i <= n + 1; i++) {
        fast = fast.next;
    }
    
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    return dummy.next;
}

function createLinkedList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

// Example
let head = createLinkedList([1, 2, 3, 4, 5]);
head = removeNthFromEnd(head, 2);
printLinkedList(head); // Output: [1, 2, 3, 5]
