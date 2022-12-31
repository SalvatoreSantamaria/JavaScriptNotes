/*
The Max Consecutive Ones can be solved using sliding window technique, steps to solve this problem are as follows :
- Traverse the input array from start to end, at each iteration check if the current element is 1 or 0. (Step 1)
- If the current element is 1, increase the size of the sliding window (maxOnesCount) by 1. (Step 2)
- If the current element is 0, then check if the size of the sliding window (maxOnesCount) is greater than the current maximum or not,
  if yes then update the maximum and make the size of the sliding window as zero (assign 0 to maxOnesCount). (Step 3)
- After the end of the input array traversal, repeat the condition of step 3 and return the current maximum as a result. (Step 4)
*/

const findMaxConsecutiveOnes = function(nums) {
  let maxLength = 0, maxOnesCount = 0;
  // step 1
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    // step 2
    if (nums[windowEnd] === 1) {
      maxOnesCount += 1;
    }
    // step 3
    else {
      maxLength = Math.max(maxLength, maxOnesCount);
      maxOnesCount = 0;
    }
  }
  // step 4
  maxLength = Math.max(maxLength, maxOnesCount);
  return maxLength;
};

let input = [1,1,0,1,1,1]
const result = findMaxConsecutiveOnes(input)
//console.log('result', result) //returns 3

///basic with for loop ---------------------------------------------------------------------------------------

const basicSlidingWindow = function(nums) {
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if (nums[windowEnd] === 1) {
      //do something with the nums
      console.log('windowEnd', windowEnd)
    }
  }
}

let input2 = [0,0,1,1,1,1,0]
//const result2 = basicSlidingWindow(input2)
// console.log('result2', result2) //test function, not returning anything

//basic with while loop ---------------------------------------------------------------------------------------

const basicSlidingWindowWhileLoop = function(nums) {
  let windowEnd = 0

  while (windowEnd < nums.length) {
    //do something with the  nums
    if (nums[windowEnd] === 1) {
      console.log('windowEnd basic while', windowEnd)
    }
    windowEnd++ //increase the size of the window
  }
 
}

let input3 = [0,0,1,1,1,1,0]
//const result3 = basicSlidingWindowWhileLoop(input3)
// console.log('result3', result3) // test function, not returning anything

// Leetcode problem: https://leetcode.com/problems/minimum-size-subarray-sum/ ---------------------------------------------------------------------------------------


// https://www.youtube.com/watch?v=mBbU-6cxj3w&list=PLxQ8cCJ6LyOYCas1Ln-L8kCBquxw20ljC&index=2
var minSubArrayLen = function(target, arr) {
  let windowStart = 0
  let windowSum = 0
  let minLengthSoFar = Infinity

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd] //grow the window
  
    while (windowSum >= target) { // shrink window when windowSum is >= to target, until windowSum < target again
      let currentWindowLength = windowEnd - windowStart + 1
      minLengthSoFar = Math.min(minLengthSoFar, currentWindowLength)
      windowSum -= arr[windowStart]
      windowStart++
    }
  }

  if (minLengthSoFar === Infinity) {
    return 0
  }

  return minLengthSoFar

}

let testResult = minSubArrayLen(7, [2,3,1,2,4,3])
console.log('testResult',testResult)


// WIP with above algo, trying to find a basic generica formula ---------------------------------------------------------------------------------------

var minSubArrayLenBasic = function(target, arr) {
  let windowStart = 0
  let windowSum = 0
  //let minLengthSoFar = Infinity

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd] //grow the window
  
    while (windowSum >= target) { // shrink window when windowSum is >= to target, until windowSum < target again
      let currentWindowLength = windowEnd - windowStart + 1
      //minLengthSoFar = Math.min(minLengthSoFar, currentWindowLength)
      windowSum -= arr[windowStart]
      windowStart++
    }
  }

  // if (minLengthSoFar === Infinity) {
  //   return 0
  // }
  
  // return minLengthSoFar

}

// let testResult2 = minSubArrayLenBasic(7, [2,3,1,2,4,3])
// console.log('testResult',testResult)

//---------------------------------------------------------------------------------------
// 643. Maximum Average Subarray I 
//https://www.youtube.com/watch?v=HnrxlGipKUE
var findMaxAverage = function(nums, k) {
  let max = -Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      windowSum += nums[windowEnd]; //update the windowSum

      //above loop will run and windowSum will add up until we create the window
      if(windowEnd - windowStart === k - 1) { //check, are we in a valid window
          let avg = windowSum/k //then get the average
          max = Math.max(max, avg) //and update the max
          windowSum -= nums[windowStart]; //subtract the window value
          windowStart++ //increment the window
      }
  }
  return max
}