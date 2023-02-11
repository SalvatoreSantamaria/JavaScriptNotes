// a Leetcode problem
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/
// Input is this: "(1+(2*3)+((8)/4))+1"
// But in reality it's "()(()())"


// This is a basic for loop with temp count and final count pattern
var maxDepth = function(s) {
  let count = 0 //1 0 2
  let depth = 0 //1 2

  for (let i = 0; i < s.length; i++) { //loop thru input string
      if (s[i] === "(") { //check if element is (
          count += 1 //increment count if so
          depth = Math.max(depth, count) // add to depth 
      } else if (s[i] === ")") { //check if element is )
        count -= 1 //decrement count if so
      }
  }
    return depth

};

// -----------------------------------------------------------------------------------
// This is a basic for loop that will count the number of paired parens
// Input is (david)((abby)) or )(, etc

const pairedParentheses = (str) => {
  let count = 0;
  
  for (let char of str) {
    if (char === '(') {
      count += 1;
    } else if (char === ')') {
      if (count === 0) {
        return false;
      }
      
      count -= 1;
    }
  }
  
  return count === 0;
};