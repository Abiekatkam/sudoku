import React from "react";
import { Button } from "@/components/ui/button";
import { FaPause, FaPlay } from "react-icons/fa";
import Timer from "./Timer";

const Result = ({
  isActive,
  setIsActive,
  isPaused,
  setIsPaused,
  mistakes,
  resetKey,
}) => {
  return (
    <div className="w-full h-fit flex items-center text-[12px] justify-between">
      <div>
        <span className="font-semibold text-slate-400">Mistakes:</span>{" "}
        <span className="font-semibold text-slate-800 text-[15px]">
          {mistakes}/7
        </span>
      </div>
      <div>
        <span className="font-semibold text-slate-400">Scores:</span>{" "}
        <span className="font-semibold text-slate-800 text-[15px]">0</span>
      </div>
      <Timer isPaused={isPaused} isActive={isActive} resetKey={resetKey} />
      <Button
        variant="outline"
        className="w-fit h-fit p-1"
        onClick={() => {
          setIsActive(!isActive);
          setIsPaused(!isPaused);
        }}
      >
        {!isPaused ? (
          <FaPause className="w-3 h-3" />
        ) : (
          <FaPlay className="w-3 h-3" />
        )}
      </Button>
    </div>
  );
};

export default Result;
