// The Object.entries() method returns an array of the key/value pairs in an object:

const dog = {
  name: 'Kuma',
  weight: 12,
  color: 'Black'
}

let resultArray = Object.entries(dog)
console.log(resultArray) //[ [ 'name', 'Kuma' ], [ 'weight', 12 ], [ 'color', 'Black' ] ]


// Object.entries() makes it simple to use objects in loops: ---------------------------------
// Example 1
for (let [key, value] of Object.entries(dog)) {
  console.log('key: ', key)
  console.log('value: ', value)
}

// Example 2
const usersSpent = {
  one: 7272,
  two: 10, 
  three: 553,
  four: 78
}
let total = 0
for (let [key, value] of Object.entries(usersSpent)) {
  total += value
  console.log("total: ", total)
}

//Object.entries() also makes it simple to convert objects to maps: ---------------------------------
// Map not map

const fruits = {Bananas:300, Oranges:200, Apples:500};
const myMap = new Map(Object.entries(fruits));
console.log(myMap)

//JavaScript Object Values ---------------------------------------------------------------------------------------------------
//Object.values are similar to Object.entries, but returns a single dimension array of the object values:

const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let personValues = Object.values(person)
console.log(personValues) //[ 'John', 'Doe', 50, 'blue' ]


