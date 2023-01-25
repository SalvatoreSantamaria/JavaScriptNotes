// Basic template: How to set up two pointers in an array

function twoPointers(array) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        left++;
        right--;
    }
}

//-----------------------------------------------------------------------------------
// Template for two input arrays, pulled from actual question.
// Commenting out non template code
//https://leetcode.com/problems/intersection-of-two-arrays-ii/
var intersect = function(nums1, nums2) {

    // nums1.sort((a,b) => a - b)
    // nums2.sort((a,b) => a - b)    
    // const result = [];

    let i = 0;
    let j = 0;
    
    while (i < nums1.length && j < nums2.length) {

        if (nums1[i] === nums2[j]) { //if some condition, do something and increment
            // result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) { //if not condition, then when need to increment one of the pointers
            i++;
        } else {
            j++;
        }
    }
    
    return result;
};



//-----------------------------------------------------------------------------------
// Using a target
function findPair(arr, targetSum) {
    let leftPointer = 0
    let rightPointer = arr.length - 1
    let pair = null

    while (leftPointer != rightPointer) { 
        pairSum = arr[leftPointer] + arr[rightPointer]
        if (pairSum === targetSum) {
            pair = [arr[leftPointer], arr[rightPointer]]
            break
        } else if (pairSum < targetSum) {
            leftPointer++
        } else if (pairSum > targetSum) {
            rightPointer--
        }
    }
    return pair
}
// console.log(findPair([1,2,3,4,5], 7)) //[2, 5]

//-----------------------------------------------------------------------------------
// Palindrome example:
const checkIfPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

// console.log(checkIfPalindrome('racecar')) //true
// console.log(checkIfPalindrome('leetcode sucks')) //false

//-----------------------------------------------------------------------------------
// Two Sum style example:
//Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum.
const checkForTarget = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let curr = nums[left] + nums[right];
        if (curr == target) {
            return true;
        }
        
        if (curr > target) {
            right--;
        } else {
            left++;
        }
    }
    
    return false;
}
//console.log(checkForTarget([1, 2, 4, 6, 8, 9, 14, 15],13)) //true

//-----------------------------------------------------------------------------------
// Given two sorted integer arrays, return an array that combines both of them and is also sorted.
var combine = function(arr1, arr2) {
    let ans = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else {
            ans.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        ans.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        ans.push(arr2[j]);
        j++;
    }
    
    return ans;
}

//console.log(combine([1,4,7,20],[3,5,6]))// [1,3,4,5,6,7,20]

//-----------------------------------------------------------------------------------
//LeetCode 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
var isSubsequence = function(s, t) {
    // Initialize pointers for both strings
    let i = 0
    let j = 0

    // We can iterate until either of them becomes zero...
    while (i < s.length && j < t.length) {
        //only increment i pointer when the s letter is in t
        if (s[i] === t[j]) {
            i++
        }
        // but always increment j pointer
        j++
    }
// If the i pointer is equal to the size of s, then it's we've found all the letters. This is kind of a count
    if (i == s.length) {
        return true
    }
    return false
};

console.log(isSubsequence('ace', 'abcde')) //true
console.log(isSubsequence('aec', 'abcde')) //false

//-----------------------------------------------------------------------------------
//Need to include the for while pattern- here's an example of the pattern in use
//https://leetcode.com/problems/most-profit-assigning-work
var maxProfitAssignment = function(difficulty, profit, worker) {
    //Map the difficulty and profit values together, then sort it
      const jobs = difficulty.map((diff, i) => [diff, profit[i]]);
      jobs.sort((a, b) => a[0] - b[0]);
      console.log('jobs', jobs)
  
      worker.sort((a, b) => a - b); //sort workers
  
      let result = 0;
      let maxProfit = 0;
      let i = 0;
  
        for (let w = 0; w < worker.length; w++) { //loop thru workers
          while (i < jobs.length && worker[w] >= jobs[i][0]) { // while theres a job and the worker is able to do the job
  
              maxProfit = Math.max(maxProfit, jobs[i][1]); // add max
              console.log('jobs[i]', jobs[i], 'worker[w]', worker[w])
              console.log('maxProfit', maxProfit)
  
              i++
          }
          result += maxProfit; // need to add to result because the above is calculating the maxProfit (profit and difficulty are matched at random)
          console.log('result', result)
      }
      return result;
  };
