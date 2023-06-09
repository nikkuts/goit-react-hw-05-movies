import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from 'nanoid';
import API from 'servise/api';

const Reviews = () => {
  const [isRender, setIsRender] = useState(false);
  const [movieReviews, setMovieReviews] = useState({});

  const { movieId } = useParams(); 
  const fetchId = movieId.slice(1, movieId.length);

  async function handleFetchMovie (id) {
    setIsRender(false);
      
  try {
    const {data} = await API.getMovieReviews(id); 
    setMovieReviews(data.results); 
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
    movieReviews.length !== 0 ?
     <div>
      <ul>
        {movieReviews.map(({author, content}) => (
          <li key={nanoid()}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
          ))}
      </ul>
     </div>
     : <div>We don't have any reviews for this movie yet</div> 
  );
};

export default Reviews;