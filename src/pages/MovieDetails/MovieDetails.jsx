import { useParams, useLocation } from "react-router-dom";
import { getMovieById } from 'service/API';
import { Suspense } from "react";
import { useState, useEffect } from 'react';
//import css from './MovieDetails.module.css';
import { Link, Outlet} from "react-router-dom";
import Notiflix from "notiflix";
import { BackLink } from "components/BackLink/BackLink";
import NoImage from 'D:/GO IT/goit-react-hw-05-movies/src/noImag.png';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
 
  const backLinkHref = location?.state?.from ?? "/";

useEffect(() => {
  getMovieById(movieId)
  .then(({ data }) => setMovie(data))
  .catch((error) =>
    Notiflix.Notify.warning(
      'Sorry, something went wrong.... Please try again.'
    )
  );
}, [movieId]);

//if (!movie) {
//  return null;
//}

const { poster_path, title, genres, vote_average, overview } = movie;

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div>
      {<img 
           src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : NoImage
          }
           alt="{title}" 
           width={'300px'} />}

        <h1> {title}</h1>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        {genres && (
          <>
        <h3>Genres</h3>
        <ul>
        {genres.map(({id, name}) => 
        <li key={id}>{name}</li>)}
        </ul>
        </>
        )}
      </div>
      
        <h3>Additional information</h3>
        
        <ul>
        <li>
          <Link to="cast" state ={{from: location?.state?.from}}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state ={{from: location?.state?.from}}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;


      
    