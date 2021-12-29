import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false);

  // Handle Square Click
  const handleSquareClick = position => {
    // If the square is already filled, do nothing
    if (board[position] !== null) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (position === pos) {
          return isXnext ? 'X' : 'O';
        }
        return square;
      });
    });

    setIsXnext(!isXnext);
  };

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
