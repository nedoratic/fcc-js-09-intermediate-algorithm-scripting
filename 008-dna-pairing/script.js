// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
	let arrFromStr = str.split("");
	let newArr = [];
	for (let i = 0; i < arrFromStr.length; i++) {
		if (arrFromStr[i] == "A") {
			newArr.push(["A", "T"]);
		} else if (arrFromStr[i] == "C") {
			newArr.push(["C", "G"]);
		} else if (arrFromStr[i] == "G") {
			newArr.push(["G", "C"]);
		} else if (arrFromStr[i] == "T") {
			newArr.push(["T", "A"]);
		}
	}
	return newArr;
}

console.log(pairElement("GCG"));
