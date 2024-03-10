// Import the person object from the file person.js
const { person } = require("../objectMethods");

describe("person object", () => {
	it("has the correct properties", () => {
		expect(person).toHaveProperty("firstName");
		expect(person).toHaveProperty("lastName");
		expect(person).toHaveProperty("age");
		expect(person).toHaveProperty("city");
		expect(person).toHaveProperty("skills");
		expect(person).toHaveProperty("isMarried");
		expect(person).toHaveProperty("fullName");
	});

	it("properties have the correct value types", () => {
		expect(typeof person.firstName).toBe("string");
		expect(typeof person.lastName).toBe("string");
		expect(typeof person.age).toBe("number");
		expect(typeof person.city).toBe("string");
		expect(Array.isArray(person.skills)).toBe(true);
		expect(typeof person.isMarried).toBe("boolean");
		expect(typeof person.fullName).toBe("function");
	});

	it("fullName method returns the correct value", () => {
		expect(person.fullName()).toBe(
			`My name is ${person.firstName} ${person.lastName}.`
		);
	});
});
