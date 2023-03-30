/** 
//logging out all of the elements in an array with recursion
// let basicRecursion = (arr) => {
//   if (!arr.length) {
//     return
//   }
//   console.log(arr[0])
//   return basicRecursion(arr.slice(1))
// }
// basicRecursion([10,11,12,13])
*/

// USE THIS HELPER PATTERN! IT'S MUCH EASIER TO UNDERSTAND!
// Logging out all of the elements in an array with the helper pattern recursion

let helperBasicRecursion = (arr) => {// Path 1
  //let result = [] //collect all the elements if needed
  let helper = (helperInputArr) => {

    if (helperInputArr.length === 0) {//Path 3 and Path 6 neccessary to know when to end
      return //
    }

    // if (something) { //logic manipulation
    //   arr.push, etc
    // }

    console.log(helperInputArr[0])//Path 4 
    helper(helperInputArr.slice(1)) //Path 5 //recursive call itself, with the smaller, sliced version of the arr
  }
  helper(arr)//Path 2
  //return result
}
helperBasicRecursion([10,11,12])


// A basic example that returns all the odd values in an array using recursion with a helper method
function collectOddValues(arr){
  let result = [];// scoped outside of helper function to make recursion easier.

  function helper(helperInput){
      if(helperInput.length === 0) { //1
          return;//5 returns if we are out of arr elements
      }
      
      if(helperInput[0] % 2 !== 0){ //2 //check if even
          result.push(helperInput[0])//3 //only add into result if even
      }
      
      helper(helperInput.slice(1))//4 pass in smaller array to recursive function
  }
  helper(arr)

  return result;// 6 returns the result array. 
  // The helper method style of recursion is easier to understand.
}
collectOddValues([1,2,3,4,5,6,7,8,9])
