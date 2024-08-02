import React from "react";
import { Button } from "@/components/ui/button";

const Modal = ({ btnClick, btnText, description }) => {
  return (
    <div className="w-[70%] h-fit min-h-[50%] p-2 flex flex-col items-center justify-center bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-2 border-gray-800">
      <h1 className="text-2xl font-bold">Sudoku</h1>
      <p className="text-sm text-pretty text-center mb-3 leading-5">{description}</p>
      <Button className="bg-[#09090a] h-9" onClick={btnClick}>
        {btnText}
      </Button>
    </div>
  );
};

export default Modal;
