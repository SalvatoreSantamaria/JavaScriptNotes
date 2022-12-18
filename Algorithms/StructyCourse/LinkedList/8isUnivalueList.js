// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const a = new Node(7);
  const b = new Node(8);
  const c = new Node(7);
   //787
   
  a.next = b;
  b.next = c;
  
  const isUnivalueList = (head) => {
    let current = head;
    
    while (current !== null) {
      // console.log('head.val', head.val)
      // console.log('current.val', current.val)
      if (current.val !== head.val) { //remember that the head is STATIC, but current is the actual current value
        return false;
      }
      current = current.next;
    }
    
    return true;
  }
  
  console.log(isUnivalueList(a))