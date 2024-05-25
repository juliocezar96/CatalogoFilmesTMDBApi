import { useParams } from "react-router-dom"
import { 
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from "react-icons/bs"
import MovieCard from "../components/MovieCard"
import useFetch from "../hook/useFetch"

import "./Movie.css";
import { IMovie } from "../types/type";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Movie = () => {

  const {id} = useParams<string>();
  const movieUrl = `${moviesUrl}${id}?${apiKey}`
  const {data: movie, loading} = useFetch<IMovie>(movieUrl);

  const formatCurrency = (number :number) => {
    return number.toLocaleString("en-US",{
      style: "currency",
      currency: "USD"
    })

  }

  return (
    <div className="movie-page">
      {loading && !movie ?  
        <p>Carregando...</p>
      :
      movie && <>
        <MovieCard movie={movie} showLink={false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3>
            <BsWallet2/> Orcamento:
          </h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className="info">
          <h3>
            <BsGraphUp/> Receita:
          </h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info">
          <h3>
            <BsHourglassSplit/> Duracao:
          </h3>
          <p>{movie.runtime} minutos</p>
        </div>
        <div className="info description">
          <h3>
            <BsFillFileEarmarkTextFill/> Descricao:
          </h3>
          <p>{movie.overview}</p>
        </div>
      </>
      }

    </div>
  )
}

export default Movie