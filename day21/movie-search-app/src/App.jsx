import { useState } from 'react';
import './App.css';

// Read API Key securely from .env file using Vite's env prefix
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      // Keep only the top 3 results
      setMovies(data.results ? data.results.slice(0, 3) : []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="container">
      <h1>Movie Search 🎬</h1>

      <form onSubmit={searchMovies} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://via.placeholder.com/220x330?text=No+Poster'
              }
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p className="rating">⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</p>
            <p className="release-date">📅 {movie.release_date || 'Unknown'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}