function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var deleteDuplicates = function(head) {
    let current = head;
    
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    
    return head;
};

// Example
let head1 = new ListNode(1, new ListNode(1, new ListNode(2)));
console.log(deleteDuplicates(head1));

let head2 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
console.log(deleteDuplicates(head2));
