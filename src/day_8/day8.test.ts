//EXERCISE LINK: https://adventofcode.com/2021/day/8

import path from "path";
import { readAndMapInputToArray } from "../utils/utils";

import { puzzle1, puzzle2 } from "./day8";

describe("Day 8", () => {
  it("puzzle 1 example", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/example.txt`
    );
    const result = puzzle1(exampleInput);
    expect(result).toBe(26);
  });

  it("puzzle 1 input", async () => {
    const input = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`
    );
    const result = puzzle1(input);
    expect(result).toBe(456);
  });

  it("puzzle 2 example", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/example.txt`
    );
    const result = puzzle2(exampleInput);
    expect(result).toBe(61229);
  });

  it("puzzle 2 input", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`
    );
    const result = puzzle2(exampleInput);
    expect(result).toBe(1091609);
  });
});
