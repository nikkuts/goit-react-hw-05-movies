import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import API from 'servise/api';

const MovieDetails = () => {
  const { movieId } = useParams(); 
  const fetchId = movieId.slice(1, movieId.length);
  const [isRender, setIsRender] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const {title, homepage, vote_average, genres, release_date, overview} = movieDetails;
  
  async function handleFetchMovie (id) {
    setIsRender(false);
      
  try {
    const {data} = await API.getMovieDetails(id); console.log(data);
    setMovieDetails(data);
    setIsRender(true);
    } 
    catch (error) {
      alert("Sorry. Please try again."); 
    } 
  };

  useEffect(() => {
    handleFetchMovie(fetchId); 
    }, [fetchId]); 

  return (
    isRender &&
    <div>
      <h1>{title} ({release_date.slice(0,4)})</h1>
      <p>{vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genres.name}
      </p>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;