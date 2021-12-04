//EXERCISE LINK: https://adventofcode.com/2021/day/4

import path from "path";
import { readAndMapInputToArray } from "../utils/utils";

import { puzzle1, puzzle2 } from "./day4";

describe("Day 4", () => {
  it("puzzle 1 example", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`
    );
    const result = puzzle1(exampleInput);
    expect(result).toBe(2745);
  });

  it("puzzle 2 input", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`
    );
    const result = puzzle2(exampleInput);
    expect(result).toBe(6594);
  });
});
