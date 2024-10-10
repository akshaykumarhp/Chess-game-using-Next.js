"use client";

import React, { useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

const ChessGame: React.FC = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // Auto promote to queen for simplicity
    });

    if (move === null) return false; // Invalid move
    setFen(game.fen());
    return true;
  };

  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setFen(newGame.fen());
  };

  return (
    <div className="chess-container h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="chessboard-wrapper w-full h-full max-w-[90vw] max-h-[90vh] aspect-[1/1]">
        <Chessboard position={fen} onPieceDrop={onDrop} />
      </div>
      <button
        className="reset-btn mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={resetGame}
        style={{ position: "absolute", bottom: "10px" }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default ChessGame;