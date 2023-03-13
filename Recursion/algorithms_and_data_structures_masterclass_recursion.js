// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/10045228#overview

/** Common problems with recursion:
 * Base case is wrong
 * Not returning (need two returns)
 * Returning the wrong thing
 */

/** Helper method recursion
 * 
 * Pattern that uses outer function and an inner function
 * 
 *  */

// Helper method recursion vs pure recursion

// Helper -----------------------------------------------------------------------
function collectOddValues(arr){
  let result = [];

  function helper(helperInput){
      if(helperInput.length === 0) {
          return;
      }
      
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      }
      
      helper(helperInput.slice(1))
  }
  
  helper(arr)

  return result;
}
collectOddValues([1,2,3,4,5,6,7,8,9])

// Pure -----------------------------------------------------------------------
function collectOddValues(arr){
  let newArr = [];
  
  if(arr.length === 0) {
      return newArr;
  }
      
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
      
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])

// Basic problems -----------------------------------------------------------------------
//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
function productOfArray(arr) {
  if(arr.length === 0) {
      return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
function recursiveRange(n){
  //base case
  if (n === 1) return 1
  return n + recursiveRange(n - 1)
}

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
function factorial(n) { 
  if (n === 1) return 1 //base case to stop
  return n * factorial(n-1) //call the function with the new smaller problem set. Will return a stack of this value!
}
console.log(factorial(4)) //returns 24

