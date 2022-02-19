let letters2 = ['a', 'b', 'c']


let output = (item, index, array) => {
  //console.log(item + 'i')
  item + 'i'
}
let r = letters2.forEach(output) //logs a 0  b 1 c 2

//console.log(r)

// const numbers = [10, 20, 30]

// let x = (item) => {
//   return item + 1
// }
// let evt = {
//   attributes: 'test'
// }


// const eventAttribute = evt.attributes && evt.attributes.length && evt.attributes[0]
// console.log('eventAttribute ', eventAttribute)

let firstBillingDate = new Date()
let dayRemaining = 13
let neg = -1
console.log('firstBillingDate', firstBillingDate)

console.log(!!firstBillingDate)
let test = !!firstBillingDate ? neg : dayRemaining
console.log('test is ', test)