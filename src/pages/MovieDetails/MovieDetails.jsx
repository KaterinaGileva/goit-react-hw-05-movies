import { getMovieById } from 'API';
import React from 'react';
//import { useState, useEffect } from 'react';
//import css from './MovieDetails.module.css';
//import PropTypes from 'prop-types';
import { Link, Outlet } from "react-router-dom";

import { useParams } from "react-router-dom";


export const MovieDetails = () => {
  const { movieId } = useParams();
  const movie = getMovieById(movieId);

  //const { movieId } = useParams();
  //const [movie, setMovie] = useState(null);

  //useEffect(() => {
  //  getMovieById(movieId).then(setMovie);
 //}, [movieId]);

  return (
    <main>
      <div>
    <Link to="/">Go Back</Link>
    <div>
      <img src="https://via.placeholder.com/960x240" alt="" />

        <h1>Name {movie}</h1>
        <p>User Score: %</p>
        <h2>Overview</h2>
        <p>
          ptio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
        </p>
        <h3>Genres</h3>
        <p>drama</p>
      </div>
      
        <h3>Additional information</h3>
        
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
    
    </main>
  );
};



