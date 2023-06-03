import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from 'nanoid';
import API from 'servise/api';

const Cast = () => {
  const [isRender, setIsRender] = useState(false);
  const [movieCast, setMovieCast] = useState({});

  const { movieId } = useParams(); 
  const fetchId = movieId.slice(1, movieId.length);

  function getPoster(profile_path) {
    if (profile_path) {
      return `http://image.tmdb.org/t/p/w342/${profile_path}`;
    }
    return 'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg';
  };

  async function handleFetchMovie (id) {
    setIsRender(false);
      
  try {
    const {data} = await API.getMovieCredits(id); 
    setMovieCast(data.cast); 
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
      <ul>
        {movieCast.map(({profile_path, name, character}) => (
          <li key={nanoid()}>
            <img src={getPoster(profile_path)} alt={name} width={100} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
          ))}
      </ul>
     </div> 
  );
};

export default Cast;