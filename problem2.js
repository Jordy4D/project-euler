//Each new term in the Fibonacci sequence is generated 
//by adding the previous two terms. By starting with 1 
//and 2, the first 10 terms will be: 
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence 
//whose values do not exceed four million, find the sum 
//of the even-valued terms.

//https://projecteuler.net/problem=2


var totalSum = 0;
var x = 1;
var y = 2;
var z = 0;

while (x<4000000) {
	if (x % 2 === 0) {
		totalSum += x;
	}
	z = x + y;
	x = y;
	y = z;
};

console.log(totalSum);