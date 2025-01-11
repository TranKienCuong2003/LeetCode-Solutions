var sortedListToBST = function(head) {
    let findMiddle = (head) => {
        let prev = null, slow = head, fast = head;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if (prev) prev.next = null;
        return slow;
    };

    let buildTree = (head) => {
        if (!head) return null;
        let mid = findMiddle(head);
        let root = { val: mid.val, left: null, right: null };
        if (mid === head) return root;
        root.left = buildTree(head);
        root.right = buildTree(mid.next);
        return root;
    };

    return buildTree(head);
};

function createLinkedList(arr) {
    let dummy = { val: 0, next: null }, curr = dummy;
    for (let num of arr) {
        curr.next = { val: num, next: null };
        curr = curr.next;
    }
    return dummy.next;
}

// Example
console.log(sortedListToBST(createLinkedList([-10, -3, 0, 5, 9])));
console.log(sortedListToBST(createLinkedList([])));
