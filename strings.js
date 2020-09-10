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