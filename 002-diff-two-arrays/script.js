// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
	const newArr = [];
	for (let x = 0; x < arr1.length; x++) {
		if (!arr2.includes(arr1[x])) {
			newArr.push(arr1[x]);
		}
	}
	for (let y = 0; y < arr2.length; y++) {
		if (!arr1.includes(arr2[y])) {
			newArr.push(arr2[y]);
		}
	}
	return newArr;
}
