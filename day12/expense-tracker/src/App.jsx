import React, { useState } from "react";

export default function App() {
  const [budget, setBudget] = useState(500);
  const [spent, setSpent] = useState("");
  const [expenses, setExpenses] = useState([]);

  const totalSpent = expenses.reduce((acc, curr) => acc + curr, 0);
  const balance = budget - totalSpent;
  const isCritical = balance < 0;

  const addExpense = (e) => {
    e.preventDefault();
    if (!spent) return;
    setExpenses([...expenses, parseFloat(spent)]);
    setSpent("");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif", maxWidth: "350px", margin: "auto", marginTop: "100px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#88457dae" }}>
      <h2>Simple Expense Tracker</h2>

      {/* Set Budget */}
      <div>
        <label>Initial Budget: </label>
        <input 
          type="number" 
          value={budget} 
          onChange={(e) => setBudget(Number.tofixed(3)(e.target.value) || 0)} 
        />
      </div>

      {/* Status */}
      <h3 style={{ color: isCritical ? "red" : "green", margin: "15px 0" }}>
        Status: {isCritical ? "CRITICAL (Debit)" : "OK"} (Balance: ${balance})
      </h3>

      {/* Add Spent Money */}
      <form onSubmit={addExpense}>
        <input 
          type="number" 
          placeholder="Money spent..." 
          value={spent} 
          onChange={(e) => setSpent(e.target.value)} 
        />
        <button type="submit">Add</button>
      </form>

      {/* List */}
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>Spent: ${exp}</li>
        ))}
      </ul>
    </div>
  );
}