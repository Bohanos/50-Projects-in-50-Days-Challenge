import React from "react";
import "../App.css";

export default function ScoreScreen({ score, totalQuestions, onRestart }) {
  return (
    <div className="score-screen">
      <h2>Quiz Completed! 🎉</h2>
      <p>You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong></p>
      <button className="restart-btn" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}