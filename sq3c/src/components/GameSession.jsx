import React, { useState } from 'react';

const GameSession = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1); 
    }
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div>
      <h2>Frage {currentQuestionIndex + 1} von {questions.length}</h2>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index}>
            <button
              onClick={() => handleAnswer(answer)}
              disabled={isAnswered} 
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>

      {isAnswered && (
        <div>
          <p>{selectedAnswer === currentQuestion.correct_answer ? "Richtig!" : "Falsch!"}</p>
          {currentQuestionIndex < questions.length - 1 ? (
            <button onClick={handleNextQuestion}>Weiter</button>
          ) : (
            <p>Spiel vorbei! Du hast {score} von {questions.length} Punkten erzielt.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default GameSession;
