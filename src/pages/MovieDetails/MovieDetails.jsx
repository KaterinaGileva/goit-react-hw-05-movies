import { useParams, useLocation } from "react-router-dom";
import { getMovieById } from 'service/API';
import { Suspense } from "react";
import { useState, useEffect } from 'react';
//import css from './MovieDetails.module.css';
//import PropTypes from 'prop-types';
import { Link, Outlet} from "react-router-dom";
//import { BackLink } from "components/BackLink/BackLink";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
 
useEffect(() => {
  getMovieById(Number(movieId)).then(setMovie);
}, [movieId]);

if (!movie) {
  return null;
}

сonst { backdrop_path, original_title, popularity, overview, genres } = movie;

const backLinkHref = location?.state?.from ?? "/movies";

  return (
    <main>
      <Link to={backLinkHref}>Go Back</Link>
      <div>
      {<img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />}

        <h1> {original_title}</h1>
        <p>User Score: {popularity}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
        {genres.map(({id, name}) => <li key={id}>{name}</li>)}
        </ul>
      </div>
      
        <h3>Additional information</h3>
        
        <ul>
        <li>
          <Link to={"cast"} state ={{from: location?.state?.from}}>Cast</Link>
        </li>
        <li>
          <Link to={"reviews"} state ={{from: location?.state?.from}}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;


      
    