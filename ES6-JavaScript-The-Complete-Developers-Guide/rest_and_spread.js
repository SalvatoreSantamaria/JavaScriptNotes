//REST ...rest used when we want to capture a list

// add elements to an array
arr1 = [1,2,3,4]
arr2 = [5,6,7,8]
arr1 = [1,2,3,4, ...arr2]
console.log(arr1)  //logs [1, 2, 3, 4, 5, 6, 7, 8]

////////////////////////////////////////////////////////////////////////////////////////////////


function addNumbers(num) {
  return num.reduce((sum, n)=> {
    return sum += n
  }, 0)
}
console.log(addNumbers([1,2,3,4,5,6,7,8,9]))

///

function addNumbersNoArray(...num) {
  return num.reduce((sum, n)=> {
    return sum += n
  }, 0)
}
console.log(addNumbersNoArray(1,2,3,4,5,6,7,8,9)) //if we we taking in somethings NOT an array


//SPREAD ... used when we want to spread a list
const colors1 = ['red', 'green']
const colors2 = ['blue', 'orange']
let concated = colors1.concat(colors2)
let spreaded = [...colors1, ...colors2] //does same thing as above
// let spreaded = ['purple', ...colors1, ...colors2] //also can add in new elements
console.log(concated)
console.log(spreaded)


//SPREAD in a function
let print = (...args) => {
  let test = [1, ...args, 4]
  console.log(test) //logs [1,2,3,4]
}
print(2, 3)

//SPREAD splitting a string.
const str = 'a string'
//both do the same thing
const chars = [...str]
console.log(chars)     //logs ['a', ' ', 's', 't', 'r', 'i', 'n', 'g' ]
splitStr = str.split('')
console.log(splitStr)  //logs ['a', ' ', 's', 't', 'r', 'i', 'n', 'g' ]

//SPREAD other examples
const numbers = [1,2,3,4]
const max = Math.max(...numbers)
console.log(max) //logs 4


let add = (a, b) => { return a + b }
let arr = [1, 2]
console.log(add(...arr)) // returns 3