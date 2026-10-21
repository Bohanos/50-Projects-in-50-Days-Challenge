🎬 Day 21 - Movie Search App

A lightweight and responsive React application built with Vite that fetches live movie data from The Movie Database (TMDB) API and displays the top 3 results in a clean flexbox layout.

🚀 Features

Real-time Search: Fetches and displays matching movie cards directly from TMDB's public database.

Compact Grid Layout: Dynamically renders the top 3 results complete with movie posters, titles, star ratings, and release dates.

Environment Variable Security: Keeps sensitive API keys hidden from source code using .env variables via Vite's import.meta.env.

🛠️ Tech Stack

Framework: React + Vite

Styling: CSS3 (Flexbox layout and modern dark mode styling)

API: The Movie Database (TMDB) REST API

📁 Project Structure

├── day21/
│   └── movie-search-app/
│       ├── src/
│       │   ├── App.jsx        # Main React component & TMDB fetch logic
│       │   ├── App.css        # Layout & theme styling
│       │   └── main.jsx       # Entry point
│       ├── .env               # Private API keys (git-ignored)
│       ├── .env.example       # Template for required environment variables
│       ├── index.html         # HTML entry shell
│       ├── package.json       # Project dependencies & scripts
│       └── README.md          # Project documentation


⚙️ Setup & Installation

Navigate to the project directory:

cd day21/movie-search-app


Install dependencies:

npm install


Configure API Key:

Duplicate .env.example to .env:

cp .env.example .env


Open .env and assign your TMDB API key:

VITE_TMDB_API_KEY=your_tmdb_api_key_here


Run the development server:

npm run dev


💡 What I Learned

Securing third-party API credentials in Vite projects using import.meta.env.VITE_*.

Fetching and slicing JSON data arrays from asynchronous API endpoints in React.

Structuring clean component states to manage search inputs and dynamic movie lists.