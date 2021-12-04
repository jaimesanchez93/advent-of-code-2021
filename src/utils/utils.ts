import { promises as fs } from "fs";

export const readAndMapInputToArray = async (file: string) => {
  try {
    const data = await fs.readFile(file, "utf8");

    const inputList = transformInputToArray(data);
    return inputList;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const transformInputToArray = (input: string) => {
  const inputList = input.split("\n");
  return inputList;
};
