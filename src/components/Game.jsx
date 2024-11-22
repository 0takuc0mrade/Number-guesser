import React from 'react';
import GuessInput from './GuessInput';
import DifficultySelector from './DifficultySelector';
import Feedback from './Feedback';
import AttemptsRemaining from './AttemptsRemaining';
import GameEnd from './GameEnd';

const Game = ({
  secretNumber,
  attemptsLeft,
  setAttemptsLeft,
  feedback,
  setFeedback,
  gameOver,
  setGameOver,
  restartGame,
  difficulty,
  setDifficulty,
  getAttemptsByDifficulty,
}) => {
  const handleGuess = (guess) => {
    if (gameOver) return;

    if (guess < secretNumber) {
      setFeedback('Too Low!');
    } else if (guess > secretNumber) {
      setFeedback('Too High!');
    } else {
      setFeedback('Correct! You Win!');
      setGameOver(true);
      return;
    }

    setAttemptsLeft(attemptsLeft - 1);

    if (attemptsLeft - 1 === 0) {
      setFeedback(`You Lose! The number was ${secretNumber}`);
      setGameOver(true);
    }
  };
  return (
    <div className="p-4 bg-white rounded shadow-md w-full max-w-md">
      {!gameOver && (
        <DifficultySelector
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          restartGame={() => {
            restartGame();
            setAttemptsLeft(getAttemptsByDifficulty(difficulty));
          }}
        />
      )}
      <Feedback message={feedback} />
      {!gameOver ? (
        <>
          <GuessInput handleGuess={handleGuess} />
          <AttemptsRemaining attemptsLeft={attemptsLeft} />
        </>
      ) : (
        <GameEnd restartGame={restartGame} />
      )}
    </div>
  );
};

export default Game;
