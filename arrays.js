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