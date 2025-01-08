// Định nghĩa cấu trúc ListNode
class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  // Hàm giải quyết bài toán
  function deleteDuplicates(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
  
    while (head) {
      if (head.next && head.val === head.next.val) {
        // Tìm tới cuối các node có giá trị trùng lặp
        while (head.next && head.val === head.next.val) {
          head = head.next;
        }
        // Bỏ qua các node trùng lặp
        prev.next = head.next;
      } else {
        prev = prev.next;
      }
      head = head.next;
    }
  
    return dummy.next;
  }
  
  // Helper function để in danh sách liên kết
  function printList(head) {
    let result = [];
    while (head) {
      result.push(head.val);
      head = head.next;
    }
    return result;
  }

  // Example
  const head1 = new ListNode(1);
  head1.next = new ListNode(2);
  head1.next.next = new ListNode(3);
  head1.next.next.next = new ListNode(3);
  head1.next.next.next.next = new ListNode(4);
  head1.next.next.next.next.next = new ListNode(4);
  head1.next.next.next.next.next.next = new ListNode(5);
  
  console.log(printList(deleteDuplicates(head1)));

  const head2 = new ListNode(1);
  head2.next = new ListNode(1);
  head2.next.next = new ListNode(1);
  head2.next.next.next = new ListNode(2);
  head2.next.next.next.next = new ListNode(3);
  
  console.log(printList(deleteDuplicates(head2)));
  