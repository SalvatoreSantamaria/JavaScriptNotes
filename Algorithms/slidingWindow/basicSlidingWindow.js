//Walk a "count 1's" problem as an intro example

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

//1. Basic sliding window with a for loop ---------------------------------------------------------------------------------------
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

//2. A Basic sliding window with a while loop ---------------------------------------------------------------------------------------
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

//3. Pattern to grow and move a window ---------------------------------------------------------------------------------------
// Grow a window to the target size
//  and then move the window and log out the values

var basicGrowAndMoveAWindow = function(target, arr) {
  let windowStart = 0 //the window start pointer
  let windowSize = 0 //for tracking the window size

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) { //move through the arr, we will use windowEnd for the window end pointer

    windowSize += 1 //grow the window tracker

    if (windowSize === target) { //check the target size
      //console.log('array window:',arr[windowStart], arr[windowStart + 1], arr[windowEnd]) will log out 10, 10, 10 | 10, 10, 20, | 10, 20, 20 as expected
      windowSize-- //shrink the window so it can move
      windowStart++ //move the starting location of the window
    }
  }
}

let testResult2 = basicGrowAndMoveAWindow(3, [10,10,10,20,20,20,30,30,30])
console.log('testResult2',testResult2)


//3.5 Example of a basic sliding window with grow / move / shrink
// https://leetcode.com/problems/maximum-average-subarray-i/

var findMaxAverage = function(nums, k) {
  let max = -Infinity;
  let soFar = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      soFar += nums[windowEnd]; //update the soFar

      if(windowEnd - windowStart === k - 1) { //check, are we in a valid window
          let avg = soFar/k //then get the average
          max = Math.max(max, avg) //and update the max
          soFar -= nums[windowStart]; //subtract the window value
          windowStart++ //increment the window
      }
  }
  return max
}



// Leetcode problem: https://leetcode.com/problems/minimum-size-subarray-sum/ ---------------------------------------------------------------------------------------
//4. Pattern to dynamically grow a moving window and then dynamically shrink it
// https://www.youtube.com/watch?v=mBbU-6cxj3w&list=PLxQ8cCJ6LyOYCas1Ln-L8kCBquxw20ljC&index=2
const minSubArrayLen = function(target, arr) {
  let windowStart = 0
  let windowSum = 0
  let minLengthSoFar = Infinity

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) { //move through the arr, we will use windowEnd for the window end pointer
    windowSum += arr[windowEnd] //grow the window sum, we need this for the window shrink check
  
    while (windowSum >= target) { //dynamic window shrink check
      let currentWindowLength = windowEnd - windowStart + 1 //get the current window length
      minLengthSoFar = Math.min(minLengthSoFar, currentWindowLength) //calc the min and set it, this is what we need to return.
      windowSum -= arr[windowStart] //subtract the starting/left/trailing pointer value for the dynamic check
      windowStart++ //move the starting/left/trailing pointer for the  window
    }
  }
// Leetcode edge case check
  if (minLengthSoFar === Infinity) {
    return 0
  }
  console.log(minLengthSoFar)
  return minLengthSoFar // then return the result

}

let testResult = minSubArrayLen(7, [2,3,1,2,4,3])
console.log('testResult',testResult)

// 5. Pattern to build up substrings, and reset the window as we check for longest. Like a rubber band
// Leetcode problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/925165247/
var lengthOfLongestSubstring = function (s) {

  let longestSubstring = 0;
  let map = new Map(); 
  let left = 0;

  while (left < s.length) { 
    let right = left; // set or reset 

    while (right < s.length) { // inner loop to build up substring

      if (map.has(s[right])) {
        break; //already has? then exit loop. Then we will end up reseting the window above
      } else {
        map.set(s[right], right); //build the substring, and slide right by 1
        right++; 
      }
      
    }
    longestSubstring = Math.max(longestSubstring, right - left); //after exiting inner loop, update longestSubstring
    map.clear(); //erase the temp map
    left++;
  }
  return longestSubstring
}

// 6. Two ways to do the same rubber banding: 
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

// Slow
var maxProfit = function (prices) {
  let l = 0
  let result = 0
  while (l < prices.length) {
    let r = l
    while (r < prices.length) {
      if (prices[r] - prices[l] > result) {
        result = prices[r] - prices[l]
      } else {
        r++
      }
    }
    l++
  }
  return result
}

// Fast
var maxProfit = function (prices) {
  let l = 0
  let r = 1
  let result = 0
    while (r < prices.length) {
      if (prices[r] <= prices[l]) {
        l = r
      } 
      result = Math.max(result, prices[r] - prices[l])
      r++ 
    }
  return result
}