import React, { useState } from "react";
import "./App.css";

export default function App() {
  // 1. Create a state for each subject's score
  const [english, setEnglish] = useState("");
  const [math, setMath] = useState("");
  const [computer, setComputer] = useState("");
  const [physics, setPhysics] = useState("");

  // 2. Create a state to hold our final results once calculated
  const [average, setAverage] = useState(null);
  const [overallGrade, setOverallGrade] = useState(null);

  // 3. Simple function to turn a number score into a letter grade
  const getLetterGrade = (score) => {
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 40) return "D";
    return "F";
  };

  // 4. Calculate average and grade when the button is clicked
  const handleCalculate = (e) => {
    e.preventDefault();

    // Convert inputs from strings to numbers (default to 0 if empty)
    const engNum = parseFloat(english) || 0;
    const mathNum = parseFloat(math) || 0;
    const compNum = parseFloat(computer) || 0;
    const physNum = parseFloat(physics) || 0;

    // Add them all up and divide by 4 subjects
    const totalScore = engNum + mathNum + compNum + physNum;
    const finalAverage = totalScore / 4;

    // Save the results into state
    setAverage(finalAverage);
    setOverallGrade(getLetterGrade(finalAverage));
  };

  return (
    <div className="App">
      <h1>Simple Grade Calculator 🈴🎓</h1>

      <form onSubmit={handleCalculate} className="grade-form">
        <div className="input-group">
          <label>English:</label>
          <input 
            type="number" 
            placeholder="0 - 100" 
            value={english} 
            onChange={(e) => setEnglish(e.target.value)} 
          />
        </div>

        <div className="input-group">
          <label>Math:</label>
          <input 
            type="number" 
            placeholder="0 - 100" 
            value={math} 
            onChange={(e) => setMath(e.target.value)} 
          />
        </div>

        <div className="input-group">
          <label>Computer Science:</label>
          <input 
            type="number" 
            placeholder="0 - 100" 
            value={computer} 
            onChange={(e) => setComputer(e.target.value)} 
          />
        </div>

        <div className="input-group">
          <label>Physics:</label>
          <input 
            type="number" 
            placeholder="0 - 100" 
            value={physics} 
            onChange={(e) => setPhysics(e.target.value)} 
          />
        </div>

        <button type="submit" className="calc-btn">Calculate Average</button>
      </form>

      {/* Show results only after calculation */}
      {average !== null && (
        <div className="results-box">
          <h2>Results</h2>
          <p>Average Score: <strong>{average.toFixed(1)}%</strong></p>
          <p>Final Grade: <strong className="grade-highlight">{overallGrade}</strong></p>
        </div>
      )}
    </div>
  );
}