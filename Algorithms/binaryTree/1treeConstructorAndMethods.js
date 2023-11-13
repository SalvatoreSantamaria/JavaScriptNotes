

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

  // Breadth First Search
  breadthFirstSearch = function() {
    let queue = [this.root];
    let visited = [];
    while (queue.length) {
      let node = queue.shift();
      visited.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return visited;
  };

/* DFS *************************************************************************************************************************
// See the excellent walkthrough at https://www.udemy.com/course/data-structures-algorithms-javascript/learn/lecture/24926568#overview
*/

  DFSPreOrder() {
    let results = [];
    function traverse(node){
      results.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    let results = [];
    function traverse(node){
      if (node.left) traverse(node.left);
      results.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return results;
  }

  DFSPostOrder() {
    let results = [];
    function traverse(node){
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.val);
    }
    traverse(this.root);
    return results;
  }

  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
        if (value < temp.val) {
            temp = temp.left;
        } else if (value > temp.val) {
            temp = temp.right;
        } else {
            return true;
        }
    }
    return false;
}   
}

class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

// See the leetcodeTemplate file for example use.
