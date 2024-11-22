import React, { useState } from 'react';

const GuessInput = ({ handleGuess }) => {
  const [guess, setGuess] = useState('');

  const submitGuess = () => {
    const num = parseInt(guess, 10);
    if (isNaN(num) || num < 1 || num > 100) {
      alert('Please enter a valid number between 1 and 100!');
    } else {
      handleGuess(num);
    }
    setGuess('');
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="number"
        className="border p-2 rounded mr-2"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button
        onClick={submitGuess}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Guess
      </button>
    </div>
  );
};

export default GuessInput;
