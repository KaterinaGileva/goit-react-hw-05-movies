import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const { movieId } = useParams();
  const { reviews, setReviews } = useState(null);
  console.log(movieId);

useEffect(() => {
    moviesApi.fetchMovies(`https://api.themoviedb.org/3/movie/${movieId}/reviews?)`)
    .then(setReviews)

  }, [movieId]);

if (!reviews) {
  return null;
}

    return (
      <div>
        <ul>
          {reviews.result.map(({id, author, content }) =>
        <li key={id}>
        <h1>{author}</h1>
        <p>{content}</p>
        </li>
        )}
        </ul> 
      </div>
    );
  };

  export default Reviews;