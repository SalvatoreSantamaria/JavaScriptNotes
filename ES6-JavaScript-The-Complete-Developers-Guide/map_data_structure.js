// https://javascript.info/map-set

// Objects are used for storing keyed collections. Keys are converted to strings. 
// Arrays are used for storing ordered collections

// Maps are a collection of keyed data items, like an Object, but Map allows keys of any type( and does not convert them into strings ). Other objects can be keys in Maps (Objects can't use other objects as keys). Maps iterate elements in their insertion order.

// let myMap = new Map() //creates a map
// myMap.set(key, value) // stores the value by the key
// myMap.get(key) // return the value by the key, or undefined if it doesn't exist
// myMap.has(key) // returns true or false if key exists
// myMap.delete(key) // removed the value by the key
// myMap.clear() // removed everything from the map
// myMap.size // returns element count
// myMap.keys() // return an iterable for keys
// myMap.values() // return iterable for values
// myMap.entries() // returns iterable for entries
// myMap.fromEntries() // to get a plain object from Map

// Creating a map /////////////////////////////////////////////////////////////////////////

let myMap = new Map();
myMap.set("key", "value")
myMap.set(1, true)
myMap.set({}, "object value")
console.log(myMap) //Map { 'key' => 'value', 1 => true, {} => 'object value' }

let myMap2 = new Map([
  [ "key", "value" ],
  [ 1, true ],
  [ {}, "object value" ],
  [ new Date(), "today" ],
  [ 2, { something: ['one', 'two', 'three' ] }]
])
console.log(myMap2)

// Map vs Object /////////////////////////////////////////////////////////////////////////
let dog = new Map()
dog.set('name', 'Kuma')
dog.set(1, true) //dont use dog[1] because it will make it a string
dog.set({}, 'some object')
console.log(dog.get(1)) // can't access keys with '.' notation. dog.1 wouldn't work, neither would dog.name 

let dog2 = new Object()
dog2.one = true //can't do dog2.1
console.log(dog2.one)
console.log(dog2)

console.log(dog) //Map { 1 => true, {} => 'some object' }
let obj = Object.fromEntries(dog.entries()) 
console.log(obj) //{ '1': true, '[object Object]': 'some object' }

// Iterating over Map /////////////////////////////////////////////////////////////////////////
// .keys //returns iterable for keys
// .values // returns iterable for values
// .entries // return iterable for entries [key, value] and it's used by default in for..of

let priceMap = new Map([
  ['cucumber', 500],
  ['lettuce',  350],
  ['carrots',   50]
])

for (let vegetable of priceMap.keys()) {
  console.log(vegetable) //cucumber, lettuce, carrots
}

for (let price of priceMap.values()) {
  console.log(price) //500, 350, 50
}

for (let entry of priceMap.entries()) {
  console.log(entry) // [ 'cucumber', 500 ][ 'lettuce', 350 ][ 'carrots', 50 ]
}

priceMap.forEach( (value, key, map) => {
  console.log(value, key, map)
})