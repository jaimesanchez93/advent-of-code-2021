//EXERCISE LINK: https://adventofcode.com/2021/day/6

import path from "path";
import { readAndMapInputToArray } from "../utils/utils";

import { puzzle1, puzzle2 } from "./day6";

describe("Day 6", () => {
  it("puzzle 1 example", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/example.txt`,
      "comma"
    );
    const result = puzzle1(exampleInput);
    expect(result).toBe(5934);
  });

  it("puzzle 1 input", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`,
      "comma"
    );
    const result = puzzle1(exampleInput);
    expect(result).toBe(365862);
  });

  it("puzzle 2 example", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/example.txt`,
      "comma"
    );
    const result = puzzle2(exampleInput);
    expect(result).toBe(26984457539);
  });
  it("puzzle 2 input", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`,
      "comma"
    );
    const result = puzzle2(exampleInput);
    expect(result).toBe(1653250886439);
  });
});
