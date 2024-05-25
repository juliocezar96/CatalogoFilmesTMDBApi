import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useFetch from "../hook/useFetch";

import "./MoviesGrid.css";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const searchQUeryUrl = `${searchUrl}?${apiKey}&query=${query}`;
  const { data: movies, loading } = useFetch(searchQUeryUrl);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {loading && <p> Carregando...</p>}
        {movies &&
          movies?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Search;
