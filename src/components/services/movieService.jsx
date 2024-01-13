// services/movieService.js
const OMDB_API_KEY = 'aba3a42c'; // Replace with your actual OMDB API key

const fetchMovies = async () => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?s=star wars&apikey=${OMDB_API_KEY}`);
    const data = await response.json();
    console.log(data)
    if (data.Search) {
      return data.Search;
    } else {
      throw new Error('No movies found');
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export { fetchMovies };
