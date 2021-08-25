import { expect } from "chai";
import { validateEmail, validateName, validatePassword } from "../validation";

// Name validation
describe("test name validation", () => {
    describe("test valid values", () => {
        it("should accept only lowercase", () => {
            expect(validateName("abc")).to.be.true;
        });

        it("should accept only uppercase", () => {
            expect(validateName("ABC")).to.be.true;
        });

        it("should accept starting with uppercase", () => {
            expect(validateName("Abc")).to.be.true;
        });

        it("should accept ending with uppercase", () => {
            expect(validateName("abC")).to.be.true;
        });

        it("should accept containing uppercase", () => {
            expect(validateName("aBc")).to.be.true;
        });

        it("should accept single character", () => {
            expect(validateName("a")).to.be.true;
        });

        it("should accept Hebrew single word names", () => {
            expect(validateName("דן")).to.be.true;
        });

        it("should accept Hebrew multiple word names", () => {
            expect(validateName("דן שרון")).to.be.true;
        });
    });

    describe("test invalid values", () => {
        it("should not accept only whitespace", () => {
            expect(validateName(" ")).to.be.false;
        });

        it("should not accept starting whitespace", () => {
            expect(validateName(" fDdf")).to.be.false;
        });

        it("should not accept one letter Hebrew", () => {
            expect(validateName("ג")).to.be.false;
        });

        it("should not accept combination of Hebrew and English", () => {
            expect(validateName("שכds")).to.be.false;
            expect(validateName("dsגג")).to.be.false;
            expect(validateName("ds גג")).to.be.false;
        });
    });
});

// Email vallidation
describe("test email validation", () => {
    describe("test valid value", () => {
        it("test simple valid value", () => {
            expect(validateEmail("abc@gmail.com")).to.be.true;
        });

        it("test email that contains special character", () => {
            expect(validateEmail("a!bc@gmail.com")).to.be.true;
            expect(validateEmail("a.bc@gmail.com")).to.be.true;
        });

        it("test email that contains special character", () => {
            expect(validateEmail("a!bc@gmail.com")).to.be.true;
            expect(validateEmail("a.bc@gmail.com")).to.be.true;
        });
    });

    describe("test invalid values", () => {
        it("test value with missing @", () => {
            expect(validateEmail("abcgmail.com")).to.be.false;
        });

        it("test value with missing .", () => {
            expect(validateEmail("abc@gmailcom")).to.be.false;
        });

        it("test value without @ and .", () => {
            expect(validateEmail("abcgmailcom")).to.be.false;
        });

        it("test value with 2 @", () => {
            expect(validateEmail("abc@gm@ailcom")).to.be.false;
        });

        it("test value with 2 . after @", () => {
            expect(validateEmail("abc@gmail.co.m")).to.be.false;
        });

        it("test email that starts with period", () => {
            expect(validateEmail(".abc@gmail.com")).to.be.false;
        });

        it("test email that ends period", () => {
            expect(validateEmail("abc.@gmail.com")).to.be.false;
        });
    });
});

// Test password validation
describe("test password validation", () => {
    describe("test valid values", () => {
        it("starts with lowercase", () => {
            expect(validatePassword("abc123BC")).to.be.true;
        });
        it("starts with uppercase", () => {
            expect(validatePassword("ZY46533e")).to.be.true;
        });
        it("starts with numbers", () => {
            expect(validatePassword("43fRERef")).to.be.true;
        });

        it("contains special characters", () => {
            expect(validatePassword("fge232@Re!")).to.be.true;
        });
    });

    describe("test invalid values", () => {
        describe("validatePassword", () => {
            it("password is shorter than 8 characters", () => {
                expect(validatePassword("AB2rR4")).to.be.false;
            });
            it("does not contain lowercase", () => {
                expect(validatePassword("AB24RRS44")).to.be.false;
            });

            it("does not contain uppercase", () => {
                expect(validatePassword("afd35fge")).to.be.false;
            });

            it("does not contain numbers", () => {
                expect(validatePassword("35fgefd42f")).to.be.false;
            });
        });
    });
});
