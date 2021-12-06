export const puzzle1 = (list: string[]): number => {
  let fishList = list.map((element) => Number(element));

  const dayLimit = 80;

  for (let i = 0; i < dayLimit; i++) {
    let newFishCount = 0;
    fishList = fishList.map((element) => {
      if (element > 0) {
        element -= 1;
      } else if (element === 0) {
        element = 6;
        newFishCount += 1;
      }
      return element;
    });
    fishList = [...fishList, ...new Array(newFishCount).fill(8)];
    newFishCount = 0;
  }
  return fishList.length;
};

const getNumberOfLanternFishInLifecycle = (lifecycle: number[]): number => {
  return lifecycle.reduce((element, acc) => element + acc, 0);
};

export const puzzle2 = (list: string[]): number => {
  const fishList = list.map((element) => Number(element));
  const dayLimit = 256;
  let lifecycle = new Array(9).fill(0);
  fishList.forEach((element) => {
    lifecycle[element] += 1;
  });
  for (let i = 0; i < dayLimit; i++) {
    const firstPosition = lifecycle[0];
    lifecycle = lifecycle.slice(1);
    lifecycle = lifecycle.concat(firstPosition);
    lifecycle[6] += firstPosition;
  }

  const numberOfLanternFish = getNumberOfLanternFishInLifecycle(lifecycle);
  return numberOfLanternFish;
};
