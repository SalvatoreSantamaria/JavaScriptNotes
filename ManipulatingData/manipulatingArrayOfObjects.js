// Manipulate data -----------------------------------------
// ✓ Convert to a Map -----------------------------------------
// ✓ Find data by index -----------------------------------------
// ✓ Find data by value -----------------------------------------
// ✓ Find data by key -----------------------------------------
// ✓ Loop through data -----------------------------------------
// Sort data -----------------------------------------
// Add data -----------------------------------------

let arrayOfObjects = [
  {10: 'Ford'},
  {20: 'Chevrolet'},
  {30: 'Volkswagen'},
]

const map = new Map()
arrayOfObjects.forEach(object => {
  map.set(Object.keys(object), Object.values(object))
})
// console.log('map ', map)

// Find data by index and Find data by value and Find data by key and Loop through data
// Basic for loop, for in... loop, for of... loop, Array.find, Array.findIndex, Array.includes, Array.keys(), Array.values()
// Also loop modifiers: filter, map, reduce, every, forEach


for (let i = 0; i < arrayOfObjects.length; i++) {
  console.log(`index is ${i}, data is ${JSON.stringify(arrayOfObjects[i])}`)
}
//console.log(arrayOfObjects[0]) is manual way of doing this

for (let i in arrayOfObjects) {
  // console.log('i', i) //index 0, 1, 2, 3
  // console.log('arrayOfObjects[i]', arrayOfObjects[i]) //logs the value

}

for (let i of arrayOfObjects) {
  //console.log('i', i)//logs the value
}

// Remember since this is an array of objects, to find by object keys or values, you'd need to loop through each item in the array, and then perform a check on the object, probably best to do this with Object.keys(object) or Object.values(object)
for (let i of arrayOfObjects) {
  //console.log('i', i)//logs the value
  if (Object.values(i).includes('Ford')) {
    //console.log(i) // logs { '10': 'Ford' }
  }
}



