import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { Home } from "pages/Home/Home";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Movies } from "pages/Movies/Movies";
import { Routes, Route, Link } from "react-router-dom";

//import NotFound from "path/to/pages/NotFound";
//import React, { useState, useEffect } from 'react';
//import { Report } from 'notiflix/build/notiflix-report-aio';
import css from './App.module.css';

export const App = () => {
 
  return (
    <div className={css.container}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/movies/:movieId" element={<MovieDetails />} >   
       <Route path="cast" element={<Cast />} />
       <Route path="reviews" element={<Reviews />} />
    </Route>   
  </Routes>
    </div>
  );
}

//<Route path="*" element={<NotFound />} />
//<Link to="/movies/:movieId">MovieDetails</Link>
       // <Link to="/movies/:movieId/cast">Cast</Link>
        //<Link to="/movies/:movieId/reviews">Reviews</Link>
        //<Route path="cast" element={<Cast />} />
         //  <Route path="reviews" element={<Reviews />} />