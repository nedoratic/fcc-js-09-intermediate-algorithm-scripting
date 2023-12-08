// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether(a, b) {
	// Check if the first argument is a valid number
	if (typeof a !== "number") {
		return undefined;
	}
	// Check if there is a second argument
	if (arguments.length === 1) {
		// If only one argument is provided, return a function
		return function (b) {
			// Check if both arguments are valid numbers
			return typeof b === "number" ? a + b : undefined;
		};
	}
	// If both arguments are valid numbers, return their sum
	return typeof b === "number" ? a + b : undefined;
}

console.log(addTogether(2, 3)); // Should return 5

console.log(addTogether(23.4, 30)); // Should return 53.4

console.log(addTogether("2", 3)); // Should return undefined

console.log(addTogether(5, undefined)); // Should return undefined
