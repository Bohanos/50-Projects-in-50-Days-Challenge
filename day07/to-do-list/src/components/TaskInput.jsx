import React from "react";
import "../App.css";

export default function TaskInput({ value, onChange }) {
  return (
    <div className="task-input">
      <label htmlFor="task-input">Task:</label>
      <input 
        id="task-input" 
        type="text" 
        placeholder="Add a new task..." 
        value={value}
        onChange={onChange}
      />
    </div>
  );
}