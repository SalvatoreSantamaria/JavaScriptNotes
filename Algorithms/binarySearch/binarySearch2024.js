/*
Strategy: go thru all of Neetcodes video examples. Write out the pattern for each of his JavaScript solutions. 
I need to understand / implement the pattern
*/



// Binary Search
var search = function(numbers, target) {

    // Make Two Pointers  
    let lo = 0;
    let hi = numbers.length - 1;
  
    
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2); // get mid point
      if (target < numbers[mid]) {
        hi = mid - 1; // move hi pointer down, use - 1 because we have already examined mid
      } else if (target > numbers[mid]) {
        lo = mid + 1; // move lo pointer up, use + 1 because we have already examined mid
      } else {
        return mid; // remember we need this in case it is mid
      }
    }
    return -1; // return -1 false if not found
  };


// Search a 2D Matrix
// Same basic pattern as above
var searchMatrix = function(matrix, target) {
  let [rows, cols] = [matrix.length, matrix[0].length]; // get dimensions of matrix
  let [top, bot] = [0, rows-1]; //two pointers for top and bottom rows
  
  while(top <= bot){ //binary search for rows
      let row = Math.floor((top +  bot) / 2);//middle row. Below we traverse rows
      if(target > matrix[row][cols-1]) {
          top = row + 1;
      } else if(target < matrix[row][0]) {
          bot = row - 1; 
      } else {
          break;
      }
  }
  
  if(!(top <= bot)) { // returning false if no rows would contain value
      return false;
  }
  
  let row = Math.floor((top + bot) / 2); //now searching the row. we are just adding in the row we are searching here
  let [l, r] = [0, cols-1];
  while(l<=r){
      let m = Math.floor((l + r) /2);
      if(target > matrix[row][m]) {
          l = m +1;
      } else if(target < matrix[row][m]) {
          r = m - 1;
      } else if(target == matrix[row][m]) {
          return true;
      }
  }
  return false; //return false, never found target value
};


// Koko Eating Bananas TO DO


// Find Minimum in Rotated Sorted Array
var findMin = function (nums) {
    let [left, right] = [0, nums.length - 1];

    while (left < right) {
        const mid = (left + right) >> 1;
        const guess = nums[mid]; //get the middle of the current subarray
        const [leftNum, rightNum] = [nums[left], nums[right]]; //set the left and right pointers


        // checks whether the subarray is sorted in ascending order by comparing leftNum and rightNum. 
        //If it is, it means that the current subarray is not rotated, and the minimum element is leftNum, so it returns leftNum.
        const isTarget = leftNum < rightNum;
        if (isTarget) return leftNum;

        // if the subarray is rotated
        const isTargetGreater = leftNum <= guess; //if true, means that the minimum element lies to the right of mid, so it updates the left pointer to mid + 1.
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = guess < leftNum; //is less than leftNum, it means that the minimum element lies to the left of mid, so it updates the right pointer to mid.
        if (isTargetLess) right = mid;
    }

    return nums[left]; // after we are out of the while loop, return the element at the index left, which represents the minimum element in the array.
};

// TO DO: I rewrote the solution in simpler code, re add the explanation
var findMin = function (nums) {
    let left = 0
    let right =  nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right)/2)

        const leftNum = nums[left]
        const rightNum = nums[right];

        if (leftNum < rightNum) {
         return leftNum;
        }

        if ( leftNum <= nums[mid]) {
          left = mid + 1;
        }

        if (nums[mid] < leftNum) {
          right = mid;
        }
    }

    return nums[left];
};


// Search in Rotated Sorted Array
var search = (nums, target) => {
    let [left, right] = [0, nums.length - 1];

    while (left <= right) {
        const mid = (left + right) >> 1;
        const guess = nums[mid];
        const [leftNum, rightNum] = [nums[left], nums[right]];

        const isTarget = guess === target;
        if (isTarget) return mid;

        const isAscending = leftNum <= guess;
        if (isAscending) {
            const isInRange = leftNum <= target;
            const isLess = target < guess;

            const isTargetGreater = !(isInRange && isLess);
            if (isTargetGreater) left = mid + 1;

            const isTargetLess = isInRange && isLess;
            if (isTargetLess) right = mid - 1;
        }

        const isDescending = guess < leftNum;
        if (isDescending) {
            const isGreater = guess < target;
            const isInRange = target <= rightNum;

            const isTargetGreater = isGreater && isInRange;
            if (isTargetGreater) left = mid + 1;

            const isTargetLess = !(isGreater && isInRange);
            if (isTargetLess) right = mid - 1;
        }
    }

    return -1;
};

// Time Based Key Value Store
// This is creation via a class, skipping this style of problem
