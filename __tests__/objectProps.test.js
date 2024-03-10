// Import the objectProps function from objectProps.js
const { objectProps } = require("../objectProps");

describe("objectProps", () => {
	it("deletes any properties whose values are not strings", () => {
		const inputObject = {
			foo: "bar",
			baz: 3,
			qux: true,
		};
		const expectedOutput = {
			FOO: "bar",
			LENGTH: 1,
		};
		expect(objectProps(inputObject)).toEqual(expectedOutput);
	});
	it("adds a property called length and sets its value to the new length of the object", () => {
		const inputObject = {
			foo: "bar",
			baz: "qux",
		};
		const expectedOutput = {
			FOO: "bar",
			BAZ: "qux",
			LENGTH: 2,
		};
		expect(objectProps(inputObject)).toEqual(expectedOutput);
	});
	it("transforms the object property names to uppercase", () => {
		const inputObject = {
			foo: "bar",
			baz: "qux",
		};
		const expectedOutput = {
			FOO: "bar",
			BAZ: "qux",
			LENGTH: 2,
		};
		expect(objectProps(inputObject)).toEqual(expectedOutput);
	});
});
