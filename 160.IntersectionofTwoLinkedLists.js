var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }

    return pA;  // Nếu gặp nhau, trả về điểm giao nhau, nếu không trả về null
};

// Example 1
let listA = { 
    val: 4, 
    next: { 
        val: 1, 
        next: { 
            val: 8, 
            next: { 
                val: 4, 
                next: { 
                    val: 5, 
                    next: null 
                } 
            } 
        } 
    } 
};

let listB = { 
    val: 5, 
    next: { 
        val: 6, 
        next: { 
            val: 1, 
            next: { 
                val: 8, 
                next: { 
                    val: 4, 
                    next: { 
                        val: 5, 
                        next: null 
                    } 
                } 
            } 
        } 
    } 
};

console.log(getIntersectionNode(listA, listB));  // Output: Intersected at '8'

// Example 2
let listA2 = { 
    val: 1, 
    next: { 
        val: 9, 
        next: { 
            val: 1, 
            next: { 
                val: 2, 
                next: { 
                    val: 4, 
                    next: null 
                } 
            } 
        } 
    } 
};

let listB2 = { 
    val: 3, 
    next: { 
        val: 2, 
        next: { 
            val: 4, 
            next: null 
        } 
    } 
};

console.log(getIntersectionNode(listA2, listB2));  // Output: Intersected at '2'

// Example 3
let listA3 = { 
    val: 2, 
    next: { 
        val: 6, 
        next: { 
            val: 4, 
            next: null 
        } 
    } 
};

let listB3 = { 
    val: 1, 
    next: { 
        val: 5, 
        next: null 
    } 
};

console.log(getIntersectionNode(listA3, listB3));
