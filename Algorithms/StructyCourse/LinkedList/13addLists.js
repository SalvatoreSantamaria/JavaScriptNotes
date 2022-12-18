// Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

// Say we wanted to compute 621 + 354 normally. The sum is 975:

//    621
//  + 354
//  -----
//    975

// Then, the reversed linked list format of this problem would appear as:

//     1 -> 2 -> 6
//  +  4 -> 5 -> 3
//  --------------
//     5 -> 7 -> 9

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
//   621
// + 354
// -----
//   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3




  const addLists = (head1, head2) => {
    const dummyHead = new Node(null); //we are going to built up a new linked list
    let tail = dummyHead;
    
    let carry = 0;
    let current1 = head1;
    let current2 = head2;
    while (current1 !== null || current2 !== null || carry !== 0)  { //if true, keep running
      const val1 = current1 === null ? 0 : current1.val; // sub in 0 if null for node value
      const val2 = current2 === null ? 0 : current2.val; // sub in 0 if null for node value
      const sum = val1 + val2 + carry; // sum the individual number
      carry = sum > 9 ? 1 : 0;
      
      const digit = sum % 10; //math for adding 
      tail.next = new Node(digit); //create new node for new linked list
      tail = tail.next; //connecting new linked list
      
      if (current1 !== null) current1 = current1.next; //traverse to next node, ONLY if it exists
      if (current2 !== null) current2 = current2.next;//traverse to next node, ONLY if it exists
    }
    
    return dummyHead.next; //return dummyHead.next because we need to NOT include the null value at the head, see first line in the function
  };


  console.log(addLists(a1, b1));
// 5 -> 7 -> 9