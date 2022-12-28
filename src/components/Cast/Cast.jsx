import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/API';
import Notiflix from "notiflix";
import NoImage from 'D:/GO IT/goit-react-hw-05-movies/src/noImag.png';

const Cast = () => {
  const { movieId } = useParams();
  
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(movieId)
      .then(({ data }) => setCast(data.cast))
      .catch(error =>
        Notiflix.Notify.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, [movieId]);

  //if (!cast) {
  //  return null;
 // }

    return (
      <div>
         <ul>
          {cast.map
          (({ id, name, character, profile_path}) => 
               
               <li key={id}>
                <img
                 src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : NoImage
                }
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