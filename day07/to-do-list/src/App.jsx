import React, { useState } from "react";
import "./App.css";
import ToDoListHeader from "./components/ToDoListHeader";
import TaskInput from "./components/TaskInput";
import ActionButtons from "./components/ActionButtons";
import AvailableTasks from "./components/AvailableTasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

 
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

 
  const handleAddTask = () => {
    if (inputValue.trim() === "") return; 
    setTasks([...tasks, inputValue]);    
    setInputValue("");                   
  };

  const handleClearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <ToDoListHeader />
      <TaskInput value={inputValue} onChange={handleInputChange} />
      <ActionButtons onAdd={handleAddTask} onClear={handleClearTasks} />
      <AvailableTasks tasks={tasks} />
    </div>
  );
}