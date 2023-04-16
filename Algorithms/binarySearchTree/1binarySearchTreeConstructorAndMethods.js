// https://www.udemy.com/course/data-structures-algorithms-javascript/learn/lecture/24926410#questions
// This file is a combination of the different created methods from the above section.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
export class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                } 
                temp = temp.right;
            }
        }
    }
    // Added, so that I can simply build BST's from an input array
    build(array) {
        for (let i = 0; i < array.length; i++) {
            this.insert(array[i]);
        }
        return this;
    }

    contains(value) {
        if (this.root === null) return false;
        let temp = this.root;
        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }      
    
    minValueNode(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    BFS() {
        let currentNode = this.root;
        let results = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length) {
           currentNode = queue.shift();
           results.push(currentNode.value);
           if(currentNode.left) queue.push(currentNode.left);
           if(currentNode.right) queue.push(currentNode.right);
        }
        return results;
    }

    DFSPreOrder() {
        let results = [];
        function traverse(currentNode) {
            results.push(currentNode.value);
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }

    DFSInOrder() {
        let results = [];
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left);
            results.push(currentNode.value);
            if (currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }

    DFSPostOrder() {
        let results = [];
        function traverse(currentNode){
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
            results.push(currentNode.value);
        }
        traverse(this.root);
        return results;
    }
}




function test() {
    //tree that we will build
        /*
                47
            /      \
        21        76
        /  \      /  \
        18    27  52    82

        */

    let myTree = new BST();

    // myTree.insert(47);
    // myTree.insert(21);
    // myTree.insert(76);
    // myTree.insert(18);
    // myTree.insert(27);
    // myTree.insert(52);
    // myTree.insert(82);

    myTree.insert(1);
    myTree.insert(2);
    myTree.insert(2);
    myTree.insert(3);
    myTree.insert(4);
    myTree.insert(4);
    myTree.insert(3);

    console.log( myTree)
    console.log( myTree.BFS() ); // [ 47, 21, 76, 18, 27, 52, 82 ]
    //console.log( myTree.DFSPreOrder() ); // [ 47, 21, 18, 27, 76, 52, 82 ]
    //console.log( myTree.DFSInOrder() ); // [ 18, 21, 27, 47, 52, 76, 82 ]
    //console.log( myTree.DFSPostOrder() ); // [ 18, 27, 21, 52, 82, 76, 47 ]
}
test();

// let testBuildTree = new BST()
// let result = testBuildTree.build([47,21,76,18,27,52,82])
// console.log('result', result)


// function testShouldWorkNow() {
//     let testBuildTree = new BST()
//     let result = testBuildTree.build([47,21,76,18,27,52,82])
//     console.log('result', result)
// }
// testShouldWorkNow()

//************************************************************************************************************* */
//A simple visualization

/*
      root
    /      \
   a        b
  / \      / \
a1   a2  b1   b2

*/

// function test2() {
//     let myTree = new BST()
//     myTree.insert('root')
//     myTree.insert('a')
//     myTree.insert('b')
//     myTree.insert('a1')
//     myTree.insert('a2')
//     myTree.insert('b1')
//     myTree.insert('a2')
//     console.log( myTree.BFS() )
// }
//test2()

 
//************************************************************************************************************* */
//Build a tree

// let myTree2 = new BST()
// let build = (arr) => {
//     arr.forEach(element => myTree2.insert(element))
//     return myTree2
// }

// let treeToTraverse = build([ 47, 21, 76, 18, 27, 52, 82 ])
// console.log('test', treeToTraverse)
// console.log( myTree2.BFS() ); // [ 47, 21, 76, 18, 27, 52, 82 ]
// console.log( myTree2.DFSPreOrder() ); // [ 47, 21, 18, 27, 76, 52, 82 ]
// console.log( myTree2.DFSInOrder() ); // [ 18, 21, 27, 47, 52, 76, 82 ]
// console.log( myTree2.DFSPostOrder() ); // [ 18, 27, 21, 52, 82, 76, 47 ]