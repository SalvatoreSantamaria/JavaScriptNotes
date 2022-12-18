// Write a function, createLinkedList, that takes in an array of values as an argument. 
// The function should create a linked list containing each element of the array as the values of the nodes. 
// The function should return the head of the linked list.

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
const createLinkedList = (values) => {
  const dummyHead = new Node(null); //make fake node
  let tail = dummyHead; //pointed to point to last node of output
  for (let val of values) { //iterate through values array
    tail.next = new Node(val); //create new node
    tail = tail.next; //move tail pointer to node we just created
  }
  return dummyHead.next; //return the .next, because we don't want to include the 0 at the front
};

console.log(createLinkedList(["h", "e", "y"]));
  // h -> e -> y