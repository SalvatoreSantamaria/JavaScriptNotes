// reference: https://www.youtube.com/watch?v=NIq3qLaHCIs
// there is more to arr destructuring, but here are the basics:

// destructuring is taking an obj/arr and converting into smaller obj/arr/vars

const alphabet = ['A','B','C','D','E','F']
const numbers = ['1','2','3','4','5','6']

// setting vars to one and two, they are in order. ie, one = 'A', two = 'B'
const [one, two] = alphabet // right side is the element we are destructuring
// is the same as
const a = alphabet[0] //logs 'A'
const b = alphabet[1] //logs 'B'

//const [one,,three] = alphabet//this will skip 'B'
const [one, two, ...restOfAlphabet] = alphabet //set everything else to restOfAlphabet variable
console.log(restOfAlphabet) // logs [ 'C', 'D', 'E', 'F' ]



const combined = [...alphabet, ...numbers]
//same as alphabet.concat(numbers)

