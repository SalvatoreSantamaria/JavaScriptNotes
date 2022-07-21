// look through entire array, test for condition, and return true or false

let cars = [
  { make: 'Escape', year: 2005 },
  { make: 'Escalade', year: 2005  },
  { make: 'F250', year: 1999 }
]

//are all cars newer than 1980
let modern = cars.every((c)=> {
  return(c.year > 1980)
})
console.log(modern)

//are some cars newer than 2000?
let x = cars.some((c)=> {
  return(c.year > 2000)
})
console.log(x)