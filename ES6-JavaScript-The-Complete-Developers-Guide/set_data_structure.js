// Set: collection of values that can be of any type, but each value must be unique. 
// sets have no keys


//mySet = new Set(iterable) // creates the set and if an interable object (like an array) is passed, it copies the value from it into the set
// mySet.add(value) // adds a value, returns the set
// mySet.delete(value) // removes the value and returns true. if value didn't exist, returns false
// mySet.has(value) // return true or false if value exists
// mySet.clear() // removes everything from the set
// mySet.size // returns the element count

let mySet = new Set();
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(3) //does not add another 3 because all values must be unique

console.log(mySet)

let arr = [10,20,30,40,50,60]
let mySet2 = new Set(arr)
console.log(mySet2.has(50))

// use for..of or forEach to iterate over a Set. (map, etc wont work because it's not an array)