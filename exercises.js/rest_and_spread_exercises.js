// Add elements to arr1 an array with rest
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
//arr1 = [_,_, ..._]
//_______________________________________

// Spread into a list
const primaryColors = ['red', 'blue']
const secondaryColors = ['yellow', 'brown']
//let allColors = [..._, ..._]
//_______________________________________

// Spread numbers (not an array!) into a function
// function xyz(...args) {
//   return [...args]
// }
// xyz(1,2,3,4,5)


// Spread agin into a funciton
// let someFunc = (...args) => {
//   return ___
// }
// someFunc(1,2,3)
//_______________________________________

//Playground: what happens with these?
const str = 'a string'
const chars = [...str]

const numbers = [1,2,3,4]
const max = Math.max(...numbers)

let add = (a, b) => { return a + b }
let arr = [1, 2]
//console.log(add(...arr)) 
//_______________________________________

//Spread two objects into one
const customerDataObj = {
  id: '123',
  userName: 'dog21',
  first_name: 'Kuma',
  phone: '2535550000',
  address: {
    item: '123 Fake St, Monroe, WA'
  }
}

const orderDetails = {
  item: 'Dog Treats',
  category: 'Pet Items',
  price: 19.99,
  quantity: 1,
  orderDate: '10/1/2021'
}

//const dataToProcess = {}