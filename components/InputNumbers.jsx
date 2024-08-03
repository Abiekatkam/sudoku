import React from "react";
import { Button } from "@/components/ui/button";

const InputNumbers = ({ isActive }) => {
  return (
    <div className="w-full h-fit my-auto flex flex-col items-end justify-center">
      <div className="flex flex-wrap w-full h-fit items-center justify-center gap-1">
        <Button
          className="w-20 h-20 text-2xl active:scale-95 transition ease-in-out"
          variant="outline"
          disabled={!isActive}
        >
          1
        </Button>
        <Button
          className="w-20 h-20 text-2xl active:scale-95 transition ease-in-out"
          variant="outline"
          disabled={!isActive}
        >
          2
        </Button>
        <Button
          className="w-20 h-20 text-2xl active:scale-95 transition ease-in-out"
          variant="outline"
          disabled={!isActive}
        >
          3
        </Button>
        <Button
          className="w-20 h-20 text-2xl active:scale-95 transition ease-in-out"
          variant="outline"
          disabled={!isActive}
        >
          4
        </Button>
        <Button
          className="w-20 h-20 text-2xl active:scale-95 transition ease-in-out"
          variant="outline"
          disabled={!isActive}
        >
          5
        </Button>
        <Button
          className="w-20 h-20 text-2xl active:scale-95 transition ease-in-out"
          variant="outline"
          disabled={!isActive}
        >
          6
        </Button>
        <Button
          className="w-20 h-20 text-2xl active:scale-95 transition ease-in-out"
          variant="outline"
          disabled={!isActive}
        >
          7
        </Button>
        <Button
          className="w-20 h-20 text-2xl active:scale-95 transition ease-in-out"
          variant="outline"
          disabled={!isActive}
        >
          8
        </Button>
        <Button
          className="w-20 h-20 text-2xl active:scale-95 transition ease-in-out"
          variant="outline"
          disabled={!isActive}
        >
          9
        </Button>
      </div>
      <Button
        className="w-full text-lg h-10 bg-[#09090a] mt-3"
        disabled={!isActive}
      >
        New Game
      </Button>
    </div>
  );
};

export default InputNumbers;
