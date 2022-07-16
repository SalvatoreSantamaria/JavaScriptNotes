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
console.log(expenseSummary(expense))

//exanple 2
let x = () => {
  return {
    name: 'Kuma',
    address: '123 Fake St',
    age: 10, 
    weight: '12 lbs'
  }
}

const {name, address} = x()
console.log(name) //logs Kuma
console.log(address) //logs 123 Fake St


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
//Example 1
const someObject2 = {
  resource: 'this text will get assigned to _resource',
  notGettingAssigned: 'nope',
  alsoNotGettingAssigned: 'also nope'
}
let { resource: _resource } = someObject2
console.log('_resource is: ' + _resource)//logs _resource is: this text will get assigned to _resource

//Example 2 ////////////////
let anotherObject = {
  prop1: 'stuff',
  prop2: 'things',
  prop3: 'junk'
}
function someFunction({prop3, prop1, prop2}) { //by using desstructuring I don't need the order (but property names must be accurate)
  console.log(prop1 + prop2 + prop3)
}
someFunction(anotherObject) //just pass in the object instead of someFunction('firstProp', 'arg2', 'randomName')

//////////////////////////////////////////////////////////////////////////////////////////

function sumAndMultiply(a,b) {
  return [a+b, a*b]
}
const [sum, multiply] = sumAndMultiply(2,3)
console.log(sum) //this is a+b, the first item in the return
console.log(multiply) // this is a*b, the second item in the return

// Array Matching as input parameters //////////////////////////////////////////////////////////////////////////////////////////
let isOn = false;
let total = 0;

// correct convension is: let configFunction = ([_isOn, _amount]) => {
let configFunction = ([a, b]) => {
  isOn = a;
  total = b;
}
configFunction([true, 100])
console.log(isOn) // logs true
console.log(total) //logs 100

