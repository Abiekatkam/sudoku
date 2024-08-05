import React from "react";
import { Button } from "@/components/ui/button";

const InputNumbers = ({ isActive, onNumberClick, handleNewGame }) => {
  return (
    <div className="w-full h-fit my-auto flex flex-col items-end justify-center">
      <div className="flex flex-wrap w-full h-fit items-center justify-center md:gap-1 gap-3 mb-3 md:mb-0">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <Button
            key={number}
            className="md:w-20 md:h-20 w-14 h-14 md:text-2xl text-xl active:scale-95 transition ease-in-out"
            variant="outline"
            disabled={!isActive}
            onClick={() => onNumberClick(number)} // Call the onNumberClick prop
          >
            {number}
          </Button>
        ))}
      </div>
      <Button
        className="md:w-full w-[40%] mx-auto text-lg h-10 bg-[#09090a] mt-3"
        disabled={!isActive}
        onClick={handleNewGame}
      >
        New Game
      </Button>
    </div>
  );
};

export default InputNumbers;
