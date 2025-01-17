function Options({ question, dispatch, answer }) {
  const isAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? 'answer' : ''} ${
              isAnswered
                ? index === question.correctOption
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            key={option}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
            disabled={isAnswered}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
