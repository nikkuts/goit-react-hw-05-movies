import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
const Home = lazy(() => import("../page/Home/Home"));
const Movies = lazy(() => import("../page/Movies/Movies"));
const MovieDetails = lazy(() => import("../page/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

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
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
