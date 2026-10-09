import React from "react";
import "../App.css";

export default function QuizCard({ data, currentQuestionIndex, totalQuestions, onAnswerClick }) {
  const currentQuestion = data[currentQuestionIndex];

  return (
    <div className="quiz-card">
      <div className="question-count">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>
      <h2>{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <button 
            key={index} 
            className="option-btn"
            onClick={() => onAnswerClick(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}