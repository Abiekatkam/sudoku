"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const Difficulty = ({ handleDifficulty, difficulty, isPaused }) => {
  return (
    <div className="w-full h-fit flex items-center text-[12px]">
      <span className="font-semibold">Difficulty:</span>
      <Button
        variant="ghost"
        disabled={isPaused}
        onClick={() => handleDifficulty("easy", true)}
        className={`h-7 px-2 ${
          difficulty === "easy"
            ? "text-blue-900 font-semibold"
            : "text-slate-400"
        }`}
      >
        Easy
      </Button>
      <Button
        variant="ghost"
        disabled={isPaused}
        onClick={() => handleDifficulty("medium", true)}
        className={`h-7 px-2 ${
          difficulty === "medium"
            ? "text-blue-900 font-semibold"
            : "text-slate-400"
        }`}
      >
        Medium
      </Button>
      <Button
        variant="ghost"
        disabled={isPaused}
        onClick={() => handleDifficulty("hard", true)}
        className={`h-7 px-2 ${
          difficulty === "hard"
            ? "text-blue-900 font-semibold"
            : "text-slate-400"
        }`}
      >
        Hard
      </Button>
      <Button
        variant="ghost"
        disabled={isPaused}
        onClick={() => handleDifficulty("expert", true)}
        className={`h-7 px-2 ${
          difficulty === "expert"
            ? "text-blue-900 font-semibold"
            : "text-slate-400"
        }`}
      >
        Expert
      </Button>
      <Button
        variant="ghost"
        disabled={isPaused}
        onClick={() => handleDifficulty("master", true)}
        className={`h-7 px-2 ${
          difficulty === "master"
            ? "text-blue-900 font-semibold"
            : "text-slate-400"
        }`}
      >
        Master
      </Button>
      <Button
        variant="ghost"
        disabled={isPaused}
        onClick={() => handleDifficulty("extreme", true)}
        className={`h-7 px-2 ${
          difficulty === "extreme"
            ? "text-blue-900 font-semibold"
            : "text-slate-400"
        }`}
      >
        Extreme
      </Button>
    </div>
  );
};

export default Difficulty;
