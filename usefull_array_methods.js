const items = [
  { name: 'Apples',      price: 100 },
  { name: 'Grapes',      price: 200 },
  { name: 'Chex Mix',    price: 70  },
  { name: 'Oranges',     price: 8   },
]

//filter
//returns a new array of x's that passes t/f 
const filteredItems = items.filter((x) => {
  return x.price < 100
})
console.log(filteredItems)
// [ { name: 'Chex Mix', price: 70 }, { name: 'Oranges', price: 8 } ]

//map
//converts array to new array
const mappedItems = items.map((x) => {
  return x.price
})
console.log(mappedItems)
// [ 100, 200, 70, 8 ]

//find
//returns FIRST thing found from array (does not return new array)
const findItems = items.find((x) => {
  return items.name = 'Apples'
})
console.log(findItems)
// { name: 'Apples', price: 100 }

//forEach
//does not return anything but a great processor
items.forEach((x) => {
  console.log(x.name)
})
//logs
// Apples
// Grapes
// Chex Mix
// Oranges

let arrOfItemNames = [] 
items.forEach((x) => {
  arrOfItemNames.push(x.name)
})
console.log(arrOfItemNames)
// [ 'Apples', 'Grapes', 'Chex Mix', 'Oranges' ]

//some
//returns boolean if 1 qualifier passes
const hasLessThan100 = items.some((x)=> {
  return x.price < 100
})
console.log(hasLessThan100)
//true

//every
//return boolean if all pass qualifier
const isLessThan100 = items.every((x) => {
  return x.price < 100
})
console.log(isLessThan100)
//false

//reduce
//runs function on each item in array
const total = items.reduce((currentTotal, x) => { //have to include param for each iteration
  return x.price + currentTotal
}, 0) //have to include starting index
console.log(total)
// 378

//includes
let arr = [1, 2, 3]
const includesItem = arr.includes(1)
console.log(includesItem)
//true