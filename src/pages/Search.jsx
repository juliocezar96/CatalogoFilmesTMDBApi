import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"

import "./MoviesGrid.css";


const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

  const [searchParams] = useSearchParams(); 

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");


  const getSearchedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data?.results);
  }
 
  useEffect(()=>{
    const searchQUeryUrl =  `${searchUrl}?${apiKey}&query=${query}`
    getSearchedMovies(searchQUeryUrl);
  }, [query])

  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {movies.length === 0 && <p> Carregando...</p>}
        {movies.length > 0 && movies.map((movie) => 
          <MovieCard key={movie.id} movie={movie}/>
        )}
        </div>
    
    </div>
  )
}

export default Search