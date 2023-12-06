// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
	if (!/[aeiou]/i.test(str)) {
		return str + "ay";
	} else if (/^[aeiou]/i.test(str)) {
		return str + "way";
	} else {
		let vowelIndex = str.indexOf(str.match(/[aeiou]/i)[0]);
		return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
	}
}
