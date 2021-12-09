type AdjacentPoints = {
  up?: number;
  down?: number;
  left?: number;
  right?: number;
  center: number;
};

const checkIsLowPoint = ({ center, ...coords }: AdjacentPoints) => {
  const validCoords = Object.values(coords)
    .filter((element) => typeof element !== "undefined")
    .filter((element) => element !== -1);
  const isLowPoint: boolean[] = [];
  validCoords.forEach((element) => {
    const isLow = center < element;
    isLowPoint.push(isLow);
  });
  return isLowPoint.every((element) => element === true);
};

export const puzzle1 = (list: string[]) => {
  const matrix: number[][] = list.map((line) =>
    line.split("").map((element) => Number(element))
  );
  console.log("matrix", matrix);
  const lowestPoints: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    const line = matrix[i];
    for (let j = 0; j < line.length; j++) {
      if (i === 0 && j === 0) {
        //top-left

        const isLowPoint = checkIsLowPoint({
          right: line[j + 1],
          down: matrix[i + 1][j],
          center: line[j],
        });
        if (isLowPoint) lowestPoints.push(line[j]);
      } else if (i === 0 && j > 0 && j < line.length - 1) {
        //top row, middle

        const isLowPoint = checkIsLowPoint({
          left: line[j - 1],
          right: line[j + 1],
          down: matrix[i + 1][j],
          center: line[j],
        });
        if (isLowPoint) lowestPoints.push(line[j]);
      } else if (i === 0 && j === line.length - 1) {
        //top-right cornet

        const isLowPoint = checkIsLowPoint({
          left: line[j - 1],
          down: matrix[i + 1][j],
          center: line[j],
        });
        if (isLowPoint) lowestPoints.push(line[j]);
      } else if (i === matrix.length - 1 && j === 0) {
        //bottom-left corner

        const isLowPoint = checkIsLowPoint({
          right: line[j + 1],
          up: matrix[i - 1][j],
          center: line[j],
        });
        if (isLowPoint) lowestPoints.push(line[j]);
      } else if (i === matrix.length - 1 && j > 0 && j < line.length - 1) {
        //bottom row, middle

        const isLowPoint = checkIsLowPoint({
          left: line[j - 1],
          right: line[j + 1],
          up: matrix[i - 1][j],
          center: line[j],
        });
        if (isLowPoint) lowestPoints.push(line[j]);
      } else if (i === matrix.length - 1 && j === line.length - 1) {
        //bottom-right corner

        const isLowPoint = checkIsLowPoint({
          left: line[j - 1],
          up: matrix[i - 1][j],
          center: line[j],
        });
        if (isLowPoint) lowestPoints.push(line[j]);
      } else {
        //middle
        const isLowPoint = checkIsLowPoint({
          up: matrix[i - 1][j],
          down: matrix[i + 1][j],
          left: line[j - 1],
          right: line[j + 1],
          center: line[j],
        });
        if (isLowPoint) lowestPoints.push(line[j]);
      }
    }
  }
  console.log("lowest points", lowestPoints);
  const riskLevel = lowestPoints.map((element) => element + 1);
  const sum = riskLevel.reduce((element, acc) => element + acc, 0);
  console.log("sum", sum);

  return sum;
};

export const puzzle2 = (list: string[]) => {};
