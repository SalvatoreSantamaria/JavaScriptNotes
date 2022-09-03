// This was an interview question and it's fairly complex.
// Run the function and see the order of the logs to get a better understanding of how this is working.

function memo(fn) { //5. here we are taking in the function as a param. When run this will be 1,2,3
  console.log('1 fn ', fn) // this outputs the function
  let memoizedResult;
  let state
  //return another function that behaves like fn
  const anotherFunction = (...args) => {  //7 another function is going to take in the arguments as an array
    console.log('2 args ', args) //because of spread, this is an array
    console.log('3 state ', state) //state would be equal to the args if memoized [ 1, 2, 3 ], other wise on first pass its undefined
    if (state && state.every((arg, i) => arg === args[i])) { //8. if state exists and all the items in state are the same as all the input arguments
      return memoizedResult //9. return the memoizedResult version of state
    } else {
      state = args //10. when if statement fails, set state to the args
      return memoizedResult = fn(...args); //11. set memoizedResult state to be equal to the called fn (which is the function sum) and pass in the args, and function sum will return the sum of the args.
    }
  }
  return anotherFunction; //6. call anotherFunction
}

function sum(a, b, c = 10) { //3. sum gets these parameters
  console.log("4 Called ", {a, b, c}); // outputs { a: 1, b: 2, c: 3 }
  return a + b + c; //4. function sum returns a + b + c
}


const memoSum = memo(sum); //2. memoSum's input is the function sum
console.log(memoSum(1, 2, 3)); //1. input numbers 1, 2, 3 to memoSum
console.log(memoSum(1, 2, 3));
// console.log(memoSum(3, 2));
// console.log(memoSum(3, 2));
// console.log(memoSum(1, 2));