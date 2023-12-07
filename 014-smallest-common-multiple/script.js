// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
	// Function to find the greatest common divisor (GCD)
	function gcd(a, b) {
		return b === 0 ? a : gcd(b, a % b);
	}
	// Function to find the least common multiple (LCM)
	function lcm(a, b) {
		return (a * b) / gcd(a, b);
	}
	// Sort the array in ascending order
	arr.sort(function (a, b) {
		return a - b;
	});
	// Initialize the result to the first number in the range
	var result = arr[0];
	// Iterate through the range and calculate the LCM
	for (var i = arr[0] + 1; i <= arr[1]; i++) {
		result = lcm(result, i);
	}
	// Return the result
	return result;
}

var testOne = smallestCommons([1, 3]);

console.log(testOne);
