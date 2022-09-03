// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344112#overview
// There are two essential parts to recursion:
//    1. Base Case
//    2. Different Input

//Basic recursive function:
function countdown(num) {
  if (num <= 0) { //1 Base Case- usually a conditional
    console.log("countdown done")
    return // need return for exit!
  }
  console.log(num);
  num--; //2 Different Input
  countdown(num)
}

countdown(5)

//-----------------------------------------------------------------------------------------------------------------------------------
//Basic recursive function 2:. Watch video above to see debugger call stack example
function sumRange(num) {
  if(num === 1) return 1 //Base Case. This prevents inifinte loops by popping off the stack, NOT a total function exit. Rather it ends the call stack 'stacks'
  return num + sumRange(num-1) //Call stack runs through all cases and then returns values up for each function call
}

// let result = sumRange(5)
// console.log(result)

//-----------------------------------------------------------------------------------------------------------------------------------

function factorial(num) {
  if(num === 1) return 1
  return num * factorial(num-1)
}
// let result = factorial(3)
// console.log(result)

//-----------------------------------------------------------------------------------------------------------------------------------
// Common recursion pitfalls
//   No or incorrect base case
//   No return OR returning the wrong thing

//-----------------------------------------------------------------------------------------------------------------------------------
// Helper Method Recursion

// Common pattern:
function outer(input) {
  var outerScopedResultVariable = []

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--)
  }
  helper(input)
  return outerScopedResultVariable
}