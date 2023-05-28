import { Routes, Route } from "react-router-dom";
import Home from '../page/Home/Home';
import Movies from '../page/Movies/Movies';
import NotFound from './NotFound/NotFound';
import MovieDetails from '../page/MovieDetails/MovieDetails';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
