import React from 'react';

const AttemptsRemaining = ({ attemptsLeft }) => (
  <p className="text-center text-gray-700">
    Attempts Remaining: <span className="font-bold">{attemptsLeft}</span>
  </p>
);

export default AttemptsRemaining;
