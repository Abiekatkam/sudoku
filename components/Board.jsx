"use client";
import React, { useState, useEffect } from "react";
import Cell from "./Cell";

const Board = ({
  board,
  onCellChange,
  initialBoard,
  isActive,
  solutionBoard,
  setMistakes,
}) => {
  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

  useEffect(() => {
    if (isActive && selectedCell.row === null && selectedCell.col === null) {
      setSelectedCell({ row: 0, col: 0 });
    }
  }, [isActive]);

  const handleCellClick = (row, col) => {
    if (initialBoard[row][col] === "") {
      setSelectedCell({ row, col });
    }
  };

  const handleCellChange = (row, col, value) => {
    if (initialBoard[row][col] === "") {
      const newBoard = board.map((r, rowIndex) =>
        r.map((cell, colIndex) =>
          rowIndex === row && colIndex === col ? value : cell
        )
      );
      onCellChange(newBoard);

      if (value !== solutionBoard[row][col]) {
        setMistakes((prev) => Math.min(prev + 1, 7));
      }
    }
  };

  const renderBoard = () => {
    const boardElements = [];

    for (let boxRow = 0; boxRow < 3; boxRow++) {
      for (let boxCol = 0; boxCol < 3; boxCol++) {
        const cells = [];

        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            const cellRow = boxRow * 3 + row;
            const cellCol = boxCol * 3 + col;
            const isDefault =
              !isActive || initialBoard[cellRow][cellCol] !== "";
            const isSelected =
              selectedCell.row === cellRow && selectedCell.col === cellCol;
            const isSameBox =
              Math.floor(selectedCell.row / 3) === boxRow &&
              Math.floor(selectedCell.col / 3) === boxCol;
            const isValid =
              !isActive ||
              board[cellRow][cellCol] === "" ||
              board[cellRow][cellCol] === solutionBoard[cellRow][cellCol];

            cells.push(
              <Cell
                key={`${cellRow}-${cellCol}`}
                value={!isActive ? "" : board[cellRow][cellCol]}
                isSelected={isSelected || isSameBox}
                isDefault={isDefault}
                isActive={isActive}
                isValid={isValid}
                onClick={() => handleCellClick(cellRow, cellCol)}
                onChange={(value) => handleCellChange(cellRow, cellCol, value)}
              />
            );
          }
        }

        boardElements.push(
          <div
            key={`${boxRow}-${boxCol}`}
            className="grid grid-cols-3 gap-[1px] border-2 border-slate-800 p-1"
          >
            {cells}
          </div>
        );
      }
    }

    return boardElements;
  };

  return <div className="grid grid-cols-3 gap-[1px]">{renderBoard()}</div>;
};

export default Board;
