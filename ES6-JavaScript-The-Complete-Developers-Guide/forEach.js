//Iterates over every item

let letters = ['a', 'b', 'c']

letters.forEach((i) => {
  console.log(i)
})

let numbers = [1,2,3,4]
let sum = 0

numbers.forEach((i) => {
  sum += i
})

console.log(sum)

// can also pass in a function to forEach!!
function logger(input) {
  console.log('function logger is logging with for each! input is: ' + input)
}
letters.forEach(logger)


// forEach works great to call another function to each element in an array
let letters2 = ['a', 'b', 'c']
let output = (item, index, array) => {
  console.log(item, index )
}
letters2.forEach(output) //logs a 0  b 1 c 2
//OR
letters2.forEach((item, index, array)=> {
  item = item.toUpperCase() //just overwriting item here
  console.log('this is with an anonymous function ' + item, index)
})