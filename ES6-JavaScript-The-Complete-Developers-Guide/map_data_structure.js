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

for (let [key, value] of priceMap.entries()) {
  //console.log(key, value)//'cucumber', 500, 'lettuce', 350, 'carrots', 50
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


// Find data by value -----------------------------------------
function getKey(value) {
  return [...lettersMap].find(([key, val]) => val == value)[0]
}
console.log(getKey('first')) //logs a


// Sorting Maps. I believe it's recommended to use plain Objects instead of maps if sorting is needed -----------------------------------------
const myMap1 = new Map();
myMap1.set("a",3);
myMap1.set("c",4);
myMap1.set("b",1);
myMap1.set("d",2);

// sort by value
const mapSort1 = new Map([...myMap1.entries()].sort((a, b) => b[1] - a[1]));
console.log(mapSort1);
// Map(4) {"c" => 4, "a" => 3, "d" => 2, "b" => 1}

const mapSort2 = new Map([...myMap1.entries()].sort((a, b) => a[1] - b[1]));
console.log(mapSort2);
// Map(4) {"b" => 1, "d" => 2, "a" => 3, "c" => 4}

// sort by key
const mapSort3 = new Map([...myMap1.entries()].sort());
console.log(mapSort3);
// Map(4) {"a" => 3, "b" => 1, "c" => 4, "d" => 2}

const mapSort4 = new Map([...myMap1.entries()].reverse());
console.log(mapSort4);


// Map(4) {"d" => 2, "b" => 1, "c" => 4, "a" => 3}
// Sorting map ------------------------------------------------------
// https://stackoverflow.com/questions/31158902/is-it-possible-to-sort-a-es6-map-object

// new Map([...map].sort((a, b) => 
// // Some sort function comparing keys with a[0] b[0] or values with a[1] b[1]
// ))
// If you're expecting strings: As normal for .sort you need to return -1 if lower and 0 if equal; for strings, the recommended way is using .localeCompare() which does this correctly and automatically handles awkward characters like ä where the position varies by user locale.

// So here's a simple way to sort a map by string keys:

// new Map([...map].sort((a, b) => String(a[0]).localeCompare(b[0])))
// ...and by string values:

// new Map([...map].sort((a, b) => String(a[1]).localeCompare(b[1])))
// These are type-safe in that they won't throw an error if they hit a non-string key or value. The String() at the start forces a to be a string (and is good for readability), and .localeCompare() itself forces its argument to be a string without hitting an error.

// In detail with examples
// tldr: ...map.entries() is redundant, just ...map is fine; and a lazy .sort() without passing a sort function risks weird edge case bugs caused by string coercion.

// The .entries() in [...map.entries()] (suggested in many answers) is redundant, probably adding an extra iteration of the map unless the JS engine optimises that away for you.

// In the simple test case, you can do what the question asks for with:

// new Map([...map].sort())
// ...which, if the keys are all strings, compares squashed and coerced comma-joined key-value strings like '2-1,foo' and '0-1,[object Object]', returning a new Map with the new insertion order:

// Note: if you see only {} in SO's console output, look in your real browser console

// const map = new Map([
// ['2-1', 'foo'],
// ['0-1', { bar: 'bar' }],
// ['3-5', () => 'fuz'],
// ['3-2', [ 'baz' ]]
// ])

// console.log(new Map([...map].sort()))
