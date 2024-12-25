function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;
    
    while (l1 !== null || l2 !== null || carry !== 0) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        
        let sum = x + y + carry;

        carry = Math.floor(sum / 10);
        
        current.next = new ListNode(sum % 10);
        
        current = current.next;
        
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    return dummyHead.next;
};

function printList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}

// Example
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));  // 342
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));  // 465

let result = addTwoNumbers(l1, l2);
printList(result);  // Output: [7, 0, 8] (342 + 465 = 807)
