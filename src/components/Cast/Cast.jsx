import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/API';
import Notiflix from "notiflix";
import NoImage from 'images/noImag.png';
import { CastImg, CastLi, CastText, CastUl } from './Cast.styled';


export default function Cast() {
  const { id } = useParams();
  
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id)
      .then(({ data }) => setCast(data.cast))
      .catch(error =>
        Notiflix.Notify.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, [id]);

  //if (!cast) {
  //  return null;
 // }

    return (
      <>
        <CastUl>
        {cast.map(({ id, profile_path, name, character }) => (
          <CastLi key={id}>
            <CastImg
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : NoImage
              }
              alt={name}
              width={'300px'}
            />
            <CastText>{name}</CastText>
            <CastText>{character}</CastText>
          </CastLi>
        ))}
      </CastUl>
            </>      
    )     
};
  
  