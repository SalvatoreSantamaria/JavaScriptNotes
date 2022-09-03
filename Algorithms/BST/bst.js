
// Basic DFS Tree Traversal ----------------------------------------------------------------

// See the excellent walkthrough at https://www.udemy.com/course/data-structures-algorithms-javascript/learn/lecture/24926568#overview


// This will collect all the values and output them into an array 
// input example is node of [1,null,2,3]
var inorderTraversal = function(node) {
  // Guard clause due to Leetcode test cases
  if (node === null) {
      return []
  }
  
  let result = []
  // recursive function
  function dfs(node) {
      // Preorder result.push(node.val) // outputs [1,2,3]
      if (node.left) { dfs(node.left) }
      result.push(node.val) // Inorder // outputs [1,3,2]
      if (node.right) { dfs(node.right) }
      // Postorder result.push(node.val) // outputs [3,2,1]
  }
  dfs(node)
  return result
};
