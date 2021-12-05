//EXERCISE LINK: https://adventofcode.com/2021/day/5

import path from "path";
import { readAndMapInputToArray } from "../utils/utils";

import { puzzle1, puzzle2 } from "./day5";

describe("Day 4", () => {
  it("puzzle 1 example", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/example.txt`
    );
    const result = puzzle1(exampleInput);
    expect(result).toBe(5);
  });

  it("puzzle 1 input", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`
    );
    const result = puzzle1(exampleInput);
    expect(result).toBe(4745);
  });

  it("puzzle 2 example", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/example.txt`
    );
    const result = puzzle2(exampleInput);
    expect(result).toBe(12);
  });
  it("puzzle 2 input", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`
    );
    const result = puzzle2(exampleInput);
    expect(result).toBe(18442);
  });
});
