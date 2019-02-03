function FirstReverse(str) {
	var newStr = '';
	for(i = 0; i < str.length; i++) {
		newStr += str[str.length - i - 1];
	}

	return newStr;
}

FirstReverse('I Love Development.');