//EXERCISE LINK: https://adventofcode.com/2021/day/2

import { readAndMapInputToArray } from "../utils/utils";

//forward adds to the horizontal
// down adds the depth
// up decresead the depth

const puzzle1 = (list: string[]) => {
  const coordinates = {
    horizontal: 0,
    depth: 0,
  };

  list.forEach((element: string) => {
    const [action, value] = element.split(" ");
    const parsedValue = Number(value);
    switch (action) {
      case "forward":
        coordinates.horizontal += parsedValue;
        break;
      case "down":
        coordinates.depth += parsedValue;
        break;
      case "up":
        coordinates.depth -= parsedValue;
        break;
    }
  });
  return coordinates.horizontal * coordinates.depth;
};

const puzzle2 = (list: string[]) => {
  const coordinates = {
    horizontal: 0,
    depth: 0,
    aim: 0,
  };

  list.forEach((element: string) => {
    const [action, value] = element.split(" ");
    const parsedValue = Number(value);
    switch (action) {
      case "forward":
        coordinates.horizontal += parsedValue;
        coordinates.depth += coordinates["aim"] * parsedValue;
        break;
      case "down":
        coordinates.aim += parsedValue;
        break;
      case "up":
        coordinates.aim -= parsedValue;
        break;
    }
  });
  return coordinates.horizontal * coordinates.depth;
};

const main = async () => {
  const inputList = await readAndMapInputToArray("input.txt");
  const response1 = puzzle1(inputList);
  console.log("puzzle 1", response1);
  const response2 = puzzle2(inputList);
  console.log("puzzle2", response2);
};

main();
