import { expect } from "chai";
import { dateInPast } from "./dates";

describe("test dateInPast function", () => {
    it("should return true if date is in the past", () => {
        const now = new Date();
        expect(dateInPast(new Date(Number(now) - 1))).to.be.true;
    });

    it("should return false if date is in the future", () => {
        const now = new Date();
        expect(dateInPast(new Date(Number(now) + 1))).to.be.false;
    });
});
