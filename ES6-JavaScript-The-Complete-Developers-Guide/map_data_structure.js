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
//console.log(myMap) //Map { 'key' => 'value', 1 => true, {} => 'object value' }

let myMap2 = new Map([
  [ "key", "value" ],
  [ 1, true ],
  [ {}, "object value" ],
  [ new Date(), "today" ],
  [ 2, { something: ['one', 'two', 'three' ] }]
])
//console.log('myMap2 ', myMap2)
// Map {
//   'key' => 'value',
//   1 => true,
//   {} => 'object value',
//   2022-07-29T21:32:14.981Z => 'today',
//   2 => { something: [ 'one', 'two', 'three' ] }

// Map vs Object /////////////////////////////////////////////////////////////////////////
let dog = new Map()
dog.set('name', 'Kuma')
dog.set(1, true) //dont use dog[1] because it will make it a string
dog.set({}, 'some object')
//console.log(dog.get(1)) // can't access keys with '.' notation. dog.1 wouldn't work, neither would dog.name 

let dog2 = new Object()
dog2.one = true //can't do dog2.1
//console.log(dog2.one)
//console.log(dog2)

//console.log(dog) //Map { 1 => true, {} => 'some object' }
let obj = Object.fromEntries(dog.entries()) 
//console.log(obj) //{ '1': true, '[object Object]': 'some object' }

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
  //console.log(vegetable) //cucumber, lettuce, carrots
}

for (let price of priceMap.values()) {
  //console.log(price) //500, 350, 50
}

for (let entry of priceMap.entries()) {
  //console.log(entry) // [ 'cucumber', 500 ][ 'lettuce', 350 ][ 'carrots', 50 ]
}

priceMap.forEach( (value, key, map) => {
  //console.log(value, key, map)
})

//Converting an Object into a Map ----------------------------------------------------------------------

const lettersObject = {
  a: 'first', 
  b: 'second', 
  c: 'third'
}
// for (let i in myObject) {
//   console.log('1', i) // logs a b c
//   console.log('2', object[i]) // logs first second third
// }

const lettersMap = new Map(Object.entries(lettersObject))
console.log('lettersMap ', lettersMap)

//You can also convert like this, in case some key/values need to be modified in the creation.
const objectToMap = obj => {
  const keys = Object.keys(obj);
  const map = new Map();
  for(let i = 0; i < keys.length; i++){
     //inserting new key value pair inside map
     map.set(keys[i], obj[keys[i]]);
  };
  return map;
};
console.log(objectToMap(lettersObject));

//Converting an Array into a Map ----------------------------------------------------------------------
const letters = ['a', 'b', 'c', 'd']
// for (let i in letters) { 
//   console.log('3', i) // logs 0 1 2 3 
//   console.log('4 ', letters[i]) // logs a b c d // can also use for of to get values instead of position.
// }

// One way to do this
var test = letters.reduce(function(map, obj) {
  console.log('obj ', obj)
  map[obj.key] = obj.val;
  return map;
}, {});
console.log('test ', test)

// Another way to do this:
const nums = [4,1,2,1,2]
var singleNumber = function(nums) { 
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
      map.set(i, nums[i])
  }
  console.log('map ', map)  // logs { 0 => 4, 1 => 1, 2 => 2, 3 => 1, 4 => 2 }
}


//Converting an Array of Objects into a Map
//----------------------------------------------------------------------
var arrOfObj = [
  { key: 'foo', val: 'bar' },
  { key: 'hello', val: 'world' }
];

var result = arrOfObj.reduce(function(map, obj) {
  map[obj.key] = obj.val;
  return map;
}, {});

console.log(result);
// { foo:'bar', hello:'world' }


//----------------------------------------------------------------------
// Adding in values to Map values
let classes = []
if (!map.has(enrollmentArray[i][0])) {
  classes.push(enrollmentArray[i][1])
  map.set(enrollmentArray[i][0], classes)
} else {
  map.set(enrollmentArray[i][0], [...map.get(enrollmentArray[i][0]), enrollmentArray[i][1]])
}