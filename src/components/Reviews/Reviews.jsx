import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "service/API";
import Notiflix from "notiflix";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    getReviews(movieId)
      .then(({ data }) => setReviews(data.results))
      .catch(error =>
        Notiflix.Notify.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, [movieId]);

  if (!reviews) {
    return null;
  }


    return (
      <div>
        {reviews.length > 0 ? (
        <ul>
           {reviews.map(({ id, author, content }) => 
        <li key={id}>
        <h1>{author}</h1>
        <p>{content}</p>
        </li>
        )}
        </ul> ) : (
        <h2>We do not have any reviews for this movie.</h2>)
}
      </div>
    );
  };

  export default Reviews;