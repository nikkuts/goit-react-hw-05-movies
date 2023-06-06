import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { Circles } from  'react-loader-spinner';
import API from 'servise/api';

const Movies = () => {
    const [queryMovie, setQueryMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const location = useLocation();   

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

    const handleSubmit = evt => {
      evt.preventDefault();
      const form = evt.currentTarget;
      setSearchParams({query: form.elements.query.value});
      form.reset(); 
    };

    useEffect(() => {
      if (query === '') {
        return;
      }
      handleFetchMovie(query); 
      }, [query]); 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        type='text'
        name="query" 
        />
        <button type='submit'>Search</button>
      </form>
      <div>
        {isLoading && <Circles/>}

        <ul>
        {queryMovie.map(({id, title}) => (
            <li key={id}>
            <Link to={`:${id}`} state={{from: location}}>{title}</Link>
            </li>))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;

// const Movies = () => {
//   const [queryMovie, setQueryMovie] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query') ?? '';
// console.log(searchParams);
// console.log(query);
//   async function handleFetchMovie (que) {
//       setIsLoading(true);

//   try {
//     const {data} = await API.searchMovie(que); 
//     setQueryMovie(data.results);
//     } 
//     catch (error) {
//       alert("Sorry, there are no movies. Please try again."); 
//     } 
//     finally {
//       setIsLoading(false);
//     };
//   };

//   const updateQueryString = evt => {
//     if (evt.target.value === '') {
//       return setSearchParams({});
//     }
//     setSearchParams({query: evt.target.value});
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     console.log('hello');
//     setSearchQuery(query); console.log(query);
//   };

//   useEffect(() => {
//     searchQuery &&
//     handleFetchMovie(searchQuery); 
//     }, [searchQuery]); 

// return (
//   <div>
//     <form onSubmit={handleSubmit}>
//       <input
//       type='text'
//       value={query}
//       onChange={updateQueryString} 
//       />
//       <button type='submit'>Search</button>
//     </form>
//     <div>
//       {isLoading && <Circles/>}

//       <ul>
//       {queryMovie.map(({id, title}) => (
//           <li key={id}>
//           <Link to={`:${id}`}>{title}</Link>
//           </li>))}
//       </ul>
//     </div>
//   </div>
// );
// };