//EXERCISE LINK: https://adventofcode.com/2021/day/7

import path from "path";
import { readAndMapInputToArray } from "../utils/utils";

import { puzzle1, puzzle2 } from "./day7";

describe("Day 7", () => {
  it("puzzle 1 example", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/example.txt`,
      "comma"
    );
    const result = puzzle1(exampleInput);
    expect(result).toBe(37);
  });

  it("puzzle 1 input", async () => {
    const input = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`,
      "comma"
    );
    const result = puzzle1(input);
    expect(result).toBe(355592);
  });

  it("puzzle 2 example", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/example.txt`,
      "comma"
    );
    const result = puzzle2(exampleInput);
    expect(result).toBe(168);
  });

  it("puzzle 2 input", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`,
      "comma"
    );
    const result = puzzle2(exampleInput);
    expect(result).toBe(101618069);
  });
});
