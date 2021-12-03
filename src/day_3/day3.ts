import { readAndMapInputToArray } from "../utils/utils";

export const puzzle1 = (list: string[]) => {
  let gammaNumber = "";
  let epsilonNumber = "";
  const numberLength = list[0].length;
  for (let i = 0; i < numberLength; i++) {
    const firstNumberList = list.map((element) => element[i]);
    const [majorNumber, minorNumber] =
      getMajorAndMinorNumberPuzzle1(firstNumberList);
    gammaNumber += majorNumber;
    epsilonNumber += minorNumber;
  }

  const gammaDecimal = parseInt(gammaNumber, 2);
  const epsilonDecimal = parseInt(epsilonNumber, 2);
  return gammaDecimal * epsilonDecimal;
};

export const puzzle2 = (list: string[]) => {
  const numberLength = list[0].length;
  let commonList: string[] = list;
  let leastList: string[] = list;
  for (let i = 0; i < numberLength; i++) {
    const firstNumberList = commonList.map((element) => element[i]);
    const [majorNumber, minorNumber] =
      getMajorAndMinorNumberPuzzle2(firstNumberList);
    const filteredCommonList = commonList.filter(
      (element) => element[i] === majorNumber
    );
    commonList = filteredCommonList;
  }

  for (let i = 0; i < numberLength; i++) {
    const firstNumberList = leastList.map((element) => element[i]);
    const [majorNumber, minorNumber] =
      getMajorAndMinorNumberPuzzle2(firstNumberList);
    if (leastList.length === 1) break;
    const filteredLeastList = leastList.filter(
      (element) => element[i] === minorNumber
    );
    leastList = filteredLeastList;
  }
  const oxigen = parseInt(commonList[0], 2);
  const co2 = parseInt(leastList[0], 2);
  return oxigen * co2;
};

const getMajorAndMinorNumberPuzzle1 = (list: string[]) => {
  let zerosCount = 0;
  let onesCount = 0;
  for (let number of list) {
    if (number === "0") zerosCount++;
    if (number === "1") onesCount++;
  }
  const majorNumber = zerosCount > onesCount ? 0 : 1;
  const minorNumber = zerosCount < onesCount ? 0 : 1;
  return [majorNumber.toString(), minorNumber.toString()];
};

const getMajorAndMinorNumberPuzzle2 = (list: string[]) => {
  let zerosCount = 0;
  let onesCount = 0;
  for (let number of list) {
    if (number === "0") zerosCount++;
    if (number === "1") onesCount++;
  }
  const majorNumber =
    zerosCount === onesCount ? 1 : zerosCount > onesCount ? 0 : 1;
  const minorNumber =
    zerosCount === onesCount ? 0 : zerosCount < onesCount ? 0 : 1;
  return [majorNumber.toString(), minorNumber.toString()];
};
