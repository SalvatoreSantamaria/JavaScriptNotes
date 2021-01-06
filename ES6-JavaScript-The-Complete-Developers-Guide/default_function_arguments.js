let incrementer = (number, amount = 1) => {
  return number + amount
}

console.log(incrementer(10)) // returns 11 because the default value is 1 (for when no param is passed in)
console.log(incrementer(10, 2)) // returns 12
