function rotateRight(head, k) {
    if (!head || k === 0) return head;

    let len = 1;
    let last = head;
    while (last.next) {
        len++;
        last = last.next;
    }

    k = k % len;
    if (k === 0) return head;

    let newTail = head;
    for (let i = 1; i < len - k; i++) {
        newTail = newTail.next;
    }

    let newHead = newTail.next;
    newTail.next = null;
    last.next = head;

    return newHead;
}

// Example
console.log(rotateRight([1, 2, 3, 4, 5], 2));
