var insertionSortList = function(head) {
    if (!head) return null;

    let sortedHead = null;

    let current = head;
    while (current) {
        let next = current.next;
        
        if (!sortedHead || current.val <= sortedHead.val) {
            current.next = sortedHead;
            sortedHead = current;
        } else {
            let sortedCurr = sortedHead;
            while (sortedCurr.next && sortedCurr.next.val < current.val) {
                sortedCurr = sortedCurr.next;
            }
            current.next = sortedCurr.next;
            sortedCurr.next = current;
        }
        
        current = next;
    }

    return sortedHead;
};

// Example
let head1 = { val: 4, next: { val: 2, next: { val: 1, next: { val: 3, next: null } } } };
console.log(insertionSortList(head1));

let head2 = { val: -1, next: { val: 5, next: { val: 3, next: { val: 4, next: { val: 0, next: null } } } } };
console.log(insertionSortList(head2));
