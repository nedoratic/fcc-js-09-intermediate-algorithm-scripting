// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
	// Iterate through the array
	for (var i = 0; i < arr.length; i++) {
		// Check if func returns true for the current element
		if (func(arr[i])) {
			// If true, return the remaining elements
			return arr.slice(i);
		}
	}
	// If no element satisfies the condition, return an empty array
	return [];
}

var testOne = dropElements([1, 2, 3], function (n) {
	return n < 3;
});

console.log(testOne);
