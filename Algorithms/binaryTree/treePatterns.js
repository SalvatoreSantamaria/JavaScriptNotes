/* Search through a Binary Search Tree for a node

https://leetcode.com/problems/search-in-a-binary-search-tree
You are given the root of a binary search tree (BST) and an integer val. Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
*/
var searchBST = function(root, val) {
  return dfs(root);

  function dfs(node) {
	if (node == null) { /* our base case which we will reach at leaf nodes */
      return null; /* the path just traversed doesn't contain the target so we return null */
    } else {
      if (node.val === val) {
        return node; /* exact match to our target val, return the subtree rooted at the current node */
      }
      /* target not yet found, compare node.val to target and traverse the left/right subtrees accordingly */
      if (node.val > val) {
        return dfs(node.left);
      }
      if (node.val < val) {
        return dfs(node.right);
      }
    }
  }
};

/* Adding left values together, traversing whole tree

https://leetcode.com/problems/sum-of-left-leaves/description/
Given the root of a binary tree, return the sum of all left leaves. A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
*/
var sumOfLeftLeaves = function(root) {
    
  if (!root) return 0
  let result = 0
  
  function dfs(node, isLeftFlag) {
      
      if (node.left === null && node.right === null && isLeftFlag) { //if left leaf (ie, no children) add to result
          result += node.val
      }
      
      if(node.left) { //recurse left with flag
          dfs(node.left, true)
      }
      
      if(node.right) {
          dfs(node.right, false) //recurse right with flag
      }
      
  }
  
  dfs(root)
  return result
};

/* Pre-Order, In-Order, Post-Order
https://leetcode.com/problems/binary-tree-postorder-traversal/description/
*/
var postorderTraversal = function(root) {
    
  if (root === null) {
      return []
  }
  
  let result = []
  function dfs(root) {
      // result.push(root.val) //Pre Order
      if (root.left) dfs(root.left)
      // result.push(root.val) //In Order
      if (root.right) dfs(root.right)
      result.push(root.val) //Post Order
  }
  dfs(root)
  return result
  
};