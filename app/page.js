"use client";
import Board from "@/components/Board";
import Difficulty from "@/components/Difficulty";
import InputNumbers from "@/components/InputNumbers";
import Modal from "@/components/Modal";
import Result from "@/components/Result";
import { generateSudoku } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [board, setBoard] = useState([]);
  const [solutionBoard, setSolutionBoard] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [initialBoard, setInitialBoard] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (mistakes >= 7) {
      setIsGameOver(true);
      setIsActive(false);
    }
  }, [mistakes]);

  const handleCellChange = (newBoard) => {
    setBoard(newBoard);
  };

  const handleChangeDifficulty = (newDifficulty, shouldStart = false) => {
    setDifficulty(newDifficulty);
    const { puzzle, solution } = generateSudoku(newDifficulty);
    setBoard(puzzle);
    setInitialBoard(puzzle);
    setSolutionBoard(solution);
    if (shouldStart) {
      setIsActive(true);
      setIsPaused(false);
      setMistakes(0);
      setResetKey((prevKey) => prevKey + 1);
    } else {
      setIsActive(false);
      setIsPaused(false);
    }
    setIsGameOver(false);
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
            {!isActive || isGameOver ? (
              <>
                <Board
                  board={board}
                  isActive={isActive}
                  onCellChange={handleCellChange}
                  initialBoard={initialBoard}
                  solutionBoard={solutionBoard}
                  mistakes={mistakes}
                  setMistakes={setMistakes}
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
                  ) : isGameOver ? (
                    <Modal
                      btnClick={handleStartGame}
                      btnText={"Start New Game"}
                      description={
                        "Game Over! You made too many mistakes. Try again!"
                      }
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
                solutionBoard={solutionBoard}
                mistakes={mistakes}
                setMistakes={setMistakes}
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
            mistakes={mistakes}
            resetKey={resetKey}
          />
          <InputNumbers isActive={isActive} />
        </div>
      </div>
    </main>
  );
}
