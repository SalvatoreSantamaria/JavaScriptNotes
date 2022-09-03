// Manipulate data -----------------------------------------
// ✓ Convert to a Map -----------------------------------------
// ✓ Find data by index -----------------------------------------
// ✓ Find data by value -----------------------------------------
// ✓ Find data by key -----------------------------------------
// ✓ Loop through data -----------------------------------------
// ✓ Sort data -----------------------------------------
// ✓ Add data -----------------------------------------

let objectOfObjects = {
  truck: {1: 'Ford'},
  car: {2: 'Chevrolet'},
  sportsCar: {3: 'Volkswagen'},
  suv: {model: 'Jeep'}
}

//Convert to a Map -----------------------------------------
const autoMap = new Map(Object.entries(objectOfObjects))
// console.log(autoMap)
// logs:
// Map {
//   'truck' => { '1': 'Ford' },
//   'car' => { '2': 'Chevrolet' },
//   'sportsCar' => { '3': 'Volkswagen' }
// }

// Find data by index -----------------------------------------
let objectOfObjectsKeys = (Object.keys(objectOfObjects)) 
//console.log(objectOfObjectsKeys) // logs [ 'truck', 'car', 'sportsCar' ] //can now use Array.find because Object.keys returns an array

// Find data by key -----------------------------------------
// console.log(objectOfObjects.truck) // logs { '1': 'Ford' }
// console.log(objectOfObjects.truck[1]) // logs Ford
// console.log(objectOfObjects.suv.model) // logs Jeep
// console.log(objectOfObjects.car) // logs { '2': 'Chevrolet' }
// console.log(objectOfObjects['sportsCar']) // logs { '3': 'Volkswagen' }. Use [] notation for string keys. Remember that objectOfObjects.3 won't work, use brackets

// Find data by value -----------------------------------------
// console.log(Object.values(objectOfObjects))
// logs an array of objects
// [
//   { '1': 'Ford' },
//   { '2': 'Chevrolet' },
//   { '3': 'Volkswagen' },
//   { model: 'Jeep' }
// ]

// Then from there search through the array of objects.

// Loop through data -----------------------------------------
// for in loop, Object.entries, Object.keys and Object.values

for (let i in objectOfObjects) {
  //console.log('1', i) // logs truck, car, sportsCar suv
  //console.log('2', objectOfObjects[i]) // logs keys, which are objects!
}

for (const [key, value] of Object.entries(objectOfObjects)) {
  //console.log(`${key}: ${value}`); //logs all the keys and values
}

// Sort data -----------------------------------------
// Likely best to get correct format of data first
// Sort by key
const ordered = Object.keys(objectOfObjects).sort().reduce(
  (obj, key) => { 
    obj[key] = objectOfObjects[key]; 
    return obj;
  }, 
  {}
);
//console.log(JSON.stringify(ordered));

// Sort by value -----------------------------------------
// Likely best to get correct format of data first
// There's many ways to do this but most are complex. See https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

// Add data -----------------------------------------

// objectOfObjects.plane = {4: '787'}
// objectOfObjects['van'] = {model: 'Honda'}
// console.log(objectOfObjects)

//When the name of the property is dynamically determined, we can use bracket notation:
// var getProperty = function (propertyName) {
//     return obj[propertyName];
// };

// Add data using Object.assign()
Object.assign(objectOfObjects, {minivan: {model: 'Kia'}})
//console.log(objectOfObjects)

// Add data with spread
let objToAssign = {racecar: {8: 'Porsche'}}
const updatedobjectOfObjects = {...objectOfObjects, ...objToAssign }
//console.log(updatedobjectOfObjects)