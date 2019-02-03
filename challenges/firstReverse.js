function FirstReverse(str) {
	var arr = str.split("");
	arr.reverse();
	return arr.join("");
}

console.log(FirstReverse('I Love Development.'));