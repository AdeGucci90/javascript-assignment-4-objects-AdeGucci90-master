// Import the destructuring function from destructuring.js
const { spreadSyntax } = require("../spreadSyntax");

describe("spreadSyntax", () => {
	it("should return an object", () => {
		expect(typeof spreadSyntax({ a: 1 }, { b: 2 })).toBe("object");
	});
	it("should return an object with the properties of the two objects passed in", () => {
		expect(spreadSyntax({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
	});
	it("should return an object with the properties of the two objects passed in, with the properties of the second object overriding the properties of the first object", () => {
		expect(spreadSyntax({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
	});
});
