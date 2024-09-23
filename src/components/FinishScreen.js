function FinishScreen({ points, maxScore, highScore, dispatch }) {
  const percentage = Math.round((points / maxScore) * 100);
  let emoji;
  if (percentage === 100) emoji = '🥇';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🙃';
  if (percentage >= 0 && percentage < 50) emoji = '🤨';
  if (percentage === 0) emoji = '🤦‍♂️';

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored {points} points out of {maxScore} points
        with percentage {Math.ceil(percentage)} %
      </p>
      <p className="highscore">HighScore: {highScore} points</p>
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'restart' })}
        >
          Restart Quiz !
        </button>
      </div>
    </>
  );
}

export default FinishScreen;