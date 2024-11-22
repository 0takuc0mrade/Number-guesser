import React, { useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';

const App = () => {
  const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
  const [attemptsLeft, setAttemptsLeft] = useState(10);
  const [feedback, setFeedback] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');

  const restartGame = () => {
    setSecretNumber(generateRandomNumber());
    setAttemptsLeft(getAttemptsByDifficulty(difficulty));
    setFeedback('');
    setGameOver(false);
  };

  const getAttemptsByDifficulty = (level) => {
    switch (level) {
      case 'easy':
        return 10;
      case 'medium':
        return 7;
      case 'hard':
        return 5;
      default:
        return 10;
    }
  };

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Header />
      <Game
        secretNumber={secretNumber}
        attemptsLeft={attemptsLeft}
        setAttemptsLeft={setAttemptsLeft}
        feedback={feedback}
        setFeedback={setFeedback}
        gameOver={gameOver}
        setGameOver={setGameOver}
        restartGame={restartGame}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        getAttemptsByDifficulty={getAttemptsByDifficulty}
      />
    </div>
  );
};

export default App;
