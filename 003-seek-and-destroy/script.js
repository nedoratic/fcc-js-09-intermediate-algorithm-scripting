// You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.

function destroyer(arr) {
	console.log(arr);
	// Output: [1, 2, 3, 1, 2, 3]

	console.log(arguments);
	// Output: { '0': [ 1, 2, 3, 1, 2, 3 ], '1': 2, '2': 3 }

	let arrayWithAllArguments = [...arguments];

	console.log(arrayWithAllArguments);
	// Output: [[1, 2, 3, 1, 2, 3], 2, 3];

	let arrayWithoutFirstArgument = arrayWithAllArguments.slice(1);

	console.log(arrayWithoutFirstArgument);
	// Output: [2, 3]

	let filteredArray = arr.filter((arrayElements) => !arrayWithoutFirstArgument.includes(arrayElements));
	// [1, 2, 3, 1, 2, 3].filter(arrayElements => ![2, 3].includes(arrayElements));

	return filteredArray;
	// [1, 1]
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
