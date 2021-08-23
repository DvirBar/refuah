import { splitSentence } from "./strings";
import { NoBlankWhitespace } from "./errors.json";

describe("test splitSentence function", () => {
    test("should split sentence to words", () => {
        expect(splitSentence("שלום מה קורה")).toContain("שלום");
        expect(splitSentence("שלום מה קורה")).toContain("מה");
        expect(splitSentence("שלום מה קורה")).toContain("קורה");
        expect(splitSentence("שלום מה קורה")).toHaveLength(3);
    });

    test("should have length of words in sentence", () => {
        expect(splitSentence("שלום מה קורה")).toHaveLength(3);
        expect(splitSentence("יש לי נחש במגף  ")).toHaveLength(4);
    });

    test("should throw error when only white space string is sent", () => {
        expect(() => {splitSentence(" ");}).toThrow(NoBlankWhitespace);
        expect(() => {splitSentence("  ");}).toThrow(NoBlankWhitespace);
    });
}); 