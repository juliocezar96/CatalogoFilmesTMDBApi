import MovieCard from "../components/MovieCard";
import useFetch from "../hook/useFetch";
import { MovieResults } from "../types/type";

import "./MoviesGrid.css";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
  const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
  const { data: topMovies, loading } = useFetch<MovieResults>(topRatedUrl);

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {loading && <p> Carregando...</p>}
        {topMovies &&
          topMovies?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Home;
