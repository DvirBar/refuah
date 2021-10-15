import { expect } from "chai";
import { splitSentence } from "./strings";
import { NoBlankWhitespace } from "./errors.json";

describe("test splitSentence function", () => {
	it("should split sentence to words", () => {
		expect(splitSentence("שלום מה קורה")).to.contain("שלום");
		expect(splitSentence("שלום מה קורה")).to.contain("מה");
		expect(splitSentence("שלום מה קורה")).to.contain("קורה");
		expect(splitSentence("שלום מה קורה")).to.have.lengthOf(3);
	});

	it("should have length of words in sentence", () => {
		expect(splitSentence("שלום מה קורה")).to.have.lengthOf(3);
		expect(splitSentence("יש לי נחש במגף  ")).to.have.lengthOf(4);
	});

	it("should throw error when only white space string is sent", () => {
		expect(() => { splitSentence(" "); }).to.throw(NoBlankWhitespace);
		expect(() => { splitSentence("  "); }).to.throw(NoBlankWhitespace);
	});
});
