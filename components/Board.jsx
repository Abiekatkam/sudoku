import React from 'react'
import Cell from './Cell'

const Board = ({ board, onCellChange }) => {
  return (
    <div className="grid grid-cols-9 gap-1">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cell}
            onChange={(value) => onCellChange(rowIndex, colIndex, value)}
          />
        ))
      )}
    </div>
  )
}

export default Board