"use client"
import React, { useState } from "react";
import Cell from "./Cell";

const Board = ({ board, onCellChange, initialBoard, isActive }) => {
  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

  const handleCellClick = (row, col) => {
    if (initialBoard[row][col] === "") {
      setSelectedCell({ row, col });
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
              selectedCell.row === cellRow || selectedCell.col === cellCol;
            const isSameBox =
              Math.floor(selectedCell.row / 3) === boxRow &&
              Math.floor(selectedCell.col / 3) === boxCol;

            cells.push(
              <Cell
                key={`${cellRow}-${cellCol}`}
                value={!isActive ? "" : board[cellRow][cellCol]}
                isDefault={isDefault}
                isSelected={isSelected || isSameBox}
                onClick={() => handleCellClick(cellRow, cellCol)}
                onChange={(value) => onCellChange(cellRow, cellCol, value)}
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
