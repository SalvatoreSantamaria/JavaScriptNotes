// Write a function, longestStreak, that takes in the head of a linked list as an argument. 
// The function should return the length of the longest consecutive streak of the same value within the list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const longestStreak = (head) => {
    let maxStreak = 0;
    let currentStreak = 0;
    let currentNode = head;
    let prevVal = null;
    
    while (currentNode !== null) { //standard while to iterate thru
      if (currentNode.val === prevVal) { //check if values are same
        currentStreak += 1; //add to currentStreak if same
      } else {
        currentStreak = 1; // else (re)set currentStreak to 1
      }
      
      if (currentStreak > maxStreak) { //set the largest value
        maxStreak = currentStreak;
      }
      
      prevVal = currentNode.val; // set the previous var to be the previous
      currentNode = currentNode.next; // set the current var to be the next
    }
    
    return maxStreak;
  };

  console.log(longestStreak(a)); // 3