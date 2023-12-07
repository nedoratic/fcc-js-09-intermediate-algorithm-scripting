// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
	let firstFibNum = 0;
	let secondFibNum = 1;
	let allOddFibNumSum = 0;
	for (; secondFibNum <= num; ) {
		if (secondFibNum % 2 === 1) {
			allOddFibNumSum += secondFibNum;
		}
		let tempNum = secondFibNum;
		secondFibNum = firstFibNum + secondFibNum;
		firstFibNum = tempNum;
	}
	return allOddFibNumSum;
}
