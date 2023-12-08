// Fill in the object constructor with the following methods below:

getFirstName();

getLastName();

getFullName();

setFirstName(first);

setLastName(last);

setFullName(first, last);

// Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').

// Define the Person constructor function
const Person = function (first, last) {
	// Private variables to store the first and last names
	let firstName = first;
	let lastName = last;
	// Method to get the first name
	this.getFirstName = function () {
		return firstName;
	};
	// Method to get the last name
	this.getLastName = function () {
		return lastName;
	};
	// Method to get the full name
	this.getFullName = function () {
		return `${firstName} ${lastName}`;
	};
	// Method to set the first name
	this.setFirstName = function (first) {
		firstName = first;
	};
	// Method to set the last name
	this.setLastName = function (last) {
		lastName = last;
	};
	// Method to set both first and last names
	this.setFullName = function (first, last) {
		firstName = first;
		lastName = last;
	};
};

// Example usage and tests

const person = new Person("Bob", "Ross");

// Testing get methods

console.log(person.getFirstName()); // Should return 'Bob'

console.log(person.getLastName()); // Should return 'Ross'

console.log(person.getFullName()); // Should return 'Bob Ross'

// Testing set methods

person.setFirstName("John");

person.setLastName("Doe");

console.log(person.getFullName()); // Should return 'John Doe'

person.setFullName("Jane", "Smith");

console.log(person.getFullName()); // Should return 'Jane Smith'
