//EXERCISE LINK: https://adventofcode.com/2021/day/1

import path from "path";

import { readAndMapInputToArray } from "../utils/utils";

export const countNumberOfIncreasesBySlidingWindow = (list: string[]) => {
  let increasesCount = 0;
  const numberList = list.map((element: string) => Number(element));
  for (let i = 0; i < numberList.length; i++) {
    if (i < numberList.length - 3) {
      const sumOfThree = numberList[i] + numberList[i + 1] + numberList[i + 2];
      const sumOfNextThree =
        numberList[i + 1] + numberList[i + 2] + numberList[i + 3];
      if (sumOfNextThree > sumOfThree) {
        increasesCount += 1;
      }
    }
  }
  return increasesCount;
};

export const countNumberOfIncreases = (list: string[]) => {
  let increasesCount = 0;
  let previousNumber = 0;
  const numberList = list.map((element: string) => Number(element));
  numberList.forEach((element, index) => {
    if (index > 0) {
      previousNumber = numberList[index - 1];
      if (element > previousNumber) {
        increasesCount += 1;
      }
    }
  });
  return increasesCount;
};

const main = async () => {
  const inputList = await readAndMapInputToArray(
    `${path.join(__dirname)}/input2.txt`
  );
  const firstStar = countNumberOfIncreases(inputList);
  const secondStar = countNumberOfIncreasesBySlidingWindow(inputList);
};

main();
