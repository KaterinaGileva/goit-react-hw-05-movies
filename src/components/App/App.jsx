import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import  SharedLayout  from "components/SharedLayout/SharedLayout";
import NotFound from "pages/NotFound.jsx/NotFound";


const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function App() {
  return (
<div>
  <Routes>
    <Route path="/" element={<SharedLayout />}>
     <Route index element={<Home />} />
     <Route path="/movies" element={<Movies />} />
     <Route path="/movies/:id" element={<MovieDetails /> }>
      <Route path="cast" element={<Cast />} />
      <Route path="reviews" element={<Reviews />} />
     </Route>   
     <Route path="*" element={<NotFound />}></Route>
    </Route>
  </Routes> 
  </div>
  );
}
