/** 
*	functionality.js 
* 	Created by Karlina Ray Beringer on 20 January 2018. 
* Basic "Warmup" JavaScript code. 
*/

/**
* 	Computes the Nth term in the Fibonacci Sequence.
* 	Fibonacci Sequence = {0, 1, 1, 2, 3, 5, 8, 13, 21, ...}.
* 	@param {Number} N an integer
* 	@return the Nth term of the Fibonacci Sequence
*/
function fibonacci(N) {
	if (N <= 0) return 0;
	if (N == 1) return 1;
	return fibonacci(N-2) + fibonacci(N-1);
}

/**
* 	Generates a finite portion of the Fibonacci Sequence.
* 	Fibonacci Sequence = {0, 1, 1, 2, 3, 5, 8, 13, 21, ...}.
* 	@param {Number} startIndex an integer greater than -1.
* 	@param {Number} endIndex an integer greater than startIndex.
* 	@return the terms of the Fibonacci Sequence within given indices.
*/
function getFibonacciNumbers(startIndex, endIndex) {
	var terms = [], i = 0;
	for (i = startIndex; i <= endIndex; i++) terms.push(fibonacci(i));
	return terms;
}

/**
*	Demonstrate web page (HTML) interactivity
*	Prediction Output
*/
function buttonClick() {
	var message = "", i = 0, terms = [];
	message = "<p>When N is an element in [-3,7]...</p>";
	terms = getFibonacciNumbers(-3, 7);
	for (i = 0; i < terms.length; i++) {
		message += "<p>fibonacci(" + (i - 3) + ") = ";
		message += terms[i] + "</p>";
	}
	document.getElementById("redBox").innerHTML = message;
}

