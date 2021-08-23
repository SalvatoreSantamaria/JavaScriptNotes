// Map returns new array of items
// Use someArr.map((item, index, array) => {
//   return () //must include return statement
// }

const cars = [
  { id: 1, make: 'Ford', model: 'Escape', year: 2020 },
  { id: 2, make: 'Chevrolet', model: 'Escalade', year: 2005 },
  { id: 3, make: 'Ford', model: 'F-150', year: 2021 },
  { id: 4, make: 'Ford', model: 'F-250', year: 1990 },
  { id: 5, make: 'Ford', model: 'F-150', year: 1970 }
]

// return array of years
// return array of cars with model and how many years old it is 

const numbers = [0,10,22,33,404,500,666,7,.8,99]

// return array of doubled numbers

const result = numbers.map((item) => {
  return item * 2
})
console.log(result)


const orders = [
  { purhase_no: 1, item: 'Chips', user_id: 382 },
  { purhase_no: 2, item: 'Soda', user_id: 43 },
  { purhase_no: 3, item: 'Cookies', user_id: 3334 },
  { purhase_no: 4, item: 'Large Chips', user_id: 6400 },
  { purhase_no: 5, item: 'Fizzy Water', user_id: 7652 },
]
// return array of user ids in numerical order, and their index

let result2 = orders.map((item) => {
  let orders = item.user_id

})

console.log(result2)