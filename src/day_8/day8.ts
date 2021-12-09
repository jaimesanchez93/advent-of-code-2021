type NumberMap = {
  pattern?: string;
  value: number;
  size: number;
  letters?: string;
};

const numberMap: NumberMap[] = [
  { size: 2, value: 1 },
  { size: 3, value: 7 },
  { size: 4, value: 4 },
  { size: 5, value: 2 },
  { size: 5, value: 3 },
  { size: 5, value: 5 },
  { size: 6, value: 0 },
  { size: 6, value: 6 },
  { size: 6, value: 9 },
  { size: 7, value: 8 },
];

const getNumberFromPattern = (patterns: string[]) => {
  const mappedPatterns = patterns.map((pattern) => {
    const numbers = numberMap
      .filter((element) => element.size === pattern.length)
      .map((element) => ({
        size: element.size,
        value: element.value,
        pattern: pattern,
      }));
    return numbers;
  });

  const values = mappedPatterns.map((pattern) => {
    if (pattern.length === 1) {
      return pattern[0].value;
    } else {
      return -1;
    }
  });
  return values;
};

export const puzzle1 = (data: string[]) => {
  const parsedData = data.map((element) => element.split("|"));

  const numbersCounter = {
    one: 0,
    four: 0,
    seven: 0,
    eight: 0,
  };

  parsedData.forEach((line) => {
    const patterns = line[0].trim().split(" ");
    const output = line[1].trim().split(" ");

    const values = getNumberFromPattern(output);
    values
      .filter((value) => value !== -1)
      .forEach((value) => {
        switch (value) {
          case 1:
            numbersCounter.one += 1;
            break;
          case 4:
            numbersCounter.one += 1;
            break;
          case 7:
            numbersCounter.seven += 1;
            break;
          case 8:
            numbersCounter.eight += 1;
            break;
        }
      });
  });

  const sum = Object.values(numbersCounter).reduce((element, acc) => {
    return element + acc;
  }, 0);

  return sum;
};

const getNumberFromPatternPuzzle2 = (patterns: string[]) => {
  const mappedPatterns = patterns.map((pattern) => {
    const numbers = numberMap
      .filter((element) => element.size === pattern.length)
      .map((element) => ({
        size: element.size,
        value: element.value,
        pattern: pattern,
      }));
    return numbers;
  });

  const values = mappedPatterns.map((pattern) => {
    if (pattern.length === 1) {
      return pattern[0];
    } else {
      return pattern;
    }
  });
  return values;
};

const getNumberOfMatches = (word1: string, word2: string): number => {
  let matches = 0;
  for (let letter of word1) {
    if (word2.includes(letter)) matches++;
  }
  return matches;
};

export const puzzle2 = (data: string[]) => {
  const parsedData = data.map((element) => element.split("|"));
  const decodedOutputs: number[] = [];
  parsedData.forEach((line) => {
    const patterns = line[0].trim().split(" ");
    const output = line[1].trim().split(" ");
    const values = getNumberFromPatternPuzzle2(patterns);
    const uniqueValues = values
      .filter((value) => !Array.isArray(value))
      .reduce((acc: any, element: any) => {
        acc[element.value] = element.pattern;
        return acc;
      }, {});
    2;
    const unknownValues = values.filter((value) => Array.isArray(value));
    const patternValues = {
      0: "",
      2: "",
      3: "",
      5: "",
      6: "",
      9: "",
    };
    const size5 = unknownValues
      .filter((element: any) => element[0].size === 5)
      .map((element: any) => element[0].pattern);

    //2,3,5
    // 7 --> 3 elementos = 3
    // me quedan 2
    // 4 --> 3 elementos = 5  2 elementos = 2
    size5.forEach((pattern: any) => {
      const matches = getNumberOfMatches(pattern, uniqueValues["7"]);
      if (matches === 3) {
        patternValues["3"] = pattern;
      } else {
        const secondMatch = getNumberOfMatches(pattern, uniqueValues["4"]);
        if (secondMatch === 3) {
          patternValues["5"] = pattern;
        } else {
          patternValues["2"] = pattern;
        }
      }
    });

    const size6 = unknownValues
      .filter((element: any) => element[0].size === 6)
      .map((element: any) => element[0].pattern);

    //0,6,9
    // 4--> 4 elementos = 9
    // me quedan 2
    // 8 --> 6 elementos =   2 elementos =
    size6.forEach((pattern: any) => {
      const matches = getNumberOfMatches(pattern, uniqueValues["4"]);
      if (matches === 4) {
        patternValues["9"] = pattern;
      } else {
        const secondMatch = getNumberOfMatches(pattern, uniqueValues["1"]);
        if (secondMatch === 2) {
          patternValues["0"] = pattern;
        } else {
          patternValues["6"] = pattern;
        }
      }
    });

    const finalPatterns = { ...patternValues, ...uniqueValues };
    let finalOutput = "";
    output.forEach((element) => {
      const entries = Object.entries(finalPatterns);
      entries.forEach((pair) => {
        const [key, value] = pair;
        const sortedValue = (value as string).split("").sort().join("");
        const sortedElement = element.split("").sort().join("");
        if (sortedElement === sortedValue) finalOutput = `${finalOutput}${key}`;
      });
    });
    decodedOutputs.push(Number(finalOutput));
  });

  const sum = decodedOutputs.reduce((element, acc) => {
    return element + acc;
  }, 0);

  return sum;
};
