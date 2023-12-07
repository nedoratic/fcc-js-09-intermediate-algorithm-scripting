// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
	let arr = str.split(``);

	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != `&` && arr[i] != `<` && arr[i] != `>` && arr[i] != `"` && arr[i] != `'`) {
			newArr.push(arr[i]);
		} else if (arr[i] === `&`) {
			newArr.push(`&amp;`);
		} else if (arr[i] === `<`) {
			newArr.push(`&lt;`);
		} else if (arr[i] === `>`) {
			newArr.push(`&gt;`);
		} else if (arr[i] === `"`) {
			newArr.push(`&quot;`);
		} else if (arr[i] === `'`) {
			newArr.push(`&apos;`);
		}
	}

	let newStr = newArr.join(``);

	return newStr;
}

console.log(convertHTML("Dolce & Gabbana"));
