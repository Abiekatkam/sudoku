"use client";
import Board from "@/components/Board";
import Difficulty from "@/components/Difficulty";
import { generateSudoku } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const [board, setBoard] = useState(generateSudoku("easy"));
  const [isActive, setIsActive] = useState(false);
  const [reset, setReset] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const handleCellChange = (row, col, value) => {
    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? value : cell
      )
    );
    setBoard(newBoard);
  };

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setBoard(generateSudoku(difficulty));
    setIsActive(false);
    setReset(true);
    setTimeout(() => setReset(false), 100); // Small delay to reset the timer
  };

  const handleChangeDifficulty = (e) => {
    const newDifficulty = e.target.value;
    setDifficulty(newDifficulty);
    setBoard(generateSudoku(newDifficulty));
  };

  return (
    <main className="w-full h-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[740px] h-[450px] m-auto flex items-start justify-center">
        <div className="w-[60%] h-full flex flex-col items-start">
          <Difficulty />
          <Board board={board} onCellChange={handleCellChange} />
        </div>
        <div className="w-[38%] h-full ml-auto flex flex-col items-start">
          <span>Results</span>
          <span>inputs</span>
        </div>
      </div>
    </main>
  );
}
