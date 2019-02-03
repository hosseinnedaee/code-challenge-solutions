/*
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following 
algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
*/
function LetterChanges(str) {
	return str.replace(/[a-zA-Z]/g, NextLetter)
		.replace(/[aeiou]/g, (l) => l.toUpperCase() );
}

function NextLetter(letter) {
	let charCode = letter.charCodeAt(0),
		operand = (letter === 'z' | letter === 'Z') 
		? "a".charCodeAt(0) - "z".charCodeAt(0) 
		: 1;
	return String.fromCharCode(charCode + operand);
}

LetterChanges("how are you today?");

