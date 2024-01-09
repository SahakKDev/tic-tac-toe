import { INITIAL_GAME_BOARD, WINNING_COMBINATIONS } from "./constants";

export const deriveActivePlayer = (turns) => {
  let currentPlayer = "X";

  if (turns[0]?.playerSymbol === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

export const deriveWinner = (gameBoard, players) => {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      return players[firstSquareSymbol];
    }
  }

  return null;
};

export const deriveGameBoard = (gameTurns) => {
  const gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];

  for (const turn of gameTurns) {
    const { square, playerSymbol } = turn;
    const { row, col } = square;
    gameBoard[row][col] = playerSymbol;
  }

  return gameBoard;
};
