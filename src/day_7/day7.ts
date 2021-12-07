const getMedianOfArray = (arr: number[]) => {
  let middle = Math.floor(arr.length / 2);
  arr = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0
    ? arr[middle]
    : (arr[middle - 1] + arr[middle]) / 2;
};

const getSum = (list: number[]) => {
  return list.reduce((element, acc) => {
    return element + acc;
  }, 0);
};

const getAverageFloorAndCeil = (list: number[]) => {
  const sum = getSum(list);
  const avg = sum / list.length || 0;
  return [Math.floor(avg), Math.ceil(avg)];
};

const getFuelCost = (list: number[], avg: number): number => {
  const fuelList = list.map((element) => {
    const difference = Math.abs(element - avg);
    const fuel = (difference * (difference + 1)) / 2;
    return Math.abs(element - difference) >= 0 ? fuel : element;
  });
  return getSum(fuelList);
};

export const puzzle1 = (list: string[]) => {
  const mappedList = list.map((element) => Number(element));
  const median = getMedianOfArray(mappedList);

  const wastedFuel = mappedList.map((element) => {
    const difference = Math.abs(element - Number(median));
    return Math.abs(element - difference) >= 0 ? difference : element;
  });

  const fuelSum = getSum(wastedFuel);

  return fuelSum;
};

export const puzzle2 = (list: string[]) => {
  const mappedList = list.map((element) => Number(element));
  const [floor, ceil] = getAverageFloorAndCeil(mappedList);
  const floorSum = getFuelCost(mappedList, floor);
  const ceilSum = getFuelCost(mappedList, ceil);

  return Math.min(ceilSum, floorSum);
};
