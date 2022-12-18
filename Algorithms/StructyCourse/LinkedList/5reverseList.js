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
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

const reverseList = (head) => {
let current = head
let temp = null //
while(current) {
    const next = current.next
    current.next = temp
    temp = current
    current = next
}
return temp
};


console.log(reverseList(a)); // f -> e -> d -> c -> b -> a