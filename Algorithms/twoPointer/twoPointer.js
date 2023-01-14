// Basic template: How to set up two pointers in an array

export default function twoPointers(array) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        left++;
        right--;
    }
}



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
console.log(findPair([1,2,3,4,5], 7)) //[2, 5]