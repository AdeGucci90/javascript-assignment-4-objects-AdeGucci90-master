// Import the destructuring function from destructuring.js
const { destructuring } = require("../destructuring");

describe("destructuring", () => {
	it("should return an array containing the values of the name and city properties of the object", () => {
		const obj = {
			name: "John",
			city: "New York",
		};

		const result = destructuring(obj);

		expect(result).toEqual(["John", "New York"]);
	});

	it("should return an array containing null if the name property doesn't exist", () => {
		const obj = {
			city: "New York",
		};

		const result = destructuring(obj);

		expect(result).toEqual([null, "New York"]);
	});

	it("should return an array containing null if the city property doesn't exist", () => {
		const obj = {
			name: "John",
		};

		const result = destructuring(obj);

		expect(result).toEqual(["John", null]);
	});

	it("should return an array containing null if the name and city properties do not exist", () => {
		const obj = {};

		const result = destructuring(obj);

		expect(result).toEqual([null, null]);
	});
});
