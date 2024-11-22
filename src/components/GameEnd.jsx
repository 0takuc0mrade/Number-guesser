import React from 'react';

const GameEnd = ({ restartGame }) => (
  <div className="text-center">
    <p className="text-lg font-bold mb-4">Game Over!</p>
    <button
      onClick={restartGame}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Restart Game
    </button>
  </div>
);

export default GameEnd;
