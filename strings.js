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

