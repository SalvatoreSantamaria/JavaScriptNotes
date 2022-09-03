// Given a string aabbcccz, ouput a2b2c3z1
// "" => ""
// nil/null/undefined/none => error


// Part 2: take in a modifier so that we could output like this:
// aaabbbccc =>  a:):):)b:(:(:(c:|:|:|
// aaabbbccc => a三b三c三
// aaabbbccb => aTRESbTREScDOSbUNO

const input = 'aabbcccaa'
const emptyString = ''
const singleChar = 'a'
const input2 = 'aaabbbccb'

const formatter = (letter, count) => {
  return letter + count
}

const formatterSpanish = (letter, count) =>{
  const map = {
    3: "TRES",
    2: "DOS",
    1: "UNO",
  };
  return letter + map[count]
}
const stringCounter = (input) => {
  if (!input.length) {
    return input
  }
  let result = ''
  //console.log(input)
  let counter = 1
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      // console.log('input[i]', input[i] )
      // console.log('input[i + 1]', input[i + 1] )
      counter++
    } else if (input[i] != input[i + 1]) {
      //result += formatter(input[i], counter)
      result += formatterSpanish(input[i], counter)
      counter = 1
    }
  }
  return result
}
console.log(stringCounter(input))

