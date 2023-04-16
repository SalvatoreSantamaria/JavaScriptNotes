
import { BinaryTree } from "./gpt.js"

let testTree = new BinaryTree([ 47, 21, 76, 18, 27, 52, 82 ])
testTree.buildTree()
//console.log('testTree', testTree.root)

//console.log( testTree.breadthFirstSearch() ); // [ 47, 21, 76, 18, 27, 52, 82 ]


console.log( testTree.DFSPreOrder() ); // [ 47, 21, 18, 27, 76, 52, 82 ]
console.log( testTree.DFSInOrder() ); // [ 18, 21, 27, 47, 52, 76, 82 ]
console.log( testTree.DFSPostOrder() ); // [ 18, 27, 21, 52, 82, 76, 47 ]











