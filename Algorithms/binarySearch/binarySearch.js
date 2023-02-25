// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

//still learning this pattern
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


// ----------------------------------------------------------------