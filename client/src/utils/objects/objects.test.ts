import { isEmptyObject } from "./objects";

describe("Test empty object utility function", () => {
  test("should return true if object is empty", () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test("should return false when object is not empty", () => {
    expect(isEmptyObject({ key: "value", anotherKey: 43 })).toBe(false);
  });
});
