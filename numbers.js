// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum( a,b ){
  total = 0;
  if(a < b) {
    while(a <= b) {
      total += a++;
    }
  } else {
    while(a >= b) { 
      total += a--;
    }
  } return(total);
}


// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
function factorial(n){
  if (n < 0 || n > 12) {
    throw new RangeError("The argument must be between 0 and 12.")
  } else {
    let result = 1
    for (let i = 1; i <= n; i++) {
      result = result * i
    }
    return result
  }
}

// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
function findSum(n) {
  let result = 0;
  
  for (let i = 0; i <= n; i++) {
    if (i % 3 == 0) {
      result = result + i
      console.log(i, result)
    } 
    if (i % 5 == 0) {
      result += i
      console.log(i)
    }
  }
  return result;
}