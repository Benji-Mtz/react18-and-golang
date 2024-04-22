import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Movie = () => {

  const [movie, setMovie] = useState({});

  let { id } = useParams();

  useEffect(() => {
    
    let myMovie = {
      id: 1,
        title: 'Poor Things',
        release_date: '2024-02-07',
        runtime: 116,
        mpaa_rating: 'R',
        description: 'Some long description'
    };
    setMovie(myMovie);
    
  }, [id])

  return (
    <div>
        <h2>Movie: { movie.title } </h2>
        <small><em>{ movie.release_date }, { movie.runtime } minutes, Rated { movie.mpaa_rating } </em></small>
        <hr />
        <p>{ movie.description }</p>
    </div>
  )
}

export default Movie