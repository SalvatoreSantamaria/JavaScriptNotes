// https://www.udemy.com/course/data-structures-algorithms-javascript/learn/lecture/24855112#overview

/**
 * Rules of recursion:
 * The process is the same
 * There has to be a base case to stop the function.
 *   The base case has to be valid, AND it has to have a return to exit.
 * Each time the process is run, we make the problem smaller. 
 * Recursion will use a stack to return, so it will return a stack of the values!
 * 
 */

/**
 * Factorial is a math problem >:(
 * Example if n is 3:
 * 1 * 2 * 3 * 4 
 * returns 24
 * 
 * This is because a factorial is a sum of ALL the numbers from the number, or n, to 1
 *  */ 


function factorial(n) { 
  if (n === 1) return 1 //base case to stop
  return n * factorial(n-1) //call the function with the new smaller problem set. Will return a stack of this value!
}
console.log(factorial(4)) //returns 24