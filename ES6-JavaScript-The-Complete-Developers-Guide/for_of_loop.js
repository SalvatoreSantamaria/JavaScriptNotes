//for iterable objects (arrays, strings)

const letters = ['a', 'b', 'c', 'd']
const someWord = 'someWord'

for (let i of letters) {
  console.log(i)
}
//logs a b c d 

for (let i of someWord) {
  console.log(i)
}
//logs s o m e w o r d


// can't use for of loop on an object, this will throw an error
// use for in!
// const object = {a: 'first', b: 'second', c: 'third'}
// for (let i of object) {
//   console.log(i) //error!!!
// }
