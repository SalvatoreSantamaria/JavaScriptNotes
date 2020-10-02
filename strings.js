// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"


function findNemo(sentence) {
	sen = sentence.split(' ').indexOf("Nemo") + 1
	return sen ? `I found Nemo at ${sen}!`: "I can't find Nemo :("
}

// Create a function that takes a string and replaces the vowels with another character.
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// replaceVowel("karachi") ➞ "k1r1ch3"

function replaceVowel(word){
	const vowels = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  	return [...word].map(i => i in vowels ? vowels[i] : i).join('');
}


// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
function detectWord(str) {
	let wanted = ""
	for(let letter of str){
		if (letter === letter.toLowerCase()){
			wanted = wanted + letter
		}
	}
	return wanted
}

// Create a function that takes a string. If the string is all uppercase characters, convert it to lowercase and add an exclamation mark at the end.
// normalize("CAPS LOCK DAY IS OVER") ➞ "Caps lock day is over!"
function normalize(str) {
	let result = [];
	if (str === str.toUpperCase()) {
		result = str.toLowerCase() + '!'
		return(result.charAt(0).toUpperCase() + result.slice(1))
	} else {
		return str
	}
} 

// We delete the following characters from our two strings to turn them into anagrams of each other:
// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// We must delete  characters to make both strings anagrams, so we print  on a new line.
function makeAnagram(a, b) {
	a = a.split('')
	b = b.split('')
	let count = 0
	let obj2 = {}

	for (let i of b) {
			if (!obj2[i]) {
					obj2[i] = 1
			} else {
					obj2[i]++
			}
	}

	for (let i of a) {
		if (obj2[i] && obj2[i] > 0) {
			obj2[i]--
			count++
		}
	}

	let diff_of_smaller = (a.length - count)
	let diff_of_larger = (b.length - a.length)
	return (2 * diff_of_smaller) + diff_of_larger
}

// PART I
// Given a string of alphabetical characters, such as "aabbbccaaa",
// write a function called compress that takes that string and returns a compressed version
// containing each character and its count, i.e. "a2b3c2a3"
function compress(str) {
	let result = '';
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		count++;
		// if i isn't the same as i + 1, add the letter and the count to the result str, and reset the counter
		if (str[i] != str[i + 1]) {
			result += str[i] + count; 
			count = 0;
		} 
	}
	console.log(result)
}




/////
function initializeLibrary(bookTitles) { //bookTitles is an array of strings
  if (!Array.isArray(bookTitles) || bookTitles.length < 1) {
    throw new Error('Invalid input: bookTitles should be an array of at least one element');
  }
let obj = {} 
for (let i of bookTitles) {
    if (!obj[i]) {
        obj[i] = 1
    }
}
console.log(obj)

return requestBook(title)

    for (let i of obj) {
        if (i == title)  {
            obj[i] == 0
        }
    }
    console.log(obj)

      

      // return integer with titles that haven't been requested yet
      
  
}

module.exports = { initializeLibrary };