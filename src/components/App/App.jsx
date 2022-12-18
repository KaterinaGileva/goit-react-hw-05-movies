import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { Home } from "pages/Home/Home";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Movies } from "pages/Movies/Movies";
import { Routes, Route } from "react-router-dom";
//import NotFound from "path/to/pages/NotFound";
//import React, { useState, useEffect } from 'react';
//import { Report } from 'notiflix/build/notiflix-report-aio';


export const App = () => {
 
  return (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
    <Route index element={<Home />} />
     <Route path="/movies" element={<Movies />} />
     <Route path="/movies/:movieId" element={<MovieDetails />} >   
       <Route path="cast" element={<Cast />} />
       <Route path="reviews" element={<Reviews />} />
    </Route>  
    </Route>
  </Routes> 
  );
}

//<Route path="*" element={<NotFound />} />
//<Link to="/movies/:movieId">MovieDetails</Link>
       // <Link to="/movies/:movieId/cast">Cast</Link>
        //<Link to="/movies/:movieId/reviews">Reviews</Link>
        //<Route path="cast" element={<Cast />} />
         //  <Route path="reviews" element={<Reviews />} />