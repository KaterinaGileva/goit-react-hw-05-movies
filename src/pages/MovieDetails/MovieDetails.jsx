import { useParams, useLocation } from "react-router-dom";
import { getMovieById } from 'API';
import React from 'react';
import { Suspense } from "react";
import { useState, useEffect } from 'react';
//import css from './MovieDetails.module.css';
//import PropTypes from 'prop-types';
import { Link, Outlet} from "react-router-dom";
//import { BackLink } from "components/BackLink/BackLink";

const MovieDetails = () => {
  const { movieId } = useParams();
  //const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  console.log('movie', movie);
  //const movie = getMovieById(id);
  const location = useLocation();
  
  console.log(location.state.from);
useEffect(() => {
  getMovieById(Number(movieId)).then(setMovie);
}, [movieId]);


if (!movie) {
  return null;
}

const { id, name } = movie;
const backLinkHref = location.state?.from ?? "/movies";

  return (
    <main>
      <Link to={backLinkHref}>Go Back</Link>
      <div>
      <img src="https://via.placeholder.com/960x240" alt="" />

        <h1>Name {name}</h1>
        <p>User Score: {id}%</p>
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
          <Link to={"cast"}>Cast</Link>
        </li>
        <li>
          <Link to={"reviews"}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;


      
    