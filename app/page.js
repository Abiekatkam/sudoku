"use client";
import Board from "@/components/Board";
import Difficulty from "@/components/Difficulty";
import Modal from "@/components/Modal";
import Result from "@/components/Result";
import { generateSudoku } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const [board, setBoard] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);
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
    if (shouldStart) {
      setDifficulty(newDifficulty);
      const newBoard = generateSudoku(newDifficulty);
      setBoard(newBoard);
      setInitialBoard(newBoard);
      setIsActive(!isActive);
      setIsPaused(false);
      setResetKey((prevKey) => prevKey + 1);
    }
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
            isPaused={isPaused}
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
                <div className="absolute z-10 w-full h-full flex items-center justify-center">
                  {isPaused ? (
                    <Modal
                      btnClick={() => {
                        setIsActive(!isActive);
                        setIsPaused(!isPaused);
                      }}
                      btnText={"Resume Game"}
                      description={""}
                    />
                  ) : (
                    <Modal
                      btnClick={handleStartGame}
                      btnText={"Start Game"}
                      description={
                        "Select your desired difficulty level to begin a new game. Test your puzzle-solving skills and enjoy the challenge!"
                      }
                    />
                  )}
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
        <div className="w-[39%] h-full ml-auto flex flex-col items-start">
          <Result
            isActive={isActive}
            setIsActive={setIsActive}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
            resetKey={resetKey}
          />
          <span>inputs</span>
        </div>
      </div>
    </main>
  );
}
