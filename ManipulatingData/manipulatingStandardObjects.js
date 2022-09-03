// Manipulate data of Standard Objects. Topics Covered: 
// ✓ Convert to a Map -----------------------------------------
// ✓ Find data by index -----------------------------------------
// ✓ Find data by value -----------------------------------------
// ✓ Find data by key -----------------------------------------
// ✓ Loop through data -----------------------------------------
// ✓ Sort data -----------------------------------------
// ✓ Add data -----------------------------------------


//Standard Object -----------------------------------------------
let standardObj = {
  1: 'Ford',
  2: 'Chevrolet',
  3: 'Volkswagen',
  four: 'Toyota',
  'five': 'Saab'
}

// Convert to a Map -----------------------------------------
const autoMap = new Map(Object.entries(standardObj))
// console.log(autoMap) // Map { '1' => 'Ford', '2' => 'Chevrolet', '3' => 'Volkswagen' }

// Find data by index -----------------------------------------
let standardObjectKeys = (Object.keys(standardObj)) 
//console.log(standardObjectKeys) // logs [ '1', '2', '3', 'four' ] //can now use Array.find because Object.keys returns an array

// console.log(standardObj.four) // logs Toyota
// console.log(standardObj.five) // logs Saab
// console.log(standardObj['five']) // logs Saab. Use [] notation for string keys.
// console.log(standardObj[3]) // remember that standardObj.3 won't work, use brackets

// Find data by value -----------------------------------------
//console.log(Object.values(standardObj)) // logs [ 'Ford', 'Chevrolet', 'Volkswagen', 'Toyota' ]

// Otherwise we need a helper function:
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
// console.log(getKeyByValue(standardObj,'Ford')); // Logs 1

// Find data by key -----------------------------------------
// console.log(Object.keys(standardObj)) //logs [ '1', '2', '3', 'four' ]
// console.log(standardObj[1]) //logs 'Ford'
// console.log(standardObj.four) //logs 'Toyota

// Loop through data -----------------------------------------
// for in loop, Object.entries, Object.keys and Object.values

for (let i in standardObj) {
  // console.log('1', i) // logs 1 2 3 four
   //console.log('2', standardObj[i]) // logs [ 'Ford', 'Chevrolet', 'Volkswagen', 'Toyota' ]
}

for (const [key, value] of Object.entries(standardObj)) {
  //console.log(`${key}: ${value}`); //logs all the keys and values
}


// Sort data -----------------------------------------
// Sort by key
const ordered = Object.keys(standardObj).sort().reduce(
  (obj, key) => { 
    obj[key] = standardObj[key]; 
    return obj;
  }, 
  {}
);

//console.log(JSON.stringify(ordered));

// Sort by value -----------------------------------------
// There's many ways to do this but most are complex. See https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

let standardObjSortByValue = {
  'Ford': 3,
  'Volkswagen': 1,
  'Chevrolet': 2,
  'Toyota': 'four'
}

const sortable = Object.entries(standardObjSortByValue)
    .sort(([,a],[,b]) => a-b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
//console.log(sortable);

const sortable2 = Object.fromEntries(
  Object.entries(standardObjSortByValue).sort(([,a],[,b]) => a-b)
);
//console.log(sortable2);

// Add data -----------------------------------------
standardObj.five = "Jeep"
standardObj[6] = "Fiat" 
//console.log(standardObj)

//When the name of the property is dynamically determined, we can use bracket notation:
// var getProperty = function (propertyName) {
//     return obj[propertyName];
// };

// Add data using Object.assign()
Object.assign(standardObj, {7: 'Kia'})
//console.log(standardObj)

// Add data with spread
let objToAssign = {8: 'Porsche'}
const updatedStandardOject = {...standardObj, ...objToAssign }
//console.log(updatedStandardOject)
