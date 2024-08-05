import React from "react";
import { Button } from "@/components/ui/button";

const InputNumbers = ({ isActive, onNumberClick, handleNewGame }) => {
  return (
    <div className="w-full h-fit my-auto flex flex-col items-end justify-center">
      <div className="flex flex-wrap w-full h-fit items-center justify-center gap-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <Button
            key={number}
            className="w-20 h-20 text-2xl active:scale-95 transition ease-in-out"
            variant="outline"
            disabled={!isActive}
            onClick={() => onNumberClick(number)} // Call the onNumberClick prop
          >
            {number}
          </Button>
        ))}
      </div>
      <Button
        className="w-full text-lg h-10 bg-[#09090a] mt-3"
        disabled={!isActive}
        onClick={handleNewGame}
      >
        New Game
      </Button>
    </div>
  );
};

export default InputNumbers;
