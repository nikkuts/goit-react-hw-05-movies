import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h1>MovieDetails {movieId}</h1>
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