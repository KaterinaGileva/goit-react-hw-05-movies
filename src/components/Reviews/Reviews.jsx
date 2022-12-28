import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "service/API";

const Reviews = () => {
  const params = useParams();
  const movieId = parseInt(params.movieId);
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    getReviews(movieId).then(setReviews)
  }, [movieId]);

if (!reviews) {
  return null;
}

    return (
      <div>
        <ul>
          {reviews.reviews.map(({id, author, content }) =>
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