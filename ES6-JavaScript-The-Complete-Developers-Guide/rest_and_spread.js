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
