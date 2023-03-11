// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

// Basic pattern:
/** Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity. https://leetcode.com/problems/binary-search/ 
*/
var search = function(numbers, target) {

    // 1. Make Two Pointers. Also called left and right instead of lo and hi
    let lo = 0;
    let hi = numbers.length - 1;
  
    while (lo <= hi) { //2. while loop always with <
      const mid = Math.floor((lo + hi) / 2); // 3. Get mid point. Common to use .floor and .ceil
      if (target < numbers[mid]) { // 4. Always if else pattern here. Commonly has a return somewhere in the if /else 
        hi = mid - 1; // 5. move hi pointer down, use - 1 because we have already examined mid
      } else if (target > numbers[mid]) {
        lo = mid + 1; // 6. move lo pointer up, use + 1 because we have already examined mid
      } else {
        // 
        return mid; // Problem specific remember we need this in case it is mid
      }
    }
    // 7. Always some sort of return at the end.
    return -1; // return -1 false if not found
  };
// --------------------------------------------------------------------------

// Matrix pattern:
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/
var countNegatives = function(grid) {
    let count = 0;
    for(const row of grid){ //for each array
      const index = searchFirstNegativeIndex(row) //run this function
      count += row.length - index; // the above searchFirstNegativeIndex returns position of first positive, so calc how many negs
    }
    return count
  };
  
  function searchFirstNegativeIndex(arr){
    let right = arr.length - 1;
    let left = 0;
    while(left <= right){
      const mid = Math.floor((left + right) / 2) //find the mid
      if(arr[mid] < 0){ // move the left/right pointers together until we find first positive
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return left //return left pointer here because it is at positive
  }
  // --------------------------------------------------------------------------

  // Matrix pattern: sort of a duplicate of above but good for reference
  /** You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.*/
  // https://leetcode.com/problems/search-a-2d-matrix/
var searchMatrix = function(matrix, target) {
    let low = 0
    let high = matrix.length - 1

    for (let subArr of matrix) {
      console.log(subArr)
      let result = searchArray(subArr, target)
      if (result === true) {
        return true
      }
    }
    return false
};

let searchArray = (subArr, target) => {
  let left = 0
  let right = subArr.length - 1

  while (left <= right) {
    let mid = Math.ceil((left + right) / 2)
    console.log('mid, ', mid)
    if (target < subArr[mid]) {
      right = mid - 1
    } else if (target > subArr[mid]) {
      left = mid + 1
    } else {
      return true
    }
  }
  return false
}
// --------------------------------------------------------------------------

// Returning a half of the search pattern
// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/
/**Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative. */
var maximumCount = function(nums) {
    return Math.max(positiveInt(nums), negativeInt(nums))
}; 

function positiveInt(nums) {
    if(nums[nums.length - 1] <= 0) return 0;

    let left = 0 
    let right = nums.length - 1;

    while(left < right) { //when these pointers are equal, return

    let mid = Math.floor((left + right )/2); //get the current midpoint. remember will need to use .floor/.ceil
    // let numsMid = nums[mid] // only needed as visual reference for understanding
        if(nums[mid] > 0) { // if the midpoint is greater than 0, move the right pointer to be the midpoint
            right = mid;
        }
        else { // otherwise, move the left pointer up, to be the midpoint + 1
            left = mid + 1;
        }
    }
    return nums.length - right //return the left half of the array
}

function negativeInt(nums) {
    let left = 0
    let right = nums.length - 1;

    if(nums[0] >= 0 ) {
        return 0
    }

    while(left < right) {
        let mid = Math.ceil((left+right)/2);
        if(nums[mid] < 0) {
            left = mid;
        } 
        else {
            right = mid - 1;
        }
    }
    return left + 1; //return the right half of the array
}

maximumCount([-2,-1,-1,-1,-1,-1,-1,-1,-1,1,2,3]) 
