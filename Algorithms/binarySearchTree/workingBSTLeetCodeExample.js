
import { BinaryTree } from "./1treeConstructorAndMethods.js"

let testTree = new BinaryTree([1,2,2,3,4,4,3])
testTree.buildTree()
console.log('testTree', testTree.root)


BinaryTree.prototype.isSymmetric = function(root) {
  console.log('this root', this.root)
  if (this.root === null) {
      return true
  }
  return isMirror(this.root.left, this.root.right)
};

var isMirror = function(tree1, tree2) { //accept root left and right
  //1. must check null for recursion end of tree
  if (tree1 === null || tree2 === null) { 
      return tree1 === tree2
  }
  //2. now check if values are equal
  if (tree1.val !== tree2.val) {
      return false
  }
  //3. Everything is equal if we get to here, so we make recursive call to check the trees children- both left and right sides
  return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left)
}


let result = testTree.isSymmetric()
console.log('result', result)

//DO NOT EDIT THIS FILE






