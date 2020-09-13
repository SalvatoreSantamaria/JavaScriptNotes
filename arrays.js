// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself
function addIndexes(arr) {
	return arr.map((val, i) => val + i);
}

// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
function filterArray(arr){
	return arr.filter(x => Number.isInteger(x));
}

// The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ [water]
function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(x => x != "cola" && x != 'fanta')
}

// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.
function arrayLessThan100(arr) {
  return arr.reduce((total, cur) => total + cur) < 100;
}

// Create a function that takes an array of numbers and returns the smallest number in the set.
// findSmallestNum([34, 15, 88, 2]) ➞ 2
function findSmallestNum(arr) {
	return arr.sort((a,b) => a - b)[0]
}

// Create a function that takes an array and swaps all the numbers towards the center.
function swapTowardCenter(arr) {

	for (var i = 0; i < arr.length/2; i++) {
	var temp = arr[i];
	arr[i] = arr[arr.length - 1 - i]
	arr[arr.length - 1 - i] = temp;
	}
	return arr
}

// Create threesFives(n) that adds values from 1 and n (inclusive) if that value is not divisible by 3 or 5. Return the final sum.
// For example, threesFives(10) returns 22 as it only returns the sum of 1, 2, 4, 7, and 8. On that example, it skips 3, 6, 9 as those are divisible by 3. It also skips 5, and 10 as it's divisible by 5.
function threesFives(num){
	let result = 0;
	for (var i = 0; i < num; i++) {
		if (i % 5 == 0 || i % 3 == 0) {  
		} else {
			result = result + i;
		}
	}
	return result;
}

threesFives(10);

// Given a numerical array, reverse the order of values, in-place without using .reverse()
function reverse(arr){
//return arr.reverse()
	for (let i = 0; i < (arr.length- 1) / 2; i++) {
		let el = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = el;
	}
	return arr;
}

// Hackerrank
// Rotate an array left the amount of dRotations
// arr = [1, 2, 3, 4, 5]
// dRotations = 4 
// returns 5 1 2 3 4
function rotLeft(arr, dRotations) {
  const rightSide = arr.splice(0, dRotations)
  console.log(arr, rightSide)
  return arr.concat(rightSide);
}

// Hackerrank
// 2D Array - DS

function hourglassSum(arr) {

	let rows = arr.length //all of the arr
	let columns = arr[0].length //the number of columns is calculated via the length of the first line
	let max_sum = -63 // set this to -63 to handle negative arr value test cases

	// loops need to stop at (rows - 2) and (columns -2) because that's how we prevent the hourglass from 
	// going outside of the grid matrix

	// 1 1 1 0 0 0
	// 0 1 0 0 0 0
	// 1 1 1 0 0 0
	// 0 0 2 4 4 0
	// 0 0 0 2 0 0
	// 0 0 1 2 4 0
	//output should be 19

	for (let i = 0; i < rows-2; i++) {
			for (let j = 0; j < columns-2; j++) {
					let current_sum = 
						arr[i][j] + arr[i][j+1] + arr[i][j+2] + 
						arr[i+1][j+1] +
						arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
					max_sum = Math.max(max_sum, current_sum) //take whichever is bigger
			}
	}
	return max_sum
}


// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1+5+9 =15. The right to left diagonal =3+5+9=17 . Their absolute difference is 15 - 17 = 2

function diagonalDifference(arr) {

	let diag1 = 0
	let diag2 = 0
	let rows = arr.length;
	let columns = arr[0].length;

	let i = 0
	let j = 0
	let k = 0
	let l = arr.length - 1

	while (i < rows && j < columns && k < rows && l >= 0) {
			diag1 += arr[i][j]
			diag2 += arr[k][l]
			i += 1
			j += 1
			k += 1
			l -= 1
	}


	let dif = diag1 - diag2;

	if (dif < 0) {
			return(dif * -1)
	} else {
			return dif
	}
}