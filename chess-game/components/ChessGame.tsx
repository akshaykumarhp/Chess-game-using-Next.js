// components/ChessGame.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

const ChessGame: React.FC = () => {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState(game.fen());
  const [boardWidth, setBoardWidth] = useState(480);

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth < 768 ? window.innerWidth * 0.9 : 480;
      setBoardWidth(width);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

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
    <div className="w-full flex flex-col items-center justify-center space-y-6">
      <div className="w-full max-w-md">
        <Chessboard
          position={fen}
          onPieceDrop={onDrop}
          boardWidth={boardWidth}
          boardOrientation="white"
          customBoardStyle={{
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
          customDarkSquareStyle={{ backgroundColor: '#769656' }}
          customLightSquareStyle={{ backgroundColor: '#eeeed2' }}
        />
      </div>
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300"
        onClick={resetGame}
        aria-label="Reset the chess game">
        Reset Game
        </button>

    </div>
  );
};

export default ChessGame;