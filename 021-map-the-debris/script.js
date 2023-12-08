// According to Kepler's Third Law, the orbital period T of two point masses orbiting each other in a circular or elliptic orbit is:

// T = 2 * Math.PI * Math.sqrt(a^3 / μ)

// where:

// a is the orbit's semi-major axis

// μ = GM is the standard gravitational parameter

// G is the gravitational constant,

// M is the mass of the more massive body.

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// Function to calculate orbital period based on Kepler's Third Law
function orbitalPeriod(arr) {
	// Gravitational constant G in km^3s^-2
	const G = 6.6743e-20;
	// Earth's standard gravitational parameter μ in km^3s^-2
	const GM = 398600.4418;
	// Radius of Earth in kilometers
	const earthRadius = 6367.4447;
	// Calculate the orbital period for each celestial body in the array
	const result = arr.map((body) => {
		// Calculate semi-major axis (a) using the average altitude
		const a = earthRadius + body.avgAlt;
		// Calculate the orbital period using Kepler's Third Law
		const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
		// Round the orbital period to the nearest whole number
		const roundedT = Math.round(T);
		// Create a new object with the name and orbital period
		return { name: body.name, orbitalPeriod: roundedT };
	});
	return result;
}

// Example usage

const celestialBodies = [
	{ name: "Moon", avgAlt: 384400 },
	{ name: "ISS", avgAlt: 420 },
	{ name: "Hubble Space Telescope", avgAlt: 547 },
];

// Calculate orbital periods for the celestial bodies

const resultArray = orbitalPeriod(celestialBodies);

// Display the result

console.log(resultArray);
