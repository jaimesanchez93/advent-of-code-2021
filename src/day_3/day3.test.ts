import path from "path";

import { puzzle1, puzzle2 } from "./day3";
import { readAndMapInputToArray } from "../utils/utils";

describe("Day 3", () => {
  beforeAll(async () => {});
  it("puzzle 1 example", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/example.txt`
    );
    const result = puzzle1(exampleInput);
    expect(result).toBe(198);
  });

  it("puzzle 1 input", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`
    );
    const result = puzzle1(exampleInput);
    expect(result).toBe(3309596);
  });

  it("puzzle 2 example", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/example.txt`
    );
    const result = puzzle2(exampleInput);
    expect(result).toBe(230);
  });

  it("puzzle 2 input", async () => {
    const exampleInput = await readAndMapInputToArray(
      `${path.join(__dirname)}/input.txt`
    );
    const result = puzzle2(exampleInput);
    expect(result).toBe(2981085);
  });
});
