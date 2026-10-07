import React from "react";
import "../App.css";

export default function AvailableTasks({ tasks }) {
  return (
    <div className="available-tasks">
      <h2>Available Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}