import React from 'react'

const Cell = ({ value, onChange }) => {
    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        if (newValue >= 1 && newValue <= 9) {
          onChange(newValue);
        } else {
          onChange('');
        }
      };
    
      return (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="w-10 h-10 text-center border border-gray-300"
        />
      );
}

export default Cell