// Write a function, middleValue, that takes in the head of a linked list as an argument. The function should return the value of the middle node in the linked list. If the linked list has an even number of nodes, then return the value of the second middle node.

// You may assume that the input list is non-empty.

// test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// // a -> b -> c -> d -> e
// middleValue(a); // c

var middleNode = function(head) {
    
  let fast = head;
  let slow = head;
  
  while (fast !== null && fast.next !== null) { //this is the trick, it needs to be in this order 
      slow = slow.next;
      fast = fast.next.next;  //fast is 2x as fast as slow
  }
  
  return slow;
};

// This also works
// var middleNode = function(head) {
//   let count = 0

//   const dummyHead = new ListNode(null) 
//   dummyHead.next = head
//   let head1 = dummyHead
//   let head2 = dummyHead

//   while (head1.next !== null) {
//     count++
//     head1 = head1.next
//   }

//   console.log(count)
//   if (count % 2 == 0) {
//     count++
//   }

//   i = 0
//   while (i < count/2) {
//     head2 = head2.next
//     i++
//   }
//   return(head2)
// };