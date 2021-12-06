import { promises as fs } from "fs";

type SplitOptions = "lineBreak" | "comma";

export const readAndMapInputToArray = async (
  file: string,
  splitMethod: SplitOptions = "lineBreak"
) => {
  try {
    const data = await fs.readFile(file, "utf8");
    switch (splitMethod) {
      case "comma":
        return splitInputSeparatedByComma(data);
      default:
        return transformInputToArray(data);
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

const transformInputToArray = (input: string) => {
  const inputList = input.split("\n");
  return inputList;
};

const splitInputSeparatedByComma = (input: string) => {
  return input.split(",");
};
