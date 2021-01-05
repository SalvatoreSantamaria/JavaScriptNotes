//Map returns new array

let numbers = [1,2,3,4]

let doubles = numbers.map((n) => {
  return n*2
})

console.log(numbers)
console.log(doubles)

let cars = [
  { model: 'Escape', year: 2005 },
  { model: 'Escalade', year: 2005 },
  { model: 'F-250', year: 1999 }
]

//return array of years
let carYear = cars.map((car) => {
  return car.year
})
console.log(carYear)