import React from "react";
import "../App.css";

export default function DisplayArea({ count }) {
  return (
    <div className="display-area">
      <h1>Count: {count}</h1>
    </div>
  );
}