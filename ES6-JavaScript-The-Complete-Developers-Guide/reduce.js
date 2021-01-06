//reduce   

let numbers = [1,2,3,4];
let sum = 0;

let numbersTotaled = numbers.reduce((sum, numbers)=> {
  return sum += numbers
}, 0) //0 is the inital value
console.log(numbersTotaled)

let cars = [
  { make: 'Escape', year: 2005 },
  { make: 'Escalade', year: 2005  },
  { make: 'F250', year: 1999 }
]
let makes = cars.reduce((resultArray, cars)=> {
    resultArray.push(cars.make) 
    return resultArray //be sure to return
}, []) //the initial value gets is set to resultArray!!!
console.log(makes)


function balancedParens(string){
  str = string.split('')
  str.reduce((count, char)=> {
    if (count < 0) {
      return count
    }
    if (char === '(') { return ++count}
    if (char === ')') { return --count}

    return count

  }, 0) //counter increments by 1 with open parens, decrements by 1 with closing parens
}