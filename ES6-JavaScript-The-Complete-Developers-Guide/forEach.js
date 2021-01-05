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