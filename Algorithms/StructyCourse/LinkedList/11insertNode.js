// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.




class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  
  a.next = b;
  b.next = c;
  c.next = d;
  
  // a -> b -> c -> d


  const insertNode = (head, value, index) => {
    if (index === 0) {
      const newHead = new Node(value); //create a new Node of value
      newHead.next = head; // then have to set the node head
      return newHead;
    }
    
    let count = 0;
    let current = head;
    while (current !== null) { // iterate
      if (count === index - 1) { //when we find where to insert (at 1 less than target index)
        const nextTemp = current.next; // get the next (this is the temp so we don't overwrite, we are inserting)
        current.next = new Node(value); // and set the next to the new value (here is the insert)
        current.next.next = nextTemp; // hook up the new inserted Node to the temp next value
      }
      
      count += 1; //increment as we travel thru
      current = current.next; //standard travel thru
    }
    return head;
  };

  console.log(insertNode(a, 'x', 2));
// a -> b -> x -> c -> d