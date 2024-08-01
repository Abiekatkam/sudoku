"use client";
import Board from "@/components/Board";
import Difficulty from "@/components/Difficulty";
import { Button } from "@/components/ui/button";
import { generateSudoku } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const [board, setBoard] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [isActive, setIsActive] = useState(false);
  const [initialBoard, setInitialBoard] = useState([]);

  const handleCellChange = (row, col, value) => {
    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? value : cell
      )
    );
    setBoard(newBoard);
  };

  const handleChangeDifficulty = (newDifficulty, shouldStart = false) => {
    setDifficulty(newDifficulty);
    const newBoard = generateSudoku(newDifficulty);
    setBoard(newBoard);
    setInitialBoard(newBoard);
    setIsActive(shouldStart);
  };

  const handleStartGame = () => {
    handleChangeDifficulty(difficulty, true);
  };

  return (
    <main className="w-full h-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[740px] h-[435px] m-auto flex items-start justify-center">
        <div className="w-[57%] h-full flex flex-col items-start justify-between">
          <Difficulty
            difficulty={difficulty}
            handleDifficulty={handleChangeDifficulty}
          />
          <div className="relative w-full h-full flex items-center justify-center">
            {!isActive ? (
              <>
                <Board
                  board={board}
                  isActive={isActive}
                  onCellChange={handleCellChange}
                  initialBoard={initialBoard}
                />
                <div className="absolute z-10 w-full h-full flex items-center justify-center bg-black/20">
                  <Button
                    className="bg-[#09090a] h-9"
                    onClick={handleStartGame}
                  >
                    Start Game
                  </Button>
                </div>
              </>
            ) : (
              <Board
                board={board}
                isActive={isActive}
                onCellChange={handleCellChange}
                initialBoard={initialBoard}
              />
            )}
          </div>
        </div>
        <div className="w-[42%] h-full ml-auto flex flex-col items-start">
          <span>Results</span>
          <span>inputs</span>
        </div>
      </div>
    </main>
  );
}
