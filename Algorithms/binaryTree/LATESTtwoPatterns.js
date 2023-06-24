// https://leetcode.com/problems/sum-of-left-leaves/submissions/

//These are basically the same. See DIFF note

//Patten 1
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

// Pattern 2
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  if(!root) return sum;

  const dfs = (node, isLeft=false) => {
    if(!node) return; //DIFF 2:. Move the node check up here
    if(!node.left && !node.right && isLeft){
      sum = sum + node.val;
    }

    //DIFF 1: removed the if check
    // if(node.left) {
    //   dfs(node.left, true)
    // }

    dfs(node.left, true);
    dfs(node.right, false);
  }
  dfs(root);
  return sum;
};

// maxDepth ------------------------------------------------------------------------------------------------------------------------------------------------------------
// Pattern 1
var maxDepth = function(root) {
    
  if (root === null) return 0
  let result = 0
  
  function dfs(node, depth) {
      if (node.left !== null) {
          dfs(node.left, depth + 1)
      }
      
      if (node.right !== null) {
          dfs(node.right, depth + 1)
      }

      else result = Math.max(result, depth)
      
  }
  dfs(root, 1)
  return result
  
};


// Pattern 2
var maxDepth = function(root) {
  let max = 0
  
  function depthTraverse(root, nodeDepth){
      if (!root){
          return
      }

      max = Math.max(nodeDepth, max)

      depthTraverse(root.left, nodeDepth + 1)
      depthTraverse(root.right, nodeDepth + 1)
  }

  depthTraverse(root, 1)
  return max
  
};


// minDepth ------------------------------------------------------------------------------------------------------------------------------------------------------------
// Pattern 1
var minDepth = function(root) {
    
  if (root === null ) return 0
  let result = Infinity //make highest number because of below end node check
  
  function dfs(node, depth) {
      //check if end node is less that the result and set if so
      if (!node.left && !node.right) {
          if (depth < result) {
            result = depth;
          }
      }
      
      if (node.left !== null) {
          dfs(node.left, depth + 1)
      }
      
      if (node.right !== null) {
          dfs(node.right, depth + 1)
      }
      
  }
  dfs(root, 1)
  return result
};


// Pattern 2
var minDepth = function(root) {
  if (root === null) return 0
  let min = Infinity

  function dfs(node, depth) {
    if (!node) return

    if (!node.left && !node.right) {
      min = Math.min(min, depth)
    }

    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)

  }

  dfs(root, 1)
  return min
};