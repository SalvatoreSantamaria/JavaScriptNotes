// Manipulate data -----------------------------------------
// Convert to a Map -----------------------------------------
// Find data by index -----------------------------------------
// Find data by value -----------------------------------------
// Find data by key -----------------------------------------
// Loop through data -----------------------------------------
// Sort data -----------------------------------------
// Add data -----------------------------------------

// Note: should do this with Map objects. Convert to Map where appropriate first.
// Be able to add data to a table -----------------------------------------
// Add objects with standard key value -----------------------------------------
// Add object of arrays to a table -----------------------------------------
// Add object of objects to a table -----------------------------------------
// Add array with standard input -----------------------------------------
// Add array of arrays -----------------------------------------
// Add array of objects -----------------------------------------

//Standard Object -----------------------------------------------
let standardObj = {
  1: 'Ford',
  2: 'Chevrolet',
  3: 'Volkswagen',
  four: 'Toyota'
}

// Convert to a Map -----------------------------------------
const autoMap = new Map(Object.entries(standardObj))
// console.log(autoMap) // Map { '1' => 'Ford', '2' => 'Chevrolet', '3' => 'Volkswagen' }

// Find data by index -----------------------------------------
const firstEntry = autoMap.get('1')
//console.log(firstEntry) // logs the value, 'Ford'

// Common Pattern to Build a Hashmap with a Map -----------------------------------------
// From https://leetcode.com/problems/sum-of-unique-elements/

let map = new Map()
for (let i = 0; i < nums.length; i++) {
  if (!map.has(nums[i])) { //or !map.get(...) will work as well
      map.set(nums[i], 1)
  } else {
      map.set(nums[i], map.get(nums[i]) + 1)        
  }
}