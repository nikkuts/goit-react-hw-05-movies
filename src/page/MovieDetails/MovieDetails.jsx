import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import API from 'servise/api';

const MovieDetails = () => {
  const [isRender, setIsRender] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const { movieId } = useParams(); 
  const fetchId = movieId.slice(1, movieId.length);
  
  const {title, poster_path, vote_average, genres, release_date, overview} = movieDetails;
  
  function getPoster(poster_path) {
    if (poster_path) {
      return `http://image.tmdb.org/t/p/w342/${poster_path}`;
    }
    return 'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg';
  };

  function getGenreNames(genres) {
    const genreNames = [];
    genres.map(({name}) => genreNames.push(name));
    return (genreNames.toString());
  };
  
  async function handleFetchMovie (id) {
    setIsRender(false);
      
  try {
    const {data} = await API.getMovieDetails(id); 
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
      <img src={getPoster(poster_path)} alt={title} />
      <div>
        <h1>{title} ({release_date.slice(0,4)})</h1>
        <p>{vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{getGenreNames(genres)}
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
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;