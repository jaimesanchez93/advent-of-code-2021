//EXERCISE LINK:  https://adventofcode.com/2021/day/4

const mapInputToBoardFormat = (listRaw: string[]) => {
  const mappedBoardList: string[][] = [];

  let card: string[] = [];
  listRaw.forEach((element, index) => {
    if (element === "" && index > 0) {
      mappedBoardList.push(card);
      card = [];
    } else if (element !== "" && index < listRaw.length - 1) {
      card.push(element);
    } else if (element !== "" && index === listRaw.length - 1) {
      card.push(element);
      mappedBoardList.push(card);
    }
  });

  return mappedBoardList.map((card) => {
    const mappedCard = card.map((line, row) => {
      const lineSplit = line
        .split(" ")
        .filter((element) => element !== "")
        .map((value, index) => ({
          numberValue: value,
          marked: false,
          row,
          column: index,
        }));
      return lineSplit;
    });
    return mappedCard.flat();
  });
};

export const puzzle1 = (input: string[]) => {
  const outputNumbers = input[0].split(",");
  const bingoCardsListRaw = input.slice(1);

  let boards = mapInputToBoardFormat(bingoCardsListRaw);

  let winner = false;
  let finalPrize = 0;
  for (let numberIndex = 0; numberIndex < outputNumbers.length; numberIndex++) {
    const outputNumber = outputNumbers[numberIndex];
    if (winner) break;
    const mappedBingo = boards.map((card) => {
      const numberIndex = card.findIndex(
        (el) => el.numberValue === outputNumber
      );
      if (numberIndex >= 0) {
        card[numberIndex].marked = true;
      }
      return card;
    });
    for (let cardIndex = 0; cardIndex < mappedBingo.length; cardIndex++) {
      const card = mappedBingo[cardIndex];
      if (winner) break;
      const filteredCard = card.filter((el) => el.marked === true);
      for (let i = 0; i <= 4; i++) {
        const rowFiltered = filteredCard.filter((num) => num.row === i);
        const columnFiltered = filteredCard.filter((num) => num.column === i);
        if (rowFiltered.length === 5 || columnFiltered.length === 5) {
          console.log("bingo!", rowFiltered);
          const unmarkedSum = card
            .filter((el) => el.marked === false)
            .map((element) => Number(element.numberValue))
            .reduce((num, acc = 0) => {
              return acc + num;
            });
          const prize = unmarkedSum * Number(outputNumber);
          console.log("winner prize!", prize);
          winner = true;
          finalPrize = prize;
          break;
        }
      }
    }
    boards = mappedBingo;
  }

  return finalPrize;
};

export const puzzle2 = (input: string[]) => {
  const outputNumbers = input[0].split(",");
  const bingoCardsListRaw = input.slice(1);

  let boards = mapInputToBoardFormat(bingoCardsListRaw);

  const winnerList: any[] = [];
  outputNumbers.forEach((outputNumber, index) => {
    const mappedBingo = boards.map((card) => {
      const numberIndex = card.findIndex(
        (el) => el.numberValue === outputNumber
      );
      if (numberIndex >= 0) {
        card[numberIndex].marked = true;
      }
      return card;
    });
    mappedBingo.forEach((card, boardIndex) => {
      let boardWins = false;
      const filteredCard = card.filter((el) => el.marked === true);
      for (let i = 0; i <= 4; i++) {
        const rowFiltered = filteredCard.filter((num) => num.row === i);
        const columnFiltered = filteredCard.filter((num) => num.column === i);
        if (rowFiltered.length === 5 || columnFiltered.length === 5) {
          const unmarkedNumbers = card.filter((el) => el.marked === false);
          if (unmarkedNumbers.length > 0) {
            const unmarkedSum = unmarkedNumbers
              .map((element) => Number(element.numberValue))
              .reduce((num, acc = 0) => {
                return acc + num;
              });
            const prize = unmarkedSum * Number(outputNumber);
            winnerList.push({ prize, board: boardIndex });
            boardWins = true;
          }
          break;
        }
      }
      if (boardWins) {
        mappedBingo.splice(boardIndex, 1);
      }
    });
    boards = mappedBingo;
  });
  //final winner is the last winner number
  console.log("finnal winner!", winnerList[winnerList.length - 1]);
  return winnerList[winnerList.length - 1].prize;
};
