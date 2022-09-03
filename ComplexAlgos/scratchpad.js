// const lookupTable2 = (input) => {
//   const table = {
//     one: '1',
//     two: '2',
//     three: '3'
//   }
//   return table[input]
// }


// const someFunction = (input) => {
//   const translate = lookupTable2(input)
//   console.log('translate ', translate)
//   return translate
// }


// const x = someFunction('one')
// console.log('x ', x)

const getValueFromTable = (n) => {
  let table = {
    1: 'one',
    2: 'two'
  }
  return table[n]
}

const numberToWord = (n) => {
  return getValueFromTable(n)
}

console.log(numberToWord(1))

