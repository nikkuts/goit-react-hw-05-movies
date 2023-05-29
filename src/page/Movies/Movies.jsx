import React, { useState} from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Circles } from  'react-loader-spinner';
import API from 'servise/api';

const Movies = () => {
    const [queryMovie, setQueryMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    async function handleFetchMovie (que) {
        setIsLoading(true);

    try {
      const {data} = await API.searchMovie(que); 
      setQueryMovie(data.results);
      } 
      catch (error) {
        alert("Sorry, there are no movies. Please try again."); 
      } 
      finally {
        setIsLoading(false);
      };
    };

  return (
      <div>
        <input
        type='text'
        onChange={e => setSearchParams({query: e.target.value})} 
        />
        <button onClick={() => handleFetchMovie(query)}>Search</button>
        {isLoading && <Circles/>}

        <ul>
        {queryMovie.map(({id, title}) => (
            <li key={id}>
            <Link to={`movies/:${id}`}>{title}</Link>
            </li>))}
        </ul>
    </div>
  );
};

export default Movies;