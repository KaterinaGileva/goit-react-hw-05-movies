import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from '../API.js';

const Cast = () => {
  const params = useParams();
  const movieId = parseInt(params.movieId);
  const [cast, setCast] = useState([]);

  useEffect(() =>{
    fetchMoviesCast(movieId).then(setCast)
  }, [movieId]);
  
  if (!cast) {
    return null;
  }

    return (
      <div>
         <ul>
          {cast.cast.map
          (({ id, name, character, profile_path}) => 
               profile_path &&
               <li key={id}>
                <img
                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                width='100'
                alt={name}
                />
              <p>{name}</p>  
              <p>Character:{character}</p>
                 
                </li>       
        )} 
          </ul>
            </div>      
    )     
};
  
  export default Cast;