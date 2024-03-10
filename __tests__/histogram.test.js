// Import the histogram function from histogram.js
const { histogram } = require("../histogram");

describe("histogram", () => {
	it("generates a histogram of letter and number occurrences for the input string", () => {
		const inputString = "The quick brown fox jumps over the lazy dog";
		const expectedOutput = {
			t: 2,
			h: 2,
			e: 3,
			q: 1,
			u: 2,
			i: 1,
			c: 1,
			k: 1,
			b: 1,
			r: 2,
			o: 4,
			w: 1,
			n: 1,
			f: 1,
			x: 1,
			j: 1,
			m: 1,
			p: 1,
			s: 1,
			v: 1,
			l: 1,
			a: 1,
			z: 1,
			y: 1,
			d: 1,
			g: 1,
		};
		expect(histogram(inputString)).toEqual(expectedOutput);
	});

	it("generates a histogram of letter and number occurrences for the input string", () => {
		const inputString = "1234567890";
		const expectedOutput = {
			1: 1,
			2: 1,
			3: 1,
			4: 1,
			5: 1,
			6: 1,
			7: 1,
			8: 1,
			9: 1,
			0: 1,
		};
		expect(histogram(inputString)).toEqual(expectedOutput);
	});

	it("should ignore spaces, punctuation, and special characters", () => {
		const inputString = "The quick brown fox jumps over the lazy dog!!!";
		const expectedOutput = {
			t: 2,
			h: 2,
			e: 3,
			q: 1,
			u: 2,
			i: 1,
			c: 1,
			k: 1,
			b: 1,
			r: 2,
			o: 4,
			w: 1,
			n: 1,
			f: 1,
			x: 1,
			j: 1,
			m: 1,
			p: 1,
			s: 1,
			v: 1,
			l: 1,
			a: 1,
			z: 1,
			y: 1,
			d: 1,
			g: 1,
		};
		expect(histogram(inputString)).toEqual(expectedOutput);
	});

	it("should return an empty object if the input string is empty", () => {
		const inputString = "";
		const expectedOutput = {};
		expect(histogram(inputString)).toEqual(expectedOutput);
	});
});
