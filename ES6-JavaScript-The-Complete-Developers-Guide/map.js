//Map returns new array of items
// Use someArr.map((item, index, array) => {
//   return () //must include return statement
// }

let numbers = [10,20,30,40]

let doubles = numbers.map((n) => {
  return n*2
})

// console.log(numbers)
// console.log(doubles)

let cars = [
  { id: 1, make: 'Ford', model: 'Escape', year: 2020 },
  { id: 2, make: 'Chevrolet', model: 'Escalade', year: 2005 },
  { id: 3, make: 'Ford', model: 'F-150', year: 2021 },
  { id: 4, make: 'Ford', model: 'F-250', year: 1990 },
  { id: 5, make: 'Ford', model: 'F-150', year: 1970 }
]

//return array of years
let carYear = cars.map((car) => {
  return car.year
})
//console.log(carYear)

let test = numbers.map((item, index, array) => {
  //return (item) // [10, 20, 30, 40]
  // return (index) // [0 1 2 3]
  // return (array) // [[ 10, 20, 30, 40 ],[ 10, 20, 30, 40 ],[ 10, 20, 30, 40 ],[ 10, 20, 30, 40 ]]
})
//console.log(test)

let oldCars = cars.map((c) => {
  return({
    make: c.make, 
    model: c.model, 
    isOld: c.year < 2000}
    ) //returns all of the cars with the new properties 
})
console.log(oldCars)



