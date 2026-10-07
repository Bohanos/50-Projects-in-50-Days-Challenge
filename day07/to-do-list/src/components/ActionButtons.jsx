import react from "react";
import "../App.css";

export default function ActionButtons({ onAdd, onClear }) {
  return (
    <div className="action-buttons">
      <button onClick={onAdd}>Add</button>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}