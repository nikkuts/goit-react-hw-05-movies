import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Circles } from  'react-loader-spinner';
import API from 'servise/api';

const Home = () => {
    const [trendingMovie, setTrendingMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isRender, setIsRender] = useState(false);

    async function handleFetchMovie () {
        setIsLoading(true);
        setIsRender(false);

    try {
      const {data} = await API.getTrending(); 
      setTrendingMovie(data.results);
      setIsRender(true);
      } 
      catch (error) {
        alert("Sorry, there are no movies. Please try again."); 
      } 
      finally {
        setIsLoading(false);
      };
    };

    useEffect(() => {
      handleFetchMovie(); 
      }, []); 

  return (
    isRender &&
      <div>
        {isLoading && <Circles/>}

        <h1>Trending today</h1>
        <ul>
        {trendingMovie.map(({id, title}) => (
            <li key={id}>
            <Link to={`movies/:${id}`}>{title}</Link>
            </li>))}
        </ul>
    </div>
  );
};

export default Home;