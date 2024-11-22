import React from 'react';

const DifficultySelector = ({ difficulty, setDifficulty, restartGame }) => {
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    restartGame();
  };

  return (
    <div className="mb-4 text-center">
      <label className="font-medium mr-2">Difficulty:</label>
      <select
        value={difficulty}
        onChange={handleDifficultyChange}
        className="p-1 rounded border"
      >
        <option value="easy">Easy (10 attempts)</option>
        <option value="medium">Medium (7 attempts)</option>
        <option value="hard">Hard (5 attempts)</option>
      </select>
    </div>
  );
};

export default DifficultySelector;
