Markdown
# 🌤️ Day 11 - Live Weather App

A modern, responsive Weather Application built with **React (Vite)** and styled with a sleek **Glassmorphism UI**. This project fetches real-time weather data from the **OpenWeatherMap API** based on user input.

---

## 🚀 Features

* **Live Weather Data:** Fetches current temperature (°C) and condition descriptions dynamically.
* **Secure API Key Handling:** Utilizes environment variables (`.env`) via Vite (`import.meta.env`) to keep API keys secure and off source control.
* **Glassmorphism UI:** Styled using backdrop filters, semi-transparent backgrounds, and full-screen background imagery.
* **Controlled Form Input:** Uses React state to bind user inputs and prevents default form submissions for smooth updates.

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** CSS3 (Flexbox, Glassmorphism, CSS Variables)
* **API:** [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📁 Project Structure

```text
├── public/
├── src/
│   ├── App.jsx        # Main component containing fetch logic & state
│   ├── App.css        # Glassmorphism and layout styling
│   ├── main.jsx       # Application entry point
├── .env               # Private API Key (Git-ignored)
├── .env.example       # Template for environment setup
├── .gitignore
├── package.json
└── README.md
⚙️ Setup & Installation
Clone the repository:

Bash
git clone [https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day11.git](https://github.com/Bohanos/50-Projects-in-50-Days-Challenge/tree/main/day11.git)
cd day-11-weather-app
Install dependencies:

Bash
npm install
Configure Environment Variables:

Create a .env file in the root directory.

Add your OpenWeatherMap API Key:

Code snippet
VITE_WEATHER_API_KEY=your_actual_api_key_here
Run the development server:

Bash
npm run dev
💡 What I Learned
Storing and accessing environment variables securely in Vite projects.

Asynchronous data fetching in React using fetch() with custom query parameters (&units=metric).

Handling browser submit events using e.preventDefault().

Building modern frosted-glass UI effects using CSS backdrop-filter: blur().