"use client";
import Board from "@/components/Board";
import Difficulty from "@/components/Difficulty";
import InputNumbers from "@/components/InputNumbers";
import Modal from "@/components/Modal";
import Result from "@/components/Result";
import { formatTime, generateSudoku } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [board, setBoard] = useState([]);
  const [solutionBoard, setSolutionBoard] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [initialBoard, setInitialBoard] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [score, setScore] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [time, setTime] = useState(0);
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });

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
      setScore(0); // Reset score
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

  const handleNewGame = () => {
    const { puzzle, solution } = generateSudoku(difficulty);
    setBoard(puzzle);
    setInitialBoard(puzzle);
    setSolutionBoard(solution);
    setMistakes(0);
    setScore(0);
    setResetKey((prevKey) => prevKey + 1);
  };

  const handleComplete = () => {
    setIsActive(false);
    setIsModalVisible(true);
  };

  const handleNumberClick = (number) => {
    const { row, col } = selectedCell; 
    if (initialBoard[row][col] === "") {
      const newBoard = board.map((r, rowIndex) =>
        r.map((cell, colIndex) =>
          rowIndex === row && colIndex === col ? number : cell
        )
      );
  
      handleCellChange(newBoard);
  
      if (number === solutionBoard[row][col]) {
        setScore((prevScore) => prevScore + 10); 
      } else {
        if (number !== "") {
          setMistakes((prev) => Math.min(prev + 1, 7)); 
        }
      }
    }
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
            {!isActive || isGameOver || isModalVisible ? (
              <>
                <Board
                  board={board}
                  isActive={isActive}
                  onCellChange={handleCellChange}
                  initialBoard={initialBoard}
                  solutionBoard={solutionBoard}
                  mistakes={mistakes}
                  setMistakes={setMistakes}
                  setScore={setScore}
                  onComplete={handleComplete}
                  selectedCell={selectedCell}
                  setSelectedCell={setSelectedCell}
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
                  ) : isModalVisible ? (
                    <Modal
                      btnClick={() => {
                        setIsModalVisible(false);
                        handleNewGame();
                      }}
                      btnText={"Close"}
                      description={`Congratulations! Your score is ${score}. Time of completion: ${formatTime(
                        time
                      )} seconds.`}
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
                setScore={setScore}
                onComplete={handleComplete}
                selectedCell={selectedCell}
                setSelectedCell={setSelectedCell}
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
            score={score}
            time={time}
            setTime={setTime}
          />
          <InputNumbers
            isActive={isActive}
            onNumberClick={handleNumberClick}
            handleNewGame={handleNewGame}
          />
        </div>
      </div>
    </main>
  );
}
