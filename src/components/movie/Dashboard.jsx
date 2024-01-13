import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieService';
import MovieList from './MovieList';

function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (error) {
        // Handle errors as needed
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Movie Dashboard</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default Dashboard;
