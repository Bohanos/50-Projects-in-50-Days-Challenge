import React, { useState } from "react";
import "./App.css"

export default function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [condition, setCondition] = useState("");


  const fetchWeather = (e) => {
    e.preventDefault();
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.main.temp);
        setCondition(data.weather[0].description);
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
        alert("City not found or network error.");
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <form onSubmit={fetchWeather} action="">
          <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Enter a city..." />
          <button type="submit">Get Weather</button>
        </form>
      </div>

      <div className="weather-info">
        <h2>{city ? city.toUpperCase() : "City Name"}</h2>
        <p>
          Temperature: <span className="temp-span">{temperature !== null ? `${temperature}°C` : "25°C"}</span>
        </p>
        <p>
          Condition: <span className="condition-span">{condition || "Sunny"}</span>
        </p>
      </div>

      
    </div>
  );
}