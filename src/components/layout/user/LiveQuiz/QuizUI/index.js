import React, { useState, useEffect } from "react";
import "./style.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answer: 1, // Index of the correct answer
  },
  // {
  //   question: "जब मैं वहां गया वह सो रही थी।",
  //   options: ["Jupiter", "Mars", "Venus", "Earth"],
  //   answer: 0,
  // },
  // {
  //   question: "जब मैं वहां गयाdafs ,dfmnaslj sadfmnadflsjn msdfanlj वह सो रही थी।",
  //   options: [
  //     "When I went there, She kept on sleepingfdasfdsafadjkjadfh fabjdafbkjafsd afjlasdlfjflaj fajhljdfsanlfdaknkl..",
  //     "She slept while I went to her.",
  //     "When I went there, She kepfadsfd a jafdnk jafhjadnflca nfakjfdsal fkadnlfdann t on sleeping.",
  //     "When I went there, She keptfaflajnljasdf jafnljdaflj nljfhl on sleeping.",
  //   ],
  //   answer: 0,
  // },
  // // More examples:
  // {
  //   question: "What is the tallest mountain in the world?",
  //   options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
  //   answer: 0,
  // },
  // {
  //   question: "What is the chemical symbol for water?",
  //   options: ["H2O", "CO2", "NH3", "NaCl"],
  //   answer: 0,
  // },
  // {
  //   question: "In which year did World War II begin?",
  //   options: ["1939", "1941", "1943", "1945"],
  //   answer: 0,
  // },
  // {
  //   question: "What is the capital of Australia?",
  //   options: ["Melbourne", "Sydney", "Canberra", "Perth"],
  //   answer: 2,
  // },
  // {
  //   question: "What is the name of the largest ocean on Earth?",
  //   options: [
  //     "Pacific Ocean",
  //     "Atlantic Ocean",
  //     "Indian Ocean",
  //     "Arctic Ocean",
  //   ],
  //   answer: 0,
  // },
  // {
  //   question: "Who wrote the novel 'Pride and Prejudice'?",
  //   options: [
  //     "Jane Austen",
  //     "Charlotte Brontë",
  //     "Charles Dickens",
  //     "William Shakespeare",
  //   ],
  //   answer: 0,
  // },
  {
    question: "What is the currency of Japan?",
    options: ["Euro", "Dollar", "Yen", "Yuan"],
    answer: 2,
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Adjust timer duration here
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0 && !isFinished) {
        setTimeLeft(timeLeft - 1);
      } else if (timeLeft === 0 && !isFinished) {
        handleNextQuestion(true); // Move to next question if time runs out
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isFinished]);

  const handleOptionClick = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = (isTimeout = false) => {
    if (isTimeout || selectedAnswer !== null) {
      const isCorrect = selectedAnswer === questions[currentQuestion].answer;
      setCorrectAnswers(isCorrect ? correctAnswers + 1 : correctAnswers);
      setCurrentQuestion((prev) =>
        prev === questions.length - 1 ? prev : prev + 1
      );
      setSelectedAnswer(null);
      setTimeLeft(30); // Reset timer for next question
    }
    if (currentQuestion === questions.length - 1) {
      setIsFinished(true);
    }
  };

  return (
    <div className="Quiz_UI">
      {isFinished ? (
        <div className="quiz-card">
          {/* <h2>
            You answered {correctAnswers} out of {questions.length} questions
            correctly.
          </h2>
          <button onClick={() => window.location.reload()}>Restart Quiz</button> */}
          <h2>Your Results:</h2>
          <ul>
            <li>Correct Answers: {correctAnswers}</li>
            <li>Incorrect Answers: {questions.length - correctAnswers}</li>
            <li>Total Attempts: {questions.length}</li>
          </ul>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-card">
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <h3>{questions[currentQuestion].question}</h3>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => handleOptionClick(index)}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </li>
            ))}
          </ul>
          <button
            disabled={selectedAnswer === null}
            onClick={handleNextQuestion}
          >
            {timeLeft > 0
              ? `Next Question (Time Left: ${timeLeft}s)`
              : "Submit Answer"}
          </button>
          {/* <div className="timer">{timeLeft}s</div> */}
        </div>
      )}
    </div>
  );
}

export default App;
