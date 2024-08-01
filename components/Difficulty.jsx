"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const Difficulty = ({ handleDifficulty, difficulty }) => {
  return (
    <div className="w-full h-fit flex items-center text-[12px]">
      <span className="font-semibold">Difficulty:</span>
      <Button
        variant="ghost"
        onClick={() => handleDifficulty("easy")}
        className={`h-7 px-2 ${difficulty === "easy" ? "text-blue-900 font-semibold" : "text-slate-400"}`}
      >
        Easy
      </Button>
      <Button
        variant="ghost"
        onClick={() => handleDifficulty("medium")}
        className={`h-7 px-2 ${difficulty === "medium" ? "text-blue-900 font-semibold" : "text-slate-400"}`}
      >
        Medium
      </Button>
      <Button
        variant="ghost"
        onClick={() => handleDifficulty("hard")}
        className={`h-7 px-2 ${difficulty === "hard" ? "text-blue-900 font-semibold" : "text-slate-400"}`}
      >
        Hard
      </Button>
      <Button
        variant="ghost"
        onClick={() => handleDifficulty("expert")}
        className={`h-7 px-2 ${difficulty === "expert" ? "text-blue-900 font-semibold" : "text-slate-400"}`}
      >
        Expert
      </Button>
      <Button
        variant="ghost"
        onClick={() => handleDifficulty("master")}
        className={`h-7 px-2 ${difficulty === "master" ? "text-blue-900 font-semibold" : "text-slate-400"}`}
      >
        Master
      </Button>
      <Button
        variant="ghost"
        onClick={() => handleDifficulty("extreme")}
        className={`h-7 px-2 ${difficulty === "extreme" ? "text-blue-900 font-semibold" : "text-slate-400"}`}
      >
        Extreme
      </Button>
    </div>
  );
};

export default Difficulty;
