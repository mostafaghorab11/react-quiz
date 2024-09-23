function Progress({ numOfQuestions, index, answer, points, maxScore }) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />

      <p>
        Question: <strong>{index + 1}</strong>/ {numOfQuestions}
      </p>

      <p>
        Score: <strong>{points}</strong> / {maxScore}
      </p>
    </header>
  );
}

export default Progress;
