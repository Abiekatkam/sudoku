import React, { useEffect, useRef } from "react";

const Cell = ({
  value,
  isDefault,
  isSelected,
  isInSameBox,
  isInSameRowOrCol,
  isActive,
  onClick,
  onChange,
  isValid,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSelected && !isDefault && isActive) {
      inputRef.current.focus();
    }
  }, [isSelected, isDefault, isActive]);

  const handleChange = (e) => {
    if (!isDefault) {
      const newValue = e.target.value;
      if (newValue === "" || /^[1-9]$/.test(newValue)) {
        onChange(newValue === "" ? "" : parseInt(newValue, 10));
      }
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      disabled={isDefault}
      onChange={handleChange}
      onClick={onClick}
      className={`w-10 h-10 text-center border border-gray-300 ${
        !isActive
          ? "bg-white"
          : isDefault
          ? "bg-gray-400"
          : isSelected
          ? "bg-gray-300"
          : isInSameBox || isInSameRowOrCol
          ? "bg-gray-200"
          : "bg-white"
      } ${isValid === false ? "text-red-500" : ""}`}
    />
  );
};

export default Cell;
