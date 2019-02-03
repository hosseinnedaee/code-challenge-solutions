function FirstFactorial(num) {
	if(num === 1 | num === 0) {
		return 1;
	} else {
		return num * FirstFactorial(num -1);
	}
}

var result = FirstFactorial(4);
