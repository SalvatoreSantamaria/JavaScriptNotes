//this is the one that works!


export class BinaryTree {
  constructor(input) {
    this.input = input;
    this.root = null;
  }

  buildTree() {
    let nodes = [];
    for (let i = 0; i < this.input.length; i++) {
      let node = new Node(this.input[i]);
      nodes.push(node);
      if (i === 0) {
        this.root = node;
      } else {
        let parentIndex = Math.floor((i - 1) / 2);
        let parent = nodes[parentIndex];
        if (i % 2 === 0) {
          parent.right = node;
        } else {
          parent.left = node;
        }
      }
    }
  }
}

class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

// Usage
//let input = [1, 2, 3, 4, 5, 6, 7];
// myTree.insert(1);
// myTree.insert(2);
// myTree.insert(2);
// myTree.insert(3);
// myTree.insert(4);
// myTree.insert(4);
// myTree.insert(3);
// let input = [1,2,2,3,4,4,3]
// let tree = new BinaryTree(input);
// tree.buildTree();
// console.log(tree.root);

//this is the one that works!

    //tree that we will build
        /*
                47
            /      \
          21        76
        /  \      /  \
        18    27  52    82

        */
// let input2 = [47,21,76,18,27,52,82]
// let myTree = new BinaryTree(input2);
// myTree.buildTree()
// console.log(myTree.root)

        // myTree.insert(47);
        // myTree.insert(21);
        // myTree.insert(76);
        // myTree.insert(18);
        // myTree.insert(27);
        // myTree.insert(52);
        // myTree.insert(82);