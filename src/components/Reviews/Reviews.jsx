import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "service/API";
import Notiflix from "notiflix";
import { ReviewsLi, ReviewsText, ReviewsUl, Title3 } from "./Rewiews.styled";
//import NoImage from 'images/noImag.png';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    getReviews(id)
      .then(({ data }) => setReviews(data.results))
      .catch(error =>
        Notiflix.Notify.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, [id]);

    return (
      <>
        {reviews.length > 0 ? (
        <ReviewsUl>
          {reviews.map(({ id, author, author_details, content }) => (
            <ReviewsLi key={id}>
             
              <Title3>{author} </Title3>
              <ReviewsText>{content} </ReviewsText>
            </ReviewsLi>
          ))}
        </ReviewsUl>
      ) : (
        <ReviewsText>We do not have any reviews for this movie.</ReviewsText>
      )}
      </>
    );
  };

  