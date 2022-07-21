//for iterable objects


const object = {a: 'first', b: 'second', c: 'third'}
for (let i in object) {
  console.log('1', i) // logs a b c
  console.log('2', object[i]) // logs first second third
}

const letters = ['a', 'b', 'c', 'd']
for (let i in letters) { 
  console.log('3', i) // logs 0 1 2 3 
  console.log('4 ', letters[i]) // logs a b c d // can also use for of to get values instead of position.
}
