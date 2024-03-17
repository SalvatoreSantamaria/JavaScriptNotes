

let word1 = "abc"
let word2 = "pqr"

const mergeAlternately = function(word1, word2) {

  let i = 0
  let j = 0

  let combined = word1.length + word2.length - 1
  let result = ''
  let x = 0
  while (x < combined) {
    if (i < combined) {
      result += word1[i]
      i++
    }

    if (j < combined) {
      result += word2[j]
      j++
    }

    x++
  }
  return 'result'
};

console.log(mergeAlternately(word1, word2))