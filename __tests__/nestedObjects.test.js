// Import the nestedObjects function from nestedObjects.js
const { nestedObjects } = require("../nestedObjects");

describe("nestedObjects", () => {
	it("returns null for an empty array", () => {
		expect(nestedObjects([])).toBeNull();
	});

	it("returns a nested object for an array of length n", () => {
		expect(nestedObjects([1, 2, 3, 4, 5])).toEqual({
			value: 1,
			next: {
				value: 2,
				next: {
					value: 3,
					next: {
						value: 4,
						next: {
							value: 5,
							next: null,
						},
					},
				},
			},
		});
	});
});
