import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const generateSudoku = (difficulty) => {
  // Number of pre-filled cells based on difficulty level
  const difficultyLevels = {
    easy: 35,
    medium: 30,
    hard: 25,
    expert: 20,
    master: 15,
    extreme: 10,
  };

  // Helper function to check if a number can be placed in the cell
  const isValid = (board, row, col, num) => {
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num || board[x][col] === num) return false;
    }

    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i + startRow][j + startCol] === num) return false;
      }
    }
    return true;
  };

  // Helper function to fill the board
  const fillBoard = (board) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === "") {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
              if (fillBoard(board)) return true;
              board[row][col] = "";
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  // Helper function to remove cells from the board to create a puzzle
  const removeCells = (board, cellsToRemove) => {
    while (cellsToRemove > 0) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      if (board[row][col] !== "") {
        board[row][col] = "";
        cellsToRemove--;
      }
    }
  };

  // Initialize an empty board
  let solutionBoard = Array.from({ length: 9 }, () => Array(9).fill(""));
  let puzzleBoard = Array.from({ length: 9 }, () => Array(9).fill(""));

  // Fill the board with valid numbers
  fillBoard(solutionBoard);

  // Copy the solution board to the puzzle board
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      puzzleBoard[row][col] = solutionBoard[row][col];
    }
  }

  // Remove cells based on the difficulty level
  const cellsToRemove = 81 - difficultyLevels[difficulty];
  removeCells(puzzleBoard, cellsToRemove);

  return { puzzle: puzzleBoard, solution: solutionBoard };
};

export const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
};