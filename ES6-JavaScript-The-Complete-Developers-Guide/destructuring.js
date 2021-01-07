// Destructuring

//Objects: Pull off properties //////////////////////////////////////////////////////////////////////////////////////////
var expense = {
  type: 'Business',
  amount: '$45'
};

// I want to declase a new variable called type referencing expense.type, expense.amount
//ES5
// var type = expense.type
// var amount = expense.amount

//ES6
const { type } = expense;
const { amount } = expense;
//or const { type, amount }

//Can do this with a function as well
function expenseSummary({ type, amount }) {
  return(`${type} and ${amount}`)
}
expenseSummary(expense)

//Arrays: pull off elements //////////////////////////////////////////////////////////////////////////////////////////
const arr = ['a', 'b', 'c', 'd', 'e', 'f']
const [ letter1, letter2 ] = arr
// letter1 is a, ie arr[0] = letter1
// letter2 is b 
const [ firstLetter, ...rest] = arr //firstLetter is a, ...rest will be b, c, d, e
const { length } = arr //syntax to get property from array // console.log(length) will log the length of the array

//Arrays and Objects: Combined pull off properies and elements (Course says not a lot of practical use for this)
const someObject = {
  arr: ['a', 'b', 'c', 'd', 'e', 'f']
}
const { arr: [first] } = someObject
console.log(first)

//Practical Destructuring Objects //////////////////////////////////////////////////////////////////////////////////////////
let anotherObject = {
  prop1: 'stuff',
  prop2: 'things',
  prop3: 'junk'
}
function someFunction({prop3, prop1, prop2}) { //by using desstructuring I don't need the order (but property names must be accurate)
  console.log(prop1 + prop2 + prop3)
}
someFunction(anotherObject) //just pass in the object instead of someFunction('firstProp', 'arg2', 'randomName')
