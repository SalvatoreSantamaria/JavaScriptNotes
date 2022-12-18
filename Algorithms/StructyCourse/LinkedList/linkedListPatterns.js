// Linked List Patterns.
// I am commenting out portions of solution so that the patterns are easier to see, 
// these are based off of complete algos and the notes are pseudo code only


// Looping through and finding values: ------------------------------------------------------------------------------------------------------------------------------
const getNodeValue = (head, index) => {
//   let count = 0;
// often times we will need to set "let current = head" right here
  while (head) { //while we have a node:
    // if (index === count) { //do stuff
    //   return head.val;
    // }
    // count += 1;
    head = head.next; //iterate forward
  }
  return null;
};

//If we are reversing, then we need to use the swap pattern. ------------------------------------------------------------------------------------------------------------------------------
//This is a memorize it algorithm.
const reverseList = (head) => {
    // let current = head
    // let temp = null 
    while(current) {
        const next = current.next //swap pattern
        current.next = temp
        temp = current
        current = next
    }
    // return temp
    };

// If we are combining lists, then we will likely need to create a new 'dummy' list and return that. ------------------------------------------------------------------------------------------------------------------------------
// Build up the list by adding nodes to the tail via 'tail.next = whateverTheNodeIs' and then pointing to whateverTheNodeIs.next
const mergeLists = (head1, head2) => {
    let dummyHead = new Node(null); //we are creating a new list
    let tail = dummyHead; // create tail which we will build off of
    let current1 = head1; 
    let current2 = head2;
    
    while (current1 !== null && current2 !== null) { //run while not null
      //if (current1.val < current2.val) { // when head1 is larger
        tail.next = current1; // tack on the next
        current1 = current1.next; // add the .next to it to progress pointer
      //} else { // or do the other
        tail.next = current2;
        current2 = current2.next;
      //}
      tail = tail.next; //always add a .next
    }

    return dummyHead.next; //return the dummyHead.next because we don't want to return the null at the head of the next list we created
  };

  
// Removing a node ------------------------------------------------------------------------------------------------------------------------------
// Get the current and previous values, and to remove, just make the previous point to the current.next value. 
// Remember to keep iterating forward by moving the previous and current values forward

    let current = head;
    let prev = null;
    while (current !== null) { //standard iteration
      if (current.val === targetVal) { //if the targetVal is found
        prev.next = current.next; //remove by pointing prev to the next
        break; // this is here so we don't delete multiple occurences
      }
      prev = current;
      current = current.next;


// Insert a node ------------------------------------------------------------------------------------------------------------------------------
// Add a new Node(value) at the current. Use temps

const nextTemp = current.next; // get the next (this is the temp so we don't overwrite, we are inserting)
current.next = new Node(value); // and set the next to the new value (here is the insert)
current.next.next = nextTemp; // hook up the new inserted Node to the temp next value


// Creating a linked list ------------------------------------------------------------------------------------------------------------------------------
// This is a memorize it algo
const createLinkedList = (values) => {
    const dummyHead = new Node(null); //make fake node
    let tail = dummyHead; //pointed to point to last node of output
    for (let val of values) { //iterate through values array
        tail.next = new Node(val); //create new node
        tail = tail.next; //move tail pointer to node we just created
    }
    return dummyHead.next; //return the .next, because we don't want to include the 0 at the front
};