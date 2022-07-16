
// Function
// const sayHello = function() {
//   console.log('Hello')
// }
//
// sayHello();

// Arrow function
// const sayHello = () => {
//   console.log('Hello')
// }

// One liner without braces
// const sayHello = () => console.log('hello')

// One liner returning does not need braces
// const sayHello = () => 'hello'

// If returning an object literal, must wrap in () or error!
// const sayHello = () => ({ mes: 'Hello '})


// With Params
// const sayHello = (name) => console.log(`Hello ${name}`)
//don't need parens for single param
// const sayHello = name => console.log(`Hello ${name}`)

// sayHello('Kuma')

// With multiple Params
// const sayHello = (firstname, lastname) => console.log(`Hello ${firstname} ${lastname}`)
// sayHello('Kuma', 'Dog')

// A callback
// const users = ['Kuma', 'Addie', 'Rae']
// const nameLengths = users.map(function(name){
//   return name.length
// });
// console.log(nameLengths)

// A callback arrow function
const users = ['Kuma', 'Addie', 'Rae']
const nameLengths = users.map( name => {
  return name.length
});
console.log(nameLengths)


//Multiple Arrow Functions 
let data = [1,2,3,4,5,6,7,8,9]
let x = data.map((d) => {
  return d + 1
})

console.log(x)

