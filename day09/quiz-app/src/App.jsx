import React, { useState } from "react";
import "./App.css";
import { questions } from "./questions";
import QuizCard from "./components/QuizCard";
import ScoreScreen from "./components/ScoreScreen";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedOptionIndex) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedOptionIndex === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // Reset the quiz state to play again
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Quick Dev Quiz 🧠</h1>
      </header>

      <main className="quiz-container">
        {showScore ? (
          <ScoreScreen 
            score={score} 
            totalQuestions={questions.length} 
            onRestart={handleRestart} 
          />
        ) : (
          <QuizCard 
            data={questions} 
            currentQuestionIndex={currentQuestionIndex} 
            totalQuestions={questions.length} 
            onAnswerClick={handleAnswerClick} 
          />
        )}
      </main>
    </div>
  );
}