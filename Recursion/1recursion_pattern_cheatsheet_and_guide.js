//logging out all of the elements in an array with recursion
// let basicRecursion = (arr) => {
//   if (!arr.length) {
//     return
//   }
//   console.log(arr[0])
//   return basicRecursion(arr.slice(1))
// }
// basicRecursion([10,11,12,13])

// USE THIS PATTERN! 
// Logging out all of the elements in an array with the helper pattern recursion
let helperBasicRecursion = (arr) => {
  //let result = [] //collect all the elements if needed
  let helper = (helperInputArr) => {

    if (helperInputArr.length === 0) { //neccessary to know when to end
      return 
    }

    // if (something) { //logic manipulation
    //   arr.push, etc
    // }

    console.log(helperInputArr[0])
    helper(helperInputArr.slice(1)) //recursive call itself, with the smaller, sliced version of the arr
  }
  helper(arr)
  //return result
}

helperBasicRecursion([10,11,12])
//To do- write out the pattern this will perform logic in, like https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/10793654#overview

//Something like 
// helperBasicRecursion([10, 11, 13])
//   helperBasicRecursion([11, 13])
//     helperBasicRecursion([13])