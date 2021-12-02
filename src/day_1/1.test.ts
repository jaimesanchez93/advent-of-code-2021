import { countNumberOfIncreases } from "./1";

describe("Day 1", () => {
  describe("Exercise 1", () => {
    it("should return 2", () => {
      const input = ["1", "2", "1", "3"];
      const value = countNumberOfIncreases(input);
      expect(value).toBe(2);
    });
  });
});
