import { expect } from "chai";
import { removeFromObject } from "./objects";

describe("test object methdods", () => {
    describe("test remove from object", () => {
        it("should remove a single key from an object", () => {
            const obj = {
                a: "test1",
                b: "test2",
                c: "test3",
            };

            const keyToRemove = ["a"];

            const expectedObj = {
                b: "test2",
                c: "test3",
            };

            expect(removeFromObject(obj, keyToRemove)).to.be.deep.equal(expectedObj);
        });

        it("should remove many keys from an object", () => {
            const obj = {
                a: "test1",
                b: "test2",
                c: "test3",
            };

            const keyToRemove = ["a", "c"];

            const expectedObj = {
                b: "test2",
            };

            expect(removeFromObject(obj, keyToRemove)).to.be.deep.equal(expectedObj);
        });
    });
});
