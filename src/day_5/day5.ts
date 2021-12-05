type Coordinates = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

type CoordinatesList = Coordinates[];

const getListToCoordinatesPairFormat = (list: string[]): any[] => {
  return list.map((element) => {
    const [coordinates1, coordinates2] = element.split("->");
    const [x1, y1] = coordinates1.split(",");
    const [x2, y2] = coordinates2.split(",");
    const coordinatesObject = {
      x1: Number(x1),
      y1: Number(y1),
      x2: Number(x2),
      y2: Number(y2),
    };
    return coordinatesObject;
  });
};

const getHorizontalTop = (list: Coordinates[]): number => {
  return list
    .map((element) => Math.max(element.x1, element.x2))
    .sort()
    .reverse()[0];
};

const getVerticalTop = (list: Coordinates[]): number => {
  return list
    .map((element) => Math.max(element.y1, element.y2))
    .sort()
    .reverse()[0];
};

const fillArray = (x: number, y: number) => {
  const arrayToFill = new Array(y + 1);
  for (let i = 0; i < arrayToFill.length; i++) {
    arrayToFill[i] = new Array(x + 1).fill(0);
  }
  return arrayToFill;
};

const getOverlapNumber = (list: number[][]): number => {
  return list.flat().filter((element) => element > 1).length;
};

export const puzzle1 = (list: string[]): number => {
  const formattedList: Coordinates[] = getListToCoordinatesPairFormat(list);

  const horizontalTop = getHorizontalTop(formattedList);
  const verticalTop = getVerticalTop(formattedList);
  const arrayToFill: number[][] = fillArray(horizontalTop, verticalTop);

  formattedList.forEach((coordinates) => {
    const { x1, x2, y1, y2 } = coordinates;
    if (x1 === x2) {
      for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
        arrayToFill[i][x1] += 1;
      }
    }
    if (y1 === y2) {
      for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
        arrayToFill[y1][i] += 1;
      }
    }
  });

  const overlapNumber = getOverlapNumber(arrayToFill);

  return overlapNumber;
};

let getDiagonal = (c1: number[], c2: number[]) => {
  // Determine the distance between c1 & c2
  let delta = c1.map((v, i) => c2[i] - v);
  let distance = Math.max(...delta.map((v) => Math.abs(v)));

  // Determine the unit vector (e.g. [1, -1]) to move each iteration
  let direction = delta.map((v) => v / distance);

  // Starting at `c1`, iterate for `distance` iterations, moving in `direction` each iteration.
  return [...Array(distance + 1)].map((_, i) =>
    c1.map((v, j) => v + direction[j] * i)
  );
};

export const puzzle2 = (list: string[]) => {
  const formattedList: Coordinates[] = getListToCoordinatesPairFormat(list);

  const horizontalTop = getHorizontalTop(formattedList);
  const verticalTop = getVerticalTop(formattedList);
  const arrayToFill: number[][] = fillArray(horizontalTop, verticalTop);
  formattedList.forEach((coordinates) => {
    const { x1, x2, y1, y2 } = coordinates;
    if (x1 !== x2 && y1 !== y2) {
      const diagonal = getDiagonal([x1, y1], [x2, y2]);
      diagonal.forEach((coords) => {
        const [x, y] = coords;
        arrayToFill[y][x] += 1;
      });
    }

    if (x1 === x2) {
      for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
        arrayToFill[i][x1] += 1;
      }
    }
    if (y1 === y2) {
      for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
        arrayToFill[y1][i] += 1;
      }
    }
  });

  const overlapNumber = getOverlapNumber(arrayToFill);
  return overlapNumber;
};
