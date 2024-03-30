import React, { useState, useEffect } from "react";
import "./style.css";
import jsPDF from "jspdf"; // Correct import using a named import
import axios from "axios";
import HindiFont from "../../../../../Fonts/fonts.js";
// import notoSansHindi from "@unicode-emotions/noto-sans-hindi";
// import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// const questions = [
//   {
//     question: "What is the capital of France?",
//     options: ["London", "Paris", "Berlin", "Rome"],
//     answer: 1, // Index of the correct answer
//   },
//   {
//     question: "adfsasdffsafasdfsadfafsafsda",
//     options: ["Jupiter", "Mars", "Venus", "Earth"],
//     answer: 0,
//   },
// {
//   question: "daffdasadfsfafadfaddsfd fdadaffdsa।",
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
//   {
//     question: "What is the currency of Japan?",
//     options: ["Euro", "Dollar", "Yen", "Yuan"],
//     answer: 2,
//   },
// ];

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Adjust timer duration here
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const { index } = useParams();
  const statues = false;

  useEffect(() => {
    const fetchQuestions = async () => {
      // ... your fetchQuestions logic (unchanged)
      console.log("PARAMS", index);
      const url = `http://localhost:8000/livequiz/${index}`;

      const fetchOptions = {
        method: "GET",
        credentials: "include", // Include cookies in the request
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(url, fetchOptions); // Await the response
      // console.log(response);

      // console.log("questions", ques);
      // Check for successful response (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json(); // Parse JSON response data
      // setUserData(responseData);
      console.log(responseData);
      const fetchedQuestions = responseData.questions;
      console.log("FETCHQUESTION", fetchedQuestions);
      setQuestions(
        fetchedQuestions.map((questionData) => ({
          question: questionData.question,
          options: questionData.options,
          answer: questionData.correctAnswer,
        }))
      );
    };

    // setQuestions(fetchedQuestions);

    fetchQuestions(); // Call fetchQuestions immediately
  }, []);
  useEffect(() => {
    // console.log("Questions (after update)", quest);
    const timer = setInterval(
      () => {
        if (timeLeft > 0 && !isFinished) {
          setTimeLeft(timeLeft - 1);
        } else if (timeLeft === 0 && !isFinished) {
          handleNextQuestion(true); // Move to next question if time runs out
        }

        if (isFinished) {
          const timeoutId = setTimeout(() => {
            // window.location.href = "/user"; // Redirect to /user after 30 seconds
          }, 30000);

          return () => clearTimeout(timeoutId); // Cleanup effect
        }
      },
      1000,
      [isFinished]
    );

    return () => clearInterval(timer);
  }, [timeLeft, isFinished]);

  const handleOptionClick = (index) => {
    setSelectedAnswer(index);
  };
  async function resultSubmission() {
    const url = "http://localhost:8000/sumbitanswer"; // Replace with your actual URL
    console.log("Sumbition");
    console.log("Corrext Answer", correctAnswers);
    console.log("Total Questions", questions.length);
    const totallength = questions.length;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Indicate JSON data
      },
      body: JSON.stringify({
        // Convert data to JSON string
        correctAnswers,
        totallength,
        index,
        // email,
      }),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Error submitting results: ${response.status}`);
    }

    // Handle successful submission (optional)
    console.log("Results submitted successfully!");
  }

  const handleNextQuestion = (isTimeout = false) => {
    if (isTimeout || selectedAnswer !== null) {
      const isCorrect = selectedAnswer === questions[currentQuestion].answer;
      setCorrectAnswers(isCorrect ? correctAnswers + 1 : correctAnswers);
      setCurrentQuestion((prev) =>
        prev === questions.length - 1 ? prev : prev + 1
      );
      // Add question, answer, and chosen option to userAnswers
      const chosenOption =
        // selectedAnswer !== null
        //   ? questions[currentQuestion].options[selectedAnswer]
        //   : null;
        setUserAnswers((prevAnswers) => [
          ...prevAnswers,
          {
            question: questions[currentQuestion].question,
            answer: questions[currentQuestion].answer, // Add chosen option or null if not selected
            choosen: selectedAnswer,
          },
        ]);

      // setUserAnswers(questions);
      setSelectedAnswer(null);
      setTimeLeft(30); // Reset timer for next question
    }
    if (currentQuestion === questions.length - 1) {
      setIsFinished(true);
      resultSubmission();
    }
  };
  const saveResultsToPDF = async () => {
    const doc = new jsPDF(); // Correct constructor usage
    HindiFont();
    console.log("font list", doc.getFontList()); //check all added font

    doc.setFont(HindiFont, "normal");
    console.log("font list", doc.getFontList());
    const title = "Quiz Results";
    const fontSize = 12;
    console.log(doc);
    // Add title
    // doc.setFontSize(fontSize);
    doc.text(title, doc.internal.pageSize.getWidth() / 2, 10, "center");

    let y = 15;
    // Add summary (optional)
    doc.text(
      `Total Questions:-  ${
        questions.length
      }  || Correct Answers:-  ${correctAnswers} || Incorrect Answers:-  ${
        questions.length - correctAnswers
      }`,
      fontSize,
      y + 5
    );
    // doc.text(`Correct Answers:-  ${correctAnswers}`, fontSize, y + 10);
    // doc.text(
    //   `Incorrect Answers:-  ${questions.length - correctAnswers}`,
    //   fontSize,
    //   y + 15
    // );
    y += 8;
    // resultSubmission();
    // Add user information (optional)
    // ... code to add user name, date, etc. (e.g., using prompt or form data)

    // Add question and answer details
    //let y = 1; // Starting position for question and answer entries
    // for (const answer of userAnswers) {
    //   doc.text(`${answer.question}:`, fontSize, y);
    //   doc.text(`${answer.question}:`, fontSize, y);
    //   doc.text(`${answer.answer}`, fontSize + 2, y);
    //   y += 10; // Adjust spacing between entries
    // }
    for (let i = 0; i < userAnswers.length; i++) {
      const answer = userAnswers[i];
      const question = questions[i]; // Get the original question object

      doc.text(`Question ${i + 1} )${question.question}`, fontSize, y + 5);
      y += 5; // Adjust spacing

      // Loop through options and highlight chosen one
      for (let j = 0; j < question.options.length; j++) {
        // y = 0;
        const stat = true;
        // if(answer.choosen==null)
        const isChosen = j === answer.choosen; // Check if this option was chosen
        const optionText = question.options[j];
        doc.text(
          ` ${j + 1})${optionText}`,
          // fontSize + (isChosen ? 6 : 0),
          fontSize,
          y + 5
        ); // Bold chosen option

        if (isChosen) {
          // doc.text(`  Correct Options:- ${answer.answer + 1}`, fontSize, y + 12);
          // if (answer.choosen == null) answer.choosen = -1;
          // console.log(answer.choosen);
          doc.text(
            ` Choosen Options:- ${answer.choosen + 1} `,
            fontSize,
            y + 12
          ); // Add "(Chosen)" for selected option
        }
        y += 5; // Adjust spacing
      }
      doc.text(`  Correct Options:- ${answer.answer + 1}`, fontSize, y + 12);
      // st
      y += 13; // Add spacing between questions
    }

    // Add a signature line (optional)
    // const signatureLineY = y + 10;
    // doc.text("_________________________", fontSize, signatureLineY);
    // doc.text(
    //   "Signature (Optional)",
    //   fontSize - 12,
    //   signatureLineY - 15,
    //   "center"
    // );

    // const pdfData = doc.output("blob");
    // const pdfData = doc.output("datauristring");
    // console.log(pdfData);
    // const base64Data = pdfData.split(",")[1]; // Assuming the data URI format is "data:application/pdf;base64,..."

    // const body = JSON.stringify({ pdfData: base64Data });

    // try {
    //   const response = await fetch("http://localhost:8000/driveupload", {
    //     method: "POST",
    //     "Content-Type": "application/json",
    //     body,
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     if (data.success) {
    //       const accessLink = data.accessLink;
    //       console.log("PDF uploaded successfully! Access link:", accessLink);
    //       // You can display the access link to the user or use it for other purposes
    //     } else {
    //       console.error("Error uploading PDF to server:", data.message); // Handle specific errors from backend
    //     }
    //   } else {
    //     console.error("Error sending PDF request:", response.statusText); // Handle network errors
    //   }
    // } catch (err) {
    //   console.error("Error sending PDF request:", err);
    //   // Handle other errors
    // }
    //////
    // const pdfData = doc.output("datauristring");
    // console.log(pdfData);

    // async function uploadPDF() {
    //   try {
    //     const response = await fetch("http://localhost:8000/driveupload", {
    //       method: "POST", // Ensure it's a POST request
    //       headers: {
    //         "Content-Type": "application/json", // Set Content-Type header
    //       },
    //       body: JSON.stringify({ pdfData }), // Stringify the object
    //     });

    //     if (response.ok) {
    //       const data = await response.json();
    //       console.log(data);
    //       // ... handle response
    //     } else {
    //       console.error("Error sending PDF request:", response.statusText);
    //     }
    //   } catch (err) {
    //     console.error("Error sending PDF request:", err);
    //   }
    // }

    // uploadPDF();
    // // console.log(doc);
    // Save the PDF
    doc.save("quiz_results.pdf"); // Replace 'quiz_results.pdf' with your desired filename
  };

  return (
    <div className="Quiz_UI">
      <h1 style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}></h1>
      {questions.length === 0 ? (
        // Display a loading indicator while fetching questions
        <div className="loading">Loading...</div>
      ) : isFinished ? (
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
          {/* {isFinished && resultSubmission()} */}

          <button
            onClick={() => {
              window.location.href = "/user";
            }}
          >
            Home
          </button>
          {isFinished && (
            <button onClick={saveResultsToPDF}>Download Results PDF</button>
          )}
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
      {}
    </div>
  );
}

export default App;
